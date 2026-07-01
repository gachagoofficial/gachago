"use client";

import { useMemo, useState } from "react";
import { faqItems, faqCategories } from "@/lib/data/catalog";
import { CategoryTabs } from "@/components/community/CategoryTabs";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

// FAQ 목록 (카테고리 탭 + 아코디언).
export function FaqList() {
  const [activeCategory, setActiveCategory] = useState("전체");
  const [openId, setOpenId] = useState("faq-1");

  const items = useMemo(
    () =>
      (faqItems as FaqItem[]).filter(
        (item) => activeCategory === "전체" || item.category === activeCategory,
      ),
    [activeCategory],
  );

  return (
    <>
      <CategoryTabs
        items={faqCategories as string[]}
        active={activeCategory}
        onChange={setActiveCategory}
      />
      <div className="faq-list">
        {items.map((item) => (
          <article className={`faq-item ${openId === item.id ? "open" : ""}`} key={item.id}>
            <button onClick={() => setOpenId(openId === item.id ? "" : item.id)}>
              <span>Q. {item.question}</span>
              <strong>{openId === item.id ? "−" : "+"}</strong>
            </button>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
