/* eslint-disable no-unused-vars */
import React from 'react';
import { Film, Users, Globe, Rocket, Search, ChevronLeft, ChevronRight, Home, Loader2 } from 'lucide-react';

const Navbar = ({ currentRoute }) => {
  const links = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/films', label: 'Films', icon: Film },
    { path: '/people', label: 'Characters', icon: Users },
    { path: '/planets', label: 'Planets', icon: Globe },
    { path: '/starships', label: 'Starships', icon: Rocket },
  ];

  return (
    <nav className="bg-black text-yellow-400 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#/" className="text-2xl font-bold tracking-wider">STAR WARS WIKI</a>
          <div className="flex space-x-1">
            {links.map(({ path, label, icon: IconComponent }) => (
              <a
                key={path}
                href={`#${path}`}
                className={`flex items-center px-4 py-2 rounded-md transition-colors ${currentRoute === path || (currentRoute.startsWith(path) && path !== '/')
                  ? 'bg-yellow-400 text-black'
                  : 'hover:bg-yellow-400 hover:text-black'
                  }`}
              >
                <IconComponent className="w-4 h-4 mr-2" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Navbar }
