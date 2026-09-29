"use client";

import { Calendar, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CtaSection({ dictionary, lang }: { dictionary: any, lang: string }) {
    return (
        <section className="py-24 px-4 bg-slate-50">
            <div className="container mx-auto max-w-4xl text-center">
                <h2 className="font-outfit text-3xl md:text-5xl font-extrabold text-slate-900 mb-8">
                    {dictionary.cta?.title || (lang === 'en' ? 'Ready to discuss your surgery?' : 'क्या आप अपनी सर्जरी पर चर्चा करने के लिए तैयार हैं?')}
                </h2>
                <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
                    {dictionary.cta?.subtitle || (lang === 'en' ? 'Speak directly with our clinical coordinators to understand your treatment plan and expected recovery timeline.' : 'अपनी उपचार योजना और रिकवरी के समय को समझने के लिए सीधे हमारे क्लिनिकल समन्वयकों से बात करें।')}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white font-bold h-16 px-10 rounded-2xl text-xl w-full sm:w-auto shadow-xl shadow-teal-600/20">
                        <Link href={`/${lang}/appointment`}>
                            <Calendar className="mr-3 h-6 w-6" />
                            {dictionary.cta?.callBtn || (lang === 'en' ? 'Book an appointment' : 'अपॉइंटमेंट बुक करें')}
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="h-16 px-10 rounded-2xl text-xl w-full sm:w-auto font-bold border-slate-200 bg-white hover:bg-slate-50 text-slate-900">
                        <Link href={`/${lang}/contact`}>
                            {dictionary.cta?.visitBtn || (lang === 'en' ? 'Visit our Clinic' : 'हमारे क्लिनिक आएं')}
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
