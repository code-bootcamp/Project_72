export function getDate(data: string) {
  const yyyy = new Date(data).getFullYear();
  const mm = String(new Date(data).getMonth() + 1).padStart(2, '0');
  const dd = String(new Date(data).getDate()).padStart(2, '0');

  return `${yyyy}-${mm}-${dd}`;
}
export const priceToString = (price: Number) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
