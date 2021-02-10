import 'intl';
import 'intl/locale-data/jsonp/pt';

export function formatBRL(number: string): string {
  const formatted = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(Number(number));

  return formatted;
}

export function formatDate(date: string): string {
  const formattedDate = Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  }).format(new Date(date));

  const formattedHour = Intl.DateTimeFormat('pt-BR', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }).format(new Date(date));

  const formatted = `${formattedDate} às ${formattedHour}`;

  return formatted;
}
