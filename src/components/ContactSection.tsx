import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log(formData);
    alert("Thanks for your message! We'll be in touch soon.");
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-black relative">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Let's Build Something Epic
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ready to take your brand to the next level? Get in touch with us to
            discuss your project.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900 border border-gray-800 rounded-md px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900 border border-gray-800 rounded-md px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-800 rounded-md px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="3D Animation">3D Animation</option>
                  <option value="3D Renders">3D Renders</option>
                  <option value="Video Editing">Video Editing</option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-gray-900 border border-gray-800 rounded-md px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-medium rounded-md hover:shadow-[0_0_15px_rgba(255,94,20,0.5)] transition-all flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div>
            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-800 rounded-full text-orange-500">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Call Us</h4>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-800 rounded-full text-orange-500">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Email Us</h4>
                    <p className="text-gray-400">info@blazemarketingmedia.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-800 rounded-full text-orange-500">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Visit Us</h4>
                    <p className="text-gray-400">
                      123 Creative Avenue<br />
                      Suite 456<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-medium text-white mb-3">Follow Us</h4>
                <div className="flex gap-4">
                  {['facebook', 'twitter', 'instagram', 'linkedin'].map(social => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-orange-500 hover:text-white transition-colors"
                    >
                      <span className="sr-only">{social}</span>
                      <i className={`fab fa-${social}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}