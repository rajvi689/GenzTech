import React from 'react';
import { CheckCircle, MessageSquare, Lightbulb, Rocket, Wrench } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Consultation',
    description: 'We understand your vision, goals, and challenges through in-depth discussions.'
  },
  {
    icon: Lightbulb,
    number: '02',
    title: 'Strategy',
    description: 'Our team crafts a customized roadmap tailored to your specific needs.'
  },
  {
    icon: Wrench,
    number: '03',
    title: 'Development',
    description: 'We build your solution using proven technologies and best practices.'
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Launch',
    description: 'Seamless deployment with training and comprehensive documentation included.'
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-accent opacity-5 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-slideUp">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            How It <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A transparent, collaborative process that keeps you in control every step of the way.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection lines */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-secondary/30 via-accent/30 to-transparent"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative animate-slideUp"
                style={{animationDelay: `${index * 0.15}s`}}
              >
                {/* Connector */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 -right-4 w-8 h-1 bg-gradient-to-r from-secondary/50 to-transparent"></div>
                )}

                <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-8 h-full hover:border-secondary/50 transition-all duration-300">
                  {/* Step number with icon */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-4xl font-bold text-slate-600">{step.number}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{step.description}</p>

                  {/* Bottom indicator */}
                  <div className="mt-6 flex items-center gap-2 text-accent text-sm font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    Complete & Verified
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline indicator for mobile */}
        <div className="lg:hidden mt-12 flex gap-4 justify-center">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all ${
                index < 2 ? 'bg-gradient-to-r from-secondary to-accent w-8' : 'bg-slate-700 w-2'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};
