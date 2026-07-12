import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Eye, Target, Crosshair, Zap, CheckCircle2 } from 'lucide-react';

const GUIDING_STARS = [
  {
    icon: Eye,
    title: 'Vision',
    description: 'To be the home of uncompromising performance nutrition, where every product reflects transparency, potency, and elite results.',
  },
  {
    icon: Target,
    title: 'Mission',
    description: 'To offer athletes a fuel experience that blends scientifically proven ingredients with bold, modern design and zero filler.',
  },
  {
    icon: Crosshair,
    title: 'Goals',
    description: 'To grow with the world of fitness while staying true to the relentless standards that define the APEX FUEL name.',
  },
];

const PROCESS_STEPS = [
  { step: '01', title: 'Research', desc: 'We start with peer-reviewed science, not trends.' },
  { step: '02', title: 'Formulate', desc: 'Doses are set to effective clinical thresholds.' },
  { step: '03', title: 'Test', desc: 'Third-party labs verify purity and potency.' },
  { step: '04', title: 'Release', desc: 'Only the cleanest lots make it to your shaker.' },
];

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-grow pt-28 md:pt-32">
        {/* Guiding Stars — Two Column Layout */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left Card */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative border border-primary/30 bg-card p-8 md:p-12 lg:p-14"
              >
                <div className="absolute -top-px -left-px w-12 h-12 border-t-2 border-l-2 border-primary"></div>
                <div className="absolute -bottom-px -right-px w-12 h-12 border-b-2 border-r-2 border-primary"></div>

                <h1 className="font-display font-bold uppercase tracking-tight text-white mb-10 text-4xl md:text-5xl">
                  Our Guiding <span className="text-primary">Stars</span>
                </h1>

                <div className="space-y-8">
                  {GUIDING_STARS.map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                      className="flex gap-4"
                    >
                      <div className="mt-1 shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-lg uppercase tracking-wide text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right Image */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden border border-primary/30 rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200&h=1600"
                    alt="Athlete training with intense focus in a dark gym"
                    className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=800&h=800';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
                </div>
                <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 px-4 py-3 md:px-6 md:py-4 bg-primary text-black font-display font-bold uppercase tracking-widest text-xs md:text-sm">
                  APEX Standard
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Centered Timeline Process */}
        <section className="py-24 md:py-32 bg-card border-y border-white/5 relative overflow-hidden">
          <div className="bg-stripes absolute inset-0 opacity-20 pointer-events-none"></div>
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <AnimatedSection className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/30 text-primary mb-6">
                <Zap className="w-4 h-4" />
                <span className="font-display font-bold uppercase tracking-widest text-xs">Our Process</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight text-white mb-4">
                From Concept To Container
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                A vertical path built on precision, transparency, and relentless quality control.
              </p>
            </AnimatedSection>

            <div className="relative max-w-3xl mx-auto">
              {/* Animated vertical line */}
              <motion.div
                className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/30 origin-top"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              />

              <div className="space-y-16 md:space-y-24">
                {PROCESS_STEPS.map((item, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <motion.div
                      key={item.step}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
                        isEven ? 'md:flex-row-reverse' : ''
                      }`}
                    >
                      {/* Center Dot */}
                      <div className="absolute left-1/2 top-0 -translate-x-1/2 z-10">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true, margin: '-80px' }}
                          transition={{ duration: 0.4, delay: 0.2, ease: 'backOut' }}
                          className="w-4 h-4 bg-primary rounded-full ring-4 ring-card"
                        />
                      </div>

                      {/* Content Card */}
                      <div className={`w-full md:w-1/2 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                        <div className="bg-background border border-white/5 p-6 md:p-8 hover:border-primary/30 transition-colors">
                          <span className="text-3xl font-display font-bold text-primary/40 block mb-2">{item.step}</span>
                          <h3 className="text-xl font-display font-bold uppercase tracking-wide text-white mb-2">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>

                      {/* Empty side for balance */}
                      <div className="hidden md:block md:w-1/2" />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Values Checklist */}
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight text-white mb-4">
                What We Stand For
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Non-negotiables that define every product we release.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 max-w-6xl mx-auto">
              {[
                'Transparent Labels',
                'Clinically Dosed',
                'Clean Sourcing',
                '3rd Party Tested',
              ].map((value, i) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-card p-8 md:p-10 flex flex-col items-center text-center gap-4 hover:bg-white/[0.02] transition-colors"
                >
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                  <h3 className="font-display font-bold uppercase tracking-wide text-white">{value}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
