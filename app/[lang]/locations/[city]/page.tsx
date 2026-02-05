import { getDictionary } from "@/lib/get-dictionary";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Train, Car, Smartphone, ArrowRight, ShieldCheck, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export async function generateStaticParams() {
    return [
        { city: "ujjain" },
        { city: "dewas" },
        { city: "ratlam" },
    ];
}

export async function generateMetadata({ params }: LocationPageProps) {
    const { lang, city } = await params;
    const dictionary = await getDictionary(lang as "en" | "hi");
    const location = dictionary.locations.cities.find((c: any) => c.id === city);

    if (!location) return {};

    return {
        title: `${location.name} | ${dictionary.doctor.name} - Joint Replacement Surgeon`,
        description: location.whyTravel,
    };
}

interface LocationPageProps {
    params: Promise<{
        lang: string;
        city: string;
    }>;
}

export default async function LocationPage({ params }: LocationPageProps) {
    const { lang, city } = await params;
    const dictionary = await getDictionary(lang as "en" | "hi");
    const location = dictionary.locations.cities.find((c: any) => c.id === city);

    if (!location) {
        notFound();
    }

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-4 bg-slate-900 text-white overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-20">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-teal-500 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[120px]" />
                </div>

                <div className="container mx-auto max-w-7xl relative z-10">
                    <div className="max-w-3xl">
                        <Badge className="bg-teal-600 text-white mb-6 px-4 py-1.5 rounded-full text-sm font-bold animate-in fade-in slide-in-from-bottom-4 duration-700">
                            {location.distance} {lang === 'en' ? 'from Indore' : 'इंदौर से'}
                        </Badge>
                        <h1 className="font-outfit text-4xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                            {location.heading}
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                            {location.whyTravel}
                        </p>
                        <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
                            <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600 text-white font-bold h-14 px-8 rounded-2xl text-lg shadow-xl shadow-teal-500/20">
                                <a href={`tel:${dictionary.contact.phone[0].replace(/\s/g, "")}`}>
                                    {lang === 'en' ? 'Book Priority Slot' : 'प्राथमिकता अपॉइंटमेंट बुक करें'}
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Section (Hub & Spoke Logic) */}
            <section className="py-24 px-4 bg-white">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="font-outfit text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 italic">
                                {lang === 'en' ? 'Why Patients from' : ''} {location.name} {lang === 'hi' ? 'के मरीज' : ''} {lang === 'en' ? 'Trust RECONS' : 'RECONS पर भरोसा क्यों करते हैं'}
                            </h2>
                            <div className="space-y-6">
                                <div className="flex gap-4 p-6 rounded-3xl bg-slate-50 border border-slate-100 transition-hover hover:border-teal-200 group">
                                    <div className="h-12 w-12 rounded-2xl bg-teal-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                        <ShieldCheck className="text-teal-600 h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg mb-1">{lang === 'en' ? 'Advanced Navigation Tech' : 'उन्नत नेविगेशन तकनीक'}</h4>
                                        <p className="text-slate-600">{lang === 'en' ? 'Robotic and computerized precision that ensures your joint replacement lasts longer.' : 'रोबोटिक और कंप्यूटरीकृत सटीकता जो सुनिश्चित करती है कि आपका जोड़ प्रत्यारोपण लंबे समय तक चले।'}</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-6 rounded-3xl bg-slate-50 border border-slate-100 transition-hover hover:border-teal-200 group">
                                    <div className="h-12 w-12 rounded-2xl bg-teal-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                        <Clock className="text-teal-600 h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg mb-1">{lang === 'en' ? 'Special Outstation Protocols' : 'आउटस्टेशन मरीजों के लिए विशेष प्रोटोकॉल'}</h4>
                                        <p className="text-slate-600">{lang === 'en' ? 'Priority consultation and Fast-Track discharge for patients traveling from outstation.' : 'बाहरी मरीजों के लिए प्राथमिकता परामर्श और फास्ट-ट्रैक डिस्चार्ज।'}</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-6 rounded-3xl bg-slate-50 border border-slate-100 transition-hover hover:border-teal-200 group">
                                    <div className="h-12 w-12 rounded-2xl bg-teal-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                        <Award className="text-teal-600 h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg mb-1">{lang === 'en' ? 'Proven Track Record' : 'प्रमाणित ट्रैक रिकॉर्ड'}</h4>
                                        <p className="text-slate-600">{lang === 'en' ? 'Over 60,000 surgeries performed by Dr. Jinsiwale with 39+ years of experience.' : 'डॉ. जिन्सीवाले द्वारा 39+ वर्षों के अनुभव के साथ 60,000 से अधिक सर्जरी की गईं।'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                            <Image
                                src="/images/robotic-knee-hero.jpg"
                                alt="RECONS Advanced Technology"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8 md:p-12">
                                <p className="text-white text-xl md:text-2xl font-medium italic">
                                    "{lang === 'en' ? 'Don\'t compromise on quality for distance. Your joints deserve world-class tech.' : 'दूरी के लिए गुणवत्ता से समझौता न करें। आपके जोड़े विश्व स्तरीय तकनीक के पात्र हैं।'}"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Connectivity & Logistics */}
            <section className="py-24 px-4 bg-slate-50">
                <div className="container mx-auto max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="font-outfit text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                            {lang === 'en' ? 'Hassle-Free Travel from' : ''} {location.name} {lang === 'hi' ? 'से परेशानी मुक्त यात्रा' : ''}
                        </h2>
                        <p className="text-lg text-slate-600 font-medium">
                            {lang === 'en' ? 'Planned logistical support for you and your family.' : 'आपके और आपके परिवार के लिए नियोजित लॉजिस्टिक सहायता।'}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="p-8 rounded-[2.5rem] border-none shadow-sm bg-white group hover:shadow-xl transition-all duration-500">
                            <div className="h-16 w-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-8 text-blue-600 group-hover:scale-110 transition-transform">
                                <Train className="h-8 w-8" />
                            </div>
                            <h3 className="font-outfit text-2xl font-bold text-slate-900 mb-4">{lang === 'en' ? 'By Train' : 'ट्रेन से'}</h3>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                {location.connectivity.train}
                            </p>
                        </Card>

                        <Card className="p-8 rounded-[2.5rem] border-none shadow-sm bg-white group hover:shadow-xl transition-all duration-500">
                            <div className="h-16 w-16 rounded-2xl bg-emerald-50 flex items-center justify-center mb-8 text-emerald-600 group-hover:scale-110 transition-transform">
                                <Car className="h-8 w-8" />
                            </div>
                            <h3 className="font-outfit text-2xl font-bold text-slate-900 mb-4">{lang === 'en' ? 'By Road' : 'सड़क मार्ग से'}</h3>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                {location.connectivity.road}
                            </p>
                            <div className="pt-4 border-t border-slate-100 flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-teal-600 shrink-0 mt-1" />
                                <p className="text-slate-500 italic">{location.connectivity.landmark}</p>
                            </div>
                        </Card>
                    </div>

                    <div className="mt-16 bg-teal-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[40%] bg-teal-500/20 rounded-full blur-[80px]" />
                        <div className="relative z-10">
                            <h3 className="font-outfit text-3xl md:text-4xl font-bold mb-6">
                                {lang === 'en' ? 'Ready for your consultation?' : 'क्या आप अपने परामर्श के लिए तैयार हैं?'}
                            </h3>
                            <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto font-light">
                                {lang === 'en' ? 'Call now to reserve your priority outstation slot. Our team handles your planning from appointment to recovery.' : 'अपनी प्राथमिकता आउटस्टेशन स्लॉट आरक्षित करने के लिए अभी कॉल करें। हमारी टीम अपॉइंटमेंट से लेकर रिकवरी तक आपकी योजना संभालती है।'}
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Button asChild size="lg" className="bg-white text-teal-900 hover:bg-teal-50 font-bold h-16 px-10 rounded-2xl text-xl shadow-xl">
                                    <a href={`tel:${dictionary.contact.phone[0].replace(/\s/g, "")}`}>
                                        {dictionary.contact.phone[0]}
                                    </a>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="border-2 border-white/30 text-teal-900 hover:bg-white/10 font-bold h-16 px-10 rounded-2xl text-xl">
                                    <Link href={`/${lang}/contact`}>
                                        {lang === 'en' ? 'View Map Location' : 'मैप लोकेशन देखें'}
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
