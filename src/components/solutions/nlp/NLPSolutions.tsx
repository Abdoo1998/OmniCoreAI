import React from 'react';
import { Brain, MessageSquare, Workflow, Mic, Bot, Network } from 'lucide-react';
import NLPFeatureCard from './NLPFeatureCard';

const nlpFeatures = [
  {
    title: 'Large Language Models',
    description: 'State-of-the-art LLMs tailored for your specific use cases.',
    icon: Brain,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
    features: [
      'Custom-trained models on your domain data',
      'Fine-tuning capabilities for specific tasks',
      'Context-aware responses and reasoning',
      'Multi-language support with high accuracy'
    ]
  },
  {
    title: 'Custom AI Agents',
    description: 'Specialized AI agents designed for specific business functions.',
    icon: Bot,
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80',
    features: [
      'Task-specific autonomous agents',
      'Customizable decision-making logic',
      'Integration with existing systems',
      'Continuous learning and improvement'
    ]
  },
  {
    title: 'Speech Processing',
    description: 'Advanced speech-to-text and text-to-speech capabilities.',
    icon: Mic,
    image: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&q=80',
    features: [
      'Real-time speech recognition',
      'Natural-sounding voice synthesis',
      'Multiple accent and language support',
      'Emotion and tone detection'
    ]
  }
];

export default function NLPSolutions() {
  return (
    <section className="py-20 bg-gradient-radial from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Natural Language Processing
          </h2>
          <p className="mt-2 text-4xl font-extrabold text-gray-900">
            Advanced Language Understanding
          </p>
          <p className="mt-4 text-xl text-gray-500">
            Our comprehensive NLP solutions combine cutting-edge language models with 
            sophisticated agent systems to deliver intelligent, context-aware processing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nlpFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="opacity-0 animate-fade-in-up" 
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              <NLPFeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}