import { LanguageProvider } from "@inlang/paraglide-next"
import { languageTag } from "@/paraglide/runtime.js"
import { dir } from 'i18next'
import "./globals.scss";

type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    lang: string;
  };
};

export default function RootLayout({ children, params: { lang } }: RootLayoutProps) {
  return (
      <LanguageProvider>
   <html lang={languageTag()} dir='ltr'>
        <body>
          {children}
        </body>
      </html>
 </LanguageProvider>    
  );
}