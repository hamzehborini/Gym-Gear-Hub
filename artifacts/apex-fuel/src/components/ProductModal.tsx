import { useState } from 'react';
import { Product } from '../data/products';
import { formatCurrency } from '../lib/currency';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
import { useCart } from '../context/CartContext';
import { useToast } from '../hooks/use-toast';
import { Minus, Plus, ShoppingCart } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedFlavor, setSelectedFlavor] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const { dispatch } = useCart();
  const { toast } = useToast();

  // Reset state when product changes
  if (product && selectedFlavor === '' && product.flavors.length > 0) setSelectedFlavor(product.flavors[0]);
  if (product && selectedSize === '' && product.sizes.length > 0) setSelectedSize(product.sizes[0]);

  if (!product) return null;

  const handleAddToCart = () => {
    if (!selectedFlavor || !selectedSize) return;
    
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        product,
        flavor: selectedFlavor,
        size: selectedSize,
        quantity
      }
    });

    toast({
      title: "Added to Cart",
      description: `${quantity}x ${product.name} (${selectedFlavor})`,
      className: "bg-background border-primary text-white",
    });

    onClose();
    // Reset for next time
    setTimeout(() => {
      setQuantity(1);
      setActiveImage(0);
    }, 300);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-card border-white/10 rounded-none">
        <DialogTitle className="sr-only">{product.name}</DialogTitle>
        <DialogDescription className="sr-only">{product.description}</DialogDescription>
        
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Gallery */}
          <div className="bg-[#0A0A0A] p-6 md:p-10 flex flex-col gap-4">
            <div className="aspect-square relative overflow-hidden bg-white/5 flex items-center justify-center">
              <img 
                src={product.images[activeImage]} 
                alt={product.name}
                className="object-cover w-full h-full mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=800&h=800';
                }}
              />
            </div>
            <div className="flex gap-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`w-16 h-16 border-2 transition-colors ${
                    activeImage === idx ? 'border-primary' : 'border-white/10 hover:border-white/30'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`${product.name} thumbnail ${idx + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="p-6 md:p-10 flex flex-col h-full bg-card">
            <div className="mb-6">
              <span className="text-primary font-display font-bold tracking-widest text-xs uppercase mb-2 block">
                {product.category}
              </span>
              <h2 className="text-3xl font-display font-bold uppercase tracking-tight text-white mb-2">
                {product.name}
              </h2>
              <p className="text-2xl font-bold text-white/90">
                {formatCurrency(product.price)}
              </p>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {product.keyFacts.map((fact, idx) => (
                <div key={idx} className="bg-white/5 border border-white/5 p-3 text-center clip-diagonal">
                  <span className="block text-xl font-display font-bold text-white mb-1">{fact.value}</span>
                  <span className="block text-[10px] uppercase tracking-wider text-muted-foreground">{fact.label}</span>
                </div>
              ))}
            </div>

            <div className="space-y-6 flex-grow">
              {/* Flavors */}
              <div>
                <label className="text-xs font-display font-bold uppercase tracking-widest text-white/70 mb-3 block">Flavor</label>
                <div className="flex flex-wrap gap-2">
                  {product.flavors.map(flavor => (
                    <button
                      key={flavor}
                      onClick={() => setSelectedFlavor(flavor)}
                      className={`px-4 py-2 text-sm border font-medium transition-all ${
                        selectedFlavor === flavor 
                          ? 'border-primary bg-primary/10 text-primary' 
                          : 'border-white/10 text-white/70 hover:border-white/30'
                      }`}
                    >
                      {flavor}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div>
                <label className="text-xs font-display font-bold uppercase tracking-widest text-white/70 mb-3 block">Size</label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 text-sm border font-medium transition-all ${
                        selectedSize === size 
                          ? 'border-white bg-white text-black' 
                          : 'border-white/10 text-white/70 hover:border-white/30'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4 pt-6 border-t border-white/10">
              <div className="flex items-center border border-white/20 h-14">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-full flex items-center justify-center text-white/70 hover:text-white transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-bold text-white">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-full flex items-center justify-center text-white/70 hover:text-white transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button 
                onClick={handleAddToCart}
                disabled={!selectedFlavor || !selectedSize}
                className="flex-1 h-14 bg-primary text-white font-display font-bold uppercase tracking-wider text-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
            </div>
            
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
