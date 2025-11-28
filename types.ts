export interface Product {
  id: number;
  name: string;
  price: number;
  dimensions: string;
  capacity: string;
  power: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  buttonText: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export type Screen = 'home' | 'products' | 'services';
