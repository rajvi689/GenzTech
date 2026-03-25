import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'TechStart Inc',
    role: 'CEO',
    image: '👩‍💼',
    content: 'GenzTech transformed our operations with a custom solution that increased efficiency by 40%. Their team was professional and truly understood our vision.',
    rating: 5,
  },
  {
    name: 'Marcus Chen',
    company: 'Global Logistics Co',
    role: 'Operations Director',
    image: '👨‍💼',
    content: 'The automation platform they built saved us thousands per month. Exceptional quality and outstanding support throughout the entire process.',
    rating: 5,
  },
  {
    name: 'Elena Rodriguez',
    company: 'Innovation Labs',
    role: 'Founder',
    image: '👩‍💻',
    content: 'From initial consultation to launch, GenzTech delivered beyond expectations. Their technical expertise combined with business acumen is unmatched.',
    rating: 5,
  },
  {
    name: 'James Mitchell',
    company: 'Digital Solutions Ltd',
    role: 'Project Manager',
    image: '👨‍💻',
    content: 'Working with GenzTech was seamless. They integrated perfectly with our existing team and delivered a scalable web app that our clients love.',
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-secondary opacity-5 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Loved by <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Leading Companies</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Don't just take our word for it. See what our clients have to say about working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-8 hover:border-accent/30 transition-all duration-300 hover:-translate-y-2 animate-slideUp"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-300 mb-6 leading-relaxed">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-slate-400">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '50+', label: 'Projects Delivered' },
            { number: '98%', label: 'Client Satisfaction' },
            { number: '500K+', label: 'Users Impacted' },
            { number: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <div key={index} className="animate-slideUp" style={{animationDelay: `${index * 0.1}s`}}>
              <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                {stat.number}
              </p>
              <p className="text-slate-400 text-sm sm:text-base mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
