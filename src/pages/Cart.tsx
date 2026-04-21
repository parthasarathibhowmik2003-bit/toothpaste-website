import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, X, Plus, Minus, Trash2, ArrowRight, ShieldCheck, CreditCard } from 'lucide-react';
import { PRODUCTS } from '../data';
import { Link } from 'react-router-dom';

export const Cart = () => {
  const [items, setItems] = React.useState([
    { productId: 'p1', quantity: 1, price: 249 },
    { productId: 'p3', quantity: 2, price: 180 }
  ]);

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const gst = subtotal * 0.18;
  const shipping = subtotal > 500 ? 0 : 40;
  const total = subtotal + gst + shipping;

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.productId !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setItems(items.map(item => 
      item.productId === id 
        ? { ...item, quantity: Math.max(1, item.quantity + delta) } 
        : item
    ));
  };

  return (
    <div className="bg-[#F9FAFB] min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-black text-gray-900 mb-12 tracking-tighter">Your Bag.</h1>

        {items.length > 0 ? (
            <div className="flex flex-col lg:flex-row gap-12">
            {/* Items List */}
            <div className="lg:w-2/3 space-y-6">
                <AnimatePresence mode="popLayout">
                    {items.map(item => {
                        const product = PRODUCTS.find(p => p.id === item.productId);
                        if (!product) return null;
                        return (
                            <motion.div
                                layout
                                key={item.productId}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="bg-white rounded-[32px] p-6 md:p-8 flex items-center shadow-sm border border-gray-100 group"
                            >
                                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-50 rounded-2xl flex-shrink-0 overflow-hidden">
                                    <img src={product.image} alt={product.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                                </div>
                                
                                <div className="ml-6 md:ml-10 flex-1">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-1">{product.name}</h3>
                                            <p className="text-sm font-bold text-[#E60023] uppercase tracking-widest">{product.category}</p>
                                        </div>
                                        <button 
                                            onClick={() => removeItem(item.productId)}
                                            className="p-2 text-gray-300 hover:text-[#E60023] transition-colors"
                                        >
                                            <Trash2 size={20} />
                                        </button>
                                    </div>
                                    
                                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                                        <div className="flex items-center bg-gray-50 rounded-xl p-1">
                                            <button 
                                                onClick={() => updateQuantity(item.productId, -1)}
                                                className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-lg transition-colors"
                                            >
                                                <Minus size={16} />
                                            </button>
                                            <span className="w-10 text-center font-bold">{item.quantity}</span>
                                            <button 
                                                onClick={() => updateQuantity(item.productId, 1)}
                                                className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-lg transition-colors"
                                            >
                                                <Plus size={16} />
                                            </button>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-xs font-bold text-gray-400 block mb-1">Total</span>
                                            <span className="text-2xl font-black text-gray-900 tracking-tighter">₹{item.price * item.quantity}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* Summary */}
            <div className="lg:w-1/3">
                <div className="bg-white rounded-[40px] p-10 shadow-xl shadow-gray-200/50 sticky top-32 border border-gray-100">
                    <h2 className="text-2xl font-black text-gray-900 mb-8 border-b border-gray-100 pb-6">Order Summary</h2>
                    
                    <div className="space-y-4 mb-8">
                        <div className="flex justify-between text-sm font-bold text-gray-500">
                            <span>Subtotal</span>
                            <span className="text-gray-900">₹{subtotal}</span>
                        </div>
                        <div className="flex justify-between text-sm font-bold text-gray-500">
                            <span>GST (18%)</span>
                            <span className="text-gray-900">₹{gst.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm font-bold text-gray-500">
                            <span>Shipping</span>
                            <span className="text-gray-900">{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-gray-100 mb-10">
                        <div className="flex justify-between items-end">
                            <span className="text-lg font-bold text-gray-900 uppercase tracking-widest">Total</span>
                            <span className="text-4xl font-black text-[#E60023] tracking-tighter">₹{total.toFixed(0)}</span>
                        </div>
                    </div>

                    <Link
                        to="/checkout"
                        className="w-full bg-gray-900 text-white py-5 rounded-2xl text-lg font-bold flex items-center justify-center hover:bg-[#E60023] transition-all shadow-xl hover:shadow-red-500/20 active:scale-95 group"
                    >
                        Checkout Now <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                    </Link>

                    <div className="mt-10 space-y-4">
                        <div className="flex items-center text-xs font-bold text-gray-400">
                            <ShieldCheck size={16} className="text-green-500 mr-2" />
                            Secure 256-bit SSL encrypted payment
                        </div>
                        <div className="flex items-center text-xs font-bold text-gray-400">
                            <CreditCard size={16} className="text-[#E60023] mr-2" />
                            UPI, Cards, and Netbanking accepted
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ) : (
            <div className="py-24 text-center bg-white rounded-[50px] border border-gray-100 shadow-sm">
                <div className="w-32 h-32 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-8 text-gray-200">
                    <ShoppingBag size={48} />
                </div>
                <h2 className="text-3xl font-black text-gray-900 mb-4">Your bag is empty.</h2>
                <p className="text-gray-400 max-w-sm mx-auto mb-10 leading-relaxed font-medium">It looks like you haven't added anything to your bag yet. Your perfect smile is just a click away.</p>
                <Link 
                    to="/products"
                    className="bg-[#E60023] text-white px-10 py-4 rounded-full font-bold hover:bg-[#c4001d] transition-all inline-block shadow-lg shadow-red-500/20"
                >
                    Start Shopping
                </Link>
            </div>
        )}
      </div>
    </div>
  );
};
