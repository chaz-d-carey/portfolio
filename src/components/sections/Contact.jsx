import { Linkedin, Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <section className="py-20 px-6 bg-[#1a1f2e]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Get in touch 🚀</h2>
          <p className="text-xl text-gray-300 mb-4">
            Interested in working together? Let's connect.
          </p>
          <div className="text-lg text-gray-400 mb-8 space-y-2">
            <p>📧 <a href="mailto:chaz.d.carey@outlook.com" className="hover:text-blue-400">chaz.d.carey@outlook.com</a></p>
            <p>📱 <a href="tel:4322374375" className="hover:text-blue-400">(432) 237-4375</a></p>
            <p>📍 Grand Prairie, TX</p>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="https://www.linkedin.com/in/chaz-6676b0256" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><Linkedin /></a>
            <a href="mailto:chaz.d.carey@outlook.com" className="hover:text-blue-400"><Mail /></a>
            <a href="tel:4322374375" className="hover:text-blue-400"><Phone /></a>
          </div>
        </div>
      </section>

      <footer className="py-6 px-6 bg-[#1a1f2e]">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2026 Chaz Carey. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}