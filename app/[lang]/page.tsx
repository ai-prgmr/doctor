import { getDictionary } from "@/lib/get-dictionary";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, ArrowRight, Award, Activity, MessageCircle, CheckCircle2, MapPin, Car, Clock, Accessibility } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import TestimonialsSection from "@/components/home/testimonials-section";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as "en" | "hi");

  return (
    <div className="flex flex-col gap-0">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/doctor/images/recons_hero.png"
            alt="Clinic Background"
            fill
            sizes="100vw"
            className="object-cover opacity-100"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        </div>

        <div className="container mx-auto max-w-7xl px-4 md:px-8 relative z-10 py-20 lg:py-32">
          <div className="max-w-3xl">
            <div className="flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs md:text-sm font-bold mb-6">
                <Award className="h-4 w-4" />
                {dictionary.hero.tagline}
              </div>
              <h1 className="font-outfit text-4xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight md:leading-[1.1] mb-6">
                {dictionary.hero.headline}
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 font-medium mb-10 leading-relaxed max-w-2xl">
                {dictionary.hero.subhead}
              </p>
              <div className="flex flex-wrap gap-4 w-full sm:w-auto">
                <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white font-bold h-16 px-10 rounded-xl shadow-lg shadow-teal-600/20 text-xl transition-all hover:scale-105 active:scale-95">
                  <a href={`tel:${dictionary.contact.phone[0].replace(/\s/g, '')}`}>
                    <Phone className="mr-2 h-6 w-6" />
                    {dictionary.hero.ctaCall}
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-16 px-10 rounded-xl border-slate-200 text-slate-700 font-bold text-xl hover:bg-white transition-all hover:scale-105 active:scale-95">
                  <Link href={`/${lang}/contact`}>
                    {dictionary.navigation.contact}
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-900 py-24 px-4 overflow-hidden relative">
        {/* Background glow for depth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-teal-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {dictionary.stats.map((stat: any, idx: number) => (
              <div
                key={idx}
                className="group p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.07] hover:border-teal-500/30 transition-all duration-500 text-center"
              >
                <div className="flex flex-col items-center">
                  <span className="text-3xl md:text-4xl font-black text-teal-400 mb-4 font-outfit tracking-tighter group-hover:scale-105 transition-transform duration-500">
                    {stat.value}
                  </span>
                  <div className="h-1 w-12 bg-teal-500/20 rounded-full mb-4 group-hover:w-20 group-hover:bg-teal-500/50 transition-all duration-500" />
                  <span className="text-slate-400 text-sm md:text-lg font-bold uppercase tracking-[0.1em] leading-relaxed max-w-[200px]">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-1 relative h-[500px] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/doctor/images/doctor_profile.png"
                alt="Doctor at Work"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:order-2">
              <h2 className="font-outfit text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                {dictionary.doctor.aboutHeader}
              </h2>
              <div className="flex flex-wrap gap-2 mb-8">
                {dictionary.doctor.qualifications.map((q: string) => (
                  <span key={q} className="px-3 py-1 bg-white border border-slate-200 text-slate-600 rounded-md text-sm font-bold">
                    {q}
                  </span>
                ))}
              </div>
              <ul className="space-y-4">
                {dictionary.doctor.highlights.map((h: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-4 group">
                    <div className="h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center shrink-0 mt-1 transition-colors group-hover:bg-teal-600">
                      <CheckCircle2 className="h-4 w-4 text-teal-600 transition-colors group-hover:text-white" />
                    </div>
                    <p className="text-slate-700 font-medium group-hover:text-slate-900 transition-colors">
                      {h}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-outfit text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
              {dictionary.services.title}
            </h2>
            <p className="text-xl text-slate-600 font-medium">
              {dictionary.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dictionary.services.items.slice(0, 3).map((service: any) => (
              <Link href={`/${lang}/services/${service.id}`} key={service.id}>
                <Card className="h-full hover:shadow-2xl transition-all p-0 duration-300 hover:-translate-y-2 border-slate-100 overflow-hidden group">
                  <CardHeader className="bg-slate-50 group-hover:bg-teal-50 transition-colors p-4">
                    <div className="h-12 w-12 bg-white rounded-xl shadow-md flex items-center justify-center mb-4 text-teal-600">
                      <Activity className="h-6 w-6" />
                    </div>
                    <CardTitle className="font-outfit text-xl font-bold group-hover:text-teal-700 transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardDescription className="text-slate-600 text-base leading-relaxed mb-6">
                      {service.desc}
                    </CardDescription>
                    <div className="flex items-center text-teal-600 font-bold text-sm">
                      Learn More <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button asChild size="lg" variant="outline" className="border-2 border-teal-600 text-teal-700 hover:bg-teal-600 hover:text-white font-bold h-14 px-10 rounded-xl transition-all">
              <Link href={`/${lang}/services`}>
                {lang === 'en' ? 'View All Treatments' : 'सभी उपचार देखें'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 px-4 bg-slate-900 text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-outfit text-3xl md:text-5xl font-extrabold mb-4">
              {dictionary.whyUs.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
            {dictionary.whyUs.points.map((point: string, idx: number) => (
              <div key={idx} className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-teal-400 shrink-0" />
                <p className="text-slate-300 font-medium text-lg leading-tight uppercase tracking-tight">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <TestimonialsSection testimonials={dictionary.testimonials as any} lang={lang} />

      {/* ClinicalGallery Prep: Preparing code for a masonry grid of images, but keeping it hidden until data is available. */}

      <section className="hidden py-24 px-4 bg-white" id="ClinicalGallery">
        <div className="container mx-auto max-w-7xl">
          <h2 className="font-outfit text-3xl md:text-5xl font-extrabold text-slate-900 mb-12 text-center">Clinical Results Gallery</h2>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {/* Future Images Map Here */}
          </div>
        </div >
      </section >

      {/* Local Experience / Convenience Section */}
      <section className="py-20 px-4 bg-white border-y border-slate-100">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-outfit text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              {dictionary.locations.localConvenience.title}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {dictionary.locations.localConvenience.items.map((item: any, idx: number) => {
              const iconsMap = {
                MapPin,
                Car,
                Clock,
                Accessibility
              };
              const Icon = iconsMap[item.icon as keyof typeof iconsMap] || MapPin;

              return (
                <div key={idx} className="flex flex-col items-center text-center p-6 transition-all duration-300 hover:-translate-y-1">
                  <div className="h-14 w-14 rounded-2xl bg-teal-50 flex items-center justify-center mb-6 text-teal-600">
                    <Icon className="h-7 w-7" />
                  </div>
                  <p className="font-bold text-slate-700 leading-tight">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-teal-600">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="font-outfit text-3xl md:text-5xl font-extrabold text-white mb-8">
            {dictionary.contact.title}
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Button asChild size="lg" className="bg-white text-teal-700 hover:bg-slate-50 font-bold h-16 px-10 rounded-2xl text-xl w-full md:w-auto shadow-xl">
              <a href={`tel:${dictionary.contact.phone[0].replace(/\s/g, '')}`}>
                <Phone className="mr-3 h-6 w-6" />
                {dictionary.contact.phone[0]}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white text-teal-700 hover:bg-slate-50 font-bold h-16 px-10 rounded-2xl text-xl w-full md:w-auto shadow-xl">
              <a href={`https://wa.me/${dictionary.contact.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-3 h-6 w-6" />
                WhatsApp
              </a>
            </Button>
          </div>
          <p className="mt-8 text-teal-100 font-medium">
            Appointments are mandatory. Please call before visiting.
          </p>
        </div>
      </section>
    </div >
  );
}
