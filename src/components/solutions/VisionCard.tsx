import React from 'react';
import { LucideIcon } from 'lucide-react';

interface VisionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  features: string[];
}

export default function VisionCard({ title, description, icon: Icon, image, features }: VisionCardProps) {
  return (
    <div className="group relative bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500">
      <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
        
        {/* Animated Overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm" />
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-500/10 backdrop-blur-sm rounded-lg border border-blue-500/20 group-hover:bg-blue-500/20 transition-all duration-500">
              <Icon className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-300 mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-3" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Hover Effect Corner */}
      <div className="absolute top-0 right-0 w-24 h-24 -translate-x-12 translate-y-12 bg-gradient-to-r from-blue-500 to-purple-500 rotate-45 transform opacity-0 group-hover:opacity-20 group-hover:translate-x-0 group-hover:-translate-y-0 transition-all duration-700" />
    </div>
  );
}