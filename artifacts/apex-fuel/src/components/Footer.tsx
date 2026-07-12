import { Dumbbell } from 'lucide-react';
import { Link } from 'wouter';

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10 mt-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Dumbbell className="w-8 h-8 text-primary" />
              <span className="font-display font-bold text-3xl tracking-widest uppercase text-white">
                Apex<span className="text-primary">Fuel</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm mb-6 leading-relaxed">
              Premium performance nutrition engineered for the dedicated. No fillers, no proprietary blends, just transparent science to fuel your grind.
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-lg uppercase tracking-wider text-white mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Shop</Link></li>
              <li><Link href="/mission" className="hover:text-primary transition-colors">Mission</Link></li>
              <li><Link href="/athletes" className="hover:text-primary transition-colors">Athletes</Link></li>
              <li><Link href="/cart" className="hover:text-primary transition-colors">Cart</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg uppercase tracking-wider text-white mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/" className="hover:text-primary transition-colors">Shipping</Link></li>
              <li><Link href="/" className="hover:text-primary transition-colors">Returns</Link></li>
              <li><Link href="/" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} APEX FUEL. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
