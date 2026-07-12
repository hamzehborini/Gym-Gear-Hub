import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Shield, FlaskConical, Leaf, Award, Zap } from 'lucide-react';

const PILLARS = [
  {
    icon: Shield,
    title: 'Transparent Labels',
    description: 'Every ingredient is disclosed with its exact dose. No proprietary blends, no hidden fillers, no shortcuts.',
  },
  {
    icon: FlaskConical,
    title: 'Clinically Dosed',
    description: 'We use effective doses backed by peer-reviewed research, not pixie-dust marketing amounts.',
  },
  {
    icon: Leaf,
    title: 'Clean Sourcing',
    description: 'Raw materials are traced from certified suppliers who meet our strict purity and sustainability standards.',
  },
  {
    icon: Award,
    title: '3rd Party Tested',
    description: 'Every batch is independently tested for banned substances, heavy metals, and label accuracy.',
  },
];

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-grow pt-32">
        {/* Hero Statement */}
        <section className="pb-20 md:pb-28">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/30 text-primary mb-6">
                <Zap className="w-4 h-4" />
                <span className="font-display font-bold uppercase tracking-widest text-xs">Our Standard</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter text-white leading-[0.9] mb-8">
                Built For The <span className="text-primary">Relentless.</span>
              </h1>
              <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
                APEX FUEL exists for athletes who demand more than hype. We engineer premium supplements with
                radical transparency, rigorous testing, and dosages that actually move the needle.
              </p>
            </div>
          </div>
        </section>

        {/* Pillars Grid */}
        <section className="py-24 bg-card border-y border-white/5 relative overflow-hidden">
          <div className="bg-stripes absolute inset-0 opacity-20 pointer-events-none"></div>
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
              {PILLARS.map((pillar, i) => (
                <div
                  key={i}
                  className="bg-card p-10 md:p-12 flex flex-col gap-6 hover:bg-white/[0.02] transition-colors"
                >
                  <div className="w-14 h-14 bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <pillar.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold uppercase tracking-wide text-white mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Strip */}
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight text-white mb-16">
              From Concept To Container
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Research', desc: 'We start with the science, not the trend.' },
                { step: '02', title: 'Formulate', desc: 'Doses are set to clinical thresholds.' },
                { step: '03', title: 'Test', desc: 'Third-party labs verify every batch.' },
                { step: '04', title: 'Release', desc: 'Only the cleanest lots make it to you.' },
              ].map((item) => (
                <div key={item.step} className="border-l-2 border-primary/30 pl-6">
                  <span className="text-4xl font-display font-bold text-primary/40 block mb-4">{item.step}</span>
                  <h3 className="text-xl font-display font-bold uppercase tracking-wide text-white mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
