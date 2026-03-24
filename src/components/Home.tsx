import React from 'react';
import ArticleCard from './ArticleCard';
import FeatureCard from './FeatureCard';
import { ARTICLES, FEATURES } from '../constants';
import { motion } from 'motion/react';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-10"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-block px-4 py-1.5 bg-secondary-fixed text-on-secondary-fixed-variant rounded-full text-sm font-bold tracking-wide uppercase">
              Trending in 2026
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-on-surface leading-[1.1]">
              Developer Insights
            </h1>
            <p className="text-xl lg:text-2xl text-on-surface-variant font-medium leading-relaxed max-w-xl">
              Exploring Code, AI, and the Future of Developers. The ultimate blueprint for modern digital architects.
            </p>
            <div className="flex gap-4">
              <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all active:scale-95">
                Start Reading
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-primary-container/20 blur-3xl rounded-full"></div>
            <img 
              alt="Neon Setup" 
              className="relative w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJWHsmysvJcIDNycpCmogJYUkSWd_8rtTNtMxAWuBZC6nJ4fNbFBTbRUKDU61TPtfaQnVvSzBjPA0wYbRjOeTj4Hlwd-Hl2R8eTZJ_xSok3nsOBJBPRiYtwola05xEPtN8U_wAN2hnNaq9iwnmPposT77GNB2zuHc5chs04kBFv53lIrFKOIkPa1A7ys_E1bG8cf3piZzguS4c7QRoVgZDLRSktTSaFW9qpcnyoPPVHUsIB2TT7qHS1u5vfS5JnJNkQYMLuX6k3TE_"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <main className="max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-on-surface">Latest Articles</h2>
          <div className="h-px flex-1 bg-surface-container-highest mx-8 hidden sm:block"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </main>

      {/* Feature Section */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-on-surface mb-4">Why These Skills Matter Today</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              In an era of rapid AI advancement, these core pillars remain the constant foundation of excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
