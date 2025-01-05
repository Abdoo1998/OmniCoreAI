import React from 'react';
import { Brain, Cpu, Shield, Zap } from 'lucide-react';

const features = [
  {
    name: 'Advanced AI Models',
    description: 'Leverage state-of-the-art machine learning models tailored to your specific business needs.',
    icon: Brain,
  },
  {
    name: 'Real-time Processing',
    description: 'Process and analyze data in real-time with our high-performance computing infrastructure.',
    icon: Zap,
  },
  {
    name: 'Secure Infrastructure',
    description: 'Enterprise-grade security with end-to-end encryption and compliance standards.',
    icon: Shield,
  },
  {
    name: 'Scalable Solutions',
    description: 'Flexible architecture that grows with your business needs and demands.',
    icon: Cpu,
  },
];

export default function Features() {
  return (
    <div id="features" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Intelligent Solutions for Modern Businesses
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our comprehensive suite of AI-powered features helps you stay ahead in the digital transformation race.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}