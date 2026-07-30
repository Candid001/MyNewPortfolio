import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const socialLinks = [
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/Candid001', color: 'hover:text-emerald-300' },
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/mustapha-abdulbasit-339912168/', color: 'hover:text-emerald-300' },
  { icon: FaTwitter, label: 'Twitter', href: 'https://x.com/basit_la', color: 'hover:text-emerald-300' }
];

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

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_cn3vt8l', 
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_hdlzf8h', 
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'lfdQhAvRrnZNfDj4O' 
      )
      .then(
        () => {
          setLoading(false);
          setStatus('success');
          e.target.reset(); // Clean form reset
        },
        (error) => {
          setLoading(false);
          setStatus('error');
          console.error('Email sending failed:', error);
        }
      );
  };

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
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
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
                  name="title"
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
                disabled={loading}
                className="w-full bg-emerald-400 hover:bg-emerald-500 disabled:bg-emerald-400/50 text-slate-950 font-semibold py-3.5 px-6 rounded-xl transition-all duration-200 shadow-lg shadow-emerald-500/10 flex items-center justify-center space-x-2 active:scale-[0.99] hover:scale-[1.01]"
              >
                <Send className="h-5 w-5 stroke-[2.5]" />
                <span>{loading ? 'Sending Message...' : 'Send Message'}</span>
              </button>

              {/* Status Notifications */}
              {status === 'success' && (
                <div className="flex items-center gap-2 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-sm">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                  <span>Your message has been sent successfully! I'll get back to you soon.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-2 p-4 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-400 text-sm">
                  <AlertCircle className="h-5 w-5 flex-shrink-0" />
                  <span>Failed to send message. Please try again or reach out directly via email.</span>
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;