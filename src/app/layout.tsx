import { dir } from 'i18next'
import { languages } from '@/i18n/settings'
import "./globals.scss";

import StoreProvider from "./StoreProvider"

type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    lang: string;
  };
};

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default function RootLayout({ children, params: { lang } }: RootLayoutProps) {
  return (

    // <StoreProvider lang={lang}>
      <html lang={lang} dir='ltr'>
        <body>
          {children}
        </body>
      </html>
    // </StoreProvider>
    
  );
}