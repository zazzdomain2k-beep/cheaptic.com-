export type Page = 'Home' | 'Travel Deals' | 'Destinations' | 'AI Tips' | 'Blog' | 'About Us' | 'Contact' | 'Privacy Policy' | 'Terms of Service';

export interface TravelDeal {
  id: number;
  from: string;
  to: string;
  price: number;
  departureDate: string;
  imageUrl: string;
}

export interface Destination {
  id: number;
  name: string;
  country: string;
  imageUrl: string;
  description: string;
}

export interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  publishDate: string;
}