import React from "react";

export default function ContactPage() {
  return (
    <div>
      {/* Header */}
      <nav className="bg-white shadow flex flex-col md:flex-row items-center justify-between px-4 py-2">
        <div className="flex items-center">
          <img src="/images/logo.png" alt="Little Lions Logo" className="h-12 mr-2" />
          <span className="font-bold text-lg">Little Lions Junior School</span>
        </div>
        <div className="flex items-center space-x-6 mt-2 md:mt-0">
          <span className="text-xs text-gray-500">0721633782 / 0717539365</span>
          <span className="text-xs text-gray-500">littlelionsjunior@gmail.com</span>
          <span className="text-xs text-gray-500">Olympic</span>
        </div>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#home" className="hover:text-emerald-800">Home</a>
          <a href="#about" className="hover:text-emerald-800">About Us</a>
          <a href="#programs" className="hover:text-emerald-800">Programs</a>
          <a href="#gallery" className="hover:text-emerald-800">Gallery</a>
          <a href="#contact" className="hover:text-emerald-800">Contact Us</a>
          <button className="bg-blue-700 text-white px-3 py-1 rounded">Donate</button>
        </div>
      </nav>

      {/* Contact Section */}
      <section className="py-12 px-4 max-w-3xl mx-auto text-center">
        <h2 className="text-emerald-900 text-2xl font-bold mb-2">
          Get in Touch
        </h2>
        <div className="border-b-4 border-yellow-400 w-28 mx-auto mb-6" />
        <p className="mb-6 text-lg">
          Reach out to us today and discover how Little Lion Junior School can be a part of your child’s journey toward excellence. Let us guide and support them in building a bright future filled with endless possibilities and success!
        </p>
        <button className="bg-emerald-900 text-white font-bold rounded-full px-10 py-3 mb-8 hover:bg-emerald-800 transition">
          EXPLORE NOW
        </button>
        {/* Contact Form */}
        <form className="space-y-4 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              className="border border-emerald-900 rounded p-4 flex-1 text-lg"
              type="text"
              placeholder="Your Name"
              required
            />
            <input
              className="border border-emerald-900 rounded p-4 flex-1 text-lg"
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <input
            className="border border-emerald-900 rounded p-4 w-full text-lg"
            type="text"
            placeholder="Subject"
            required
          />
          <textarea
            className="border border-emerald-900 rounded p-4 w-full text-lg"
            rows={5}
            placeholder="Message"
            required
          />
          <button
            type="submit"
            className="bg-emerald-900 text-white font-bold rounded-full px-10 py-3 mt-2 hover:bg-emerald-800 transition"
          >
            SEND MESSAGE
          </button>
        </form>
      </section>

      {/* Map Placeholder */}
      <section className="bg-gray-200 py-20 my-12 text-center">
        <h2 className="text-4xl font-extrabold text-pink-600">EMBED MAP</h2>
      </section>

      {/* Gallery */}
      <section className="py-8 bg-white">
        <div className="flex flex-wrap justify-center gap-4">
          <img src="/images/gallery1.jpg" alt="Gallery 1" className="w-48 h-32 object-cover rounded shadow" />
          <img src="/images/gallery2.jpg" alt="Gallery 2" className="w-48 h-32 object-cover rounded shadow" />
          <img src="/images/gallery3.jpg" alt="Gallery 3" className="w-48 h-32 object-cover rounded shadow" />
          <img src="/images/gallery4.jpg" alt="Gallery 4" className="w-48 h-32 object-cover rounded shadow" />
          <img src="/images/gallery5.jpg" alt="Gallery 5" className="w-48 h-32 object-cover rounded shadow" />
          <img src="/images/gallery6.jpg" alt="Gallery 6" className="w-48 h-32 object-cover rounded shadow" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-100 py-8 mt-12">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between gap-8 px-4">
          <div className="flex-1 min-w-[200px]">
            <img src="/images/logo.png" alt="Little Lions Logo" className="h-12 mb-2" />
            <p className="text-sm text-gray-700">
              Welcome to Little Lion Junior School, where education inspires and empowers every student to excel. We foster a collaborative community that makes a difference. Our CBC curriculum blends tradition with innovation, preparing students for a global future. Explore our programs, values, and vibrant community.
            </p>
          </div>
          <div className="flex-1 min-w-[200px]">
            <h4 className="font-semibold mb-2">CONTACT INFO</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li><span role="img" aria-label="loc">📍</span> Olympic</li>
              <li><span role="img" aria-label="phone">📞</span> 0721633782 / 0717539365</li>
              <li><span role="img" aria-label="email">✉️</span> littlelionsjunior@gmail.com</li>
              <li><span role="img" aria-label="clock">⏰</span> 8:00 am - 4:00 pm</li>
            </ul>
          </div>
          <div className="flex-1 min-w-[150px]">
            <h4 className="font-semibold mb-2">QUICK LINKS</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#about" className="hover:underline">About Us</a></li>
              <li><a href="#programs" className="hover:underline">Programs</a></li>
              <li><a href="#admission" className="hover:underline">Admission</a></li>
              <li><a href="#gallery" className="hover:underline">Gallery</a></li>
              <li><a href="#contact" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-gray-400 mt-8">
          &copy; {new Date().getFullYear()} Little Lions Junior School. All rights reserved.
        </div>
      </footer>
    </div>
  );
}