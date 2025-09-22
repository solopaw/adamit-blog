export interface ITService {
  id: string;
  name: string;
  category: string;
  description: string;
  duration: string;
  price: number;
  features: string[];
  rating: number;
  reviews: number;
  availability: "available" | "limited" | "unavailable";
  image: string;
}

export interface BookingDetails {
  service: ITService;
  date: string;
  time: string;
  duration: number;
  totalPrice: number;
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    company: string;
  };
  requirements: string;
}

export interface TimeSlot {
  time: string;
  available: boolean;
  price: number;
}
