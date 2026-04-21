import React from 'react';
import { motion } from 'motion/react';
import { CreditCard, Truck, ShieldCheck, ArrowRight, Home, Smartphone, Building, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { auth, db, handleFirestoreError } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useAuth } from '../hooks/useAuth';

export const Checkout = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  // Demo values for calculation
  const subtotal = 429;
  const gst = subtotal * 0.18;
  const shipping = 0;
  const total = subtotal + gst + shipping;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
        alert("Please login to place an order.");
        return;
    }

    setLoading(true);
    try {
        const orderData = {
            userId: user.uid,
            items: [
                { productId: 'p1', name: 'Advanced White Sparkle', quantity: 1, price: 249 },
                { productId: 'p3', name: 'Herbal Neem & Clove', quantity: 1, price: 180 }
            ],
            subtotal,
            gst,
            shipping,
            total: Math.round(total),
            status: 'pending',
            createdAt: serverTimestamp()
        };

        await addDoc(collection(db, 'orders'), orderData);
        setSuccess(true);
        setTimeout(() => navigate('/account'), 3000);
    } catch (error) {
        handleFirestoreError(error, 'create', 'orders');
    } finally {
        setLoading(false);
    }
  };

  if (success) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
            <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center"
            >
                <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-green-500/20">
                    <ShieldCheck size={48} className="text-white" />
                </div>
                <h1 className="text-4xl font-black text-gray-900 mb-4 tracking-tighter">Order Success!</h1>
                <p className="text-gray-500 font-medium text-lg">Thank you for choosing Dentora. <br /> Your order will be shipped within 24 hours.</p>
                <p className="mt-8 text-[#E60023] font-bold">Redirecting you to Account...</p>
            </motion.div>
        </div>
    );
  }

  if (!user && !success) {
    return (
      <div className="py-32 text-center bg-white min-h-screen">
          <h2 className="text-2xl font-black mb-4">Please log in to checkout.</h2>
          <p className="text-gray-500 mb-8">We need your account to track your orders.</p>
          <button onClick={() => navigate('/')} className="text-[#E60023] font-bold">Back to Home</button>
      </div>
    );
  }

  return (
    <div className="bg-[#F9FAFB] min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-black text-gray-900 mb-12 tracking-tighter">Complete Checkout.</h1>

        <form onSubmit={handleSubmit} className="space-y-8">
            {/* Delivery Address */}
            <div className="bg-white rounded-[40px] p-10 shadow-sm border border-gray-100">
                <div className="flex items-center space-x-4 mb-10">
                    <div className="w-10 h-10 bg-[#E60023]/10 text-[#E60023] rounded-xl flex items-center justify-center">
                        <Truck size={20} />
                    </div>
                    <h2 className="text-2xl font-black text-gray-900 tracking-tight">Delivery Address</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="md:col-span-2 space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Full Name</label>
                        <input required type="text" placeholder="John Doe" className="w-full bg-gray-50 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#E60023] border-2 border-transparent font-bold transition-all" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Email</label>
                        <input required type="email" placeholder="john@example.com" className="w-full bg-gray-50 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#E60023] border-2 border-transparent font-bold transition-all" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Phone</label>
                        <input required type="tel" placeholder="+91 99999 99999" className="w-full bg-gray-50 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#E60023] border-2 border-transparent font-bold transition-all" />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Address Line</label>
                        <input required type="text" placeholder="House No, Street, Landmark" className="w-full bg-gray-50 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#E60023] border-2 border-transparent font-bold transition-all" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">City</label>
                        <input required type="text" placeholder="Mumbai" className="w-full bg-gray-50 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#E60023] border-2 border-transparent font-bold transition-all" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">PIN Code</label>
                        <input required type="text" placeholder="400001" className="w-full bg-gray-50 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#E60023] border-2 border-transparent font-bold transition-all" />
                    </div>
                </div>
            </div>

            {/* Payment Options */}
            <div className="bg-white rounded-[40px] p-10 shadow-sm border border-gray-100">
                <div className="flex items-center space-x-4 mb-10">
                    <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center">
                        <CreditCard size={20} />
                    </div>
                    <h2 className="text-2xl font-black text-gray-900 tracking-tight">Payment Method</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                    {[
                        { id: 'upi', name: 'UPI / GPay', icon: Smartphone },
                        { id: 'card', name: 'Credit Card', icon: CreditCard },
                        { id: 'net', name: 'Netbanking', icon: Building }
                    ].map(method => (
                        <div key={method.id} className="relative group cursor-pointer">
                            <input type="radio" name="payment" value={method.id} className="peer hidden" defaultChecked={method.id === 'upi'} />
                            <div className="bg-gray-50 border-2 border-transparent p-6 rounded-[24px] text-center peer-checked:border-[#E60023] peer-checked:bg-red-50 transition-all group-hover:bg-gray-100">
                                <method.icon size={24} className="mx-auto mb-4 text-gray-400 peer-checked:text-[#E60023]" />
                                <span className="text-xs font-black uppercase tracking-widest text-gray-600 peer-checked:text-[#E60023]">{method.name}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="p-8 bg-gray-900 rounded-[32px] text-white">
                    <div className="flex justify-between items-center mb-8">
                        <span className="text-xs font-black uppercase tracking-widest opacity-50">Grand Total</span>
                        <span className="text-4xl font-black tracking-tighter">₹848</span>
                    </div>
                    <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full bg-[#E60023] text-white py-5 rounded-2xl text-lg font-bold hover:bg-[#c4001d] transition-all flex items-center justify-center shadow-xl shadow-red-500/20 active:scale-95 group disabled:opacity-50"
                    >
                        {loading ? (
                            <>
                                <Loader2 className="mr-3 animate-spin" /> Processing Order...
                            </>
                        ) : (
                            <>
                                Pay & Confirm Order <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                            </>
                        )}
                    </button>
                    <div className="mt-8 flex justify-center items-center space-x-4 opacity-50 text-[10px] font-black uppercase tracking-widest">
                        <div className="flex items-center"><ShieldCheck size={14} className="mr-1" /> Safe Payment</div>
                        <div className="h-4 w-[1px] bg-white/20"></div>
                        <div>No Extra Charges</div>
                    </div>
                </div>
            </div>
        </form>
      </div>
    </div>
  );
};
