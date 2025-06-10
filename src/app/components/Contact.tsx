import React from 'react';

export default function Contact() {
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-center text-4xl font-bold text-indigo-800 mb-8">Contact us</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <form className="bg-white p-8 rounded-lg shadow-lg space-y-4">
          <div className="flex space-x-4">
            <input type="text" placeholder="First Name" className="flex-1 border p-2 rounded" />
            <input type="text" placeholder="Last Name" className="flex-1 border p-2 rounded" />
          </div>
          <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
          <input type="tel" placeholder="Phone Number" className="w-full border p-2 rounded" />
          <textarea placeholder="Details" className="w-full border p-2 rounded h-32"></textarea>
          <button type="submit" className="w-full bg-indigo-800 text-white p-3 rounded-full hover:bg-indigo-900 transition">Send inquiry</button>
          <p className="text-gray-500 text-sm text-center">We&apos;ll get back to you in 1-2 business days.</p>
        </form>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="text-indigo-800">📍</div>
            <div>
              <h4 className="font-semibold">Location</h4>
              <p className="text-gray-600">@Kitengela - Nairobi, Kenya</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="text-indigo-800">📞</div>
            <div>
              <h4 className="font-semibold">Give Us A Call</h4>
              <p className="text-gray-600">+254 7111 54602</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="text-indigo-800">✉️</div>
            <div>
              <h4 className="font-semibold">Contact us by email</h4>
              <p className="text-gray-600">support@wispman.net</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}