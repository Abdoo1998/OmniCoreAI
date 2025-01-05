import React from 'react';
import { Eye, Camera, Video, Scan, Layers, Zap } from 'lucide-react';
import VisionCard from './VisionCard';

const visionFeatures = [
  {
    title: 'Object Detection',
    description: 'Real-time object detection and tracking with high accuracy.',
    icon: Eye,
    image: 'https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&q=80',
    features: [
      'Multi-object tracking',
      'Real-time detection',
      'Custom object training',
      'Spatial analysis'
    ]
  },
  {
    title: 'Image Recognition',
    description: 'Advanced image recognition powered by deep learning.',
    icon: Camera,
    image: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&fit=crop&q=80',
    features: [
      'Pattern recognition',
      'Feature extraction',
      'Classification',
      'Similarity matching'
    ]
  },
  {
    title: 'Video Analytics',
    description: 'Intelligent video processing and analysis.',
    icon: Video,
    image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80',
    features: [
      'Motion detection',
      'Activity recognition',
      'Scene understanding',
      'Behavioral analysis'
    ]
  },
  {
    title: 'Biometric Analysis',
    description: 'Advanced biometric recognition and verification.',
    icon: Scan,
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80',
    features: [
      'Facial recognition',
      'Gesture detection',
      'Emotion analysis',
      'Identity verification'
    ]
  }
];

export default function ComputerVisionSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-base text-blue-400 font-semibold tracking-wide uppercase animate-fade-in">
            Computer Vision
          </h2>
          <p className="mt-2 text-4xl font-extrabold text-white sm:text-5xl">
            See the Future of AI
          </p>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            Our computer vision solutions leverage cutting-edge deep learning models to understand and analyze visual data in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visionFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="opacity-0 animate-scale-up" 
              style={{ animationDelay: `${index * 200}ms`, animationFillMode: 'forwards' }}
            >
              <VisionCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}