import React from 'react';

const Footer = () => {
  const navLinks = {
    'Product': ['Features', 'Pricing', 'Security', 'API'],
    'Company': ['About', 'Careers', 'Blog', 'Partners'],
    'Support': ['Help Center', 'Contact Us', 'Status'],
  };

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg> },
    { name: 'GitHub', href: '#', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg> },
    { name: 'Dribbble', href: '#', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.648.931c.199.345 1.597 2.178 3.185 4.865A12.49 12.49 0 007.86 10.011c-1.355-.382-2.553-.325-2.774-.314a8.567 8.567 0 012.061-4.71zM5.04 11.236c.223-.009 1.44-.057 2.822.325.211.513.418 1.039.612 1.585-2.904.411-5.46 1.156-5.872 1.258a8.513 8.513 0 01-1.582-5.34c.121-.01.99-.029 2.02-.01zM12 20.525c-2.17 0-4.154-.813-5.662-2.148.152-.216 1.443-1.941 4.48-3.08 1.399 2.57 2.95 4.675 3.189 5A8.687 8.687 0 0112 20.525zM16.96 14.765c-1.588-2.687-3.185-4.52-3.384-4.865.593-1.243 1.033-2.545 1.22-3.882 3.033 1.2 4.38 3.015 4.555 3.25a8.567 8.567 0 01-2.415 5.49z" clipRule="evenodd" /></svg> },
  ];

  return (
    <footer className="bg-green-900 text-pink-500"> {/* Change text color to pink */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
             <a href="#home" className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Oceanica
            </a>
            <p className="text-pink-500 text-base"> {/* Change text color to pink */}
              Riding the waves of innovation.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((item) => (
                <a key={item.name} href={item.href} className="text-pink-500 hover:text-white transition-colors duration-300"> {/* Change text color to pink */}
                  <span className="sr-only">{item.name}</span>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Product</h3>
                <ul className="mt-4 space-y-4">
                    <li><a href="#features" className="text-base text-pink-500 hover:text-white transition-colors duration-300">Features</a></li> {/* Change text color to pink */}
                    <li><a href="#" className="text-base text-pink-500 hover:text-white transition-colors duration-300">Pricing</a></li> {/* Change text color to pink */}
                    <li><a href="#" className="text-base text-pink-500 hover:text-white transition-colors duration-300">Security</a></li> {/* Change text color to pink */}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                    <li><a href="#about" className="text-base text-pink-500 hover:text-white transition-colors duration-300">About</a></li> {/* Change text color to pink */}
                    <li><a href="#" className="text-base text-pink-500 hover:text-white transition-colors duration-300">Careers</a></li> {/* Change text color to pink */}
                    <li><a href="#" className="text-base text-pink-500 hover:text-white transition-colors duration-300">Blog</a></li> {/* Change text color to pink */}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Support</h3>
                <ul className="mt-4 space-y-4">
                    <li><a href="#" className="text-base text-pink-500 hover:text-white transition-colors duration-300">Help Center</a></li> {/* Change text color to pink */}
                    <li><a href="#contact" className="text-base text-pink-500 hover:text-white transition-colors duration-300">Contact Us</a></li> {/* Change text color to pink */}
                    <li><a href="#" className="text-base text-pink-500 hover:text-white transition-colors duration-300">Status</a></li> {/* Change text color to pink */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-base text-pink-500 xl:text-center">&copy; {new Date().getFullYear()} Oceanica, Inc. All rights reserved.</p> {/* Change text color to pink */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;