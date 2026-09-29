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

            {/* Desktop View */}
            <div className="hidden md:block bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden min-h-[600px]">
                {/* Google Calendar Appointment Scheduling begin */}
                <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2jrkxsNFvbj9GXSVSbx0JoVX_cBj9IjWNQJ3AkuKWJOXynyEmnMqdydtcp8B5aGoAKtsrSwfK3?gv=true"
                    style={{ border: 0 }}
                    width="100%"
                    height="600"
                    title={lang === 'en' ? 'Book Appointment' : 'अपॉइंटमेंट बुक करें'}
                ></iframe>
                {/* end Google Calendar Appointment Scheduling */}
            </div>

            {/* Mobile View */}
            <div className="md:hidden flex flex-col items-center justify-center p-8 bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center">
                <p className="text-lg text-slate-600 mb-8 font-medium leading-relaxed">
                    {lang === 'en'
                        ? 'For the best booking experience on mobile devices, please open the calendar in a new window.'
                        : 'मोबाइल उपकरणों पर सर्वश्रेष्ठ बुकिंग अनुभव के लिए, कृपया कैलेंडर को एक नई विंडो में खोलें।'}
                </p>
                <a 
                    href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2jrkxsNFvbj9GXSVSbx0JoVX_cBj9IjWNQJ3AkuKWJOXynyEmnMqdydtcp8B5aGoAKtsrSwfK3?gv=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-teal-600 hover:bg-teal-700 text-white font-bold text-lg py-4 px-8 rounded-2xl w-full shadow-lg shadow-teal-600/20 transition-all active:scale-95"
                >
                    {lang === 'en' ? 'Open Booking Calendar' : 'बुकिंग कैलेंडर खोलें'}
                </a>
            </div>
        </div>
    );
}
