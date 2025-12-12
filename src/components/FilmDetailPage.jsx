import React, { useState, useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import { fetchData } from '../services/api.js';
import { Loading } from './Loading.jsx';
import { ErrorMessage } from './ErrorMessage.jsx';

// Film Detail Page
const FilmDetailPage = ({ id }) => {
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData('/films/')
      .then(data => {
        const found = data.results.find(f => f.episode_id === parseInt(id));
        if (found) {
          setFilm(found);
        } else {
          setError('Film not found');
        }
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;
  if (!film) return <ErrorMessage message="Film not found" />;

  return (
    <div className="min-h-screen bg-gray-900 text-white py-8">
      <div className="max-w-4xl mx-auto px-4">
        <a href="#/films" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-6">
          <ChevronLeft className="w-5 h-5" />
          Back to Films
        </a>

        <div className="bg-gray-800 border border-yellow-400 rounded-lg p-8">
          <div className="text-yellow-400 text-sm font-bold mb-2">
            EPISODE {film.episode_id}
          </div>
          <h1 className="text-4xl font-bold mb-6">{film.title}</h1>

          <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
            <div>
              <span className="text-gray-400">Director:</span>
              <span className="ml-2 text-white">{film.director}</span>
            </div>
            <div>
              <span className="text-gray-400">Producer:</span>
              <span className="ml-2 text-white">{film.producer}</span>
            </div>
            <div>
              <span className="text-gray-400">Release Date:</span>
              <span className="ml-2 text-white">{new Date(film.release_date).toLocaleDateString()}</span>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-yellow-400 mb-3">Opening Crawl</h3>
            <p className="text-gray-300 leading-relaxed whitespace-pre-line">{film.opening_crawl}</p>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-gray-700 p-4 rounded">
              <div className="text-2xl font-bold text-yellow-400">{film.characters.length}</div>
              <div className="text-sm text-gray-400">Characters</div>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <div className="text-2xl font-bold text-yellow-400">{film.planets.length}</div>
              <div className="text-sm text-gray-400">Planets</div>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <div className="text-2xl font-bold text-yellow-400">{film.starships.length}</div>
              <div className="text-sm text-gray-400">Starships</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { FilmDetailPage };