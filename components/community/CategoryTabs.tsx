"use client";

// 카테고리 탭 (커뮤니티/FAQ 공용).
export function CategoryTabs({
  items,
  active,
  onChange,
}: {
  items: string[];
  active: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="category-tabs">
      {items.map((item) => (
        <button
          className={active === item ? "active" : ""}
          key={item}
          onClick={() => onChange(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
