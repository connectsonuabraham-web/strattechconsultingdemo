/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Phone, 
  Mail, 
  Linkedin, 
  Facebook, 
  Youtube, 
  ChevronDown, 
  Menu, 
  ArrowRight, 
  Star,
  MapPin,
  Send,
  Globe,
  Users,
  Briefcase,
  TrendingUp,
  Layout,
  MessageSquare,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans text-slate-900 selection:bg-brand-light selection:text-white">
      {/* Top Thin Bar */}
      <div className="bg-brand-dark text-white py-2 px-4 md:px-8 flex justify-between items-center text-sm">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-brand-light" />
            <span>615-624-0312</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2">
            <Mail size={14} className="text-brand-light" />
            <span>Jason@strattechconsulting.com</span>
          </div>
          <div className="flex items-center gap-3 border-l border-slate-700 pl-6">
            <Linkedin size={16} className="hover:text-brand-light cursor-pointer transition-colors" />
            <Facebook size={16} className="hover:text-brand-light cursor-pointer transition-colors" />
            <Youtube size={16} className="hover:text-brand-light cursor-pointer transition-colors" />
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm py-4 px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="flex flex-col leading-tight">
            <span className="font-display font-bold text-xl tracking-tight text-brand-blue">STRATTECH</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-semibold">Consulting</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-8 font-medium text-slate-600">
          <a href="#" className="text-brand-light hover:text-brand-light transition-colors">Home</a>
          <div className="flex items-center gap-1 cursor-pointer hover:text-brand-light transition-colors group">
            Our Service <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-brand-light transition-colors group">
            About Strattech <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
          </div>
          <a href="#" className="hover:text-brand-light transition-colors">Contact Us</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="lg:hidden text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu size={24} />
          </button>
          <button className="hidden sm:block bg-brand-blue hover:bg-brand-dark text-white px-6 py-2.5 rounded-md font-semibold transition-all transform hover:scale-105 active:scale-95">
            Learn More
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/office-professional/1920/1080" 
            alt="Hero Background" 
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl px-4">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[0.3em] text-sm font-semibold mb-4 text-brand-light"
          >
            Where Strategy And Technology Converge
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight"
          >
            Leaders in Talent Consulting
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button className="bg-brand-light hover:bg-blue-600 text-white px-8 py-4 rounded-md font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-500/20">
              Learn More <ArrowRight size={18} />
            </button>
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone size={20} />
              </div>
              <div className="text-left">
                <p className="text-xs uppercase font-bold opacity-80">Call Us Now</p>
                <p className="font-bold text-lg">615-624-0312</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Strip */}
      <div className="bg-brand-blue text-white py-6 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-8 whitespace-nowrap min-w-max">
          {[
            { icon: <Globe size={20} />, text: "ENTERPRISE TA" },
            { icon: <TrendingUp size={20} />, text: "SMB SERVICES" },
            { icon: <Users size={20} />, text: "SALES/CUSTOMER CONSULTING" },
            { icon: <Layout size={20} />, text: "PRODUCT DESIGN" },
            { icon: <ShieldCheck size={20} />, text: "ADVISORY RELATIONSHIPS" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand-light transition-colors">
                {item.icon}
              </div>
              <span className="text-xs font-bold tracking-wider">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-brand-blue font-display font-bold text-3xl md:text-4xl">StratTech Talent Consulting and Advisory</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/man-phone/800/600" 
              alt="Consulting" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h3 className="text-brand-blue font-display font-bold text-3xl mb-6">Comprehensive Business Consulting Services</h3>
            <p className="text-slate-600 leading-relaxed mb-8 text-lg">
              StratTech Consulting was built on Talent Acquisition Advisory & Consulting but also offers a wide range of business consulting services, including strategic planning, leadership coaching, and HR consulting expertise. With deep experience working with both SMB and Fortune 100 companies, we provide end-to-end strategy development, technology selection, data strategy, and change management to help our clients achieve operational excellence.
            </p>
            <div className="flex flex-wrap items-center gap-8">
              <button className="bg-brand-blue hover:bg-brand-dark text-white px-8 py-3.5 rounded-md font-bold flex items-center gap-2 transition-all">
                Learn More <ArrowRight size={18} />
              </button>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center text-white">
                  <Phone size={20} />
                </div>
                <div className="text-left">
                  <p className="text-xs uppercase font-bold text-slate-500">Call Us Now</p>
                  <p className="font-bold text-brand-blue text-lg">615-624-0312</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transform Section */}
      <section className="py-24 bg-slate-50 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-[2px] bg-brand-light"></div>
              <span className="text-brand-light font-bold text-sm uppercase tracking-widest">Hello</span>
            </div>
            <h3 className="text-brand-blue font-display font-bold text-4xl mb-6 leading-tight">Transform Your Business with StratTech Consulting</h3>
            <p className="text-slate-600 leading-relaxed mb-8 text-lg">
              We offer tailored solutions that will elevate your business to the next level. Let's work together to achieve your goals.
            </p>
            <button className="bg-brand-blue hover:bg-brand-dark text-white px-8 py-3.5 rounded-md font-bold flex items-center gap-2 transition-all">
              Find out more <ArrowRight size={18} />
            </button>
          </div>
          <div className="order-1 md:order-2 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/office-team/800/600" 
              alt="Transform" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 bg-brand-dark text-white px-4 md:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-[2px] bg-brand-light"></div>
              <span className="text-brand-light font-bold text-sm uppercase tracking-widest">Our Services</span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl">Discover Business Services</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Enterprise TA", icon: <Briefcase size={24} /> },
              { title: "SMB Services", icon: <TrendingUp size={24} /> },
              { title: "TA Leadership", icon: <Users size={24} /> },
              { title: "Sales Advisory", icon: <TrendingUp size={24} /> },
              { title: "Strategic Advisory", icon: <Globe size={24} /> },
              { title: "Business Consulting", icon: <Briefcase size={24} /> }
            ].map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-brand-light/10 border border-white/10 p-8 rounded-xl flex items-center justify-between group cursor-pointer hover:bg-brand-light/20 transition-all"
              >
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-xl bg-brand-light flex items-center justify-center text-white shadow-lg shadow-brand-light/20">
                    {service.icon}
                  </div>
                  <h4 className="font-bold text-xl">{service.title}</h4>
                </div>
                <ArrowRight size={20} className="text-brand-light group-hover:translate-x-2 transition-transform" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Relationships */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto bg-slate-50 rounded-[40px] p-12 md:p-20">
          <h2 className="text-center text-brand-blue font-display font-bold text-3xl mb-16">Advisory Relationships</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
              <div key={n} className="bg-white p-6 rounded-2xl shadow-sm flex items-center justify-center hover:shadow-md transition-shadow grayscale hover:grayscale-0">
                <img 
                  src={`https://picsum.photos/seed/logo-${n}/200/100`} 
                  alt={`Client ${n}`} 
                  className="max-h-12 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brand-blue text-white px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase font-bold tracking-widest mb-2 opacity-80">Client Success Stories</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl">Client Success Stories</h2>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1 bg-white/10 p-8 rounded-3xl border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h4 className="font-bold leading-tight">StratTech Talent Consulting and Advisory</h4>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-yellow-400 font-bold">5.0</span>
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map(s => <Star key={s} size={12} fill="currentColor" />)}
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm opacity-80 mb-6">Based on 13 reviews</p>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xs font-bold">powered by</span>
                <span className="text-lg font-bold">Google</span>
              </div>
              <button className="w-full bg-brand-light hover:bg-white hover:text-brand-blue py-3 rounded-full font-bold transition-all text-sm">
                review us on Google
              </button>
            </div>

            <div className="lg:col-span-3 grid md:grid-cols-3 gap-6">
              {[
                { name: "Tony Nelan", role: "a year ago", text: "I've been working with Talent Acquisition leaders for almost a decade in my capacity as a leader at Indeed. It's a market characterized by..." },
                { name: "Byron Slosar", role: "a year ago", text: "Jason has been instrumental as an advisor to our company, particularly as he carries an immense amount of institutional knowledge and..." },
                { name: "Yves Lermusiaux", role: "a year ago", text: "Jason's strategic insights and deep understanding of the talent landscape have been invaluable to our growth and success..." }
              ].map((t, i) => (
                <div key={i} className="bg-white text-slate-800 p-8 rounded-3xl relative">
                  <div className="absolute top-6 right-6">
                    <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-4 w-auto" />
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold">
                      {t.name[0]}
                    </div>
                    <div>
                      <h5 className="font-bold">{t.name}</h5>
                      <p className="text-xs text-slate-500">{t.role}</p>
                    </div>
                  </div>
                  <div className="flex text-yellow-500 mb-4">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed italic">"{t.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 -mb-20 relative z-20">
        <div className="bg-gradient-to-r from-brand-blue to-brand-light rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <h2 className="text-white font-display font-bold text-4xl md:text-5xl">Let's Work Together</h2>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <button className="bg-brand-dark hover:bg-black text-white px-10 py-4 rounded-xl font-bold flex items-center gap-2 transition-all">
              Let's Start <ArrowRight size={20} />
            </button>
            <div className="flex items-center gap-4 text-white">
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                <Phone size={24} />
              </div>
              <div className="text-left">
                <p className="text-xs uppercase font-bold opacity-80">Call Us Now</p>
                <p className="font-bold text-2xl">615-624-0312</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="pt-40 pb-24 px-4 md:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-brand-blue font-display font-bold text-5xl mb-12">Free Consultation</h2>
            <button className="bg-brand-dark hover:bg-black text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all mb-16">
              Book time with me <ArrowRight size={20} />
            </button>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-brand-blue flex items-center justify-center text-white">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold text-slate-500">EMAIL</p>
                  <p className="font-bold text-brand-blue text-lg">Jason@strattechconsulting.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-brand-blue flex items-center justify-center text-white">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold text-slate-500">PHONE</p>
                  <p className="font-bold text-brand-blue text-lg">615-624-0312</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[40px] shadow-xl border border-slate-100">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Name</label>
                  <input type="text" placeholder="Your Name" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-light transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Email</label>
                  <input type="email" placeholder="Your Email" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-light transition-all" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Phone</label>
                  <input type="tel" placeholder="Your Phone" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-light transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Company Name</label>
                  <input type="text" placeholder="Your Company" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-light transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                <textarea rows={4} placeholder="Write Your Message Here" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-light transition-all resize-none"></textarea>
              </div>
              <button className="w-full bg-brand-light hover:bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg transition-all shadow-lg shadow-blue-500/20">
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark text-white pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <h4 className="font-display font-bold text-2xl mb-8">Hours</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex justify-between"><span>Mon</span> <span>09:00 am - 05:00 pm</span></li>
              <li className="flex justify-between"><span>Tue</span> <span>09:00 am - 05:00 pm</span></li>
              <li className="flex justify-between"><span>Wed</span> <span>09:00 am - 05:00 pm</span></li>
              <li className="flex justify-between"><span>Thu</span> <span>09:00 am - 05:00 pm</span></li>
              <li className="flex justify-between"><span>Fri</span> <span>09:00 am - 05:00 pm</span></li>
              <li className="flex justify-between"><span>Sat</span> <span>Closed</span></li>
              <li className="flex justify-between"><span>Sun</span> <span>Closed</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-2xl mb-8">Company</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-brand-light transition-colors">My Blog</a></li>
              <li><a href="#" className="hover:text-brand-light transition-colors">Podcasts and Webinars</a></li>
              <li><a href="#" className="hover:text-brand-light transition-colors">About Strattech</a></li>
              <li><a href="#" className="hover:text-brand-light transition-colors">About Jason Pistulka</a></li>
              <li><a href="#" className="hover:text-brand-light transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-brand-light transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-2xl mb-8">Our Services</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-brand-light transition-colors">TA Leadership</a></li>
              <li><a href="#" className="hover:text-brand-light transition-colors">SMB Services</a></li>
              <li><a href="#" className="hover:text-brand-light transition-colors">Enterprise TA</a></li>
              <li><a href="#" className="hover:text-brand-light transition-colors">Sales/Customer Consulting</a></li>
              <li><a href="#" className="hover:text-brand-light transition-colors">Product Design Services</a></li>
              <li><a href="#" className="hover:text-brand-light transition-colors">Business Consulting Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-2xl mb-8">Subscribe Newsletter</h4>
            <div className="space-y-4">
              <input type="email" placeholder="Email Address" className="w-full px-6 py-3 rounded-md bg-white/10 border border-white/10 focus:ring-2 focus:ring-brand-light transition-all" />
              <button className="w-full bg-brand-light hover:bg-white hover:text-brand-blue py-3 rounded-md font-bold transition-all uppercase tracking-widest text-sm">
                Subscribe Now
              </button>
            </div>
            <div className="mt-8">
              <p className="text-sm font-bold mb-4">Social Share:</p>
              <div className="flex gap-4">
                <Linkedin size={20} className="hover:text-brand-light cursor-pointer" />
                <Facebook size={20} className="hover:text-brand-light cursor-pointer" />
                <Youtube size={20} className="hover:text-brand-light cursor-pointer" />
              </div>
            </div>
            <div className="mt-8 rounded-xl overflow-hidden h-32 relative group">
              <img src="https://picsum.photos/seed/map/400/200" alt="Map" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
              <div className="absolute inset-0 bg-brand-blue/20 flex items-center justify-center">
                <button className="bg-white text-brand-blue px-4 py-1.5 rounded-md text-xs font-bold flex items-center gap-1">
                  Maps <ArrowRight size={12} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>Copyright © 2026 <span className="text-white">StratTech Consulting</span> - All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Contact</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
