import React, { useState, useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import { fetchData } from '../services/api.js';
import { Loading } from './Loading.jsx';
import { ErrorMessage } from './ErrorMessage.jsx';

// Person Detail Page
const PersonDetailPage = ({ id }) => {
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const [page, idx] = id.split('-').map(Number);
    fetchData(`/people/?page=${page}`)
      .then(data => {
        setPerson(data.results[idx]);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;
  if (!person) return <ErrorMessage message="Character not found" />;

  return (
    <div className="min-h-screen bg-gray-900 text-white py-8">
      <div className="max-w-4xl mx-auto px-4">
        <a href="#/people" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-6">
          <ChevronLeft className="w-5 h-5" />
          Back to Characters
        </a>

        <div className="bg-gray-800 border border-yellow-400 rounded-lg p-8">
          <h1 className="text-4xl font-bold mb-6 text-yellow-400">{person.name}</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-yellow-400">Physical Attributes</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Height:</span>
                  <span>{person.height} cm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Mass:</span>
                  <span>{person.mass} kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Hair Color:</span>
                  <span className="capitalize">{person.hair_color}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Skin Color:</span>
                  <span className="capitalize">{person.skin_color}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Eye Color:</span>
                  <span className="capitalize">{person.eye_color}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-yellow-400">Personal Information</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Birth Year:</span>
                  <span>{person.birth_year}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Gender:</span>
                  <span className="capitalize">{person.gender}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Films:</span>
                  <span>{person.films.length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PersonDetailPage };