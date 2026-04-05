import React from 'react';
import { Code, BookOpen, Files, Users } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Frontend Architecture",
      description: "Build scalable React and Next.js applications with reusable component systems, strong TypeScript patterns, and performance-first UX.",
      icon: <Code className="w-8 h-8 mb-4 text-purple-400" />,
      stats: "React v18 + TypeScript"
    },
    {
      title: "Backend & API Systems",
      description: "Develop and integrate REST, GraphQL, and gRPC services across Go, Python, Node.js, and .NET to support real-time product workflows.",
      icon: <Files className="w-8 h-8 mb-4 text-blue-400" />,
      stats: "Go, Python, C#, Node.js"
    },
    {
      title: "AI-Enabled Workflows",
      description: "Implement OpenAI and RAG-driven automations that improve internal operations, decision-making, and data exploration.",
      icon: <BookOpen className="w-8 h-8 mb-4 text-green-400" />,
      stats: "OpenAI + RAG pipelines"
    },
    {
      title: "Cloud & Delivery",
      description: "Ship production systems on AWS and GCP using Docker, Kubernetes, Terraform, and CI/CD with a focus on reliability and observability.",
      icon: <Users className="w-8 h-8 mb-4 text-yellow-400" />,
      stats: "Cloud-native operations"
    }
  ];

  return (
    <section className="py-20 px-6 bg-[#1a1f2e]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Core Expertise 🎯</h2>
          <p className="text-gray-400 text-lg">How I deliver scalable, high-impact engineering outcomes</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-[#0d1117] p-8 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Content */}
              <div className="relative">
                {/* Icon with gradient background */}
                <div className="rounded-lg p-2 w-fit mb-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                  {service.description}
                </p>

                {/* Stats with animation */}
                <div className="mt-4 text-sm font-semibold text-purple-400/80 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {service.stats}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}