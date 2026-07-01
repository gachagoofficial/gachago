import { NextRequest, NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";

// ★ 결제 검증도 서버 전용. 클라이언트가 보낸 금액을 신뢰하지 말고
//   서버에서 팩 가격을 다시 조회해 대조한 뒤 결제를 확정한다.
export async function POST(req: NextRequest) {
  try {
    const { packId, userId } = await req.json();
    if (!packId || !userId) {
      return NextResponse.json({ error: "필수 값 누락" }, { status: 400 });
    }
    const supabase = createServiceClient();

    // 서버에서 가격을 다시 조회 (클라이언트가 보낸 금액 신뢰 금지)
    const { data: pack, error } = await supabase
      .from("packs")
      .select("id, price")
      .eq("id", packId)
      .single();

    if (error || !pack) {
      return NextResponse.json({ error: "팩을 찾을 수 없음" }, { status: 404 });
    }

    // TODO: PG사 결제 검증 + 주문 기록 insert
    return NextResponse.json({ ok: true, amount: pack.price });
  } catch (e) {
    const message = e instanceof Error ? e.message : "알 수 없는 오류";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
