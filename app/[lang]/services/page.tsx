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
            <section className="relative py-40 bg-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-80">
                    <Image
                        src="/doctor/images/services_banner.png"
                        alt="services banner"
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
            <section className="py-24 bg-slate-50 grow">
                <div className="container mx-auto max-w-7xl px-4 md:px-8">
                    <div className="flex flex-col gap-8">
                        {dictionary.services.items.map((service: any) => (
                            <Link href={`/${lang}/services/${service.id}`} key={service.id} className="group">
                                <Card className="border-none shadow-sm hover:shadow-xl p-0 transition-all duration-300 overflow-hidden flex flex-col md:flex-row h-full md:min-h-[280px]">
                                    {/* Left Column: 3D Illustration on Dark Gradient */}
                                    <div className="relative w-full md:w-80 h-64 md:h-auto bg-gradient-to-br from-slate-900 to-slate-950 flex-shrink-0 flex items-center justify-center p-6">
                                        <div className="relative w-full h-full min-h-[200px]">
                                            <Image
                                                src={service.technology.image}
                                                alt={service.title}
                                                fill
                                                className="object-contain transform group-hover:scale-105 transition-transform duration-500"
                                                priority
                                            />
                                        </div>
                                    </div>
                                    
                                    {/* Right Column: Title, Description, Tags, Action */}
                                    <div className="p-8 flex flex-col justify-between grow bg-white">
                                        <div>
                                            <h3 className="font-outfit text-2xl md:text-3xl font-extrabold text-slate-900 group-hover:text-teal-700 transition-colors mb-3">
                                                {service.title}
                                            </h3>
                                            <p className="text-slate-600 text-base leading-relaxed mb-6">
                                                {service.desc}
                                            </p>
                                            
                                            {/* Sub-Treatments Tags */}
                                            {service.subTreatments && service.subTreatments.length > 0 && (
                                                <div className="flex flex-wrap gap-2 mb-6">
                                                    {service.subTreatments.slice(0, 5).map((sub: any) => (
                                                        <span
                                                            key={sub.id}
                                                            className="text-xs font-semibold bg-slate-100 text-slate-600 px-3 py-1 rounded-full border border-slate-200/60"
                                                        >
                                                            {sub.title}
                                                        </span>
                                                    ))}
                                                    {service.subTreatments.length > 5 && (
                                                        <span className="text-xs font-bold bg-teal-50 text-teal-700 px-3 py-1 rounded-full border border-teal-100/50">
                                                            +{service.subTreatments.length - 5} {lang === 'en' ? 'more' : 'और'}
                                                        </span>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                        
                                        <div className="flex items-center text-teal-600 font-bold text-base mt-auto">
                                            {lang === 'en' ? 'Explore Treatment' : 'उपचार देखें'}
                                            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-2 transition-transform" />
                                        </div>
                                    </div>
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
