import { ArrowRight, Zap } from 'lucide-react';

export const FinalCTA = ({ onFormOpen }) => {
  return (
    <section className="py-24 bg-gradient-to-r from-slate-900 via-secondary/5 to-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-accent/10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary opacity-5 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-slideUp">
        <div className="mb-8 inline-flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-accent/30">
          <Zap className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-accent">Ready to Transform Your Business?</span>
        </div>

        <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
          Let's Build Something <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Extraordinary</span>
        </h2>

        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          From initial concept to full deployment, we're here to turn your vision into reality. Start your journey today and discover what's possible.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onFormOpen}
            className="group bg-gradient-to-r from-secondary to-red-600 text-white px-12 py-5 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-secondary/40 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            Get Free Quotation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button className="border-2 border-accent text-accent px-12 py-5 rounded-lg font-bold text-lg hover:bg-accent/10 transition-all duration-300 w-full sm:w-auto">
            Schedule a Call
          </button>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap gap-6 justify-center text-slate-400 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Free consultation included
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            No hidden fees
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Quick turnaround
          </div>
        </div>
      </div>
    </section>
  );
};
