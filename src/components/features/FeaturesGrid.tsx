import React from 'react';
import { Brain, Cpu, Network, MessageSquare } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: Brain,
    title: "Advanced AI Models",
    description: "State-of-the-art machine learning models customized for your specific needs",
    color: "bg-gradient-to-br from-blue-500 to-blue-600"
  },
  {
    icon: Network,
    title: "Neural Networks",
    description: "Deep learning solutions that adapt and evolve with your business",
    color: "bg-gradient-to-br from-purple-500 to-purple-600"
  },
  {
    icon: MessageSquare,
    title: "Natural Language",
    description: "Advanced NLP capabilities for human-like text understanding",
    color: "bg-gradient-to-br from-pink-500 to-pink-600"
  },
  {
    icon: Cpu,
    title: "Edge Computing",
    description: "Optimized AI processing at the edge for real-time applications",
    color: "bg-gradient-to-br from-indigo-500 to-indigo-600"
  }
];

export default function FeaturesGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful AI Solutions
          </h2>
          <p className="text-xl text-gray-600">
            Discover how our AI technology can transform your business
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} style={{ animationDelay: `${index * 150}ms` }}>
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}