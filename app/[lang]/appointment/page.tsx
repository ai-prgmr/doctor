import { getDictionary } from "@/lib/get-dictionary";

export default async function AppointmentPage({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang as "en" | "hi");

    return (
        <div className="container mx-auto px-4 py-12 md:py-24 max-w-5xl">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-outfit font-extrabold text-slate-900 mb-4">
                    {lang === 'en' ? 'Book an Appointment' : 'अपॉइंटमेंट बुक करें'}
                </h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                    {dictionary.cta?.subtitle || (lang === 'en' ? 'Choose a suitable time for your consultation below.' : 'नीचे अपने परामर्श के लिए एक उपयुक्त समय चुनें।')}
                </p>
            </div>
            
            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden min-h-[600px]">
                {/* Google Calendar Appointment Scheduling begin */}
                <iframe 
                    src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0QYFuNOnZ1NjQEiW_AxfhKfIChPYswkkcsE1GEYgfIYmF6ipB0vVUrWvuHTQkb9At0yUIIDpqH?gv=true" 
                    style={{ border: 0 }} 
                    width="100%" 
                    height="600" 
                    frameBorder="0"
                    title={lang === 'en' ? 'Book Appointment' : 'अपॉइंटमेंट बुक करें'}
                ></iframe>
                {/* end Google Calendar Appointment Scheduling */}
            </div>
        </div>
    );
}
