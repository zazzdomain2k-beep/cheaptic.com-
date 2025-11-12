
import React, { useEffect, useRef } from 'react';

const FlightSearchWidget: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://tpscr.com/content?currency=usd&trs=465285&shmarker=674281&show_hotels=true&powered_by=false&locale=en&searchUrl=www.aviasales.com%2Fsearch&primary_override=%2332a8dd&color_button=%2332a8dd&color_icons=%2332a8dd&dark=%23262626&light=%23FFFFFF&secondary=%23FFFFFF00&special=%23C4C4C400&color_focused=%2332a8dd&border_radius=0&no_labels=&plain=true&promo_id=7879&campaign_id=100";
        script.async = true;
        script.charset = "utf-8";

        const container = containerRef.current;
        if (container) {
            container.appendChild(script);
        }

        return () => {
            if (container && container.contains(script)) {
                container.removeChild(script);
            }
        };
    }, []);

    return (
        <div className="bg-white/20 backdrop-blur-lg p-1 sm:p-2 rounded-2xl shadow-2xl max-w-5xl mx-auto border border-white/30">
            <div ref={containerRef}></div>
        </div>
    );
};

export default FlightSearchWidget;