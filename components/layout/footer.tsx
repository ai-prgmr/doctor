import Link from "next/link";
import { Phone, MapPin } from "lucide-react";

interface FooterProps {
    lang: string;
    dictionary: any;
}

export function Footer({ lang, dictionary }: FooterProps) {
    const { doctor } = dictionary;
    return (
        <>
            <footer className="bg-slate-900 text-slate-300 py-12 px-4 border-t border-slate-800">
                <div className="container mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div>
                        <h3 className="font-outfit text-white text-xl font-bold mb-4">
                            {dictionary.doctor.name}
                        </h3>
                        <p className="text-sm leading-relaxed mb-6">
                            {doctor.designation}
                            <br />
                            <Link href={`/${lang}/about`} className="hover:text-teal-400 underline underline-offset-4 mt-2 inline-block">
                                {lang === 'en' ? 'Learn more about Dr. Jinsiwale' : 'डॉ. जिन्सीवाले के बारे में और जानें'}
                            </Link>
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4">
                            {lang === 'en' ? 'Quick Links' : 'त्वरित लिंक'}
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href={`/${lang}`} className="hover:text-teal-400 transition-colors">
                                    {dictionary.navigation.home}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${lang}/about`} className="hover:text-teal-400 transition-colors">
                                    {dictionary.navigation.about}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${lang}/contact`} className="hover:text-teal-400 transition-colors">
                                    {dictionary.navigation.contact}
                                </Link>
                            </li>
                        </ul>
                        <h4 className="font-semibold text-white mb-4 mt-8">
                            {dictionary.navigation.services}
                        </h4>
                        <ul className="space-y-2 text-sm">
                            {dictionary.services.items.slice(0, 5).map((item: any) => (
                                <li key={item.id}>
                                    <Link
                                        href={`/${lang}/services/${item.id}`}
                                        className="hover:text-teal-400 transition-colors"
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4">
                            {lang === 'en' ? 'Nearby Cities' : 'आस-पास के शहर'}
                        </h4>
                        <ul className="grid grid-cols-1 gap-2">
                            {dictionary.locations.cities.map((city: any) => (
                                <li key={city.id}>
                                    <Link
                                        href={`/${lang}/locations/${city.id}`}
                                        className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
                                    >
                                        {city.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <p className="text-xs text-slate-500 mt-4 leading-relaxed italic">
                            {lang === 'en'
                                ? "Providing advanced joint replacement & robotic surgery for patients across Central India."
                                : "पूरे मध्य भारत के मरीजों के लिए उन्नत ज्वाइंट रिप्लेसमेंट और रोबोटिक सर्जरी प्रदान करना।"}
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4">
                            {dictionary.navigation.contact}
                        </h4>
                        <p className="text-sm mb-4 flex items-start gap-2">
                            <MapPin className="h-4 w-4 text-teal-500 shrink-0 mt-1" />
                            {dictionary.contact.address}
                        </p>
                        <div className="flex flex-col gap-2">
                            {dictionary.contact.phone.map((p: string) => (
                                <a
                                    key={p}
                                    href={`tel:${p.replace(/\s/g, "")}`}
                                    className="text-sm hover:text-teal-400 flex items-center gap-2"
                                >
                                    <Phone className="h-4 w-4 text-teal-500" />
                                    {p}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="container mx-auto max-w-7xl mt-12 pt-8 border-t border-slate-800 text-center text-xs">
                    <p>
                        © {new Date().getFullYear()} RECONS - Dr. A.K. Jinsiwale. All rights
                        reserved.
                    </p>
                </div>
            </footer>

            {/* Mobile Sticky Bar */}
            <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex h-16 shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
                <a
                    href={`tel:${dictionary.contact.phone[0].replace(/\s/g, "")}`}
                    className="flex-1 bg-teal-600 text-white flex items-center justify-center font-bold text-sm gap-2"
                >
                    <Phone className="h-5 w-5" />
                    {dictionary.hero.ctaCall}
                </a>
                <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(dictionary.contact.mapQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-white text-teal-700 flex items-center justify-center font-bold text-sm gap-2 border-l border-slate-100"
                >
                    <MapPin className="h-5 w-5" />
                    {dictionary.hero.ctaDirections}
                </a>
            </div>
        </>
    );
}
