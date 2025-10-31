import React from 'react';

const testimonials = [
  {
    quote: "Oceanica's platform transformed our workflow. The speed and reliability are unmatched. It's like having a superpower for our data.",
    name: 'Sarah Johnson',
    title: 'CTO, Innovate Inc.',
    image: 'https://i.pravatar.cc/150?img=1',
  },
  {
    quote: 'The level of support and the scalability of the services have been a game-changer for our startup. We can finally focus on growth.',
    name: 'Michael Chen',
    title: 'Founder, TechSprint',
    image: 'https://i.pravatar.cc/150?img=32',
  },
  {
    quote: 'An intuitive and powerful suite of tools. We migrated our entire infrastructure in a week, and the performance gains were immediate.',
    name: 'Emily Rodriguez',
    title: 'Lead Engineer, DataFlow',
    image: 'https://i.pravatar.cc/150?img=31',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wider uppercase">Testimonials</h2>
          <p className="mt-2 text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Loved by Teams Worldwide
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="backdrop-blur-xl bg-white/80 rounded-3xl shadow-xl p-8 border border-white/20 transform hover:-translate-y-2 transition-transform duration-300">
              <p className="text-gray-700 text-lg leading-relaxed">"{testimonial.quote}"</p>
              <div className="mt-6 flex items-center">
                <img className="h-14 w-14 rounded-full" src={testimonial.image} alt={testimonial.name} loading="lazy" />
                <div className="ml-4">
                  <div className="text-base font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;