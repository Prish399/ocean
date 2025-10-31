import React from 'react';

const Hero = () => {
    const scrollToFeatures = () => {
        const featuresSection = document.getElementById('features');
        if (featuresSection) {
            featuresSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-cyan-500 to-teal-500 z-0"></div>
        <div className="absolute inset-0 bg-black/20 z-10"></div>

        {/* Decorative Blobs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse z-0"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse delay-200 z-0"></div>

        <div className="relative z-20 max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight drop-shadow-lg text-balance">
                Dive into the Digital Ocean
            </h1>
            <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-2xl mx-auto drop-shadow-md text-balance">
                Discover seamless solutions that ripple through your workflow, creating waves of efficiency and innovation. Your journey to digital excellence starts here.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={scrollToFeatures}
                  className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white px-10 py-4 rounded-full font-bold text-lg shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:shadow-[0_0_40px_rgba(147,51,234,0.6)] hover:scale-110 transform transition-all duration-300 active:scale-95"
                >
                    Explore Features
                </button>
                <a href="#contact" className="px-10 py-4 rounded-full font-bold text-lg bg-white/20 text-white backdrop-blur-md border border-white/30 hover:bg-white/30 transform transition-all duration-300 active:scale-95">
                    Contact Us
                </a>
            </div>
        </div>
    </section>
  );
};

export default Hero;