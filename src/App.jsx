import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white">
      <Header />
      <main style={{ color: 'pink' }}>
        <Hero />
        <Features />
        <About />
        <Testimonials />
        {/* Removed the text at the end as per user request */}
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;