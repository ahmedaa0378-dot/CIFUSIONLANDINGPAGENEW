import { Link } from 'react-router-dom';
import { ArrowRight, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="section-padding pt-32 pb-32 relative overflow-hidden min-h-[70vh] flex items-center">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-[20%] right-[15%] w-[500px] h-[500px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <p className="font-heading text-7xl md:text-8xl font-extrabold tracking-tight gradient-text mb-4">
          404
        </p>
        <h1 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-gray-900 dark:text-white">
          This Page Took a Detour
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-md mx-auto leading-relaxed mb-8">
          The page you're looking for doesn't exist or may have moved. Let's get you back on track.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/" className="btn-primary inline-flex items-center gap-2">
            <Home className="w-4 h-4" /> Back to Home
          </Link>
          <Link to="/demo" className="btn-secondary inline-flex items-center gap-2">
            Request a Demo <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
