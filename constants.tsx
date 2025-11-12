
import React from 'react';
import { TravelDeal, Destination, Article } from './types';

export const MOCK_TRAVEL_DEALS: TravelDeal[] = [
  { id: 1, from: 'New York', to: 'Paris', price: 450, departureDate: '2024-10-15', imageUrl: 'https://picsum.photos/400/300?random=10' },
  { id: 2, from: 'Los Angeles', to: 'Tokyo', price: 620, departureDate: '2024-11-02', imageUrl: 'https://picsum.photos/400/300?random=11' },
  { id: 3, from: 'Chicago', to: 'Rome', price: 510, departureDate: '2024-09-28', imageUrl: 'https://picsum.photos/400/300?random=12' },
];

export const MOCK_DESTINATIONS: Destination[] = [
  { id: 1, name: 'Santorini', country: 'Greece', imageUrl: 'https://picsum.photos/600/800?random=20', description: 'Famous for its stunning sunsets, white-washed villages, and blue-domed churches.' },
  { id: 2, name: 'Kyoto', country: 'Japan', imageUrl: 'https://picsum.photos/600/800?random=21', description: 'Known for its classical Buddhist temples, as well as gardens, imperial palaces, and traditional wooden houses.' },
  { id: 3, name: 'Bali', country: 'Indonesia', imageUrl: 'https://picsum.photos/600/800?random=22', description: 'An island paradise offering lush rice paddies, volcanic mountains, coral reefs and beautiful beaches.' },
];

export const MOCK_ARTICLES: Article[] = Array.from({ length: 20 }, (_, i) => {
    const titles = [
        "10 Underrated European Cities for Budget Travelers",
        "How to Pack a Carry-On for a Two-Week Trip",
        "The Ultimate Guide to Finding Mistake Fares",
        "Traveling Solo: A Beginner's Guide to Safety and Fun",
        "5 Best Travel Credit Cards for Earning Free Flights",
        "How to Eat Like a Local on a Shoestring Budget",
        "Volunteering Abroad: A Fulfilling Way to See the World",
        "The Digital Nomad's Toolkit: Essentials for Working on the Road",
        "Hostel Etiquette: The Unwritten Rules of Dorm Life",
        "7 Tips for Surviving a Long-Haul Flight in Economy",
        "Why Off-Season Travel is the Best Kept Secret",
        "A Foodie's Guide to Street Food in Southeast Asia",
        "How to Use Public Transportation Like a Pro in Any City",
        "The Art of Travel Hacking: Points, Miles, and More",
        "Sustainable Tourism: How to Be a Responsible Traveler",
        "Best National Parks to Visit on a Budget in the USA",
        "Language Learning for Travelers: Quick Tips for Basic Communication",
        "Finding Hidden Gems: How to Get Off the Beaten Path",
        "House Sitting: The Secret to Free Accommodation",
        "Navigating Travel Scams: What to Watch Out For"
    ];
    return {
        id: i + 1,
        slug: titles[i].toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
        title: titles[i],
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...",
        content: `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed velit dignissim sodales ut eu sem. Viverra mauris in aliquam sem fringilla ut morbi tincidunt. In metus vulputate eu scelerisque felis imperdiet proin fermentum. Egestas purus viverra accumsan in nisl nisi scelerisque. Sit amet consectetur adipiscing elit ut aliquam purus sit. Tortor at risus viverra adipiscing at in. Risus sed vulputate odio ut enim blandit. Velit aliquet sagittis id consectetur purus ut. Posuere ac ut consequat semper viverra nam libero justo. Ornare arcu dui vivamus arcu felis bibendum ut tristique. Ac turpis egestas integer eget aliquet nibh praesent tristique. Nunc eget lorem dolor sed viverra ipsum nunc aliquet. Turpis egestas maecenas pharetra convallis posuere. Tincidunt vitae semper quis lectus nulla at volutpat. Sagittis purus sit amet volutpat consequat mauris.</p>
<br/>
<p>Nibh mauris cursus mattis molestie a iaculis at erat. Et netus et malesuada fames ac turpis. Amet purus gravida quis blandit turpis cursus in hac. Nisi est sit amet facilisis magna etiam tempor orci eu. Eget nunc scelerisque viverra mauris in aliquam sem. Varius vel pharetra vel turpis nunc eget lorem. Sed vulputate mi sit amet mauris commodo quis imperdiet. Justo laoreet sit amet cursus sit amet dictum sit. Egestas erat imperdiet sed euismod nisi porta lorem mollis. Dictumst quisque sagittis purus sit amet volutpat consequat. In est ante in nibh mauris. Pharetra vel turpis nunc eget lorem. Mauris vitae ultricies leo integer malesuada nunc vel. Facilisis magna etiam tempor orci eu. Arcu dictum varius duis at consectetur. Eget mi proin sed libero enim sed. Nunc sed id semper risus in hendrerit gravida. Consequat nisl vel pretium lectus quam id leo in vitae. Et magnis dis parturient montes nascetur ridiculus mus mauris.</p>
`,
        imageUrl: `https://picsum.photos/800/600?random=${30 + i}`,
        publishDate: `2024-0${8 - Math.floor(i/4)}-${28 - (i % 7) * 3}`
    };
});


// SVG Icons
export const PlaneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
  </svg>
);

export const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

export const XIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const LocationMarkerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.1.4-.27.61-.473A10.65 10.65 0 0012.5 16.5c0-1.933-.836-3.57-2.246-4.662A4.502 4.502 0 0010 11.5c-.836 0-1.613-.246-2.246-.662C6.336 12.93 5.5 14.567 5.5 16.5a10.65 10.65 0 002.242 4.473c.21.203.424.373.61.473a5.741 5.741 0 00.281.14l.018.008.006.003zM10 13.25a2.75 2.75 0 100-5.5 2.75 2.75 0 000 5.5z" clipRule="evenodd" />
    </svg>
);

export const CalendarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c0-.414.336-.75.75-.75h10.5a.75.75 0 010 1.5H5.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
    </svg>
);

export const UserGroupIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
        <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.095a1.23 1.23 0 00.41-1.412A9.99 9.99 0 0010 12c-2.31 0-4.438.784-6.131 2.095z" />
    </svg>
);

export const SearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
    </svg>
);

export const SwitchHorizontalIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
    </svg>
);

export const SparklesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 22.25l-.648-1.688a2.25 2.25 0 01-1.423-1.423L12.75 18.5l1.688-.648a2.25 2.25 0 011.423-1.423L18.5 15.75l.648 1.688a2.25 2.25 0 011.423 1.423l1.688.648-1.688.648a2.25 2.25 0 01-1.423 1.423z" />
    </svg>
);

export const GlobeAltIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A11.953 11.953 0 0012 13.5c-2.998 0-5.74-1.1-7.843-2.918" />
    </svg>
);

export const CurrencyDollarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const HeartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
);
