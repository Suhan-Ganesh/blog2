import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ARTICLES } from '../constants';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, User } from 'lucide-react';

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = ARTICLES.find((a) => a.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Article not found</h2>
          <Link to="/" className="text-primary hover:underline flex items-center justify-center gap-2">
            <ArrowLeft size={20} /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto px-6 py-12"
    >
      <Link to="/" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-8 group">
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        Back to Articles
      </Link>

      <div className="space-y-8">
        <div className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary">{article.category}</span>
          <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-on-surface leading-tight">
            {article.title}
          </h1>
          <div className="flex flex-wrap gap-6 text-on-surface-variant text-sm font-medium">
            <div className="flex items-center gap-2">
              <User size={16} />
              {article.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              {article.date}
            </div>
          </div>
        </div>

        <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-on-surface-variant">
          {article.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {article.additionalImages && article.additionalImages.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
            {article.additionalImages.map((img, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden shadow-lg"
              >
                <img 
                  src={img} 
                  alt={`${article.title} detail ${index + 1}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default BlogDetail;
