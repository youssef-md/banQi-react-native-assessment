import 'intl';
import 'intl/locale-data/jsonp/en';

export function formatBRL(number: string): string {
  const formatted = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
    .format(Number(number))
    .replace(',', '.')
    .replace(/.([^.]*)$/, ',' + '$1');

  return formatted;
}
