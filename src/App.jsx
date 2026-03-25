import { useState } from 'react';
import { Hero, Services, HowItWorks, RequirementForm, Testimonials, FinalCTA, Footer } from './components';
import './App.css';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="bg-slate-950 text-white overflow-x-hidden">
      {/* Navigation - Fixed header */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-xl z-40 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">
            Genz<span className="bg-gradient-to-r from-red-500 to-cyan-400 bg-clip-text text-transparent">Tech</span>
          </div>
          <button
            onClick={() => setIsFormOpen(true)}
            className="bg-gradient-to-r from-red-600 to-red-700 hover:shadow-lg hover:shadow-red-500/50 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300"
          >
            Get Quotation
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <Hero onFormOpen={() => setIsFormOpen(true)} />
      <Services />
      <HowItWorks />
      <Testimonials />
      <FinalCTA onFormOpen={() => setIsFormOpen(true)} />
      <Footer />

      {/* Form Modal */}
      <RequirementForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
}

export default App;
