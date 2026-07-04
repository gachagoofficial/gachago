"use client";

import { useEffect, useMemo, useState } from "react";
import { createClient } from "@/lib/supabase/client";

interface Shipment {
  draw_id: string;
  email: string;
  nickname: string | null;
  phone: string | null;
  postcode: string | null;
  address: string | null;
  address_detail: string | null;
  reward_name: string | null;
  reward_tier: string | null;
  pack_title: string | null;
  ship_status: string | null;
  courier: string | null;
  tracking_no: string | null;
  is_lastone: boolean | null;
  lastone_name: string | null;
  created_at: string;
}

type EditVal = { status: string; courier: string; tracking: string };

export function ShipmentManager({ userId }: { userId: string }) {
  const supabase = useMemo(() => createClient(), []);
  const [rows, setRows] = useState<Shipment[] | null>(null);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState<"all" | "준비중" | "배송중" | "배송완료">("all");
  const [edits, setEdits] = useState<Record<string, EditVal>>({});
  const [savingId, setSavingId] = useState<string | null>(null);

  const load = () => {
    supabase.rpc("admin_list_shipments", { p_admin_id: userId }).then(({ data, error }) => {
      if (error) {
        setError(error.message);
        setRows([]);
        return;
      }
      const list = (data as Shipment[]) || [];
      setRows(list);
      // 초기 편집값 세팅
      const init: Record<string, EditVal> = {};
      list.forEach((r) => {
        init[r.draw_id] = {
          status: r.ship_status || "준비중",
          courier: r.courier || "",
          tracking: r.tracking_no || "",
        };
      });
      setEdits(init);
    });
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  const setEdit = (id: string, key: keyof EditVal, val: string) =>
    setEdits((e) => ({ ...e, [id]: { ...e[id], [key]: val } }));

  const save = async (r: Shipment) => {
    const e = edits[r.draw_id];
    setSavingId(r.draw_id);
    const { error } = await supabase.rpc("admin_update_shipment", {
      p_admin_id: userId,
      p_draw_id: r.draw_id,
      p_status: e.status,
      p_courier: e.courier || null,
      p_tracking: e.tracking || null,
    });
    setSavingId(null);
    if (error) alert("저장 실패: " + error.message);
    else load();
  };

  if (error) {
    return (
      <div className="account-guest">
        <p>배송 목록을 불러오지 못했습니다.</p>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>{error}</p>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>
          관리자 권한이 없거나 setup_admin.sql 이 실행되지 않았을 수 있습니다.
        </p>
      </div>
    );
  }

  if (rows === null) return <p className="draw-history-empty">불러오는 중...</p>;

  const filtered = filter === "all" ? rows : rows.filter((r) => (r.ship_status || "준비중") === filter);

  return (
    <div className="shipment-manager">
      <div className="shipment-filters">
        {(["all", "준비중", "배송중", "배송완료"] as const).map((f) => (
          <button
            key={f}
            className={`ship-filter${filter === f ? " is-active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f === "all" ? "전체" : f}
          </button>
        ))}
      </div>

      {filtered.length === 0 && <p className="draw-history-empty">해당하는 배송 건이 없습니다.</p>}

      <div className="shipment-list">
        {filtered.map((r) => {
          const e = edits[r.draw_id] || { status: "준비중", courier: "", tracking: "" };
          return (
            <div className="shipment-card" key={r.draw_id}>
              <div className="shipment-info">
                <div className="shipment-product">
                  <strong>{r.reward_name}</strong>
                  {r.reward_tier && <span className="draw-history-tier">{r.reward_tier}</span>}
                  {r.is_lastone && <span className="ship-lastone">LAST ONE</span>}
                </div>
                <p className="shipment-pack">
                  {r.pack_title} · {new Date(r.created_at).toLocaleDateString("ko-KR")}
                </p>
                <div className="shipment-buyer">
                  <p><b>{r.nickname || "닉네임 미설정"}</b> ({r.email})</p>
                  <p>{r.phone || "전화번호 없음"}</p>
                  <p>
                    {r.postcode ? `(${r.postcode}) ` : ""}
                    {r.address || "주소 미입력"} {r.address_detail || ""}
                  </p>
                </div>
              </div>

              <div className="shipment-edit">
                <select
                  value={e.status}
                  onChange={(ev) => setEdit(r.draw_id, "status", ev.target.value)}
                  className="write-select"
                >
                  <option>준비중</option>
                  <option>배송중</option>
                  <option>배송완료</option>
                </select>
                <input
                  placeholder="택배사 (예: CJ대한통운)"
                  value={e.courier}
                  onChange={(ev) => setEdit(r.draw_id, "courier", ev.target.value)}
                />
                <input
                  placeholder="운송장 번호"
                  value={e.tracking}
                  onChange={(ev) => setEdit(r.draw_id, "tracking", ev.target.value)}
                />
                <button
                  className="result-btn result-btn--primary"
                  onClick={() => save(r)}
                  disabled={savingId === r.draw_id}
                >
                  {savingId === r.draw_id ? "저장 중..." : "저장"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
