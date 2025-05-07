'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

import nextIntlConfig from '../../../../../../next-intl.config';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  function onClick(value: string) {
    const newPath = pathname.replace(`/${currentLocale}`, `/${value}`);
    document.cookie = `NEXT_LOCALE=${value}; path=/; max-age=31536000; SameSite=Lax; Secure`;
    router.push(newPath);
    window.location.href = newPath;
  }

  return (
    <div className="flex content-center gap-1">
      {nextIntlConfig.locales.map((locale, index) => (
        <button
          aria-label={`change language to ${locale}`}
          key={index}
          onClick={() => onClick(locale)}
        >
          <Image
            className="hover:scale-120 md:w-6 cursor-pointer transition"
            src={`/images/${locale}.webp`}
            alt={`${locale} flag`}
            width="30"
            height="25"
          />
        </button>
      ))}
    </div>
  );
}
