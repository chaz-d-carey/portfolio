import React from 'react';

export default function Companies() {
  const companies = [
    {
      name: "AiRISTA",
      role: "Senior Software Engineer",
      period: "Jan 2023 - Present",
      location: "Sparks, MD",
    },
    {
      name: "TTEC",
      role: "Senior Software Engineer",
      period: "Feb 2020 - Dec 2022",
      location: "Austin, TX",
    },
    {
      name: "Uber",
      role: "Software Engineer",
      period: "Jun 2013 - Jan 2020",
      location: "San Francisco, CA",
    },
  ];

  return (
    <section className="py-20 px-6 bg-eerieBlack">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Professional Experience 🧭</h2>
          <p className="text-gray-400 text-lg">Organizations where I delivered engineering impact</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {companies.map((company) => (
            <div
              key={company.name}
              className="bg-white/10 hover:bg-white/15 rounded-xl p-8 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="text-xl font-semibold text-white">{company.name}</div>
              <p className="text-gray-300 mt-2">{company.role}</p>
              <p className="text-gray-400 mt-1">{company.period}</p>
              <p className="text-gray-400">{company.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}