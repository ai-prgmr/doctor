import Link from "next/link";
import VideoCard from "@/components/video-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface TestimonialItem {
    id: string;
    name: string;
    location: string;
    procedure: string;
    videoSrc: string;
    posterSrc: string;
    quote: string;
}

interface TestimonialsData {
    sectionTitle: string;
    sectionSubtitle: string;
    viewAllBtn: string;
    items: TestimonialItem[];
}

interface TestimonialsSectionProps {
    testimonials: TestimonialsData;
    lang: string;
}

export default function TestimonialsSection({ testimonials, lang }: TestimonialsSectionProps) {
    const displayedItems = testimonials.items.slice(0, 3);

    return (
        <section className="py-24 px-4 bg-slate-50">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="font-outfit text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
                        {testimonials.sectionTitle}
                    </h2>
                    <p className="text-xl text-slate-600 font-medium">
                        {testimonials.sectionSubtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {displayedItems.map((item) => (
                        <div key={item.id} className="h-full">
                            <VideoCard
                                videoSrc={item.videoSrc}
                                posterSrc={item.posterSrc}
                                name={item.name}
                                procedure={item.procedure}
                                quote={item.quote}
                            />
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white font-bold h-14 px-10 rounded-xl transition-all shadow-lg hover:shadow-teal-600/20">
                        <Link href={`/${lang}/testimonials`}>
                            {testimonials.viewAllBtn}
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
