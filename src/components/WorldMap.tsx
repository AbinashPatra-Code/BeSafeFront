import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import type { LocationData } from '../types/location';
import { LocationMarker } from './LocationMarker';
import { useMapResize } from '../hooks/useMapResize';
import 'leaflet/dist/leaflet.css';

interface WorldMapProps {
  data: LocationData[];
}

export const WorldMap: React.FC<WorldMapProps> = ({ data }) => {
  useMapResize();

  return (
    <div style={{ height: '600px', width: '100%' }}>
      <MapContainer
        center={[20, 0]}
        zoom={2}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data.map((location, index) => (
          <LocationMarker key={index} location={location} />
        ))}
      </MapContainer>
    </div>
  );
};