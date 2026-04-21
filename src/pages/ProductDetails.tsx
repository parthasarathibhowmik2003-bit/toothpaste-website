import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star, CheckCircle2, ShieldCheck, Truck, RefreshCcw, ShoppingCart, ArrowLeft, Plus, Minus } from 'lucide-react';
import { PRODUCTS } from '../data';

const BrandedPacket = ({ product }: { product: any }) => (
  <div className="relative w-full aspect-square flex items-center justify-center bg-slate-50 dark:bg-slate-900 rounded-[40px] overflow-hidden border border-slate-100 dark:border-slate-800">
    {/* Floating Product Packet Mockup */}
    <motion.div 
        initial={{ rotateY: -20, rotateX: 10 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative w-48 h-[380px] bg-white rounded-lg shadow-[25px_50px_100px_rgba(0,0,0,0.15)] dark:bg-slate-950 flex flex-col items-center pt-16 border border-slate-100 dark:border-slate-800"
    >
        {/* Branding on Packet */}
        <div className="w-10 h-10 bg-[#E60023] rounded-lg flex items-center justify-center text-white font-black text-xl mb-4 shadow-lg shadow-red-200">D</div>
        <div className="text-2xl font-black text-[#E60023] tracking-tighter mb-1">DENTORA</div>
        <div className="text-[7px] font-black text-slate-400 uppercase tracking-[0.3em] mb-12">Clinical Precision</div>
        
        <div className="px-6 text-center">
            <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase leading-tight mb-2">{product.name}</h3>
            <div className="w-full h-[1px] bg-slate-100 dark:bg-slate-800 mb-2"></div>
            <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">{product.category} Series</p>
        </div>

        {/* 3D Side panels */}
        <div className="absolute top-[1.5%] -right-[24px] w-[24px] h-[97%] bg-slate-100 dark:bg-slate-800 origin-left transform -skew-y-12 border-l border-slate-200 dark:border-slate-700"></div>

        {/* Squeezed Tube Mockup */}
        <motion.div 
            initial={{ x: 30, y: 120, rotate: 10 }}
            animate={{ x: 40, y: 110 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
            className="absolute -right-12 bottom-20 w-32 h-[220px] bg-gradient-to-b from-white to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-[24px] shadow-xl border border-white dark:border-slate-700 flex flex-col items-center pt-6 px-4 overflow-hidden"
        >
            <div className="w-8 h-8 bg-slate-900 absolute top-0 rounded-b-lg"></div>
            <div className="mt-8 text-[12px] font-black text-[#E60023] tracking-tighter">DENTORA</div>
            <div className="text-[6px] font-black text-slate-400 uppercase tracking-widest text-center mt-1">{product.name}</div>
        </motion.div>
    </motion.div>

    {/* Actual product image as a subtle background element if needed, or just clinical background */}
    <div className="absolute inset-0 opacity-5 pointer-events-none">
        <img src={product.image} alt="Background" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
    </div>
  </div>
);

export const ProductDetails = () => {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id);
  const [quantity, setQuantity] = React.useState(1);

  if (!product) {
    return (
      <div className="py-32 text-center">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <Link to="/products" className="text-[#E60023] font-bold mt-4 block">Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="bg-white pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 lowercase flex items-center text-sm font-bold text-gray-400 mb-8 space-x-2">
        <Link to="/products" className="hover:text-gray-900 flex items-center">
            <ArrowLeft className="mr-2" size={16} /> Shop
        </Link>
        <span>/</span>
        <span className="text-gray-900">{product.category}</span>
        <span>/</span>
        <span className="text-gray-900">{product.name}</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Gallery */}
          <div className="lg:w-1/2">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
            >
              <BrandedPacket product={product} />
            </motion.div>
            
            <div className="grid grid-cols-4 gap-4 mt-6">
                {[product.image, product.image, product.image, product.image].map((img, i) => (
                    <div key={i} className="aspect-square bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 cursor-pointer overflow-hidden p-4 opacity-60 hover:opacity-100 transition-opacity">
                        <img src={img} alt="Thumb" className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal grayscale hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
                    </div>
                ))}
            </div>
          </div>

          {/* Info */}
          <div className="lg:w-1/2">
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
            >
                <div className="flex items-center space-x-2 mb-6">
                    <span className="bg-[#E60023]/10 text-[#E60023] text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest">{product.category} Expert</span>
                    <div className="flex items-center text-yellow-400 bg-yellow-50 px-3 py-1 rounded-full">
                        <Star size={14} fill="currentColor" className="mr-1" />
                        <span className="text-xs font-bold text-gray-900">{product.rating}</span>
                    </div>
                </div>

                <h1 className="text-5xl font-black text-gray-900 mb-6 leading-tight tracking-tighter">{product.name}</h1>
                <p className="text-xl text-gray-500 leading-relaxed mb-8">{product.description}</p>

                <div className="flex items-end space-x-4 mb-10">
                    <span className="text-5xl font-black text-gray-900 tracking-tighter">₹{product.price}</span>
                    <span className="text-lg font-bold text-gray-400 line-through mb-1">₹{product.price + 100}</span>
                    <span className="text-sm font-bold text-green-500 mb-1">Save 25%</span>
                </div>

                {/* Ingredients & Benefits */}
                <div className="grid grid-cols-2 gap-8 mb-12">
                    <div>
                        <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Key Ingredients</h4>
                        <ul className="space-y-3">
                            {product.ingredients.map(ing => (
                                <li key={ing} className="flex items-center text-sm font-bold text-gray-700">
                                    <CheckCircle2 size={16} className="text-[#E60023] mr-2" /> {ing}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Core Benefits</h4>
                        <ul className="space-y-3">
                            {product.benefits.map(ben => (
                                <li key={ben} className="flex items-center text-sm font-bold text-gray-700">
                                    <div className="w-1.5 h-1.5 bg-[#E60023] rounded-full mr-3" /> {ben}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Purchase Actions */}
                <div className="flex items-center space-x-6 mb-12">
                    <div className="flex items-center bg-gray-100 rounded-2xl p-1">
                        <button 
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            className="w-12 h-12 flex items-center justify-center hover:bg-white rounded-xl transition-colors text-gray-600"
                        >
                            <Minus size={20} />
                        </button>
                        <span className="w-12 text-center font-black text-xl text-gray-900">{quantity}</span>
                        <button 
                            onClick={() => setQuantity(quantity + 1)}
                            className="w-12 h-12 flex items-center justify-center hover:bg-white rounded-xl transition-colors text-gray-600"
                        >
                            <Plus size={20} />
                        </button>
                    </div>

                    <button className="flex-1 bg-[#E60023] text-white py-5 rounded-[20px] text-lg font-bold hover:bg-[#c4001d] transition-all flex items-center justify-center shadow-xl shadow-red-500/20 active:scale-95">
                        <ShoppingCart className="mr-3" size={24} /> Add to Cart — ₹{product.price * quantity}
                    </button>
                </div>

                {/* Logistics Info */}
                <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-8 mb-12">
                    <div className="flex flex-col items-center text-center">
                        <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center mb-3 text-gray-400">
                            <Truck size={20} />
                        </div>
                        <span className="text-[10px] font-black uppercase text-gray-400">Fast Delivery</span>
                    </div>
                    <div className="flex flex-col items-center text-center border-x border-gray-100 px-4">
                        <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center mb-3 text-gray-400">
                            <ShieldCheck size={20} />
                        </div>
                        <span className="text-[10px] font-black uppercase text-gray-400">Dentist Approved</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center mb-3 text-gray-400">
                            <RefreshCcw size={20} />
                        </div>
                        <span className="text-[10px] font-black uppercase text-gray-400">Easy Returns</span>
                    </div>
                </div>

                {/* Reviews Section */}
                <div className="space-y-8">
                    <div className="flex justify-between items-center">
                        <h3 className="text-2xl font-black text-gray-900 tracking-tight">Customer Reviews</h3>
                        <button className="text-[#E60023] font-bold text-sm hover:underline">Write a Review</button>
                    </div>

                    {[
                        { name: "Anita Kapoor", rating: 5, date: "2 days ago", comment: "Best whitening toothpaste I've ever used. Noticeable difference in just a week!" },
                        { name: "Rahul V.", rating: 4, date: "1 week ago", comment: "Great freshness, but the tube size could be a bit larger for the price." },
                        { name: "Dr. Mike", rating: 5, date: "2 weeks ago", comment: "As a dentist, I highly recommend this formula for its enamel-safe polishing." }
                    ].map((review, i) => (
                        <div key={i} className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                                    <div className="flex text-yellow-400 mt-1">
                                        {[...Array(review.rating)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                                    </div>
                                </div>
                                <span className="text-xs font-bold text-gray-400">{review.date}</span>
                            </div>
                            <p className="text-sm text-gray-500 leading-relaxed font-medium">"{review.comment}"</p>
                        </div>
                    ))}
                    
                    <button className="w-full py-4 border-2 border-gray-100 rounded-2xl text-xs font-black uppercase tracking-widest text-gray-400 hover:bg-gray-50 transition-colors">
                        View All {product.reviewsCount} Reviews
                    </button>
                </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
