import React from 'react';
import { Loader2 } from 'lucide-react';

// Loading Component
const Loading = () => (
  <div className="flex justify-center items-center min-h-screen">
    <Loader2 className="w-12 h-12 animate-spin text-yellow-400" />
  </div>
);

export { Loading };