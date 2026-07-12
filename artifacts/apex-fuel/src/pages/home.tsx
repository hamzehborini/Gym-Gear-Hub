import { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { products, Product } from '../data/products';
import { formatCurrency } from '../lib/currency';
import { ProductModal } from '../components/ProductModal';
import { ArrowRight, ChevronRight, Zap } from 'lucide-react';
import { Link } from 'wouter';

const CATEGORIES = ['All', 'Protein', 'Pre-Workout', 'Creatine', 'Recovery'];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const openProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex items-center min-h-[90vh]">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2000&h=1200" 
            alt="Athlete lifting heavy weights in a dark gym" 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent"></div>
          {/* Noise overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/30 text-primary mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Zap className="w-4 h-4" />
              <span className="font-display font-bold uppercase tracking-widest text-xs">New Formula Unleashed</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter text-white leading-[0.9] mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
              Fuel The <span className="text-primary block">Grind.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              Lab-tested. No proprietary blends. No fillers. Pure performance nutrition engineered for those who refuse to be average.
            </p>
            <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
              <a href="#shop" className="group relative px-8 py-4 bg-primary text-white font-display font-bold uppercase tracking-widest overflow-hidden">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <span className="relative flex items-center gap-2">
                  Shop Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <Link href="/cart" className="px-8 py-4 bg-white/5 text-white border border-white/10 font-display font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">
                View Cart
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story / Stats */}
      <section className="py-20 bg-card border-y border-white/5 relative overflow-hidden">
        <div className="bg-stripes absolute inset-0 opacity-20 pointer-events-none"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { stat: "100%", label: "Transparent Labels" },
              { stat: "0g", label: "Hidden Fillers" },
              { stat: "3rd", label: "Party Tested" },
              { stat: "GMP", label: "Certified Facility" }
            ].map((item, i) => (
              <div key={i} className="text-center md:text-left">
                <span className="block text-4xl md:text-5xl font-display font-bold text-white mb-2">{item.stat}</span>
                <span className="block text-sm uppercase tracking-widest text-primary font-bold">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop Grid */}
      <section id="shop" className="py-24 flex-grow">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight text-white mb-4">
                Performance Arsenal
              </h2>
              <p className="text-muted-foreground max-w-xl">
                Select your weapons. Every product is heavily dosed with scientifically proven ingredients to maximize your output.
              </p>
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 font-display font-bold uppercase tracking-wider text-sm transition-all duration-300 ${
                    activeCategory === category 
                      ? 'bg-primary text-white' 
                      : 'bg-transparent text-muted-foreground border border-white/10 hover:border-white/30 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-12">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="group cursor-pointer flex flex-col"
                onClick={() => openProduct(product)}
              >
                {/* Image Card */}
                <div className="relative bg-[#0A0A0A] aspect-[4/5] mb-4 overflow-hidden border border-white/5 transition-colors duration-500 group-hover:border-primary/50">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  
                  <img 
                    src={product.images[0]} 
                    alt={product.name}
                    className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=800&h=800';
                    }}
                  />
                  
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-black/80 backdrop-blur-sm border border-white/10 text-white font-display font-bold uppercase text-[10px] tracking-widest">
                      {product.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-full py-3 bg-primary text-white text-center font-display font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2">
                      Quick View <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-display font-bold text-xl uppercase tracking-wide text-white group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                  </div>
                  <p className="text-lg font-bold text-white/80">
                    {formatCurrency(product.price)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <ProductModal 
        product={selectedProduct} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
