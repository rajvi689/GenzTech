import { Code2, Globe, Zap, Brain } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Custom Software',
    description: 'Bespoke solutions tailored to your unique business needs and workflows.',
    features: ['Enterprise-Grade', 'Scalable', 'Secure']
  },
  {
    icon: Globe,
    title: 'Web Applications',
    description: 'Modern, responsive web apps that deliver exceptional user experiences.',
    features: ['Fast Load Times', 'Mobile First', 'SEO Optimized']
  },
  {
    icon: Zap,
    title: 'Automation',
    description: 'Streamline operations and eliminate repetitive tasks with intelligent automation.',
    features: ['Process Optimization', 'Cost Reduction', 'Efficiency Boost']
  },
  {
    icon: Brain,
    title: 'AI Solutions',
    description: 'Leverage cutting-edge AI to gain insights and stay ahead of competition.',
    features: ['Machine Learning', 'Data Analytics', 'Predictive Models']
  },
];

export const Services = () => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary opacity-5 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Services Crafted <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">For Impact</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            From concept to deployment, we deliver comprehensive solutions that drive real results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-accent/50 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10 hover:-translate-y-2 animate-slideUp"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{service.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-slate-700/50 text-slate-300 text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <button className="text-accent font-semibold flex items-center gap-2 group/btn hover:translate-x-1 transition-transform">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
