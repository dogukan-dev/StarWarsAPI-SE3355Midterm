import React, { useState, useEffect } from 'react';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { fetchData } from '../services/api.js';
import { Loading } from './Loading.jsx';
import { ErrorMessage } from './ErrorMessage.jsx';

// People List Page
const PeoplePage = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(false);

  useEffect(() => {
    fetchData(`/people/?page=${page}`)
      .then(data => {
        setPeople(data.results);
        setHasNext(!!data.next);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [page]);

  if (loading && page === 1) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  const filtered = people.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-yellow-400 mb-8">Characters</h1>

        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search characters..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((person, idx) => (
            <a
              key={idx}
              href={`#/people/${page}-${idx}`}
              className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-yellow-400 transition-all hover:scale-105"
            >
              <h3 className="text-xl font-bold mb-3 text-yellow-400">{person.name}</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-gray-400">Height:</span>
                  <span className="ml-2">{person.height} cm</span>
                </div>
                <div>
                  <span className="text-gray-400">Gender:</span>
                  <span className="ml-2 capitalize">{person.gender}</span>
                </div>
                <div>
                  <span className="text-gray-400">Birth Year:</span>
                  <span className="ml-2">{person.birth_year}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center text-gray-400 py-12">
            No characters found matching "{search}"
          </div>
        )}

        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={() => {
              setLoading(true);
              setPage(p => Math.max(1, p - 1));
            }}
            disabled={page === 1}
            className="flex items-center px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:border-yellow-400"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>
          <span className="text-gray-400">Page {page}</span>
          <button
            onClick={() => {
              setLoading(true);
              setPage(p => p + 1);
            }}
            disabled={!hasNext}
            className="flex items-center px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:border-yellow-400"
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export { PeoplePage };