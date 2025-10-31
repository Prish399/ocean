import React from 'react';

const CTA = () => {
  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-600 z-0"></div>
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      <div className="relative z-20 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight text-balance">
          Ready to Make a Splash?
        </h2>
        <p className="mt-4 text-lg md:text-xl text-blue-100 max-w-2xl mx-auto text-balance">
          Join the thousands of businesses riding the wave of success with Oceanica. Get in touch with our team today to start your journey.
        </p>
        <div className="mt-10">
          <a
            href="mailto:contact@oceanica.dev"
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-100 hover:scale-110 transform transition-all duration-300 active:scale-95"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;