import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Upload, Sparkles, Loader2, RefreshCcw, ArrowRight } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { PRODUCTS } from '../data';
import { Link } from 'react-router-dom';

export const Analyzer = () => {
  const [image, setImage] = React.useState<string | null>(null);
  const [analyzing, setAnalyzing] = React.useState(false);
  const [result, setResult] = React.useState<any>(null);
  const [error, setError] = React.useState<string | null>(null);

  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setResult(null);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeSmile = async () => {
    if (!image) return;
    setAnalyzing(true);
    setError(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const base64Data = image.split(',')[1];
      
      const prompt = `
        Analyze this close-up photo of teeth and a smile. 
        Evaluate: 
        1. Teeth color (Stains, Yellowing)
        2. Gum appearance
        3. Overall dental hygiene
        
        Provide a JSON response with:
        - "analysis": A brief 2-sentence expert summary.
        - "concerns": Array of 2-3 main concerns found.
        - "recommendedCategoryId": One of "Whitening", "Sensitive", "Herbal", "Charcoal", "Kids".
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
            { 
                parts: [
                    { text: prompt },
                    { inlineData: { data: base64Data, mimeType: 'image/jpeg' } }
                ] 
            }
        ],
        config: {
            responseMimeType: 'application/json'
        }
      });

      const data = JSON.parse(response.text || '{}');
      setResult(data);
    } catch (err) {
      console.error(err);
      setError('Something went wrong during analysis. Please ensure the photo is clear.');
    } finally {
      setAnalyzing(false);
    }
  };

  const recommendedProducts = result 
    ? PRODUCTS.filter(p => p.category === result.recommendedCategoryId).slice(0, 2)
    : [];

  return (
    <div className="bg-[#F9FAFB] min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
            <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-20 h-20 bg-gradient-to-tr from-[#E60023] to-[#ff4d6a] rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-red-500/20"
            >
                <Sparkles className="text-white" size={40} />
            </motion.div>
            <h1 className="text-5xl font-black text-gray-900 mb-6 tracking-tighter">AI Smile Analyzer</h1>
            <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
                Upload a clear photo of your smile, and our advanced AI will recommend the perfect dental care routine for your specific needs.
            </p>
        </div>

        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl shadow-gray-200 border border-gray-100">
            {!image ? (
                <div 
                    onClick={() => fileInputRef.current?.click()}
                    className="border-4 border-dashed border-gray-100 rounded-[32px] py-24 text-center cursor-pointer hover:border-[#E60023]/20 hover:bg-gray-50 transition-all group"
                >
                    <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                        <Camera className="text-gray-400 group-hover:text-[#E60023]" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Upload or Take Photo</h3>
                    <p className="text-gray-400 text-sm">Strictly for dental analysis. Your data is private.</p>
                    <input 
                        type="file" 
                        ref={fileInputRef} 
                        onChange={handleUpload} 
                        accept="image/*" 
                        className="hidden" 
                    />
                </div>
            ) : (
                <div className="space-y-12">
                    <div className="relative max-w-sm mx-auto aspect-square rounded-[32px] overflow-hidden shadow-2xl">
                        <img src={image} alt="Preview" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        <button 
                            onClick={() => setImage(null)}
                            className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-2xl text-gray-900 hover:text-[#E60023] transition-colors"
                        >
                            <RefreshCcw size={20} />
                        </button>
                    </div>

                    {!result && (
                        <div className="text-center">
                            <button
                                onClick={analyzeSmile}
                                disabled={analyzing}
                                className="bg-[#E60023] text-white px-12 py-5 rounded-2xl text-xl font-bold hover:bg-[#c4001d] transition-all disabled:opacity-50 flex items-center mx-auto"
                            >
                                {analyzing ? (
                                    <>
                                        <Loader2 className="mr-3 animate-spin" /> Analyzing Your Smile...
                                    </>
                                ) : (
                                    <>
                                        <Sparkles className="mr-3" /> Analyze Now
                                    </>
                                )}
                            </button>
                            {error && <p className="mt-4 text-[#E60023] font-bold">{error}</p>}
                        </div>
                    )}

                    <AnimatePresence>
                        {result && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-10"
                            >
                                <div className="p-8 bg-gray-50 rounded-[32px] border border-gray-100">
                                    <h3 className="text-xs font-black uppercase tracking-widest text-[#E60023] mb-4">Expert Analysis</h3>
                                    <p className="text-xl font-medium text-gray-900 leading-relaxed mb-6">
                                        {result.analysis}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {result.concerns.map((c: string, i: number) => (
                                            <span key={i} className="bg-white border border-gray-100 px-4 py-2 rounded-xl text-sm font-bold text-gray-600">
                                                • {c}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-black text-gray-900 mb-8 tracking-tighter">Recommended For You</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                        {recommendedProducts.map(product => (
                                            <Link 
                                                key={product.id}
                                                to={`/product/${product.id}`}
                                                className="bg-white rounded-3xl border border-gray-100 p-6 hover:shadow-xl transition-shadow group"
                                            >
                                                <div className="aspect-square bg-gray-50 rounded-2xl mb-4 overflow-hidden">
                                                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                                                </div>
                                                <h4 className="font-bold text-gray-900 mb-1">{product.name}</h4>
                                                <div className="flex items-center justify-between mt-4">
                                                    <span className="text-lg font-black tracking-tighter">₹{product.price}</span>
                                                    <ArrowRight size={18} className="text-[#E60023] group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                <button 
                                    onClick={() => { setImage(null); setResult(null); }}
                                    className="w-full py-5 rounded-2xl font-bold text-gray-400 hover:text-gray-900 transition-colors uppercase tracking-widest text-xs"
                                >
                                    Start New Analysis
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            )}
        </div>

        <div className="mt-16 text-center text-gray-400">
            <p className="text-sm font-medium">
                Disclaimer: This AI analysis is for educational purposes only and not a substitute for professional dental diagnosis.
            </p>
        </div>
      </div>
    </div>
  );
};
