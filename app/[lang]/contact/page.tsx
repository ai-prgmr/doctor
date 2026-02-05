import { getDictionary } from "@/lib/get-dictionary";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, MessageCircle, Clock, Navigation, CheckCircle2 } from "lucide-react";

export default async function ContactPage({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang as "en" | "hi");

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Header */}
            <section className="bg-slate-900 text-white py-20 px-4">
                <div className="container mx-auto max-w-7xl text-center">
                    <h1 className="font-outfit text-4xl md:text-6xl font-black mb-6">
                        {dictionary.contact.title}
                    </h1>
                    <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto">
                        Please call or WhatsApp to confirm your appointment before visiting the clinic.
                    </p>
                </div>
            </section>

            <section className="py-16 px-4 -mt-10">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Contact Info */}
                        <div className="lg:col-span-1 space-y-6">
                            <Card className="p-0 border-none shadow-xl rounded-3xl overflow-hidden">
                                <CardHeader className="bg-teal-600 text-white p-3">
                                    <CardTitle className="flex items-center gap-2">
                                        <Phone className="h-5 w-5" />
                                        Call for Appointment
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-6 space-y-4">
                                    {dictionary.contact.phone.map((p: string) => (
                                        <a
                                            key={p}
                                            href={`tel:${p.replace(/\s/g, '')}`}
                                            className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-teal-200 hover:bg-teal-50/30 transition-all group"
                                        >
                                            <span className="font-bold text-slate-700">{p}</span>
                                            <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center shadow-sm text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                                                <Phone className="h-4 w-4" />
                                            </div>
                                        </a>
                                    ))}
                                </CardContent>
                            </Card>

                            <Card className="border-none shadow-xl rounded-3xl overflow-hidden">
                                <CardHeader className="bg-slate-800 text-white p-3">
                                    <CardTitle className="flex items-center gap-2">
                                        <MessageCircle className="h-5 w-5" />
                                        WhatsApp
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <a
                                        href={`https://wa.me/${dictionary.contact.whatsapp.replace(/\D/g, '')}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex flex-col items-center justify-center p-8 bg-green-50 rounded-3xl border border-green-100 hover:bg-green-100 transition-all text-center"
                                    >
                                        <div className="h-16 w-16 rounded-2xl bg-green-500 flex items-center justify-center text-white mb-4 shadow-lg shadow-green-200">
                                            <MessageCircle className="h-8 w-8" />
                                        </div>
                                        <span className="font-black text-2xl text-green-700">{dictionary.contact.whatsapp}</span>
                                        <span className="text-sm font-bold text-green-600 uppercase tracking-widest mt-2">Highly Recommended</span>
                                    </a>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Address & Map */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Top Alert Banner */}
                            <div className="bg-teal-600 text-white rounded-3xl py-2 px-4">
                                <div className="container mx-auto max-w-7xl flex items-center justify-center gap-2 text-center text-sm md:text-base font-medium">
                                    <span className="animate-pulse">⚠️</span>
                                    <p>{dictionary.alert.message}</p>
                                </div>
                            </div>
                            {/* Clinic Notes */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-8 bg-amber-50 rounded-3xl border border-amber-100 flex gap-4">
                                    <div className="h-10 w-10 rounded-full bg-amber-200 flex items-center justify-center shrink-0">
                                        <Clock className="h-5 w-5 text-amber-700" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-amber-900 mb-1">Clinic Timing</h4>
                                        <p className="text-amber-800/80 font-medium">Please call the helpline to confirm available slots. Dr. Jinsiwale is not available elsewhere.</p>
                                    </div>
                                </div>
                                <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 flex gap-4">
                                    <div className="h-10 w-10 rounded-full bg-blue-200 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="h-5 w-5 text-blue-700" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-blue-900 mb-1">Mandatory Appointment</h4>
                                        <p className="text-blue-800/80 font-medium">Appointments are mandatory for all patients, local and outstation.</p>
                                    </div>
                                </div>
                            </div>
                            <Card className="border-none shadow-xl rounded-3xl overflow-hidden">
                                <div className="grid grid-cols-1 md:grid-cols-2">
                                    <div className="p-8 md:p-12">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold mb-6">
                                            <MapPin className="h-3 w-3" />
                                            CLINIC LOCATION
                                        </div>
                                        <h2 className="font-outfit text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                                            {dictionary.contact.address}
                                        </h2>

                                        <div className="space-y-4">
                                            <h3 className="font-bold text-slate-500 uppercase tracking-widest text-xs">Landmarks</h3>
                                            <ul className="space-y-3">
                                                {dictionary.contact.landmarks.map((landmark: string) => (
                                                    <li key={landmark} className="flex items-center gap-3 font-semibold text-slate-700">
                                                        <CheckCircle2 className="h-5 w-5 text-teal-600" />
                                                        {landmark}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <Button asChild size="lg" className="mt-10 h-16 w-full rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-lg shadow-xl shadow-teal-600/20">
                                            <a
                                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(dictionary.contact.mapQuery)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Navigation className="mr-3 h-5 w-5" />
                                                Open in Google Maps
                                            </a>
                                        </Button>
                                    </div>
                                    <div className="relative min-h-[400px] bg-slate-100 grayscale hover:grayscale-0 transition-all duration-700">
                                        <iframe
                                            src={`https://maps.google.com/maps?q=${encodeURIComponent(dictionary.contact.mapQuery)}&t=&z=17&ie=UTF8&iwloc=&output=embed`}
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            className="absolute inset-0"
                                        ></iframe>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
