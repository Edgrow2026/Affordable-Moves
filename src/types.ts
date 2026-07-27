export interface MoveEstimate {
  propertyType: '1-bed-flat' | '2-bed-house' | '3-bed-house' | '4-plus-house' | 'office' | 'single-item';
  pickupPostcode: string;
  deliveryPostcode: string;
  distanceMiles: number;
  floorAccess: 'ground' | 'lift' | 'stairs-1-2' | 'stairs-3-plus';
  services: {
    packing: boolean;
    dismantle: boolean;
    storage: boolean;
    boxesBundle: boolean;
  };
  estimatedMin: number;
  estimatedMax: number;
  crewSize: number;
  estimatedHours: number;
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  moveDate: string;
  pickupAddress: string;
  pickupPostcode: string;
  deliveryAddress: string;
  deliveryPostcode: string;
  propertySize: string;
  packingNeeded: boolean;
  storageNeeded: boolean;
  notes: string;
  consent: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  imageUrl: string;
  startingPrice: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  moveDetails: string;
  rating: number;
  date: string;
  avatarUrl?: string;
  quote: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  category: 'general' | 'pricing' | 'packing' | 'insurance';
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'fleet' | 'removals' | 'packing' | 'storage';
  imageUrl: string;
  caption: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  imageUrl: string;
  author: string;
  content: string[];
}

export interface CoverageArea {
  region: string;
  cities: string[];
  postcodes: string[];
  hubAddress: string;
  isMainHub?: boolean;
}

export interface ToastMessage {
  id: string;
  title: string;
  message: string;
  type?: 'success' | 'info' | 'warning';
}
