import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

export default function FeatureCard({ icon: Icon, title, description, color }: FeatureCardProps) {
  return (
    <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up">
      <div className={`w-16 h-16 ${color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
        <Icon className="h-8 w-8 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}