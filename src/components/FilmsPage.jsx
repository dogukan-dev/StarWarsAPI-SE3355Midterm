import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { fetchData } from '../services/api.js';
import { Loading } from './Loading.jsx';
import { ErrorMessage } from './ErrorMessage.jsx';

// Films List Page
const FilmsPage = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchData('/films/')
      .then(data => {
        setFilms(data.results.sort((a, b) => a.episode_id - b.episode_id));
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  const filtered = films.filter(f =>
    f.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-yellow-400 mb-8">Star Wars Films</h1>

        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search films..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(film => (
            <a
              key={film.episode_id}
              href={`#/films/${film.episode_id}`}
              className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-yellow-400 transition-all hover:scale-105"
            >
              <div className="text-yellow-400 text-sm font-bold mb-2">
                EPISODE {film.episode_id}
              </div>
              <h3 className="text-2xl font-bold mb-3">{film.title}</h3>
              <p className="text-gray-400 text-sm mb-4 h-16 overflow-hidden break-words">{film.opening_crawl}</p>
              <div className="text-sm text-gray-500">
                Released: {new Date(film.release_date).getFullYear()}
              </div>
            </a>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center text-gray-400 py-12">
            No films found matching "{search}"
          </div>
        )}
      </div>
    </div>
  );
};

export { FilmsPage };