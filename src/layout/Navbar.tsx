import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoImage from "../assets/logos/logo_no_backgorund.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="container mx-auto px-15 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logoImage} alt="Irazu Technology Logo" className="h-20" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="hover:text-blue-400 transition-colors">
              ABOUT US
            </Link>
            <Link
              to="/services"
              className="hover:text-blue-400 transition-colors"
            >
              SERVICES
            </Link>
            <Link to="/join" className="hover:text-blue-400 transition-colors">
              JOIN IRAZU
            </Link>
            <Link
              to="/contact"
              className="hover:text-blue-400 transition-colors"
            >
              CONTACT
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 px-4 py-2">
          <nav className="flex flex-col space-y-3 pb-3">
            <Link
              to="/about"
              className="hover:text-blue-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT US
            </Link>
            <Link
              to="/services"
              className="hover:text-blue-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              SERVICES
            </Link>
            <Link
              to="/join"
              className="hover:text-blue-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              JOIN IRAZU
            </Link>
            <Link
              to="/contact"
              className="hover:text-blue-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </Link>
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started Today
            </Link>
            <button className="border border-white hover:border-blue-400 hover:text-blue-400 px-3 py-1 rounded-md transition-colors w-full">
              Search
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
