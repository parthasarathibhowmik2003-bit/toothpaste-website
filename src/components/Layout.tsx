import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Instagram, Facebook, Twitter, Phone, Mail, MapPin, LogIn, LogOut, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { signInWithGoogle, signOutUser } from '../lib/firebase';
import { useAuth } from '../hooks/useAuth';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isDark, setIsDark] = React.useState(false);
  const location = useLocation();
  const { user } = useAuth();

  React.useEffect(() => {
    if (isDark) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Education', path: '/education' },
    { name: 'Dentists', path: '/dentists' },
    { name: 'Smile Analyzer', path: '/analyzer' },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 transition-all duration-300">
      {/* Promo Bar */}
      <div className="bg-[#E60023] text-white text-[11px] py-1.5 text-center font-bold uppercase tracking-widest px-4">
        Free Shipping on Subscription Orders Over ₹499 • Dentist Recommended Worldwide
      </div>

      <div className="bg-white/90 backdrop-blur-md border-b border-slate-100 dark:bg-slate-900/90 dark:border-slate-800">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-[#E60023] w-8 h-8 rounded-sm flex items-center justify-center font-black text-white text-xl group-hover:scale-105 transition-transform">D</div>
            <span className="text-2xl font-black text-[#E60023] tracking-tighter">DENTORA</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[13px] font-semibold transition-colors relative py-1 ${
                  location.pathname === link.path
                    ? 'text-[#E60023] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#E60023]'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button 
                onClick={() => setIsDark(!isDark)}
                className="p-2 text-slate-400 hover:text-[#E60023] transition-colors"
                title={isDark ? "Light Mode" : "Dark Mode"}
            >
                {isDark ? <Sun size={19} /> : <Moon size={19} />}
            </button>

            <div className="h-4 w-[1px] bg-slate-200 dark:bg-slate-800 mx-1 hidden md:block"></div>

            {user ? (
              <Link to="/account" className="flex items-center gap-2 p-1 text-slate-600 hover:text-[#E60023] transition-colors">
                <img src={user.photoURL || ''} alt="User" className="w-8 h-8 rounded-full border border-slate-100" referrerPolicy="no-referrer" />
                <span className="text-[12px] font-bold hidden sm:block max-w-[80px] truncate">{user.displayName}</span>
              </Link>
            ) : (
                <button 
                  onClick={signInWithGoogle}
                  className="hidden md:flex items-center gap-2 p-2 text-slate-600 hover:text-[#E60023] transition-colors text-[13px] font-bold"
                >
                  <LogIn size={18} />
                  <span>Login</span>
                </button>
            )}

            <Link to="/cart" className="relative p-2.5 bg-[#E60023] text-white rounded shadow-lg shadow-red-200 uppercase transition-all hover:bg-[#c4001d] active:scale-95">
              <ShoppingCart size={18} />
              <span className="absolute -top-1.5 -right-1.5 bg-slate-900 text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white dark:border-slate-800">
                0
              </span>
            </Link>

            <button
              className="lg:hidden p-2 text-slate-600 dark:text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-100 overflow-hidden dark:bg-slate-900 dark:border-slate-800"
          >
            <div className="px-6 py-8 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-lg font-black tracking-tight ${
                    location.pathname === link.path ? 'text-[#E60023]' : 'text-slate-900 dark:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-4">
                {user ? (
                   <div className="flex items-center justify-between">
                    <Link to="/account" className="flex items-center gap-3 text-slate-900 dark:text-white font-bold" onClick={() => setIsOpen(false)}>
                      <img src={user.photoURL || ''} alt="User" className="w-10 h-10 rounded-full" referrerPolicy="no-referrer" />
                      <span>{user.displayName}</span>
                    </Link>
                    <button onClick={() => { signOutUser(); setIsOpen(false); }} className="p-2 text-slate-400">
                       <LogOut size={20} />
                    </button>
                   </div>
                ) : (
                   <button onClick={() => { signInWithGoogle(); setIsOpen(false); }} className="flex items-center gap-3 text-[#E60023] font-black uppercase tracking-widest text-xs">
                      <LogIn size={20} />
                      <span>Login with Google</span>
                   </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10 dark:bg-slate-900 dark:border-slate-800">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <div className="flex items-center gap-2 group">
              <div className="bg-[#E60023] w-8 h-8 rounded-sm flex items-center justify-center font-black text-white text-xl">D</div>
              <span className="text-2xl font-black text-[#E60023] tracking-tighter">DENTORA</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Advanced oral care driven by clinical research and natural ingredients. Trusted by dentists across India for a healthier, brighter smile every day.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#E60023] hover:border-[#E60023]/30 cursor-pointer transition-all dark:bg-slate-800 dark:border-slate-700">
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-widest mb-8 dark:text-white">Product Lines</h4>
            <ul className="space-y-4 text-[13px] text-slate-500 font-medium">
              <li><Link to="/products?category=Whitening" className="hover:text-[#E60023] transition-colors">Clinical Whitening</Link></li>
              <li><Link to="/products?category=Sensitive" className="hover:text-[#E60023] transition-colors">Enamel Repair</Link></li>
              <li><Link to="/products?category=Herbal" className="hover:text-[#E60023] transition-colors">Ayurvedic Defense</Link></li>
              <li><Link to="/products?category=Kids" className="hover:text-[#E60023] transition-colors">Junior Shield</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-widest mb-8 dark:text-white">Expertise</h4>
            <ul className="space-y-4 text-[13px] text-slate-500 font-medium">
              <li><Link to="/dentists" className="hover:text-[#E60023] transition-colors">Professional Network</Link></li>
              <li><Link to="/education" className="hover:text-[#E60023] transition-colors">Oral Care Research</Link></li>
              <li><Link to="/analyzer" className="hover:text-[#E60023] transition-colors">AI Smile Analyzer</Link></li>
              <li><Link to="/about" className="hover:text-[#E60023] transition-colors">Our Science</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-widest mb-8 dark:text-white">Connect</h4>
            <ul className="space-y-6 text-[13px] text-slate-500 font-medium">
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded bg-red-50 text-[#E60023] flex items-center justify-center flex-shrink-0"><Phone size={16} /></div>
                <span>1800-DENTORA-PRO</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0"><Mail size={16} /></div>
                <span>dental-care@dentora.in</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0"><MapPin size={16} /></div>
                <span>Global HQ, Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 dark:border-slate-800">
          <p className="text-slate-400 text-xs font-medium">
            © 2024 Dentora Oral Care Series. All formulations are dentist-approved.
          </p>
          <div className="flex gap-10 text-xs font-bold text-slate-500 uppercase tracking-widest">
            <Link to="/privacy" className="hover:text-[#E60023] transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-[#E60023] transition-colors">Terms</Link>
            <Link to="/shipping" className="hover:text-[#E60023] transition-colors">Shipping</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
