import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SolutionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  benefits: string[];
}

export default function SolutionCard({ title, description, icon: Icon, image, benefits }: SolutionCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
      <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg">
              <Icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center text-sm text-gray-500">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 mr-3" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}