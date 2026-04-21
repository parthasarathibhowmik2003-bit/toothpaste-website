import { Product, Dentist, Article } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Advanced White Sparkle',
    category: 'Whitening',
    price: 249,
    image: 'https://picsum.photos/seed/dentist-white/400/400',
    description: 'Professional grade whitening toothpaste with active micro-polishing crystals.',
    ingredients: ['Silica', 'Sodium Fluoride', 'Sorbitol', 'Calcium Carbonate'],
    benefits: ['Removed surface stains', 'Enamel safe', 'Long-lasting freshness'],
    rating: 4.8,
    reviewsCount: 1250,
    stock: 50
  },
  {
    id: 'p2',
    name: 'Sensitive Shield Pro',
    category: 'Sensitive',
    price: 320,
    image: 'https://picsum.photos/seed/medical-lab/400/400',
    description: 'Instant relief for sensitive teeth with advanced potassium nitrate formula.',
    ingredients: ['Potassium Nitrate', 'Sodium Fluoride', 'Hydrated Silica'],
    benefits: ['24/7 sensitivity protection', 'Cavity prevention', 'Gentle on gums'],
    rating: 4.7,
    reviewsCount: 840,
    stock: 35
  },
  {
    id: 'p3',
    name: 'Herbal Neem & Clove',
    category: 'Herbal',
    price: 180,
    image: 'https://picsum.photos/seed/natural-botanic/400/400',
    description: 'Traditional herbal wisdom combined with modern dental science.',
    ingredients: ['Neem Extract', 'Clove Oil', 'Tulsi', 'Calcium'],
    benefits: ['Natural plaque control', 'Gum health', 'Ayurvedic formula'],
    rating: 4.9,
    reviewsCount: 2100,
    stock: 100
  },
  {
    id: 'p4',
    name: 'Charcoal Detox Blast',
    category: 'Charcoal',
    price: 299,
    image: 'https://picsum.photos/seed/black-luxury/400/400',
    description: 'Activated charcoal for deep stain removal and detoxification.',
    ingredients: ['Activated Charcoal', 'Peppermint Oil', 'Baking Soda'],
    benefits: ['Deep cleaning', 'Teeth brightening', 'Odor neutralization'],
    rating: 4.6,
    reviewsCount: 950,
    stock: 20
  },
  {
    id: 'p5',
    name: 'Junior Bubble Berry',
    category: 'Kids',
    price: 150,
    image: 'https://picsum.photos/seed/candy-color/400/400',
    description: 'Safe and fun toothpaste for children with a mild berry flavor.',
    ingredients: ['Low Fluoride', 'Xylitol', 'Natural Colors'],
    benefits: ['Cavity protection', 'Sugar-free', 'Kid-friendly taste'],
    rating: 4.5,
    reviewsCount: 620,
    stock: 80
  },
  {
    id: 'p6',
    name: 'Enamel Restore Max',
    category: 'Whitening',
    price: 350,
    image: 'https://picsum.photos/seed/dental-tech/400/400',
    description: 'Strengthens weakened enamel and repairs microscopic cracks.',
    ingredients: ['Hydroxyapatite', 'Calcium', 'Phosphate'],
    benefits: ['Enamel remineralization', 'Stronger teeth', 'Acid protection'],
    rating: 4.8,
    reviewsCount: 340,
    stock: 15
  },
  {
    id: 'p7',
    name: 'Minty Fresh 72h',
    category: 'Herbal',
    price: 199,
    image: 'https://picsum.photos/seed/mint-leaf/400/400',
    description: 'Unbeatable breath control for up to 72 hours.',
    ingredients: ['Menthol', 'Eucalyptus Oil', 'Zinc'],
    benefits: ['Long-lasting freshness', 'Kills breath bacteria', 'Icy cooling'],
    rating: 4.7,
    reviewsCount: 1500,
    stock: 120
  },
  {
    id: 'p8',
    name: 'Total Gum Protect',
    category: 'Sensitive',
    price: 275,
    image: 'https://picsum.photos/seed/gum-care/400/400',
    description: 'Clinically proven to improve gum health in 2 weeks.',
    ingredients: ['Stannous Fluoride', 'Amino Acid', 'Panthenol'],
    benefits: ['Reduces gum bleeding', 'Plaque removal', 'Gum soothing'],
    rating: 4.9,
    reviewsCount: 780,
    stock: 45
  },
  {
    id: 'p9',
    name: 'Ocean Mineral Salt',
    category: 'Herbal',
    price: 220,
    image: 'https://picsum.photos/seed/sea-salt-clean/400/400',
    description: 'Natural sea minerals for a refreshing and healthy clean.',
    ingredients: ['Sea Salt', 'Ocean Minerals', 'Algae Extract'],
    benefits: ['Natural whitening', 'Mineral replenishment', 'Refreshing taste'],
    rating: 4.4,
    reviewsCount: 450,
    stock: 60
  },
  {
    id: 'p10',
    name: 'Ultimate Cavity Fighter',
    category: 'Whitening',
    price: 165,
    image: 'https://picsum.photos/seed/cavity-shield/400/400',
    description: 'Standard fluoride protection taken to the next level.',
    ingredients: ['Sodium Monofluorophosphate', 'Calcium Carbonate'],
    benefits: ['Maximum cavity defense', 'Daily protection', 'Family value'],
    rating: 4.6,
    reviewsCount: 3200,
    stock: 200
  },
  {
    id: 'p11',
    name: 'Coffee & Tea Guard',
    category: 'Whitening',
    price: 290,
    image: 'https://picsum.photos/seed/coffee-spotless/400/400',
    description: 'Specifically formulated for heavy coffee and tea drinkers.',
    ingredients: ['Polishing Crystals', 'Stain Dissolvers'],
    benefits: ['Prevents new stains', 'Dissolves tannic acid', 'Brightens smile'],
    rating: 4.7,
    reviewsCount: 890,
    stock: 40
  },
  {
    id: 'p12',
    name: 'Aloe Vera Soothe',
    category: 'Sensitive',
    price: 240,
    image: 'https://picsum.photos/seed/aloe-soothe/400/400',
    description: 'Gentle cleaning with pure aloe vera for sensitive mouths.',
    ingredients: ['Aloe Vera Juice', 'Tea Tree Oil', 'Stevia'],
    benefits: ['Anti-inflammatory', 'Gentle cleaning', 'Soothing effect'],
    rating: 4.8,
    reviewsCount: 560,
    stock: 55
  },
  {
    id: 'p13',
    name: 'Pro-Bionic Balance',
    category: 'Herbal',
    price: 399,
    image: 'https://picsum.photos/seed/probiotic-tube/400/400',
    description: 'Probiotic toothpaste for a healthy oral microbiome.',
    ingredients: ['Lactobacillus', 'Xylitol', 'Nano-hydroxyapatite'],
    benefits: ['Balanced oral flora', 'Immune support', 'Toxin defense'],
    rating: 5.0,
    reviewsCount: 210,
    stock: 25
  },
  {
    id: 'p14',
    name: 'Kids Magic Sparkle',
    category: 'Kids',
    price: 155,
    image: 'https://picsum.photos/seed/sparkle-toy/400/400',
    description: 'Gittery toothpaste that makes brushing an adventure.',
    ingredients: ['Safe Glitter', 'Food Grade Flavors'],
    benefits: ['Encourages brushing', 'Gentle formula', 'Starry texture'],
    rating: 4.6,
    reviewsCount: 430,
    stock: 90
  },
  {
    id: 'p15',
    name: 'Night Repair Gel',
    category: 'Sensitive',
    price: 310,
    image: 'https://picsum.photos/seed/night-care/400/400',
    description: 'Intensive overnight treatment for enamel and gum repair.',
    ingredients: ['Melatonin', 'Calcium', 'Chamomile'],
    benefits: ['Overnight healing', 'Calms gums', 'Restorative formula'],
    rating: 4.8,
    reviewsCount: 670,
    stock: 30
  }
];

export const DENTISTS: Dentist[] = [
  {
    id: 'd1',
    name: 'Dr. Sarah Mitchell',
    title: 'Consultant Orthodontist',
    qualification: 'MDS, PH.D in Dental Science',
    experience: '15+ Years',
    image: 'https://picsum.photos/seed/dentist1/300/300',
    quote: 'A beautiful smile starts with healthy foundations. Brushing twice a day is non-negotiable.',
    specialty: 'Orthodontics & Smile Design'
  },
  {
    id: 'd2',
    name: 'Dr. Rahul Sharma',
    title: 'Senior Periodontist',
    qualification: 'MDS, BDS',
    experience: '12+ Years',
    image: 'https://picsum.photos/seed/dentist2/300/300',
    quote: 'Gum health is the window to your overall body health. Never ignore bleeding gums.',
    specialty: 'Gum Health & Implants'
  },
  {
    id: 'd3',
    name: 'Dr. Elena Rossi',
    title: 'Pediatric Surgeon',
    qualification: 'DDS, Specialized in Child Care',
    experience: '8+ Years',
    image: 'https://picsum.photos/seed/dentist3/300/300',
    quote: 'Making dental care fun for kids is the key to life-long oral health.',
    specialty: 'Pediatric Dentistry'
  },
  {
    id: 'd4',
    name: 'Dr. James Wilson',
    title: 'Cosmetic Dentist',
    qualification: 'MDS in Cosmetic Dentistry',
    experience: '20+ Years',
    image: 'https://picsum.photos/seed/dentist4/300/300',
    quote: 'Whitening should always be combined with sensitivity protection for the best results.',
    specialty: 'Teeth Whitening'
  },
  {
    id: 'd5',
    name: 'Dr. Priya Das',
    title: 'Oral Health Expert',
    qualification: 'BDS, MPH',
    experience: '10+ Years',
    image: 'https://picsum.photos/seed/dentist5/300/300',
    quote: 'Prevention is better than cure. Regular checkups save you from painful procedures.',
    specialty: 'Preventive Care'
  },
  {
    id: 'd6',
    name: 'Dr. Emily Watson',
    title: 'Gum Health Specialist',
    qualification: 'DDS, Periodontology',
    experience: '9 Years',
    image: 'https://picsum.photos/seed/d6/400/400',
    quote: "Healthy gums are the foundation of a beautiful, lasting smile.",
    specialty: 'Periodontics'
  },
  {
    id: 'd7',
    name: 'Dr. Sofia Rossi',
    title: 'Cosmetic Dentist',
    qualification: 'DDS, Aesthetic Dentistry',
    experience: '7 Years',
    image: 'https://picsum.photos/seed/d7/400/400',
    quote: "Art meeting science to create the perfect smile you've always wanted.",
    specialty: 'Cosmetics'
  },
  {
    id: 'd8',
    name: 'Dr. Kenji Tanaka',
    title: 'Orthodontics Lead',
    qualification: 'DDS, PhD',
    experience: '20 Years',
    image: 'https://picsum.photos/seed/d8/400/400',
    quote: "Straightening teeth isn't just about aesthetics; it's about functional harmony.",
    specialty: 'Orthodontics'
  },
  {
    id: 'd9',
    name: 'Dr. Maria Gomez',
    title: 'Public Health Dentist',
    qualification: 'MPH, DDS',
    experience: '13 Years',
    image: 'https://picsum.photos/seed/d9/400/400',
    quote: "Dental care should be accessible and understandable for every community member.",
    specialty: 'Public Health'
  },
  {
    id: 'd10',
    name: 'Dr. Liam O\'Brien',
    title: 'Restorative Specialist',
    qualification: 'DDS, Prosthodontics',
    experience: '16 Years',
    image: 'https://picsum.photos/seed/d10/400/400',
    quote: "Restoring function and confidence, one tooth at a time.",
    specialty: 'Restorative'
  },
  {
    id: 'd11',
    name: 'Dr. Arjun Mehta',
    title: 'Oral Maxillofacial Surgeon',
    qualification: 'DDS, MS (Surgery)',
    experience: '18 Years',
    image: 'https://picsum.photos/seed/d11/400/400',
    quote: "Complex problems require precise surgical solutions and compassionate care.",
    specialty: 'Surgery'
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'a1',
    title: 'How to Brush Properly: The Bass Technique',
    excerpt: 'Master the art of brushing with the most recommended technique by dentists worldwide.',
    content: 'Brushing your teeth might seem simple, but most people do it wrong...',
    image: 'https://picsum.photos/seed/brushing/800/400',
    author: 'Dr. Sarah Mitchell',
    date: '2024-03-15'
  },
  {
    id: 'a2',
    title: 'Best Toothpaste for Sensitive Teeth',
    excerpt: 'Understanding the science behind sensitivity and how the right toothpaste helps.',
    content: 'If cold water makes you wince, you likely have dentin hypersensitivity...',
    image: 'https://picsum.photos/seed/sensitive/800/400',
    author: 'James Wilson',
    date: '2024-03-20'
  },
  {
    id: 'a3',
    title: 'Daily Oral Care Routine for a Brighter Smile',
    excerpt: 'Step-by-step guide to maintaining a million-dollar smile at home.',
    content: 'Consistency is key. Follow these five steps every morning and night...',
    image: 'https://picsum.photos/seed/routine/800/400',
    author: 'Dr. Priya Das',
    date: '2024-03-25'
  }
];
