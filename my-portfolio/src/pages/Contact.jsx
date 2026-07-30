import React from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    // Simple mailto fallback
    const mailtoLink = `mailto:abdulbasitmustapha1@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'abdulbasitmustapha1@gmail.com',
      href: 'mailto:abdulbasitmustapha1@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+49 1521 4990703',
      href: 'tel:+4915214990703'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Trier, Germany',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Candid001',
      color: 'hover:text-emerald-300'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/mustapha-abdulbasit-339912168/',
      color: 'hover:text-emerald-300'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://x.com/basit_la',
      color: 'hover:text-emerald-300'
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-emerald-400 mx-auto mt-3 rounded-full mb-4" />
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you. 
            Let's create something exceptional together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Contact Information Sidebar */}
          <div className="lg:col-span-1 bg-slate-900/40 border border-slate-800 p-6 sm:p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center space-x-4 text-gray-300 hover:text-white transition-all duration-200 p-3 rounded-xl hover:bg-slate-800/80 group"
                >
                  <div className="p-3 bg-slate-800 rounded-lg text-emerald-400 border border-slate-700 group-hover:border-emerald-500/50 transition-colors flex-shrink-0">
                    <info.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs text-gray-400 font-mono">{info.label}</div>
                    <div className="font-medium text-sm sm:text-base truncate">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-800">
              <h4 className="text-xs font-semibold text-gray-400 mb-4 font-mono tracking-wider">CONNECT WITH ME</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`text-gray-400 ${social.color} transition-all duration-200 p-3 rounded-xl bg-slate-800 border border-slate-700 hover:border-emerald-500/50 hover:scale-105`}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-slate-900/60 p-6 sm:p-8 rounded-2xl border border-slate-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3.5 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-white placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors duration-200"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3.5 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-white placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-3.5 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-white placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors duration-200"
                  placeholder="What's this regarding?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-3.5 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-white placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project or inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-400 hover:bg-emerald-500 text-slate-950 font-semibold py-3.5 px-6 rounded-xl transition-all duration-200 shadow-lg shadow-emerald-500/10 flex items-center justify-center space-x-2 active:scale-[0.99] hover:scale-[1.01]"
              >
                <Send className="h-5 w-5 stroke-[2.5]" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;