
import React, { useEffect, useRef } from 'react';

const CalendarWidget: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://tpscr.com/content?currency=usd&trs=465285&shmarker=674281&searchUrl=www.aviasales.com%2Fsearch&locale=en&powered_by=false&one_way=false&only_direct=false&period=year&range=7%2C14&primary=%230C73FE&color_background=%23FFFFFFb3&dark=%23262626fc&light=%23FFFFFFff&achieve=%233571ADff&promo_id=4041&campaign_id=100";
        script.async = true;
        script.charset = "utf-8";

        const container = containerRef.current;
        if (container) {
            // Clear previous script if component re-renders
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
            container.appendChild(script);
        }

        return () => {
            if (container && container.contains(script)) {
                container.removeChild(script);
            }
        };
    }, []);

    return (
        <section className="py-16 sm:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Low Fare Calendar
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                        Find the cheapest days to fly with our interactive calendar.
                    </p>
                </div>
                <div className="max-w-5xl mx-auto">
                    <div ref={containerRef}></div>
                </div>
            </div>
        </section>
    );
};

export default CalendarWidget;
