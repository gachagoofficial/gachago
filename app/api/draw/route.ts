import { NextRequest, NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";
import { getCurrentUser } from "@/lib/supabase/ssr-server";

// ★ 가챠 뽑기는 반드시 서버에서.
//   - 사용자 신원은 클라이언트가 보낸 값이 아니라 "서버 세션"에서 직접 확인한다.
//     (클라이언트가 userId를 위조해 남의 명의로 뽑는 것을 원천 차단)
//   - 당첨 아이템 결정 + 재고 차감은 draw_pack RPC에서 트랜잭션으로 처리.
export async function POST(req: NextRequest) {
  try {
    // 1) 로그인 사용자 확인 (세션 기반, 위조 불가)
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json(
        { error: "로그인이 필요합니다." },
        { status: 401 },
      );
    }

    // 2) 요청 본문에서는 packId만 받는다 (userId는 절대 신뢰하지 않음)
    const body = await req.json().catch(() => ({}));
    const packId = (body as { packId?: string }).packId;
    if (!packId) {
      return NextResponse.json({ error: "packId가 필요합니다." }, { status: 400 });
    }

    const supabase = createServiceClient();

    // TODO: 결제/잔액 검증을 여기서 먼저 수행한다 (아래 checkout 흐름과 연결).

    // 3) draw_pack RPC: 재고/확률 조회 → 가중 랜덤 → 재고 차감 → 기록 insert (트랜잭션)
    const { data, error } = await supabase.rpc("draw_pack", {
      p_pack_id: packId,
      p_user_id: user.id, // ← 서버가 확인한 신원만 사용
    });

    if (error) {
      // 5분 잠금 에러 처리 (LOCKED:남은초)
      const msg = error.message || "";
      const lockMatch = msg.match(/LOCKED:(\d+)/);
      if (lockMatch) {
        const seconds = parseInt(lockMatch[1], 10);
        return NextResponse.json(
          { error: "locked", lockedSeconds: seconds },
          { status: 429 },
        );
      }
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // draw_pack 은 setof(단일 행)를 반환하므로 첫 행을 꺼낸다.
    const result = Array.isArray(data) ? data[0] : data;
    return NextResponse.json({ result });
  } catch (e) {
    const message = e instanceof Error ? e.message : "알 수 없는 오류";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
