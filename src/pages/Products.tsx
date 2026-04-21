import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Search, ArrowRight, ShoppingBag, ChevronDown, Filter, SlidersHorizontal, X } from 'lucide-react';
import { PRODUCTS } from '../data';
import { Link } from 'react-router-dom';

export const Products = () => {
    const [search, setSearch] = React.useState('');
    const [category, setCategory] = React.useState('All');
    const [sort, setSort] = React.useState('Featured');

    const categories = ['All', 'Whitening', 'Sensitive', 'Kids', 'Herbal', 'Charcoal'];

    const filteredProducts = PRODUCTS.filter(p => 
        (category === 'All' || p.category === category) &&
        p.name.toLowerCase().includes(search.toLowerCase())
    ).sort((a, b) => {
        if (sort === 'Price: Low-High') return a.price - b.price;
        if (sort === 'Price: High-Low') return b.price - a.price;
        if (sort === 'Rating') return b.rating - a.rating;
        return 0;
    });

    return (
        <div className="bg-white min-h-screen pt-44 pb-24 dark:bg-slate-950">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-20">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 text-sky-700 rounded-full text-[10px] font-black uppercase mb-6 dark:bg-sky-500/10 dark:text-sky-400">
                            Professional Range
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-4 dark:text-white leading-[1.05]">Our Formulations.</h1>
                        <p className="text-slate-500 font-medium text-lg dark:text-slate-400">Explore our dentist-approved collection, scientifically engineered for every smile.</p>
                    </div>

                    <div className="w-full lg:w-auto flex flex-wrap gap-4">
                        <div className="relative flex-1 min-w-[280px]">
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input 
                                type="text"
                                placeholder="Search our series..."
                                className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-14 pr-6 py-4.5 text-sm font-semibold focus:bg-white focus:ring-2 focus:ring-[#E60023]/10 transition-all outline-none dark:bg-slate-900 dark:border-slate-800 dark:text-white"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                        <div className="relative">
                            <select 
                                className="appearance-none bg-slate-50 border border-slate-100 rounded-2xl px-8 py-4.5 text-sm font-black uppercase tracking-widest text-slate-600 outline-none hover:bg-slate-100 transition-colors pr-12 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400"
                                value={sort}
                                onChange={(e) => setSort(e.target.value)}
                            >
                                <option>Featured</option>
                                <option>Price: Low-High</option>
                                <option>Price: High-Low</option>
                                <option>Rating</option>
                            </select>
                            <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Filters Desktop Sidebar */}
                    <aside className="lg:w-72 flex-shrink-0 hidden lg:block">
                        <div className="sticky top-44 space-y-12">
                            <div>
                                <h3 className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-8 dark:text-white flex items-center gap-2">
                                    <Filter size={14} /> Shop By Concern
                                </h3>
                                <div className="space-y-2">
                                    {categories.map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => setCategory(cat)}
                                            className={`w-full text-left px-6 py-3.5 rounded-2xl text-[13px] font-bold transition-all ${
                                                category === cat 
                                                ? 'bg-[#E60023] text-white shadow-xl shadow-red-200' 
                                                : 'text-slate-500 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-white/5'
                                            }`}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="p-8 bg-sky-50 rounded-[32px] border border-sky-100 dark:bg-slate-900 dark:border-slate-800">
                                <h4 className="font-black text-sky-900 text-sm mb-3 dark:text-sky-400 tracking-tight">Expert Advisory</h4>
                                <p className="text-sky-700/70 text-xs mb-6 font-medium leading-relaxed dark:text-slate-400">Not sure? Use our AI Analyzer for a personalized dental plan.</p>
                                <Link to="/analyzer" className="inline-flex items-center gap-2 text-sky-900 font-black text-[10px] uppercase tracking-widest hover:translate-x-1 transition-transform dark:text-white">
                                    Analyze Smile <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>
                    </aside>

                    {/* Mobile Category Scroll */}
                    <div className="lg:hidden flex gap-3 overflow-x-auto pb-6 no-scrollbar">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setCategory(cat)}
                                className={`whitespace-nowrap px-8 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${
                                    category === cat 
                                    ? 'bg-[#E60023] text-white' 
                                    : 'bg-slate-50 text-slate-400 dark:bg-slate-900'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <main className="flex-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
                            <AnimatePresence mode="popLayout">
                                {filteredProducts.map((product, i) => (
                                    <motion.div
                                        layout
                                        key={product.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ delay: (i % 3) * 0.1 }}
                                        className="group relative bg-slate-50 rounded-[40px] p-8 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all dark:bg-slate-900 dark:border-slate-800 dark:hover:bg-slate-800"
                                    >
                                        <div className="relative aspect-square mb-10 overflow-hidden rounded-[32px] bg-white dark:bg-slate-950 flex items-center justify-center">
                                            <img 
                                                src={product.image} 
                                                alt={product.name} 
                                                className="w-4/5 h-4/5 object-contain group-hover:scale-110 transition-transform duration-700" 
                                                referrerPolicy="no-referrer" 
                                            />
                                            <div className="absolute top-5 left-5 bg-[#E60023] text-white text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-full border-2 border-white shadow-sm">
                                                {product.category}
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <Link to={`/product/${product.id}`}>
                                                <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight leading-tight group-hover:text-[#E60023] transition-colors">{product.name}</h3>
                                            </Link>
                                            <div className="flex items-center gap-2">
                                                <div className="flex text-yellow-400">
                                                    <Star size={14} fill="currentColor" />
                                                </div>
                                                <span className="text-[13px] font-bold text-slate-900 dark:text-white uppercase tracking-wider">{product.rating}</span>
                                                <span className="text-xs text-slate-400 font-medium tracking-wide">({product.reviewsCount} verified)</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between mt-10 pt-8 border-t border-slate-200 dark:border-slate-800">
                                            <div>
                                                <div className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">MSRP</div>
                                                <span className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter">₹{product.price}</span>
                                            </div>
                                            <Link
                                                to={`/product/${product.id}`}
                                                className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center hover:bg-[#E60023] transition-all shadow-xl shadow-slate-100 dark:shadow-none"
                                            >
                                                <ArrowRight size={22} />
                                            </Link>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {filteredProducts.length === 0 && (
                            <div className="py-40 text-center">
                                <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-8 text-slate-200 dark:bg-slate-900">
                                    <X size={48} />
                                </div>
                                <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter mb-4">No formulations found.</h2>
                                <p className="text-slate-500 font-medium mb-10">Try refined filters or check our educational resources.</p>
                                <button onClick={() => { setCategory('All'); setSearch(''); }} className="px-10 py-4 bg-slate-900 text-white rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-[#E60023] transition-colors">Clear filters</button>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
};
