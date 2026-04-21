import React from 'react';
import { motion } from 'motion/react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Zap, Wind, CheckCircle2, Sparkles, Stars } from 'lucide-react';
import { PRODUCTS, DENTISTS } from '../data';

const ToothpasteVis = () => (
  <div className="relative w-full max-w-[450px] flex items-center justify-center py-20">
    {/* Product Box (Packet) */}
    <motion.div
        initial={{ rotateY: -15, rotateX: 10, y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-72 h-[480px] bg-white rounded-xl shadow-[20px_40px_70px_rgba(0,0,0,0.1)] border border-slate-100 dark:bg-slate-900 dark:border-slate-800 transition-all preserve-3d"
    >
        {/* Box Top */}
        <div className="absolute top-0 left-0 w-full h-8 bg-slate-50 border-b border-slate-100 dark:bg-slate-800 dark:border-slate-700 flex items-center justify-center">
            <div className="w-1/2 h-[2px] bg-slate-200 dark:bg-slate-700"></div>
        </div>

        {/* Box Branding */}
        <div className="pt-20 px-10 flex flex-col items-center">
            <div className="bg-[#E60023] w-12 h-12 rounded-lg flex items-center justify-center font-black text-white text-2xl mb-6 shadow-lg shadow-red-200">D</div>
            <div className="text-4xl font-black text-[#E60023] tracking-tighter mb-2">DENTORA</div>
            <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-12">Clinical Series</div>
            
            <div className="w-full space-y-4">
                <div className="h-1 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div 
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#E60023]/20 to-transparent"
                    />
                </div>
                <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest text-center">Formulated for Professionals</div>
            </div>
        </div>

        {/* Box Side (3D effect) */}
        <div className="absolute top-[2%] -right-[30px] w-[30px] h-[96%] bg-slate-100 dark:bg-slate-800 origin-left transform -skew-y-12 border-l border-slate-200 dark:border-slate-700"></div>

        {/* Floating Tube overlapping the box */}
        <motion.div
            initial={{ x: 40, y: 60, rotateZ: 5 }}
            animate={{ y: [60, 40, 60], x: [40, 50, 40] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-20 top-32 w-48 h-[400px] bg-gradient-to-b from-white to-slate-50 rounded-[40px] shadow-2xl border border-white dark:from-slate-900 dark:to-slate-800 dark:border-slate-700 flex flex-col items-center pt-12 overflow-hidden"
        >
            <div className="w-full h-16 bg-slate-900 absolute bottom-0 flex items-center justify-center">
                <div className="text-white text-[10px] font-black uppercase tracking-widest">Premium White</div>
            </div>
            
            {/* Tube Branding */}
            <div className="w-10 h-10 bg-[#E60023] rounded-lg flex items-center justify-center text-white font-black text-xl mb-4 shadow-md">D</div>
            <div className="text-2xl font-black text-[#E60023] tracking-tighter mb-1">DENTORA</div>
            <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-10">Pro Enamel</div>
            
            <div className="w-32 h-1.5 bg-sky-50 dark:bg-slate-700 rounded-full mb-2 overflow-hidden">
                <div className="w-1/2 h-full bg-[#E60023]"></div>
            </div>
            <div className="w-24 h-1.5 bg-emerald-50 dark:bg-slate-700 rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-emerald-400"></div>
            </div>
        </motion.div>
    </motion.div>

    {/* Squeezed fresh toothpaste effect */}
    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-80 h-10 blur-3xl bg-sky-400/20 rounded-full"></div>
  </div>
);

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden dark:bg-slate-950">
      {/* Background Decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-100 rounded-full blur-[120px] opacity-40 -z-10 dark:bg-emerald-900/20"></div>
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-[10px] font-bold uppercase mb-8 dark:bg-emerald-500/10 dark:text-emerald-400">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            New Clinical Formula 2.0
          </div>
          
          <h1 className="text-6xl md:text-7xl font-black text-slate-900 leading-[1.05] mb-8 tracking-tighter dark:text-white">
            Stronger Teeth, <br />
            <span className="text-[#E60023]">Brighter Smile.</span>
          </h1>
          
          <p className="text-xl text-slate-500 mb-10 max-w-lg font-medium leading-relaxed dark:text-slate-400">
            Advanced bio-mineral technology that rebuilds enamel and protects against sensitivity for 24-hour freshness.
          </p>

          <div className="flex flex-wrap gap-5">
            <button
              onClick={() => navigate('/products')}
              className="px-10 py-4.5 bg-[#E60023] text-white font-black rounded-lg text-sm uppercase tracking-widest hover:bg-[#c4001d] transition-all shadow-xl shadow-red-200 active:scale-95 dark:shadow-none"
            >
              Get Started
            </button>
            <button
              onClick={() => navigate('/products')}
              className="px-10 py-4.5 border-2 border-slate-200 text-slate-700 font-bold rounded-lg text-sm uppercase tracking-widest hover:bg-slate-50 transition-all active:scale-95 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-900"
            >
              Explore Series
            </button>
          </div>

          <div className="mt-16 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-100 flex items-center justify-center text-[11px] font-bold shadow-sm dark:border-slate-950 dark:bg-slate-800">
                  {i === 1 ? 'SM' : i === 2 ? 'JW' : 'ER'}
                </div>
              ))}
            </div>
            <div className="text-[13px] font-medium text-slate-500 leading-tight">
              <span className="text-slate-900 font-black italic underline decoration-[#E60023] decoration-2 dark:text-slate-200">98% of Indian Dentists</span> <br />
              recommend Dentora Pro-White
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Main Visualization */}
          <div className="relative w-full max-w-[450px]">
            <ToothpasteVis />

            {/* Floating Analyzer Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-8 -left-8 md:bottom-12 md:-left-12 bg-white/90 backdrop-blur shadow-2xl border border-slate-100 p-6 rounded-[32px] w-[260px] dark:bg-slate-900/90 dark:border-slate-800"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 dark:bg-emerald-500/10">
                  <Stars size={20} />
                </div>
                <div className="text-sm font-black text-slate-900 dark:text-white">AI Smile Analysis</div>
              </div>
              <p className="text-[12px] text-slate-500 leading-relaxed mb-6 font-medium dark:text-slate-400">
                Upload a photo to get a customized dental health plan powered by Gemini.
              </p>
              <button 
                onClick={() => navigate('/analyzer')}
                className="w-full py-3.5 bg-slate-900 text-white text-[11px] font-black rounded-xl uppercase tracking-widest transition-transform hover:bg-slate-800 active:scale-95"
              >
                Analyze Now
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const benefits = [
    { title: 'Cavity Protection', desc: 'Liquid calcium formula fills micro-cavities.', icon: Shield, color: 'bg-red-50 text-[#E60023]' },
    { title: 'Ultra Whitening', desc: 'Visible results in just 7 days of brushing.', icon: Sparkles, color: 'bg-sky-50 text-sky-600' },
    { title: 'Fresh Breath', desc: 'Menthol micro-crystals for 12h freshness.', icon: Wind, color: 'bg-emerald-50 text-emerald-600' },
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-8">
        {benefits.map((benefit, i) => (
          <div key={i} className="flex-1 bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 flex items-center gap-6 hover:shadow-xl hover:-translate-y-1 transition-all dark:bg-slate-800 dark:border-slate-700">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-black flex-shrink-0 ${benefit.color} dark:bg-opacity-10`}>
                <benefit.icon size={24} />
            </div>
            <div>
              <h4 className="text-lg font-black text-slate-900 dark:text-white leading-tight mb-1">{benefit.title}</h4>
              <p className="text-sm text-slate-500 font-medium dark:text-slate-400">{benefit.desc}</p>
            </div>
          </div>
        ))}
        <div className="lg:w-64 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-4">
          <div className="text-4xl font-black text-slate-900 tracking-tighter dark:text-white">15M+</div>
          <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest mt-2 dark:text-slate-400">Happy Smiles in India</div>
          <div className="flex gap-1 mt-3 text-[#E60023]">
            {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill="currentColor" />)}
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturedProducts = () => {
    return (
        <section className="py-32 bg-white dark:bg-slate-950">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-20">
                    <div className="max-w-xl">
                        <h2 className="text-4xl font-black text-slate-900 tracking-tighter dark:text-white mb-4">Professional Essentials.</h2>
                        <p className="text-slate-500 font-medium dark:text-slate-400">Discover clinical-grade formulations tailored to your unique dental needs.</p>
                    </div>
                    <Link to="/products" className="group flex items-center gap-3 text-[#E60023] font-black text-xs uppercase tracking-widest hover:translate-x-2 transition-transform">
                        View Entire Collection <ArrowRight size={18} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {PRODUCTS.slice(0, 4).map((product, i) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative bg-slate-50 rounded-[40px] p-8 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all dark:bg-slate-900 dark:border-slate-800 dark:hover:bg-slate-800"
                        >
                            <div className="relative aspect-square mb-8 overflow-hidden rounded-3xl bg-white dark:bg-slate-950">
                                <img src={product.image} alt={product.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                                <div className="absolute top-4 left-4 bg-[#E60023] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                                    {product.category}
                                </div>
                            </div>
                            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2 tracking-tight group-hover:text-[#E60023] transition-colors">{product.name}</h3>
                            <div className="flex items-center gap-2 mb-6">
                                <div className="flex text-yellow-400">
                                    <Star size={14} fill="currentColor" />
                                </div>
                                <span className="text-sm font-bold text-slate-900 dark:text-white">{product.rating}</span>
                                <span className="text-xs text-slate-400 font-medium">({product.reviewsCount} reviews)</span>
                            </div>
                            <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-slate-700">
                                <span className="text-2xl font-black text-slate-900 dark:text-white">₹{product.price}</span>
                                <Link
                                    to={`/product/${product.id}`}
                                    className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center hover:bg-[#E60023] transition-all shadow-xl shadow-slate-200 dark:shadow-none"
                                >
                                    <ArrowRight size={22} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const DentistBanner = () => {
    return (
        <section className="py-32 relative overflow-hidden bg-slate-950">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="grid grid-cols-12 h-full gap-4">
                    {[...Array(12)].map((_, i) => <div key={i} className="border-r border-slate-700 h-full"></div>)}
                </div>
            </div>

            <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-20">
                <div className="lg:w-1/2">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-red-500/10 text-red-500 rounded-full text-[11px] font-black uppercase tracking-widest mb-10">
                        <CheckCircle2 size={16} /> Verified Professional Network
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black text-white leading-[1.05] tracking-tighter mb-10">
                        Dentist Recommended. <br />Expert Approved.
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                        {[
                            'Clinically tested for 24h plaque control',
                            'Approved by the Global Dental Association',
                            'Zero artificial sweeteners or colors',
                            'Eco-friendly biodegradable packaging'
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="w-6 h-6 rounded-full bg-[#E60023]/20 flex items-center justify-center text-[#E60023] flex-shrink-0 mt-1">
                                    <CheckCircle2 size={14} />
                                </div>
                                <span className="text-slate-400 text-sm font-medium leading-relaxed">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lg:w-1/2">
                    <motion.div
                        initial={{ scale: 0.9, rotate: -2 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        className="bg-white p-12 rounded-[60px] shadow-2xl relative dark:bg-slate-900"
                    >
                        <div className="flex items-center gap-6 mb-10">
                            <img src={DENTISTS[0].image} alt="Dentist" className="w-20 h-20 rounded-[24px] object-cover border-4 border-slate-50 dark:border-slate-800" referrerPolicy="no-referrer" />
                            <div>
                                <h4 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">{DENTISTS[0].name}</h4>
                                <p className="text-[#E60023] text-xs font-black uppercase tracking-widest">{DENTISTS[0].title}</p>
                            </div>
                        </div>
                        <p className="text-3xl font-bold text-slate-800 italic leading-[1.4] mb-10 dark:text-slate-200">
                            "{DENTISTS[0].quote}"
                        </p>
                        <div className="pt-8 border-t border-slate-100 flex items-center justify-between dark:border-slate-800">
                            <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Professional Review</div>
                            <div className="flex gap-1 text-[#E60023]">
                                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export const Home = () => {
  return (
    <div className="bg-white">
      <Hero />
      <Benefits />
      <FeaturedProducts />
      <DentistBanner />
    </div>
  );
};
