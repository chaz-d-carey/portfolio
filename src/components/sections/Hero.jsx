import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="font-mono md:w-2/3">
          <TypeAnimation
            sequence={[
              'Senior Software Engineer ⚡',
              2000,
              'Frontend & Product Engineering Lead ⚡',
              2000,
              'React + TypeScript + AI Workflows ⚡',
              2000,
              'Building Scalable SaaS Platforms ⚡',
              2000,
            ]}
            wrapper="h1"
            speed={50}
            className="text-5xl font-bold mb-6"
            repeat={Infinity}
            cursor={true}
          />
          <br />
          <p className="text-2xl text-gray-200">
            Hello, World! 👋 I'm Chaz Carey
          </p>
          <br />
          <p className="text-xl text-gray-300">
            Senior Software Engineer with 12+ years of experience building scalable SaaS platforms,
            AI-enabled applications, and high-performance web interfaces.
            <br />  <br />
            I specialize in React, TypeScript, and modern frontend architecture, with strong backend
            expertise in Go, Python, and C#/.NET for data-intensive and real-time systems.
            <br /> <br />
            I design end-to-end systems, integrate APIs across cloud-native environments, and deliver
            measurable product impact through performance, user experience, and platform reliability.
          </p>
        </div>
        {/* Right Image */}
        <div className="md:w-1/3 flex justify-center mt-10 md:mt-0">
          <div className="w-64 h-64 rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 border border-purple-400/20 flex items-center justify-center">
            <span className="text-6xl font-bold text-white">CC</span>
          </div>
        </div>
      </div>
    </section>
  );
}
