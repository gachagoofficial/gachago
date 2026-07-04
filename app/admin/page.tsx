"use client";

import { useEffect, useMemo, useState } from "react";
import { useAuth } from "@/components/auth/AuthProvider";
import { createClient } from "@/lib/supabase/client";
import { formatWon } from "@/lib/format";
import { ShipmentManager } from "@/components/admin/ShipmentManager";

interface RewardRow {
  id: string;
  name: string;
  tier: string | null;
  rarity: string | null;
  value: number | null;
  weight: number;
  stock: number;
  pack_id: string;
}

// 간단 관리자 대시보드: 상품 재고 현황 조회.
// (원본의 회원관리/role 시스템은 profiles 테이블이 필요해 별도 구축 대상)
export default function AdminPage() {
  const { user, loading } = useAuth();
  const supabase = useMemo(() => createClient(), []);
  const [rewards, setRewards] = useState<RewardRow[]>([]);
  const [dataLoading, setDataLoading] = useState(false);
  const [tab, setTab] = useState<"stock" | "shipment">("stock");

  useEffect(() => {
    if (!user) return;
    let cancelled = false;
    setDataLoading(true);
    supabase
      .from("rewards")
      .select("id, name, tier, rarity, value, weight, stock, pack_id")
      .order("stock", { ascending: true })
      .then(({ data }) => {
        if (cancelled) return;
        setRewards((data as RewardRow[]) || []);
        setDataLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [user, supabase]);

  const totalStock = rewards.reduce((s, r) => s + (r.stock || 0), 0);
  const lowStock = rewards.filter((r) => r.stock <= 3);

  return (
    <section className="subpage">
      <div className="subpage-inner">
        <p className="section-label">GACHA GO ADMIN</p>
        <h1>재고 관리</h1>

        {loading && <p>불러오는 중...</p>}

        {!loading && !user && (
          <div className="account-guest">
            <p>관리자 기능은 로그인 후 이용할 수 있습니다.</p>
          </div>
        )}

        {!loading && user && (
          <>
            {/* 탭 */}
            <div className="community-tabs" style={{ marginBottom: 24 }}>
              <button
                className={`community-tab${tab === "stock" ? " is-active" : ""}`}
                onClick={() => setTab("stock")}
              >
                재고 관리
              </button>
              <button
                className={`community-tab${tab === "shipment" ? " is-active" : ""}`}
                onClick={() => setTab("shipment")}
              >
                배송 관리
              </button>
            </div>

            {tab === "shipment" && <ShipmentManager userId={user.id} />}

            {tab === "stock" && (
            <>
            <div className="account-summary" style={{ marginBottom: 24 }}>
              <div className="account-summary-card">
                <span className="account-summary-label">상품 종류</span>
                <strong className="account-summary-value">{rewards.length}종</strong>
              </div>
              <div className="account-summary-card">
                <span className="account-summary-label">총 재고</span>
                <strong className="account-summary-value">{totalStock}개</strong>
              </div>
              <div className="account-summary-card">
                <span className="account-summary-label">재고 부족(≤3)</span>
                <strong className="account-summary-value">{lowStock.length}종</strong>
              </div>
            </div>

            {dataLoading && <p className="draw-history-empty">불러오는 중...</p>}
            {!dataLoading && (
              <div className="admin-table-wrap">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>상품명</th>
                      <th>등급</th>
                      <th>가치</th>
                      <th>가중치</th>
                      <th>재고</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rewards.map((r) => (
                      <tr key={r.id}>
                        <td>
                          <strong>{r.name}</strong>
                        </td>
                        <td>
                          <span className="role-badge">{r.tier || r.rarity || "-"}</span>
                        </td>
                        <td>{r.value != null ? formatWon(r.value) : "-"}</td>
                        <td>{r.weight}</td>
                        <td style={{ color: r.stock <= 3 ? "#ff8a8a" : undefined }}>
                          {r.stock}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            <p className="draw-history-empty" style={{ marginTop: 16 }}>
              참고: 회원 관리·권한(role) 기능은 profiles 테이블이 필요해 추후 별도 구축 대상입니다.
            </p>
            </>
            )}
          </>
        )}
      </div>
    </section>
  );
}
