import React, { useState } from "react";
import { Menu, X, Rocket, Shield, Zap, Mail, Phone, MapPin } from "lucide-react";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="font-sans text-gray-800 scroll-smooth">
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">MyWebsite</h1>
          <div className="hidden md:flex space-x-6">
            <button onClick={() => scrollTo("home")} className="hover:text-blue-600 transition-colors">Home</button>
            <button onClick={() => scrollTo("features")} className="hover:text-blue-600 transition-colors">Features</button>
            <button onClick={() => scrollTo("contact")} className="hover:text-blue-600 transition-colors">Contact</button>
          </div>
          <button onClick={toggleMenu} className="md:hidden">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 flex flex-col space-y-2">
            <button onClick={() => scrollTo("home")} className="hover:text-blue-600 transition-colors">Home</button>
            <button onClick={() => scrollTo("features")} className="hover:text-blue-600 transition-colors">Features</button>
            <button onClick={() => scrollTo("contact")} className="hover:text-blue-600 transition-colors">Contact</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-5xl font-bold mb-6 text-gray-900">Welcome to My Website</h2>
          <p className="text-xl mb-8 text-gray-600 leading-relaxed">
            We're dedicated to creating amazing digital experiences that help businesses grow and succeed in the modern world.
            Our team of experts combines creativity with technical excellence to deliver outstanding results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12">Our Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 border rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="text-blue-600" size={24} />
              </div>
              <h4 className="text-2xl font-bold mb-3">Fast Performance</h4>
              <p className="text-gray-600">
                Optimized for speed with modern technologies and best practices. Experience lightning-fast loading times and smooth interactions.
              </p>
            </div>
            <div className="p-8 border rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-blue-600" size={24} />
              </div>
              <h4 className="text-2xl font-bold mb-3">Secure & Reliable</h4>
              <p className="text-gray-600">
                Built with security in mind. Your data is protected with industry-standard encryption and security measures.
              </p>
            </div>
            <div className="p-8 border rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-blue-600" size={24} />
              </div>
              <h4 className="text-2xl font-bold mb-3">Easy to Use</h4>
              <p className="text-gray-600">
                Intuitive interface designed for the best user experience. Get started quickly with our user-friendly platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12">Contact Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h4 className="text-2xl font-semibold mb-6">Get in Touch</h4>
              <div className="flex items-center space-x-4">
                <Mail className="text-blue-600" size={24} />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">contact@mywebsite.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-blue-600" size={24} />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-blue-600" size={24} />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-600">123 Business Street, Suite 100<br />New York, NY 10001</p>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows="4" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-600">© 2024 MyWebsite. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
