import React, { useState } from 'react';
import { ExternalLink, FileText } from 'lucide-react';

const ProfileShowcase = () => {
  const [activeCard, setActiveCard] = useState(null);

  const profiles = [
    {
      platform: "Location",
      username: "Grand Prairie, TX",
      link: "https://maps.google.com/?q=Grand+Prairie,+TX",
      description: "Based in Texas and open to remote opportunities",
      color: "from-purple-500 to-blue-500",
      icon: "📍"
    },
    {
      platform: "Email",
      username: "chaz.d.carey@outlook.com",
      link: "mailto:chaz.d.carey@outlook.com",
      description: "Reach out for engineering opportunities",
      color: "from-blue-500 to-cyan-500",
      icon: "📧"
    },
    {
      platform: "Phone",
      username: "(432) 237-4375",
      link: "tel:4322374375",
      description: "Available for quick intro calls",
      color: "from-red-500 to-orange-500",
      icon: "📱"
    }
  ];

  return (
    <section className="py-20 px-6 bg-[#1a1f2e] overflow-hidden relative">
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          >
            <div className="w-2 h-2 bg-purple-500 rounded-full" />
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Connect With Me ✨ </h2>
          <p className="text-gray-400 text-lg">Get in touch and view my work</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className={`
                transform transition-all duration-300 
                ${activeCard === index ? 'scale-105' : 'hover:scale-102'}
              `}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="relative group">
                {/* Card Background with gradient */}
                <div className={`
                  absolute inset-0 rounded-xl bg-gradient-to-r ${profile.color} 
                  opacity-20 group-hover:opacity-30 transition-opacity
                `} />
                
                <div className="relative bg-[#0d1117] p-6 rounded-xl border border-gray-800 group-hover:border-opacity-50">
                  {/* Platform Icon */}
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                    {profile.icon}
                  </div>
                  
                  {/* Platform Name */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400">
                    {profile.platform}
                  </h3>
                  
                  {/* Username */}
                  <p className="text-gray-400 mb-3">{profile.username}</p>
                  
                  {/* Description */}
                  <p className="text-gray-500 mb-4">{profile.description}</p>
                  
                  {/* Visit Link */}
                  <a
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      inline-flex items-center text-sm font-semibold
                      text-purple-400 hover:text-purple-300 transition-colors
                    `}
                  >
                    {profile.platform === "Phone" ? (
                      <>
                        <FileText className="w-4 h-4 mr-2" />
                        Contact Now
                      </>
                    ) : (
                      <>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visit Profile
                      </>
                    )}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfileShowcase;