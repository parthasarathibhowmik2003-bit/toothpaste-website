import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, MessageCircle, ArrowRight } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-white pt-32 pb-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h1 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-6xl font-black tracking-tighter text-gray-900 mb-6"
            >
                Let’s Keep in <span className="text-[#E60023]">Touch.</span>
            </motion.h1>
            <p className="text-xl text-gray-400 max-w-2xl font-medium">Need help choosing a product? Or have a question about your order? Our team is available 24/7.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col lg:flex-row gap-24">
            {/* Info */}
            <div className="lg:w-1/3 space-y-16">
                <div className="space-y-12">
                    <div className="flex items-start space-x-6">
                        <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-[#E60023] flex-shrink-0">
                            <Mail size={24} />
                        </div>
                        <div>
                            <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Email Support</h4>
                            <p className="text-xl font-bold text-gray-900">support@dentora.com</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-6">
                        <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-blue-500 flex-shrink-0">
                            <Phone size={24} />
                        </div>
                        <div>
                            <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Phone Lines</h4>
                            <p className="text-xl font-bold text-gray-900">1800-DENTORA</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-6">
                        <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-green-500 flex-shrink-0">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Office Location</h4>
                            <p className="text-xl font-bold text-gray-900">121, Spark Building, <br /> Fifth Avenue, NY 10001</p>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-gray-100">
                    <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-8">Follow Our Freshness</h4>
                    <div className="flex space-x-6">
                        <Instagram className="text-gray-900 hover:text-[#E60023] cursor-pointer" size={24} />
                        <Facebook className="text-gray-900 hover:text-[#E60023] cursor-pointer" size={24} />
                        <Twitter className="text-gray-900 hover:text-[#E60023] cursor-pointer" size={24} />
                        <MessageCircle className="text-gray-900 hover:text-[#E60023] cursor-pointer" size={24} />
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="lg:w-2/3 bg-gray-50 rounded-[40px] p-12 lg:p-20 border border-gray-100">
                <form className="space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="space-y-3">
                            <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">Full Name</label>
                            <input type="text" placeholder="John Doe" className="w-full bg-white rounded-2xl px-6 py-4 focus:outline-none focus:border-[#E60023] border-2 border-transparent font-bold transition-all" />
                        </div>
                        <div className="space-y-3">
                            <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">Email Address</label>
                            <input type="email" placeholder="john@example.com" className="w-full bg-white rounded-2xl px-6 py-4 focus:outline-none focus:border-[#E60023] border-2 border-transparent font-bold transition-all" />
                        </div>
                    </div>
                    <div className="space-y-3">
                        <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">Subject</label>
                        <select className="w-full bg-white rounded-2xl px-6 py-4 focus:outline-none focus:border-[#E60023] border-2 border-transparent font-bold transition-all appearance-none cursor-pointer">
                            <option>Order Status Inquiry</option>
                            <option>Product Recommendation</option>
                            <option>Wholesale Partnerships</option>
                            <option>Reporting a Dental Emergency</option>
                        </select>
                    </div>
                    <div className="space-y-3">
                        <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">Message</label>
                        <textarea rows={6} placeholder="How can we help?" className="w-full bg-white rounded-2xl px-6 py-4 focus:outline-none focus:border-[#E60023] border-2 border-transparent font-bold transition-all resize-none" />
                    </div>
                    <button className="bg-[#E60023] text-white px-12 py-5 rounded-2xl font-bold hover:bg-[#c4001d] transition-all flex items-center shadow-xl shadow-red-500/20 group">
                        Send Message <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                    </button>
                </form>
            </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-40">
             <h2 className="text-4xl font-black text-gray-900 mb-16 tracking-tighter text-center">Frequently Asked <br /> Questions</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                    { q: "Is Dentora safe for children?", a: "Yes, our Junior range is formulated with pediatrician-approved levels of fluoride." },
                    { q: "Do you ship internationally?", a: "Currently we ship to 45 countries including North America, Europe, and Asia." },
                    { q: "Is the toothpaste vegan?", a: "All Dentora products are 100% vegan and cruelty-free." },
                    { q: "How long for whitening results?", a: "Most users notice visible results within 7-10 days of twice-daily use." }
                ].map((faq, i) => (
                    <div key={i} className="bg-white border border-gray-100 p-10 rounded-[32px] hover:shadow-xl transition-shadow group">
                         <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                            <span className="w-8 h-8 bg-gray-50 text-gray-400 text-xs flex items-center justify-center rounded-lg mr-4 group-hover:bg-[#E60023] group-hover:text-white transition-colors">?</span>
                            {faq.q}
                         </h4>
                         <p className="text-gray-500 leading-relaxed font-medium">{faq.a}</p>
                    </div>
                ))}
             </div>
        </div>
      </div>
    </div>
  );
};
