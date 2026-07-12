export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-JO', {
    style: 'currency',
    currency: 'JOD',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(amount);
}
