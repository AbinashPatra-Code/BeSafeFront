import React from 'react';
import { MapIcon } from 'lucide-react';

export const MapHeader: React.FC = () => {
  return (
    <div className="flex items-center gap-2 mb-6">
      <MapIcon className="w-6 h-6 text-blue-600" />
      <h1 className="text-2xl font-bold text-gray-800">World Location Map</h1>
    </div>
  );
};