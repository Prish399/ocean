import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
             <div className="absolute -top-8 -left-8 w-48 h-48 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
             <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-200"></div>
            <img 
              src="https://picsum.photos/id/1015/800/1000" 
              alt="Mountain landscape representing our mission" 
              className="rounded-3xl shadow-2xl w-full relative z-10"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-base font-semibold text-blue-600 tracking-wider uppercase">Our Story</h2>
            <p className="mt-2 text-4xl md:text-5xl font-black text-gray-900 tracking-tight text-balance">
              Navigating the Tides of Technology
            </p>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Founded on the principle of clarity and power, Oceanica was born from a desire to simplify the complexities of the digital world. We saw a sea of possibility where others saw challenges.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Our mission is to empower businesses of all sizes to harness the full potential of technology, providing them with the tools and support to not just stay afloat, but to command the waves of their industry.
            </p>
             <div className="mt-8">
                <a href="#contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-blue-700 hover:scale-105 transform transition-all duration-300 active:scale-95">
                    Learn More
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;