export const formatWon = (value: number | string) =>
  `₩${Number(value).toLocaleString("ko-KR")}`;

export const formatDisplayValue = (value: number | string) =>
  `약 ${formatWon(value)} 상당`;

export const formatQuantity = (value: number | string) => {
  const quantity =
    typeof value === "number"
      ? value
      : Number.parseInt(String(value ?? "").replace(/,/g, ""), 10);
  if (!Number.isFinite(quantity)) return value;
  const formatted = quantity.toLocaleString("ko-KR");
  return `${formatted}/${formatted}`;
};
