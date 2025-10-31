import React from 'react';

const featureData = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Blazing Fast Performance',
    description: 'Our infrastructure is optimized for speed, ensuring your applications run faster than ever before.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Ironclad Security',
    description: 'Protect your data with multi-layered security protocols and proactive threat monitoring.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9m-9 9a9 9 0 00-9-9" />
      </svg>
    ),
    title: 'Global Scalability',
    description: 'Effortlessly scale your resources up or down to meet demand, anywhere in the world.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wider uppercase">Core Features</h2>
          <p className="mt-2 text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Why Choose Oceanica?
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            We provide powerful tools and services designed to elevate your digital presence and streamline your operations.
          </p>
        </div>
        <div className="mt-16 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {featureData.map((feature, index) => (
            <div key={index} className="group bg-gray-50 rounded-3xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 cursor-pointer">
              <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="mt-8 text-2xl font-bold text-gray-900">{feature.title}</h3>
              <p className="mt-4 text-base text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;