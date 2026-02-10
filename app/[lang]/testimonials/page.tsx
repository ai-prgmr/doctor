import { getDictionary } from "@/lib/get-dictionary";
import VideoCard from "@/components/video-card";
import { Metadata } from 'next';

type Props = {
    params: Promise<{ lang: "en" | "hi" }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    // We could fetch dictionary here for localized title if needed, but keeping it simple as requested
    return {
        title: 'Patient Testimonials | Dr. Jinsiwale',
        description: 'Real stories of recovery from our patients.',
    };
}

export default async function TestimonialsPage({
    params,
}: Props) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang);
    const { testimonials } = dictionary;

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            {/* Hero Section */}
            <section className="bg-white py-20 border-b border-slate-200">
                <div className="container mx-auto px-4 max-w-7xl text-center">
                    <h1 className="font-outfit text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
                        {testimonials.sectionTitle}
                    </h1>
                    <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto">
                        {testimonials.sectionSubtitle}
                    </p>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="py-24 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.items.map((item: any) => (
                            <div key={item.id} className="h-full">
                                <VideoCard
                                    videoSrc={item.videoSrc}
                                    name={item.name}
                                    procedure={item.procedure}
                                    quote={item.quote}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
