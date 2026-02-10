import { getDictionary } from "@/lib/get-dictionary";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, CheckCircle, Globe, Phone, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function AboutPage({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang as "en" | "hi");
    const { doctor, stats, contact, navigation } = dictionary;

    return (
        <div className="flex flex-col gap-0 pb-20 md:pb-0">
            {/* Header Section */}
            <section className="bg-slate-900 text-white py-16 md:py-24 px-4 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-teal-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="container mx-auto max-w-7xl relative z-10">
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h1 className="font-outfit text-4xl md:text-6xl font-black mb-4 tracking-tight">
                            {doctor.name}
                        </h1>
                        <p className="text-xl md:text-2xl text-teal-400 font-bold mb-8 uppercase tracking-widest">
                            {doctor.designation}
                        </p>

                        <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-10">
                            {doctor.qualifications.map((qual: string) => (
                                <Badge key={qual} variant="secondary" className="bg-white/10 text-white hover:bg-white/20 border-none px-4 py-1.5 text-sm font-semibold rounded-full">
                                    {qual}
                                </Badge>
                            ))}
                        </div>

                        <div className="space-y-4 max-w-2xl">
                            <h3 className="text-slate-400 font-bold uppercase tracking-widest text-xs">Affiliations</h3>
                            <div className="flex flex-wrap justify-center md:justify-start gap-6">
                                {doctor.affiliations.map((aff: string) => (
                                    <div key={aff} className="flex items-center gap-3 text-slate-300 font-medium">
                                        <Building2 className="h-5 w-5 text-teal-500 shrink-0" />
                                        <span>{aff}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bio Section */}
            <section className="py-20 md:py-32 px-4 bg-white">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Left: Photo */}
                        <div className="relative group perspective-1000">
                            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-100 aspect-[4/5] md:aspect-auto">
                                <Image
                                    src="/doctor/images/doctor_profile.png"
                                    alt={doctor.name}
                                    width={800}
                                    height={1000}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 bg-teal-50 rounded-[2rem] -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
                        </div>

                        {/* Right: Bio & Highlights */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="font-outfit text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                                    {doctor.aboutHeader}
                                </h2>
                                <p className="text-xl text-slate-600 leading-relaxed font-medium">
                                    {doctor.bio}
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-teal-700 font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                                    <span className="w-8 h-px bg-teal-200" />
                                    Key Highlights
                                </h3>
                                <ul className="space-y-5">
                                    {doctor.highlights.map((h: string, idx: number) => (
                                        <li key={idx} className="flex items-start gap-4 group">
                                            <div className="h-7 w-7 rounded-full bg-teal-100 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-teal-600 transition-colors">
                                                <CheckCircle className="h-4 w-4 text-teal-600 group-hover:text-white transition-colors" />
                                            </div>
                                            <p className="text-slate-700 font-semibold leading-snug group-hover:text-slate-900 transition-colors">
                                                {h}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Stats Grid */}
            <section className="py-24 px-4 bg-slate-50 border-y border-slate-100">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="font-outfit text-3xl md:text-4xl font-black text-slate-900 mb-4">
                            Decades of Surgical Excellence
                        </h2>
                        <p className="text-slate-500 font-medium">A track record of high-success orthopedic procedures</p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                        {stats.map((stat: any, idx: number) => (
                            <Card key={idx} className="border-none shadow-sm hover:shadow-md transition-shadow bg-white rounded-2xl overflow-hidden">
                                <CardContent className="p-8 flex flex-col items-center text-center">
                                    <span className="text-4xl md:text-5xl font-black text-teal-600 mb-2 font-outfit">
                                        {stat.value}
                                    </span>
                                    <span className="text-sm md:text-base font-bold text-slate-500 uppercase tracking-tighter">
                                        {stat.label}
                                    </span>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* International Training */}
            <section className="py-24 px-4 bg-white overflow-hidden relative">
                <div className="container mx-auto max-w-7xl">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="max-w-xl">
                            <div className="h-14 w-14 bg-teal-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl shadow-teal-600/30">
                                <Globe className="h-8 w-8" />
                            </div>
                            <h2 className="font-outfit text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                                {doctor.training.title}
                            </h2>
                            <p className="text-lg text-slate-600 font-medium mb-10 leading-relaxed">
                                Trained and certified by leading global orthopedic institutions across 3 continents, ensuring world-class standards in Indian healthcare.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
                            {doctor.training.locations.map((loc: string) => (
                                <div key={loc} className="bg-slate-50 hover:bg-teal-50 border border-slate-100 hover:border-teal-200 p-6 rounded-2xl transition-all group">
                                    <p className="font-bold text-slate-700 group-hover:text-teal-800 text-center text-sm md:text-base">
                                        {loc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 md:py-32 px-4 bg-teal-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/doctor/recons_hero.png')] opacity-10 bg-cover bg-center mix-blend-overlay" />
                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <h2 className="font-outfit text-3xl md:text-5xl font-black text-white mb-10">
                        {contact.title}
                    </h2>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <Button asChild size="lg" className="bg-white text-teal-700 hover:bg-slate-50 font-black h-16 px-10 rounded-2xl text-xl w-full md:w-auto shadow-2xl">
                            <a href={`tel:${contact.phone[0].replace(/\s/g, '')}`}>
                                <Phone className="mr-3 h-6 w-6" />
                                {contact.phone[0]}
                            </a>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="border-2 border-white text-teal-700 hover:bg-white hover:text-teal-700 font-bold h-16 px-10 rounded-2xl text-xl w-full md:w-auto">
                            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.mapQuery)}`} target="_blank" rel="noopener noreferrer">
                                <MapPin className="mr-3 h-6 w-6" />
                                {dictionary.hero.ctaDirections}
                            </a>
                        </Button>
                    </div>
                    <p className="mt-10 text-teal-100 font-bold flex items-center justify-center gap-2">
                        <CheckCircle className="h-5 w-5" />
                        Appointments are mandatory
                    </p>
                </div>
            </section>
        </div>
    );
}
