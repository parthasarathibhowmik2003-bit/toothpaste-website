export type Product = {
  id: string;
  name: string;
  category: 'Whitening' | 'Sensitive' | 'Kids' | 'Herbal' | 'Charcoal';
  price: number;
  image: string;
  description: string;
  ingredients: string[];
  benefits: string[];
  rating: number;
  reviewsCount: number;
  stock: number;
};

export type Review = {
  id: string;
  productId: string;
  userName: string;
  userImage?: string;
  rating: number;
  comment: string;
  date: string;
};

export type Dentist = {
  id: string;
  name: string;
  title: string;
  qualification: string;
  experience: string;
  image: string;
  quote: string;
  specialty: string;
};

export type Article = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
};

export type CartItem = {
  productId: string;
  quantity: number;
};
