import React from 'react';
import { Brain, Eye, Smartphone, Globe, Code, MessageSquare } from 'lucide-react';
import SolutionCard from './SolutionCard';

const solutions = [
  {
    title: 'Natural Language Processing',
    description: 'Advanced NLP solutions powered by state-of-the-art language models.',
    icon: MessageSquare,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
    benefits: [
      'Sentiment Analysis',
      'Text Classification',
      'Language Translation',
      'Chatbot Integration'
    ]
  },
  {
    title: 'Computer Vision',
    description: 'State-of-the-art computer vision solutions for image and video analysis.',
    icon: Eye,
    image: 'https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&q=80',
    benefits: [
      'Object Detection',
      'Facial Recognition',
      'Image Classification',
      'Video Analytics'
    ]
  },
  {
    title: 'Mobile Applications',
    description: 'Cross-platform mobile solutions with integrated AI capabilities.',
    icon: Smartphone,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80',
    benefits: [
      'iOS & Android Apps',
      'Real-time Processing',
      'Offline Capabilities',
      'Push Notifications'
    ]
  },
  {
    title: 'Web Applications',
    description: 'Scalable web applications with powerful AI integration.',
    icon: Globe,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    benefits: [
      'Responsive Design',
      'Real-time Analytics',
      'Cloud Integration',
      'API Development'
    ]
  }
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase animate-fade-in">
            Our Solutions
          </h2>
          <p className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Comprehensive AI Solutions
          </p>
          <p className="mt-4 text-xl text-gray-500">
            Discover our range of AI-powered solutions designed to transform your business operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="opacity-0 animate-fade-in-up" 
                 style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}>
              <SolutionCard {...solution} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}