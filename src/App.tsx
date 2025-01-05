import React from 'react';
import { MapHeader } from './components/MapHeader';
import { MapLegend } from './components/MapLegend';
import { WorldMap } from './components/WorldMap';
import { demoData } from './data/locations';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-4">
        <MapHeader />
        <MapLegend />
        <div className="rounded-lg overflow-hidden border border-gray-200 bg-white shadow-lg">
          <WorldMap data={demoData} />
        </div>
      </div>
    </div>
  );
}

export default App;