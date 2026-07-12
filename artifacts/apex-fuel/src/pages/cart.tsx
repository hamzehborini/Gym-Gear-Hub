import { Link } from 'wouter';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../lib/currency';
import { Minus, Plus, Trash2, ArrowRight } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

export default function CartPage() {
  const { state, dispatch, subtotal, totalItems } = useCart();
  const { toast } = useToast();

  const handleCheckout = () => {
    toast({
      title: "Checkout Initiated",
      description: "This is a demo. In a real app, this would route to a secure payment gateway.",
      className: "bg-background border-primary text-white",
    });
  };

  const updateQuantity = (id: string, currentQty: number, delta: number) => {
    const newQty = currentQty + delta;
    if (newQty < 1) {
      dispatch({ type: 'REMOVE_ITEM', payload: id });
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity: newQty } });
    }
  };

  const shipping = subtotal > 100 ? 0 : 5;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight text-white mb-4">
              Your Supply
            </h1>
            <p className="text-muted-foreground text-lg">
              {totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart.
            </p>
          </div>

          {state.items.length === 0 ? (
            <div className="py-20 flex flex-col items-center justify-center text-center border border-white/5 bg-card/50">
              <div className="w-24 h-24 mb-6 rounded-full bg-white/5 flex items-center justify-center">
                <Trash2 className="w-10 h-10 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-display font-bold uppercase tracking-wider text-white mb-4">Your Cart is Empty</h2>
              <p className="text-muted-foreground max-w-md mb-8">
                You haven't added any fuel to your cart yet. Time to stock up and get back to work.
              </p>
              <Link href="/" className="px-8 py-4 bg-primary text-white font-display font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors flex items-center gap-2">
                Return to Shop <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                {state.items.map((item) => (
                  <div key={item.id} className="flex gap-6 p-6 bg-card border border-white/5 relative group">
                    <button 
                      onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
                      className="absolute top-4 right-4 text-muted-foreground hover:text-destructive transition-colors p-2"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>

                    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-[#0A0A0A] shrink-0 border border-white/5">
                      <img 
                        src={item.product.images[0]} 
                        alt={item.product.name}
                        className="w-full h-full object-cover mix-blend-luminosity opacity-90"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=800&h=800';
                        }}
                      />
                    </div>

                    <div className="flex flex-col flex-grow justify-between py-1">
                      <div>
                        <div className="text-xs font-display font-bold text-primary tracking-widest uppercase mb-1">
                          {item.product.category}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-display font-bold text-white uppercase tracking-wide mb-2 pr-8">
                          {item.product.name}
                        </h3>
                        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1"><span className="text-white/50">Flavor:</span> <span className="text-white">{item.flavor}</span></span>
                          <span className="flex items-center gap-1"><span className="text-white/50">Size:</span> <span className="text-white">{item.size}</span></span>
                        </div>
                      </div>

                      <div className="flex items-end justify-between mt-6">
                        <div className="flex items-center border border-white/20 h-10">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity, -1)}
                            className="w-10 h-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-10 text-center font-bold text-white text-sm">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity, 1)}
                            className="w-10 h-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        
                        <div className="text-xl font-bold text-white">
                          {formatCurrency(item.product.price * item.quantity)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-card border border-white/5 p-8 sticky top-32">
                  <h3 className="text-2xl font-display font-bold uppercase tracking-wider text-white mb-6 pb-6 border-b border-white/10">
                    Order Summary
                  </h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Subtotal</span>
                      <span className="text-white">{formatCurrency(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Shipping</span>
                      <span className="text-white">
                        {shipping === 0 ? <span className="text-primary font-bold">FREE</span> : formatCurrency(shipping)}
                      </span>
                    </div>
                    {shipping > 0 && (
                      <p className="text-xs text-muted-foreground italic text-right">
                        Free shipping on orders over {formatCurrency(100)}
                      </p>
                    )}
                  </div>

                  <div className="pt-6 border-t border-white/10 mb-8">
                    <div className="flex justify-between items-end">
                      <span className="text-lg font-bold text-white">Total</span>
                      <span className="text-3xl font-display font-bold text-white">{formatCurrency(total)}</span>
                    </div>
                  </div>

                  <button 
                    onClick={handleCheckout}
                    className="w-full py-4 bg-primary text-white font-display font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group"
                  >
                    Proceed to Checkout <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <div className="mt-6 text-center">
                    <p className="text-xs text-muted-foreground mb-4">Secure checkout. Encrypted payment processing.</p>
                    <Link href="/" className="text-sm font-bold text-white hover:text-primary transition-colors underline underline-offset-4">
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
