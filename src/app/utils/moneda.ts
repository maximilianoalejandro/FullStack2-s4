// Muestra un número como pesos chilenos: 18990 -> "$18.990"
export function moneda(valor: number): string {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0,
  }).format(valor);
}
