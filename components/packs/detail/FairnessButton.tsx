"use client";

import { useState } from "react";

// "추첨 방식 및 검증 기준" 버튼 + 팝업.
export function FairnessButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="fairness-button"
        onClick={() => setOpen(true)}
      >
        <span>
          <strong>추첨 방식 및 검증 기준</strong>
          <span>재고 보존 규칙과 서버 처리 절차를 확인하세요</span>
        </span>
        <b>+</b>
      </button>

      {open && (
        <div
          className="result-overlay"
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}
        >
          <div className="fairness-modal">
            <button className="result-close" onClick={() => setOpen(false)} aria-label="닫기">×</button>

            <span className="fairness-eyebrow">DRAW CONTROL DOCUMENT · v1.0</span>
            <h2 className="fairness-title">추첨 방식 및 검증 기준</h2>
            <p className="fairness-intro">
              GACHA GO의 팩은 확률만 표시하는 무제한 상품이 아니라, 실제 남은 상품으로
              구성된 유한 재고 풀입니다. 아래 기준은 구매 한 건이 어떤 조건에서 추첨되고,
              재고와 결과가 어떻게 일치하도록 통제되는지 설명합니다.
            </p>

            <div className="fairness-grid">
              {[
                ["01 · 재고 보존 규칙", "팩 남은 수량은 모든 일반 상품의 남은 수량 합계와 항상 같아야 합니다."],
                ["02 · 결제 1건, 추첨 1회", "검증된 결제로 발급된 미사용 추첨권만 한 번 소비할 수 있습니다."],
                ["03 · 동시 구매 통제", "추첨 중 대상 재고를 잠가 마지막 상품이 중복 지급되지 않도록 합니다."],
                ["04 · 편향 없는 난수", "CSPRNG와 rejection sampling으로 수량에 따른 계산 편향을 제거합니다."],
                ["05 · 단일 거래 처리", "상품 선택, 재고 차감, 지급 기록 중 하나라도 실패하면 전체 처리를 취소합니다."],
                ["06 · 감사 기록 보존", "알고리즘 버전, 추첨 전후 재고와 결과를 수정 불가 기록으로 남깁니다."],
              ].map(([title, desc]) => (
                <div className="fairness-item" key={title}>
                  <p className="fairness-item-title">{title}</p>
                  <p className="fairness-item-desc">{desc}</p>
                </div>
              ))}
            </div>

            <div className="fairness-block">
              <div className="fairness-block-head">
                <span className="fairness-seq-title">SERVER DRAW SEQUENCE</span>
                <span className="fairness-seq-ver">Algorithm v1.0</span>
              </div>
              <ul className="fairness-seq">
                <li><b>PAYMENT GATE</b> · 결제 제공자에서 확인된 미사용 추첨권을 잠그고 중복 사용을 차단합니다.</li>
                <li><b>INVARIANT CHECK</b> · 팩 잔여 수량 = 상품별 잔여 수량 합계가 아니면 추첨을 즉시 중단합니다.</li>
                <li><b>SECURE INDEX</b> · 서버의 pgcrypto 난수와 rejection sampling으로 0 ~ N-1 인덱스를 생성합니다.</li>
                <li><b>INVENTORY MAPPING</b> · 생성된 인덱스를 남은 상품 수량의 누적 구간에 대응시켜 상품 하나를 결정합니다.</li>
                <li><b>COMMIT</b> · 팩과 상품 재고를 각각 1개 차감하고, 지급 결과 및 감사 데이터를 같은 거래에서 기록합니다.</li>
              </ul>
            </div>

            <div className="fairness-block">
              <p className="fairness-sub-title">재고 기반 확률 계산</p>
              <p className="fairness-sub-desc">상품의 현재 당첨 확률 = 해당 상품 잔여 수량 ÷ 팩 전체 잔여 수량</p>
              <p className="fairness-sub-desc">예: A상품 2개, B상품 5개가 남아 있다면 총 7개의 개별 상품 중 A는 2/7, B는 5/7입니다.</p>
            </div>

            <div className="fairness-block">
              <p className="fairness-sub-title">마지막 구매 보너스 처리</p>
              <p className="fairness-sub-desc">
                LAST ONE 보너스는 일반 추첨 재고와 확률 계산에 포함되지 않습니다. 팩이 1개 남은 상태에서
                마지막 일반 상품을 구매하여 잔여 수량을 0으로 만든 회원에게, 해당 일반 상품과 별도의
                LAST ONE 보너스를 함께 지급합니다.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
