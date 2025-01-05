import React from 'react';
import { CircleMarker, Popup } from 'react-leaflet';
import type { LocationData } from '../types/location';
import { getGradientColor } from '../utils/colorUtils';

interface LocationMarkerProps {
  location: LocationData;
}

export const LocationMarker: React.FC<LocationMarkerProps> = ({ location }) => {
  const markerColor = getGradientColor(location.value);
  
  return (
    <CircleMarker
      center={location.coordinates}
      pathOptions={{ 
        fillColor: markerColor,
        fillOpacity: 0.7,
        weight: 2,
        color: '#fff',
        opacity: 1
      }}
      radius={8}
    >
      <Popup>
        <div className="text-sm font-medium">
          <p className="mb-1">Location: {location.coordinates.join(', ')}</p>
          <p>Value: {location.value.toFixed(2)}</p>
        </div>
      </Popup>
    </CircleMarker>
  );
};