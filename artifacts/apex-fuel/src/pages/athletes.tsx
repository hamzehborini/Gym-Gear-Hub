import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Trophy, Users, Zap } from 'lucide-react';

const ATHLETES = [
  {
    name: 'Omar Khairi',
    sport: 'Powerlifting',
    achievement: 'National Deadlift Record Holder',
    quote: 'APEX FUEL is the only pre-workout I trust when the weight on the bar is my max.',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=800&h=800',
  },
  {
    name: 'Layla Haddad',
    sport: 'CrossFit',
    achievement: 'Regional Games Competitor',
    quote: 'Recovery is training. Their BCAAs keep me consistent through the hardest blocks.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800&h=800',
  },
  {
    name: 'Kareem Nasser',
    sport: 'Bodybuilding',
    achievement: 'Classic Physique Pro',
    quote: 'Stage-ready means knowing exactly what is in every scoop. That is why I use APEX.',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=800&h=800',
  },
  {
    name: 'Nour Suleiman',
    sport: 'Track & Field',
    achievement: 'National 100m Champion',
    quote: 'Explosive power needs clean fuel. I feel the difference in every sprint.',
    image: 'https://images.unsplash.com/photo-1552674605-5d226f5bf74c?auto=format&fit=crop&q=80&w=800&h=800',
  },
];

export default function AthletesPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-grow pt-32">
        {/* Hero */}
        <section className="pb-20 md:pb-28">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/30 text-primary mb-6">
                <Trophy className="w-4 h-4" />
                <span className="font-display font-bold uppercase tracking-widest text-xs">Team APEX</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter text-white leading-[0.9] mb-8">
                Fueled By <span className="text-primary">Champions.</span>
              </h1>
              <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
                From the platform to the podium, these athletes prove that elite performance starts with
                elite nutrition. No excuses. No compromises.
              </p>
            </div>
          </div>
        </section>

        {/* Athletes Grid */}
        <section className="py-24 bg-card border-y border-white/5 relative overflow-hidden">
          <div className="bg-stripes absolute inset-0 opacity-20 pointer-events-none"></div>
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ATHLETES.map((athlete) => (
                <div
                  key={athlete.name}
                  className="group relative bg-[#0A0A0A] border border-white/5 overflow-hidden flex flex-col sm:flex-row"
                >
                  <div className="sm:w-2/5 aspect-square sm:aspect-auto relative overflow-hidden">
                    <img
                      src={athlete.image}
                      alt={athlete.name}
                      className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=800&h=800';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0A0A0A] hidden sm:block"></div>
                  </div>
                  <div className="p-8 sm:p-10 flex flex-col justify-center sm:w-3/5">
                    <div className="flex items-center gap-2 mb-4">
                      <Zap className="w-4 h-4 text-primary" />
                      <span className="text-xs font-display font-bold uppercase tracking-widest text-primary">{athlete.sport}</span>
                    </div>
                    <h2 className="text-3xl font-display font-bold uppercase tracking-wide text-white mb-2">
                      {athlete.name}
                    </h2>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold mb-6">
                      {athlete.achievement}
                    </p>
                    <p className="text-muted-foreground italic leading-relaxed border-l-2 border-primary/30 pl-4">
                      "{athlete.quote}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="bg-primary/10 border border-primary/30 p-12 md:p-16 text-center">
              <Users className="w-10 h-10 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight text-white mb-4">
                Join The Movement
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Whether you are chasing your first rep or your next record, APEX FUEL is built to keep you in the fight.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
