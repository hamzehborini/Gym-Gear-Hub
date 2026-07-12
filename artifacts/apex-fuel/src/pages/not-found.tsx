export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-8xl font-display font-bold uppercase tracking-tighter text-primary mb-4">404</h1>
      <h2 className="text-2xl font-display font-bold uppercase tracking-wider text-white mb-6">Page Not Found</h2>
      <p className="text-muted-foreground max-w-md mb-8">
        The page you're looking for doesn't exist or has been moved. Keep pushing forward.
      </p>
      <a href="/" className="px-8 py-4 bg-white/5 text-white border border-white/10 font-display font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">
        Return to Base
      </a>
    </div>
  );
}
