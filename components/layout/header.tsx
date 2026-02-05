"use client";

import Link from "next/link";
import { Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface HeaderProps {
    lang: string;
    dictionary: any;
}

export function Header({ lang, dictionary }: HeaderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const getLocalizedPath = (newLang: string) => {
        if (!pathname) return `/${newLang}`;
        const segments = pathname.split("/");
        segments[1] = newLang;
        return segments.join("/");
    };

    const navigation = [
        { name: dictionary.navigation.home, href: `/${lang}` },
        { name: dictionary.navigation.services, href: `/${lang}/services` },
        { name: dictionary.navigation.about, href: `/${lang}/about` },
        { name: dictionary.navigation.contact, href: `/${lang}/contact` },
    ];

    return (
        <>
            {/* Navbar */}
            <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
                <nav className="container mx-auto max-w-7xl px-4 py-4">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div className="flex items-center justify-between lg:justify-start gap-4 flex-wrap w-full lg:w-auto">
                            <Link href={`/${lang}`} className="flex items-center gap-2">
                                <Image src="/images/doctor-logo.png" alt="Logo" width={55} height={55} className="md:w-[75px] md:h-[75px]" />
                                <span className="font-outfit text-lg md:text-2xl font-bold tracking-tight text-teal-700 leading-tight">
                                    {dictionary.doctor.name}
                                </span>
                            </Link>

                            <div className="hidden md:block flex items-center justify-center">
                                <Image
                                    src="/images/recons-2.png"
                                    alt="recons Logo"
                                    width={150}
                                    height={50}
                                    className="w-[250px] md:w-[300px] h-auto"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between lg:justify-end gap-8 w-full lg:w-auto pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                            {/* Desktop Links */}
                            <div className="hidden lg:flex items-center gap-8">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="text-sm font-semibold hover:text-teal-600 transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>

                            {/* Lang Switcher & Mobile Menu */}
                            <div className="flex items-center justify-between lg:justify-end w-full lg:w-auto gap-4">
                                <div className="flex bg-slate-100 p-1 rounded-lg">
                                    <Link
                                        href={getLocalizedPath("en")}
                                        className={`px-3 py-2 text-xs font-bold rounded-md transition-all ${lang === "en"
                                            ? "bg-white shadow-sm text-teal-700"
                                            : "text-slate-500 hover:text-slate-700"
                                            }`}
                                    >
                                        EN
                                    </Link>
                                    <Link
                                        href={getLocalizedPath("hi")}
                                        className={`px-3 py-2 text-xs font-bold rounded-md transition-all ${lang === "hi"
                                            ? "bg-white shadow-sm text-teal-700"
                                            : "text-slate-500 hover:text-slate-700"
                                            }`}
                                    >
                                        हिन्दी
                                    </Link>
                                </div>

                                <div className="lg:hidden">
                                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                                        <SheetTrigger asChild>
                                            <Button variant="ghost" size="icon" className="text-teal-700">
                                                <Menu className="h-6 w-6" />
                                            </Button>
                                        </SheetTrigger>
                                        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                                            <SheetHeader className="text-left">
                                                <SheetTitle className="font-outfit text-teal-700">
                                                    {dictionary.doctor.name}
                                                </SheetTitle>
                                            </SheetHeader>
                                            <div className="grid gap-4 py-4">
                                                {navigation.map((item) => (
                                                    <Link
                                                        key={item.href}
                                                        href={item.href}
                                                        onClick={() => setIsOpen(false)}
                                                        className="text-lg font-semibold text-slate-900 hover:text-teal-600 transition-colors py-2 border-b border-slate-100"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </SheetContent>
                                    </Sheet>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}
