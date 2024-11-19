import { useSearchParams } from 'next/navigation';

export function getLang() {
    const searchParams = useSearchParams()
    const lang = searchParams.get('lang')

  return lang as string || 'ru'; // 'en' — значение по умолчанию
}