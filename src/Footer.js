import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-rh-dark-blue text-white py-6">
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <NavLink
            to="/family-planning"
            className={({ isActive }) =>
              `text-rh-blue-3 hover:text-rh-orange-1 transition-colors ${isActive ? 'text-rh-orange-1' : ''}`
            }
          >
            Family Planning
          </NavLink>
          <NavLink
            to="/sack-gardening"
            className={({ isActive }) =>
              `text-rh-blue-3 hover:text-rh-orange-1 transition-colors ${isActive ? 'text-rh-orange-1' : ''}`
            }
          >
            Sack Gardening
          </NavLink>
          <NavLink
            to="/womens-rights"
            className={({ isActive }) =>
              `text-rh-blue-3 hover:text-rh-orange-1 transition-colors ${isActive ? 'text-rh-orange-1' : ''}`
            }
          >
            Women’s Rights
          </NavLink>
          <NavLink
            to="/womens-violence"
            className={({ isActive }) =>
              `text-rh-blue-3 hover:text-rh-orange-1 transition-colors ${isActive ? 'text-rh-orange-1' : ''}`
            }
          >
            Women’s Violence
          </NavLink>
        </div>
        
        <div className="container mx-auto px-4 text-center mt-4">
            <p className="text-sm">© 2025 Radiant Hearts Women Group. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;