import { getDictionary } from "@/lib/get-dictionary";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, ArrowLeft, ArrowRight, Award, Stethoscope, Cpu, Zap } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

export async function generateStaticParams() {
    const locales = ["en", "hi"];
    const serviceIds = [
        "knee-replacement",
        "hip-replacement",
        "hand-surgery",
        "spine-surgery",
        "arthroscopy",
        "patient-tech",
    ];

    const params = [];
    for (const lang of locales) {
        for (const id of serviceIds) {
            params.push({ lang, id });
        }
    }
    return params;
}

export default async function ServicePage({
    params,
}: {
    params: Promise<{ lang: string; id: string }>;
}) {
    const { lang, id } = await params;
    const dictionary = await getDictionary(lang as "en" | "hi");

    const service = dictionary.services.items.find((item: any) => item.id === id);

    if (!service) {
        notFound();
    }

    // Extract Trust Stats from Doctor Expertise (e.g. "6,000+" from the string)
    const trustStatMatch = service.doctorExpertise?.match(/(\d{1,3}(,\d{3})*\+?)/);
    const trustStat = trustStatMatch ? trustStatMatch[0] : null;

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-4 bg-slate-50 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 blur-[100px] rounded-full" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/5 blur-[100px] rounded-full" />
                </div>

                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <Link
                        href={`/${lang}/services`}
                        className="inline-flex items-center text-teal-600 font-bold mb-8 hover:text-teal-700 transition-colors group"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />
                        {dictionary.navigation.services}
                    </Link>

                    {trustStat && (
                        <div className="flex justify-center mb-6">
                            <Badge className="bg-teal-600 text-white hover:bg-teal-700 px-4 py-1.5 rounded-full text-sm font-bold shadow-lg shadow-teal-600/20">
                                {trustStat} Successful Cases
                            </Badge>
                        </div>
                    )}

                    <h1 className="font-outfit text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
                        {service.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
                        {service.desc}
                    </p>
                </div>
            </section>

            {/* Intro Paragraph */}
            <section className="py-16 md:py-24 px-4">
                <div className="container mx-auto max-w-3xl">
                    <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-normal first-letter:text-5xl first-letter:font-bold first-letter:text-teal-600 first-letter:mr-3 first-letter:float-left">
                        {service.intro}
                    </p>
                </div>
            </section>

            {/* Technology Spotlight */}
            <section className="py-16 md:py-24 px-4 bg-slate-50">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 text-teal-600 font-bold uppercase tracking-[0.2em] text-sm mb-6">
                                <Cpu className="h-5 w-5" />
                                Technology Spotlight
                            </div>
                            <h2 className="font-outfit text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 font-outfit">
                                {service.technology.title}
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                {service.technology.content}
                            </p>
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-teal-600 translate-x-4 translate-y-4 rounded-3xl -z-10 opacity-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
                            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                                <Image
                                    src={service.technology.image === "/images/9633.jpg" ? "/images/9633.jpg" : service.technology.image}
                                    alt={service.technology.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                    <p className="text-white text-sm font-medium italic">
                                        {service.technology.imageCaption}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Process (Timeline) */}
            <section className="py-16 md:py-24 px-4">
                <div className="container mx-auto max-w-6xl text-center">
                    <div className="inline-flex items-center gap-2 text-teal-600 font-bold uppercase tracking-[0.2em] text-sm mb-12">
                        <Zap className="h-5 w-5" />
                        The Surgical Journey
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-1 bg-slate-100 -z-10" />

                        {service.process.map((step: any, idx: number) => (
                            <div key={idx} className="relative group">
                                <div className="h-24 w-24 bg-white border-4 border-slate-50 text-slate-900 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:border-teal-500 transition-colors duration-500">
                                    <span className="text-2xl font-black text-teal-600">{idx + 1}</span>
                                </div>
                                <h3 className="font-outfit text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                                <p className="text-slate-600 leading-relaxed max-w-xs mx-auto">{step.desc}</p>

                                {idx < service.process.length - 1 && (
                                    <div className="hidden md:flex absolute top-10 -right-4 h-5 w-5 items-center justify-center text-slate-300">
                                        <ArrowRight className="h-6 w-6" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Doctor's Expertise */}
            <section className="py-16 md:py-24 px-4 bg-white">
                <div className="container mx-auto max-w-5xl">
                    <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 relative overflow-hidden text-white shadow-2xl">
                        {/* Decorative Background Icon */}
                        <div className="absolute -bottom-10 -right-10 text-white/5 opacity-50">
                            <Award className="h-64 w-64" />
                        </div>

                        <div className="relative z-10">
                            <div className="flex flex-col md:flex-row items-start gap-8">
                                <div className="h-20 w-20 bg-teal-500/20 rounded-2xl flex items-center justify-center shrink-0 border border-teal-500/30">
                                    <Stethoscope className="h-10 w-10 text-teal-400" />
                                </div>
                                <div>
                                    <h3 className="font-outfit text-2xl md:text-3xl font-bold mb-6 italic text-teal-300">
                                        Surgeon's Note:
                                    </h3>
                                    <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-light">
                                        "{service.doctorExpertise}"
                                    </p>
                                    <div className="mt-8 flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-teal-500/50">
                                            <Image
                                                src="/images/doctor_profile.png"
                                                alt="Dr. Jinsiwale"
                                                width={48}
                                                height={48}
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <p className="font-bold text-white leading-none">{dictionary.doctor.name}</p>
                                            <p className="text-teal-400 text-sm mt-1">{dictionary.doctor.designation}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 px-4">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="font-outfit text-3xl md:text-5xl font-extrabold text-slate-900 mb-8">
                        Ready to discuss your surgery?
                    </h2>
                    <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
                        Speak directly with our clinical coordinators to understand your treatment plan and expected recovery timeline.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white font-bold h-16 px-10 rounded-2xl text-xl w-full sm:w-auto shadow-xl shadow-teal-600/20">
                            <a href={`tel:${dictionary.contact.phone[0].replace(/\s/g, '')}`}>
                                <Phone className="mr-3 h-6 w-6" />
                                Call for Appointment
                            </a>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="h-16 px-10 rounded-2xl text-xl w-full sm:sm:w-auto font-bold border-slate-200">
                            <Link href={`/${lang}/contact`}>
                                Visit our Clinic
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
