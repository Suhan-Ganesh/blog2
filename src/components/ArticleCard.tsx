import React from 'react';
import { Article } from '../types';
import { motion } from 'motion/react';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-surface-container-lowest rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col"
    >
      <div className="aspect-video overflow-hidden">
        <img 
          alt={article.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          src={article.image}
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="p-8 flex-1 flex flex-col space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-secondary">{article.category}</span>
        <h3 className="text-2xl font-bold text-on-surface leading-tight">{article.title}</h3>
        <p className="text-on-surface-variant leading-relaxed text-sm">{article.description}</p>
      </div>
    </motion.article>
  );
};

export default ArticleCard;
