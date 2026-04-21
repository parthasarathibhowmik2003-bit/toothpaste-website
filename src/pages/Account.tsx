import React from 'react';
import { motion } from 'motion/react';
import { User as UserIcon, Package, Heart, MapPin, Settings, LogOut, ArrowRight, Star, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data';
import { auth, db, signOutUser } from '../lib/firebase';
import { useAuth } from '../hooks/useAuth';
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';

export const Account = () => {
  const { user, loading: authLoading } = useAuth();
  const [activeTab, setActiveTab] = React.useState('orders');
  const [orders, setOrders] = React.useState<any[]>([]);
  const [ordersLoading, setOrdersLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchOrders = async () => {
        if (!user) return;
        setOrdersLoading(true);
        try {
            const q = query(
                collection(db, 'orders'), 
                where('userId', '==', user.uid),
                orderBy('createdAt', 'desc')
            );
            const querySnapshot = await getDocs(q);
            const ordersData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setOrders(ordersData);
        } catch (error) {
            console.error("Error fetching orders:", error);
        } finally {
            setOrdersLoading(false);
        }
    };

    if (user && activeTab === 'orders') {
        fetchOrders();
    }
  }, [user, activeTab]);

  if (authLoading) return <div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin text-[#E60023]" size={48} /></div>;
  if (!user) return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-3xl font-black mb-4">Please log in.</h2>
        <p className="text-gray-500 mb-8">You need to be authenticated to view your account details.</p>
        <Link to="/" className="bg-[#E60023] text-white px-8 py-3 rounded-xl font-bold">Return Home</Link>
    </div>
  );

  return (
    <div className="bg-[#F9FAFB] min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar */}
            <aside className="lg:w-80 flex-shrink-0">
                <div className="bg-white rounded-[40px] p-10 shadow-sm border border-gray-100 text-center">
                    <div className="relative w-24 h-24 mx-auto mb-6">
                        <img src={user.photoURL || 'https://picsum.photos/seed/user-p/200/200'} alt="Avatar" className="w-full h-full rounded-[32px] object-cover border-4 border-white shadow-xl" referrerPolicy="no-referrer" />
                        <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-xl flex items-center justify-center text-white border-4 border-white">
                            <Star size={14} fill="currentColor" />
                        </div>
                    </div>
                    <h2 className="text-2xl font-black text-gray-900 tracking-tighter">{user.displayName}</h2>
                    <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest mb-10">{user.email}</p>

                    <nav className="space-y-4">
                        {[
                            { id: 'orders', label: 'Order History', icon: Package },
                            { id: 'wishlist', label: 'My Wishlist', icon: Heart },
                            { id: 'addresses', label: 'Saved Addresses', icon: MapPin },
                            { id: 'settings', label: 'Account Settings', icon: Settings }
                        ].map(item => (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`w-full flex items-center px-6 py-4 rounded-2xl font-bold transition-all ${
                                    activeTab === item.id 
                                    ? 'bg-[#E60023] text-white shadow-xl shadow-red-500/20' 
                                    : 'text-gray-500 hover:bg-gray-50'
                                }`}
                            >
                                <item.icon size={20} className="mr-4" />
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    <button 
                        onClick={() => signOutUser()}
                        className="w-full mt-12 pt-8 border-t border-gray-100 flex items-center justify-center text-gray-400 font-bold hover:text-[#E60023] transition-colors"
                    >
                        <LogOut size={20} className="mr-2" /> Log Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1">
                <div className="bg-white rounded-[50px] p-10 md:p-16 border border-gray-100 min-h-[600px]">
                    {activeTab === 'orders' ? (
                        <>
                            <h3 className="text-3xl font-black text-gray-900 mb-12 tracking-tighter">Your Orders</h3>
                            
                            {ordersLoading ? (
                                <div className="py-20 flex justify-center"><Loader2 className="animate-spin text-[#E60023]" /></div>
                            ) : orders.length > 0 ? (
                                <div className="space-y-6">
                                    {orders.map(order => (
                                        <div key={order.id} className="group p-8 bg-gray-50 rounded-[32px] border border-transparent hover:border-[#E60023]/20 hover:bg-white transition-all">
                                            <div className="flex flex-col md:flex-row justify-between md:items-center gap-6">
                                                <div className="flex items-center space-x-6">
                                                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                                                        <Package className="text-gray-400" size={32} />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-xl font-bold text-gray-900 truncate max-w-[150px] md:max-w-none">{order.id}</h4>
                                                        <p className="text-sm font-bold text-gray-400">
                                                            {order.createdAt?.toDate ? order.createdAt.toDate().toLocaleDateString() : 'Just now'} • {order.items?.length || 0} Items
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-between md:justify-end gap-8">
                                                    <div className="text-right">
                                                        <span className="text-xs font-black uppercase tracking-widest text-[#E60023] mb-1 block">{order.status}</span>
                                                        <span className="text-2xl font-black text-gray-900">₹{order.total}</span>
                                                    </div>
                                                    <button className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center hover:bg-[#E60023] hover:text-white transition-all shadow-sm">
                                                        <ArrowRight size={20} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="py-20 text-center">
                                    <p className="text-gray-400 font-medium">No orders found yet. <Link to="/products" className="text-[#E60023]">Start shopping</Link></p>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-32 text-center">
                            <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-8 text-gray-300">
                                <Settings size={48} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Section under development</h3>
                            <p className="text-gray-400">We're working on making this part perfect for you.</p>
                        </div>
                    )}

                    {/* Upsell for Members */}
                    <div className="mt-24 p-10 rounded-[32px] bg-[#E60023] text-white relative overflow-hidden group">
                        <div className="relative z-10">
                            <h4 className="text-2xl font-black mb-4">Dentora Plus Subscription</h4>
                            <p className="text-white/70 mb-8 max-w-sm">Get automatic moonlight delivery every 2 months. Save 30% plus free shipping on all orders.</p>
                            <button className="bg-white text-[#E60023] px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors uppercase tracking-widest text-xs">
                                Manage Subscription
                            </button>
                        </div>
                        <div className="absolute bottom-0 right-0 py-8 px-1">
                             <div className="flex -space-x-4 opacity-20 transform translate-y-12 rotate-12">
                                {PRODUCTS.slice(0, 3).map(p => (
                                    <img key={p.id} src={p.image} className="w-32 h-32 object-contain" referrerPolicy="no-referrer" />
                                ))}
                             </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
      </div>
    </div>
  );
};
