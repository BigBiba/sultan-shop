import { LanguageProvider } from "@inlang/paraglide-next"
import { languageTag } from "@/paraglide/runtime.js"
import { dir } from 'i18next'
import "@/app/globals.scss";

import Header from "@/components/Header/Header";
import { Footer } from "@/components/Footer/footer";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <LanguageProvider>
        <main>
            <Header lang={languageTag()}></Header>
            {children}
            <Footer></Footer>
        </main>
    </LanguageProvider>    
  );
}