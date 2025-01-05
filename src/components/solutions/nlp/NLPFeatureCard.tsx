import React from 'react';
import { LucideIcon } from 'lucide-react';

interface NLPFeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  features: string[];
}

export default function NLPFeatureCard({ title, description, icon: Icon, image, features }: NLPFeatureCardProps) {
  return (
    <div className="group bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg">
              <Icon className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 mr-3" />
              <span className="text-sm text-gray-500">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}