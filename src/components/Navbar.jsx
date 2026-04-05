import { useState } from 'react';
import { Linkedin, Mail, Menu, Phone, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-6 relative">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-444554">CHAZ CAREY</h1>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4">
          <a href="https://www.linkedin.com/in/chaz-6676b0256" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><Linkedin /></a>
          <a href="mailto:chaz.d.carey@outlook.com" className="hover:text-blue-400"><Mail /></a>
          <a href="tel:4322374375" className="hover:text-blue-400"><Phone /></a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors z-50"
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-eerieBlack text-paleDogwood shadow-lg md:hidden p-4 z-50">
            <div className="flex flex-col items-center space-y-6">
              <a href="https://www.linkedin.com/in/chaz-6676b0256" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 flex items-center space-x-3 text-white w-full justify-center py-3 border border-gray-700 rounded-lg">
                <Linkedin /> <span>LinkedIn</span>
              </a>
              <a href="mailto:chaz.d.carey@outlook.com" className="hover:text-blue-400 flex items-center space-x-3 text-white w-full justify-center py-3 border border-gray-700 rounded-lg">
                <Mail /> <span>Email</span>
              </a>
              <a href="tel:4322374375" className="hover:text-blue-400 flex items-center space-x-3 text-white w-full justify-center py-3 border border-gray-700 rounded-lg">
                <Phone /> <span>Call</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}