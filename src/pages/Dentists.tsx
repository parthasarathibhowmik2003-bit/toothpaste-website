import React from 'react';
import { motion } from 'motion/react';
import { DENTISTS } from '../data';
import { Star, Award, Calendar, ExternalLink, MapPin, Briefcase, Shield } from 'lucide-react';

export const Dentists = () => {
    return (
        <div className="bg-white min-h-screen pt-44 pb-24 dark:bg-slate-950">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                <div className="max-w-3xl mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-[10px] font-black uppercase mb-6 dark:bg-emerald-500/10 dark:text-emerald-400">
                        Global Expert Network
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6 dark:text-white leading-[1.05]">Our Medical Advisory.</h1>
                    <p className="text-xl text-slate-500 font-medium leading-relaxed dark:text-slate-400">Collaborating with the world's leading dentists to push the boundaries of clinical oral health through advanced bio-material science.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {DENTISTS.map((dentist, i) => (
                        <motion.div
                            key={dentist.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-slate-50 rounded-[48px] p-10 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all dark:bg-slate-900 dark:border-slate-800 dark:hover:bg-slate-800"
                        >
                            <div className="flex items-center gap-6 mb-10">
                                <div className="relative">
                                    <img 
                                        src={dentist.image} 
                                        alt={dentist.name} 
                                        className="w-24 h-24 rounded-[32px] object-cover border-4 border-white shadow-md dark:border-slate-800" 
                                        referrerPolicy="no-referrer" 
                                    />
                                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#E60023] rounded-2xl flex items-center justify-center text-white border-4 border-white dark:border-slate-800">
                                        <Shield size={18} />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">{dentist.name}</h3>
                                    <p className="text-[#E60023] text-[11px] font-black uppercase tracking-widest mt-1">{dentist.title}</p>
                                </div>
                            </div>

                            <p className="text-lg font-bold text-slate-700 italic leading-relaxed mb-8 dark:text-slate-200">
                                "{dentist.quote}"
                            </p>

                            <div className="space-y-4 mb-10 font-medium">
                                <div className="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-800">
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Specialization</span>
                                    <span className="text-sm font-black text-slate-900 dark:text-white">{dentist.specialty}</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-800">
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Experience</span>
                                    <span className="text-sm font-black text-slate-900 dark:text-white">{dentist.experience}</span>
                                </div>
                                <div className="flex justify-between items-center py-3">
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Credentials</span>
                                    <span className="text-[11px] font-black text-slate-600 bg-white px-3 py-1 rounded-full border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700">{dentist.qualification}</span>
                                </div>
                            </div>

                            <button className="w-full py-4.5 bg-slate-900 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-[#E60023] transition-all shadow-xl shadow-slate-100 active:scale-95 dark:shadow-none">
                                Request Consultation
                            </button>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-32 p-16 md:p-24 rounded-[60px] bg-slate-950 text-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="grid grid-cols-12 h-full gap-4">
                            {[...Array(12)].map((_, i) => <div key={i} className="border-r border-slate-700 h-full"></div>)}
                        </div>
                    </div>
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-8 italic">"Modern restorative dentistry is about <br />partnership, not just procedure."</h2>
                        <div className="flex flex-col md:flex-row justify-center gap-6">
                            <button className="px-12 py-5 bg-[#E60023] text-white rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-[#c4001d] transition-all shadow-xl shadow-red-900/50">
                                Partner with Dentora
                            </button>
                            <button className="px-12 py-5 border-2 border-slate-800 text-white rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-slate-900 transition-all">
                                Scientific Resources
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
