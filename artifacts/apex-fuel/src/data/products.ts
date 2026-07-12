export type Product = {
  id: string;
  name: string;
  category: 'Protein' | 'Pre-Workout' | 'Creatine' | 'Recovery';
  description: string;
  keyFacts: {
    label: string;
    value: string;
  }[];
  price: number;
  flavors: string[];
  sizes: string[];
  images: string[]; // 3-4 images per product
};

export const products: Product[] = [
  {
    id: 'p-1',
    name: 'Apex Whey Isolate',
    category: 'Protein',
    description: 'Ultra-pure, fast-absorbing whey protein isolate designed for elite muscle recovery. Zero fillers, zero proprietary blends, just 100% transparent fuel for your grind.',
    keyFacts: [
      { label: 'Protein', value: '25g' },
      { label: 'Calories', value: '110' },
      { label: 'Sugar', value: '0g' },
      { label: 'Servings', value: '30' }
    ],
    price: 45,
    flavors: ['Double Chocolate', 'Vanilla Bean', 'Cookies & Cream'],
    sizes: ['2 lbs', '5 lbs'],
    images: [
      'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=800&h=1000',
      'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=800&h=800',
      'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=1000&h=800',
    ]
  },
  {
    id: 'p-2',
    name: 'Titan Mass Gainer',
    category: 'Protein',
    description: 'Built for those who refuse to stay small. A heavy-hitting blend of complex carbs and premium proteins to pack on dense muscle mass without the fat.',
    keyFacts: [
      { label: 'Protein', value: '50g' },
      { label: 'Calories', value: '1250' },
      { label: 'Carbs', value: '252g' },
      { label: 'Servings', value: '15' }
    ],
    price: 55,
    flavors: ['Fudge Brownie', 'Peanut Butter Cup'],
    sizes: ['5 lbs', '10 lbs'],
    images: [
      'https://images.unsplash.com/photo-1579722820308-d74e571900a9?auto=format&fit=crop&q=80&w=800&h=1000',
      'https://images.unsplash.com/photo-1579722820308-d74e571900a9?auto=format&fit=crop&q=80&w=800&h=800',
      'https://images.unsplash.com/photo-1579722820308-d74e571900a9?auto=format&fit=crop&q=80&w=1000&h=800',
    ]
  },
  {
    id: 'p-3',
    name: 'Ignite Pre-Workout',
    category: 'Pre-Workout',
    description: 'Flip the switch. A high-stimulant, focus-enhancing pre-workout that delivers tunnel vision and explosive energy. Not for beginners.',
    keyFacts: [
      { label: 'Caffeine', value: '350mg' },
      { label: 'L-Citrulline', value: '6g' },
      { label: 'Beta-Alanine', value: '3.2g' },
      { label: 'Servings', value: '30' }
    ],
    price: 35,
    flavors: ['Sour Gummy', 'Blue Raspberry', 'Fruit Punch'],
    sizes: ['30 Servings'],
    images: [
      'https://images.unsplash.com/photo-1622485501306-0cd430638fa9?auto=format&fit=crop&q=80&w=800&h=1000',
      'https://images.unsplash.com/photo-1622485501306-0cd430638fa9?auto=format&fit=crop&q=80&w=800&h=800',
      'https://images.unsplash.com/photo-1622485501306-0cd430638fa9?auto=format&fit=crop&q=80&w=1000&h=800',
    ]
  },
  {
    id: 'p-4',
    name: 'Nitro Pump Extreme',
    category: 'Pre-Workout',
    description: 'Skin-splitting pumps without the stimulants. Maximizes nitric oxide production for enhanced blood flow, nutrient delivery, and muscle volume.',
    keyFacts: [
      { label: 'L-Citrulline', value: '8g' },
      { label: 'GlycerPump', value: '3g' },
      { label: 'Caffeine', value: '0mg' },
      { label: 'Servings', value: '25' }
    ],
    price: 38,
    flavors: ['Tiger\'s Blood', 'Mango Stride'],
    sizes: ['25 Servings'],
    images: [
      'https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=800&h=1000',
      'https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=800&h=800',
      'https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=1000&h=800',
    ]
  },
  {
    id: 'p-5',
    name: 'Pure Creatine Monohydrate',
    category: 'Creatine',
    description: 'The most researched, proven supplement on earth. 100% pure micronized creatine monohydrate to increase strength, power, and muscle mass.',
    keyFacts: [
      { label: 'Creatine', value: '5g' },
      { label: 'Fillers', value: '0g' },
      { label: 'Unflavored', value: 'Yes' },
      { label: 'Servings', value: '60' }
    ],
    price: 25,
    flavors: ['Unflavored'],
    sizes: ['300g', '600g'],
    images: [
      'https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&q=80&w=800&h=1000',
      'https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&q=80&w=800&h=800',
      'https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&q=80&w=1000&h=800',
    ]
  },
  {
    id: 'p-6',
    name: 'Creatine HCL Elite',
    category: 'Creatine',
    description: 'Highly concentrated, highly soluble creatine hydrochloride. No loading phase, no bloating, maximum absorption for intense performance.',
    keyFacts: [
      { label: 'Creatine HCL', value: '2g' },
      { label: 'Absorption', value: 'Rapid' },
      { label: 'Bloat', value: 'Zero' },
      { label: 'Servings', value: '45' }
    ],
    price: 32,
    flavors: ['Lemon Drop', 'Unflavored'],
    sizes: ['45 Servings'],
    images: [
      'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=800&h=1000',
      'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=800&h=800',
      'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=1000&h=800',
    ]
  },
  {
    id: 'p-7',
    name: 'Recover BCAA+',
    category: 'Recovery',
    description: 'Intra-workout hydration and recovery. Loaded with clinical doses of BCAAs, EAAs, and electrolytes to delay fatigue and kickstart protein synthesis.',
    keyFacts: [
      { label: 'BCAAs', value: '7g' },
      { label: 'EAAs', value: '3g' },
      { label: 'Electrolytes', value: '1.5g' },
      { label: 'Servings', value: '30' }
    ],
    price: 30,
    flavors: ['Watermelon', 'Green Apple', 'Pineapple'],
    sizes: ['30 Servings'],
    images: [
      'https://images.unsplash.com/photo-1550508544-776cc89b537f?auto=format&fit=crop&q=80&w=800&h=1000',
      'https://images.unsplash.com/photo-1550508544-776cc89b537f?auto=format&fit=crop&q=80&w=800&h=800',
      'https://images.unsplash.com/photo-1550508544-776cc89b537f?auto=format&fit=crop&q=80&w=1000&h=800',
    ]
  },
  {
    id: 'p-8',
    name: 'Night Repair ZMA',
    category: 'Recovery',
    description: 'Maximize your sleep to maximize your gains. Deep sleep inducer featuring ZMA, Ashwagandha, and Melatonin for optimal nighttime recovery.',
    keyFacts: [
      { label: 'Zinc', value: '30mg' },
      { label: 'Magnesium', value: '450mg' },
      { label: 'Melatonin', value: '3mg' },
      { label: 'Capsules', value: '90' }
    ],
    price: 28,
    flavors: ['Capsule'],
    sizes: ['30 Servings'],
    images: [
      'https://images.unsplash.com/photo-1618356956627-817abdf28cb3?auto=format&fit=crop&q=80&w=800&h=1000',
      'https://images.unsplash.com/photo-1618356956627-817abdf28cb3?auto=format&fit=crop&q=80&w=800&h=800',
      'https://images.unsplash.com/photo-1618356956627-817abdf28cb3?auto=format&fit=crop&q=80&w=1000&h=800',
    ]
  }
];
