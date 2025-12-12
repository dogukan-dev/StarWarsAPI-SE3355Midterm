/* eslint-disable no-unused-vars */
import React from 'react';
import { Film, Users, Globe, Rocket } from 'lucide-react';

// Home Page
const HomePage = () => (
  <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold text-yellow-400 mb-6 tracking-wider">
          STAR WARS WIKI
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Explore the vast galaxy of Star Wars. Discover films, characters, planets, and starships
          from a galaxy far, far away. May the Force be with you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { path: '/films', title: 'Films', icon: Film, desc: 'Explore all Star Wars movies', count: '6 Episodes' },
          { path: '/people', title: 'Characters', icon: Users, desc: 'Meet iconic characters', count: '80+ Heroes' },
          { path: '/planets', title: 'Planets', icon: Globe, desc: 'Visit distant worlds', count: '60+ Worlds' },
          { path: '/starships', title: 'Starships', icon: Rocket, desc: 'Discover legendary ships', count: '30+ Ships' },
        ].map(({ path, title, icon: IconComponent, desc, count }) => (
          <a
            key={path}
            href={`#${path}`}
            className="bg-gray-800 border border-yellow-400 p-6 rounded-lg hover:bg-gray-700 transition-all hover:scale-105"
          >
            <IconComponent className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-2xl font-bold text-yellow-400 mb-2">{title}</h3>
            <p className="text-gray-400 mb-2">{desc}</p>
            <p className="text-sm text-yellow-300">{count}</p>
          </a>
        ))}
      </div>
    </div>
  </div>
);

export { HomePage };