import React from 'react';
import { Feature } from '../types';
import * as Icons from 'lucide-react';
import { motion } from 'motion/react';

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  // @ts-ignore
  const Icon = Icons[feature.icon];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-surface-container-lowest p-10 rounded-2xl shadow-sm space-y-4 text-center"
    >
      <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
        <Icon className={`${feature.iconColor} text-3xl`} size={32} />
      </div>
      <h3 className="text-2xl font-bold text-on-surface">{feature.title}</h3>
      <p className="text-on-surface-variant leading-relaxed">{feature.description}</p>
    </motion.div>
  );
};

export default FeatureCard;
