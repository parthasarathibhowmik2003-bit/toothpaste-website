import React from 'react';
import { motion } from 'motion/react';
import { ARTICLES } from '../data';
import { BookOpen, Clock, User, ArrowRight, Stars } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Education = () => {
  return (
    <div className="bg-white min-h-screen pt-44 pb-24 dark:bg-slate-950">
      {/* Header */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 text-sky-700 rounded-full text-[10px] font-black uppercase mb-6 dark:bg-sky-500/10 dark:text-sky-400">
            Education Series
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-8 dark:text-white leading-[1.05]">Knowledge Hub.</h1>
          <p className="text-xl text-slate-500 font-medium leading-relaxed dark:text-slate-400">
            The latest insights, tips, and clinical research from global oral care experts to help you maintain a healthy, lifelong smile.
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Featured Article */}
        <motion.div 
            whileHover={{ y: -5 }}
            className="relative h-[650px] rounded-[60px] overflow-hidden mb-32 group shadow-2xl shadow-slate-100 dark:shadow-none dark:border dark:border-slate-800"
        >
          <img src={ARTICLES[0].image} alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
          <div className="absolute bottom-16 left-16 right-16">
            <div className="flex items-center gap-6 mb-8">
                <span className="bg-[#E60023] text-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border-2 border-white/20">Featured Insight</span>
                <span className="text-white/70 text-xs font-black flex items-center gap-2 uppercase tracking-widest"><Clock size={16} /> 10 min read</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight max-w-3xl">{ARTICLES[0].title}</h2>
            <p className="text-lg text-white/70 mb-10 max-w-2xl leading-relaxed font-medium">{ARTICLES[0].excerpt}</p>
            <button className="bg-white text-slate-900 px-10 py-5 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-[#E60023] hover:text-white transition-all transform active:scale-95 group/btn">
                Read Full Research
            </button>
          </div>
        </motion.div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
            {ARTICLES.slice(1).map((article, i) => (
                <motion.div 
                    key={article.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col group h-full bg-slate-50 rounded-[48px] p-8 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all dark:bg-slate-900 dark:border-slate-800 dark:hover:bg-slate-800"
                >
                    <div className="relative aspect-[1.4] rounded-[32px] overflow-hidden mb-10 bg-white dark:bg-slate-950">
                        <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                        <div className="absolute top-5 right-5">
                            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg text-[#E60023] dark:bg-slate-900/90 hover:scale-110 transition-transform cursor-pointer">
                                <BookOpen size={20} />
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-3 mb-6 text-[11px] font-black uppercase tracking-widest text-slate-400">
                        <User size={14} className="text-[#E60023]" />
                        <span>{article.author}</span>
                        <span className="text-slate-200 dark:text-slate-700">•</span>
                        <span>{article.date}</span>
                    </div>
                    
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-tight group-hover:text-[#E60023] transition-colors">{article.title}</h3>
                    <p className="text-slate-500 font-medium mb-10 line-clamp-3 leading-relaxed dark:text-slate-400">
                        {article.excerpt}
                    </p>
                    
                    <div className="mt-auto pt-8 border-t border-slate-200 dark:border-slate-800">
                        <Link to={`/education/${article.id}`} className="inline-flex items-center gap-3 text-slate-900 font-black text-[11px] uppercase tracking-widest hover:text-[#E60023] transition-colors group/link dark:text-white dark:hover:text-[#E60023]">
                           Explore Case Study <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            ))}
        </div>

        {/* Newsletter Cleanup */}
        <div className="bg-slate-50 rounded-[60px] p-16 md:p-24 flex flex-col lg:flex-row items-center gap-20 border border-slate-100 dark:bg-slate-900 dark:border-slate-800">
            <div className="lg:w-3/5">
                <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-red-50 text-[#E60023] rounded-full text-[10px] font-black uppercase tracking-widest mb-10 dark:bg-red-500/10">
                    <Stars size={16} /> Exclusive Membership
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-8 dark:text-white italic leading-tight">Join the world's most <br />informed smile community.</h2>
                <p className="text-slate-500 text-lg font-medium leading-relaxed mb-12 max-w-xl dark:text-slate-400">Get clinical research summaries, early-access products, and curated health advice delivered every Tuesday.</p>
                
                <div className="flex flex-col sm:flex-row gap-5">
                    <input 
                        type="email" 
                        placeholder="Expert email address..." 
                        className="flex-1 bg-white border border-slate-200 rounded-[20px] px-8 py-5 text-sm font-bold focus:ring-4 focus:ring-[#E60023]/10 focus:border-[#E60023] transition-all outline-none dark:bg-slate-950 dark:border-slate-800 dark:text-white"
                    />
                    <button className="bg-slate-900 text-white px-12 py-5 rounded-[20px] text-[11px] font-black uppercase tracking-widest hover:bg-[#E60023] shadow-xl shadow-slate-200 transition-all active:scale-95 dark:shadow-none">
                        Subscribe Now
                    </button>
                </div>
            </div>

            <div className="lg:w-2/5 grid grid-cols-2 gap-4">
                {[
                    { label: 'Active Readers', val: '24K+', color: 'text-[#E60023]' },
                    { label: 'Case Studies', val: '400+', color: 'text-sky-600' },
                    { label: 'Expert Authors', val: '80+', color: 'text-emerald-600' },
                    { label: 'Avg Rating', val: '4.95', color: 'text-yellow-600' },
                ].map((stat, i) => (
                    <div key={i} className="bg-white p-8 rounded-[32px] border border-slate-200 text-center dark:bg-slate-950 dark:border-slate-800 transform hover:scale-105 transition-transform">
                        <div className="text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tighter">{stat.val}</div>
                        <div className={`text-[9px] font-black uppercase tracking-widest ${stat.color}`}>{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};
