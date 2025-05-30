import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-rh-dark-blue text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Radiant Hearts Logo" className="h-10 w-auto" />
          <span className="ml-2 text-xl font-bold">Radiant Hearts</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-rh-orange-1 transition-colors ${isActive ? 'text-rh-orange-1' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="#about"
            className={({ isActive }) =>
              `hover:text-rh-orange-1 transition-colors ${isActive ? 'text-rh-orange-1' : ''}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/family-planning"
            className={({ isActive }) =>
              `hover:text-rh-orange-1 transition-colors ${isActive ? 'text-rh-orange-1' : ''}`
            }
          >
            Family Planning
          </NavLink>
          <NavLink
            to="/sack-gardening"
            className={({ isActive }) =>
              `hover:text-rh-orange-1 transition-colors ${isActive ? 'text-rh-orange-1' : ''}`
            }
          >
            Sack Gardening
          </NavLink>
          <NavLink
            to="/womens-rights"
            className={({ isActive }) =>
              `hover:text-rh-orange-1 transition-colors ${isActive ? 'text-rh-orange-1' : ''}`
            }
          >
            Women’s Rights
          </NavLink>
          <NavLink
            to="/womens-violence"
            className={({ isActive }) =>
              `hover:text-rh-orange-1 transition-colors ${isActive ? 'text-rh-orange-1' : ''}`
            }
          >
            Women’s Violence
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-rh-blue-1 px-4 py-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block py-2 hover:text-rh-orange-1 transition-colors ${isActive ? 'text-rh-orange-1' : ''}`
            }
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="#about"
            className={({ isActive }) =>
              `block py-2 hover:text-rh-orange-1 transition-colors ${isActive ? 'text-rh-orange-1' : ''}`
            }
            onClick={toggleMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/family-planning"
            className={({ isActive }) =>
              `block py-2 hover:text-rh-orange-1 transition-colors ${isActive ? 'text-rh-orange-1' : ''}`
            }
            onClick={toggleMenu}
          >
            Family Planning
          </NavLink>
          <NavLink
            to="/sack-gardening"
            className={({ isActive }) =>
              `block py-2 hover:text-rh-orange-1 transition-colors ${isActive ? 'text-rh-orange-1' : ''}`
            }
            onClick={toggleMenu}
          >
            Sack Gardening
          </NavLink>
          <NavLink
            to="/womens-rights"
            className={({ isActive }) =>
              `block py-2 hover:text-rh-orange-1 transition-colors ${isActive ? 'text-rh-orange-1' : ''}`
            }
            onClick={toggleMenu}
          >
            Women’s Rights
          </NavLink>
          <NavLink
            to="/womens-violence"
            className={({ isActive }) =>
              `block py-2 hover:text-rh-orange-1 transition-colors ${isActive ? 'text-rh-orange-1' : ''}`
            }
            onClick={toggleMenu}
          >
            Women’s Violence
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default Header;