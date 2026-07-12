import { Link, useLocation } from 'wouter';
import { ShoppingCart, Menu, X, Dumbbell } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Dumbbell className="w-8 h-8 text-primary transition-transform group-hover:rotate-12 duration-300" />
          <span className="font-display font-bold text-2xl tracking-widest uppercase text-white">
            Apex<span className="text-primary">Fuel</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className={`text-sm font-semibold tracking-wider uppercase transition-colors hover:text-primary ${location === '/' ? 'text-primary' : 'text-gray-300'}`}>Shop</Link>
          <Link href="/mission" className={`text-sm font-semibold tracking-wider uppercase transition-colors hover:text-primary ${location === '/mission' ? 'text-primary' : 'text-gray-300'}`}>Mission</Link>
          <Link href="/athletes" className={`text-sm font-semibold tracking-wider uppercase transition-colors hover:text-primary ${location === '/athletes' ? 'text-primary' : 'text-gray-300'}`}>Athletes</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <Link href="/cart" className="relative group p-2">
            <ShoppingCart className="w-6 h-6 text-white transition-colors group-hover:text-primary" />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 w-5 h-5 bg-primary text-black text-xs font-bold rounded-full flex items-center justify-center translate-x-1 -translate-y-1">
                {totalItems}
              </span>
            )}
          </Link>
          
          <button 
            className="md:hidden p-2 text-white hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-background z-50 flex flex-col p-6 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex items-center justify-between mb-12">
            <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
              <Dumbbell className="w-8 h-8 text-primary" />
              <span className="font-display font-bold text-2xl tracking-widest uppercase text-white">
                Apex<span className="text-primary">Fuel</span>
              </span>
            </Link>
            <button 
              className="p-2 text-white hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
          </div>
          <nav className="flex flex-col gap-6 text-2xl font-display font-bold uppercase tracking-wider">
            <Link href="/" className={`${location === '/' ? 'text-primary' : 'text-white'} hover:text-primary`} onClick={() => setMobileMenuOpen(false)}>Shop</Link>
            <Link href="/mission" className={`${location === '/mission' ? 'text-primary' : 'text-white'} hover:text-primary`} onClick={() => setMobileMenuOpen(false)}>Mission</Link>
            <Link href="/athletes" className={`${location === '/athletes' ? 'text-primary' : 'text-white'} hover:text-primary`} onClick={() => setMobileMenuOpen(false)}>Athletes</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
