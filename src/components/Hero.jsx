import { ArrowRight, Zap } from 'lucide-react';

export const Hero = ({ onFormOpen }) => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-primary overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary opacity-10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent opacity-10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-secondary opacity-10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="animate-slideUp">
            <div className="mb-6 inline-flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-accent/30">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Next Gen Software Solutions</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Build Your <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Future</span> Today
            </h1>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-lg">
              Custom software, web apps, and AI solutions designed for businesses that refuse to settle. Let's transform your vision into reality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onFormOpen}
                className="group bg-gradient-to-r from-secondary to-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-secondary/50 transition-all duration-300 flex items-center gap-2 w-fit"
              >
                Get Your Quotation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="border-2 border-accent text-accent px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent/10 transition-all duration-300">
                See Our Work
              </button>
            </div>

            <p className="text-slate-400 text-sm mt-8">
              ✓ 50+ Projects Delivered | ✓ 98% Client Satisfaction | ✓ 24/7 Support
            </p>
          </div>

          {/* Right side - Visual */}
          <div className="relative hidden lg:block animate-slideDown">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Animated card showcase */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl transform hover:scale-105 transition-transform duration-500" style={{boxShadow: '0 0 40px rgba(225, 29, 72, 0.2)'}}></div>

              <div className="absolute inset-4 bg-slate-800/80 backdrop-blur rounded-xl border border-accent/20 p-8">
                <div className="space-y-4">
                  <div className="h-12 bg-gradient-to-r from-secondary to-accent rounded-lg opacity-70"></div>
                  <div className="space-y-2">
                    <div className="h-3 bg-slate-700 rounded w-full"></div>
                    <div className="h-3 bg-slate-700 rounded w-5/6"></div>
                    <div className="h-3 bg-slate-700 rounded w-4/6"></div>
                  </div>
                  <div className="pt-4 border-t border-slate-700/50">
                    <div className="h-3 bg-slate-700 rounded w-full mb-2"></div>
                    <div className="h-3 bg-slate-700 rounded w-2/3"></div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
