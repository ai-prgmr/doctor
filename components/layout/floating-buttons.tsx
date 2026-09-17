"use client";

import { Calendar } from "lucide-react";

export function FloatingButtons({ dictionary, lang }: { dictionary: any, lang: string }) {
    return (
        <div className={`fixed bottom-6 right-6 z-50 hidden md:flex flex-col items-end gap-3 transition-all duration-500 opacity-100 translate-y-0`}>
            {/* WhatsApp Button */}
            {/* <a 
                href={`https://wa.me/${whatsappNum}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full p-3.5 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                aria-label="WhatsApp Chat"
            >
                <MessageCircle className="w-6 h-6" />
            </a> */}

            {/* Book Appointment Button */}
            {/* <a
                href={`/${lang}/appointment`}
                className="group flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1"
            >
                <div className="relative flex items-center justify-center bg-teal-600 group-hover:bg-teal-700 text-white rounded-full w-14 h-14 md:w-16 md:h-16 shadow-[0_8px_30px_rgb(0,0,0,0.12)] group-hover:shadow-[0_8px_30px_rgba(13,148,136,0.3)] transition-all duration-300">
                    <div className="absolute inset-0 bg-teal-600 rounded-full opacity-20 animate-ping -z-10" style={{ animationDuration: '3s' }}></div>
                    <Calendar className="w-6 h-6 md:w-7 md:h-7" />
                </div>

                <span className="font-outfit font-bold text-teal-800 text-[11px] md:text-xs mt-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm border border-teal-100/50">
                    {lang === 'en' ? 'Appointment' : 'अपॉइंटमेंट'}
                </span>
            </a> */}
        </div>
    );
}
