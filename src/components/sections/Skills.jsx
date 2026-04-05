import React from 'react';

const skillGroups = [
  {
    title: 'Languages',
    items: ['JavaScript (ES6+)', 'TypeScript', 'Golang', 'Python', 'C#', 'Java'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'Angular', 'Vue', 'Redux', 'Storybook'],
  },
  {
    title: 'Backend & APIs',
    items: ['Node.js', '.NET Core', 'Go microservices', 'REST', 'GraphQL', 'gRPC'],
  },
  {
    title: 'Cloud & DevOps',
    items: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'DynamoDB', 'MongoDB', 'SQL/NoSQL'],
  },
  {
    title: 'AI & Streaming',
    items: ['OpenAI', 'RAG pipelines', 'Kafka'],
  },
];

export default function SkillsMarquee() {
  return (
    <section className="py-20 px-6 bg-[#151821]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-4">Technical Skills 🧰</h2>
          <p className="text-gray-400 text-lg">
            Production-ready tools and technologies across frontend, backend, cloud, and AI workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div key={group.title} className="bg-[#0d1117] border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-purple-300 mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full text-sm bg-[#1f2635] text-gray-200 border border-gray-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
