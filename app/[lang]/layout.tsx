import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "../globals.css";
import { getDictionary } from "@/lib/get-dictionary";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "hi" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as "en" | "hi");

  return {
    title: `${dictionary.doctor.name} | ${dictionary.doctor.title}`,
    description: dictionary.hero.subhead,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as "en" | "hi");

  return (
    <html lang={lang} className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased text-slate-900 bg-white`}>
        <Header lang={lang} dictionary={dictionary} />

        <main className="pb-20 md:pb-0">
          {children}
        </main>

        <Footer lang={lang} dictionary={dictionary} />
      </body>
    </html>
  );
}
