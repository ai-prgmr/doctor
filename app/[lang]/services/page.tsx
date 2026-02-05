import { getDictionary } from "@/lib/get-dictionary";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Phone, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function ServicesPage({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang as "en" | "hi");

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="/images/recons_hero.png"
                        alt="Background"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="container mx-auto max-w-7xl px-4 md:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="font-outfit text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                            {dictionary.services.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed">
                            {dictionary.services.subtitle}
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-slate-50 flex-grow">
                <div className="container mx-auto max-w-7xl px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {dictionary.services.items.map((service: any) => (
                            <Link href={`/${lang}/services/${service.id}`} key={service.id} className="group">
                                <Card className="h-full border-none shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
                                    <div className="relative h-48 w-full bg-slate-200">
                                        <Image
                                            src={service.technology.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        <div className="absolute bottom-4 left-4">
                                            <div className="bg-teal-600 p-2 rounded-lg text-white mb-2 inline-block">
                                                <Activity className="h-5 w-5" />
                                            </div>
                                        </div>
                                    </div>
                                    <CardHeader className="pt-6">
                                        <CardTitle className="font-outfit text-2xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                                            {service.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow flex flex-col justify-between">
                                        <CardDescription className="text-slate-600 text-base leading-relaxed mb-6 line-clamp-3">
                                            {service.desc}
                                        </CardDescription>
                                        <div className="flex items-center text-teal-600 font-bold text-sm">
                                            {lang === 'en' ? 'Explore Treatment' : 'उपचार देखें'}
                                            <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-2 transition-transform" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick Contact CTA */}
            <section className="py-16 bg-white border-t border-slate-100">
                <div className="container mx-auto max-w-7xl px-4 md:px-8">
                    <div className="bg-teal-600 rounded-[2rem] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-teal-600/20">
                        <div className="relative z-10">
                            <h2 className="font-outfit text-3xl md:text-5xl font-extrabold mb-8">
                                {dictionary.contact.title}
                            </h2>
                            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                                <Button asChild size="lg" className="bg-white text-teal-700 hover:bg-slate-50 font-bold h-16 px-10 rounded-2xl text-xl w-full md:w-auto shadow-lg transition-transform hover:scale-105">
                                    <a href={`tel:${dictionary.contact.phone[0].replace(/\s/g, '')}`}>
                                        <Phone className="mr-3 h-5 w-5" />
                                        {dictionary.contact.phone[0]}
                                    </a>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal-700 font-bold h-16 px-10 rounded-2xl text-xl w-full md:w-auto transition-transform hover:scale-105">
                                    <a href={`https://wa.me/${dictionary.contact.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer">
                                        <MessageCircle className="mr-3 h-5 w-5" />
                                        WhatsApp
                                    </a>
                                </Button>
                            </div>
                            <p className="mt-8 text-teal-100 font-medium">
                                {dictionary.alert.message}
                            </p>
                        </div>
                        {/* Background elements */}
                        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-teal-500 rounded-full blur-3xl opacity-50" />
                    </div>
                </div>
            </section>
        </div>
    );
}
