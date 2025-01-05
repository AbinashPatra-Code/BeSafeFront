import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

export const setupLeaflet = () => {
  // Delete default markers
  delete (L.Icon.Default.prototype as any)._getIconUrl;

  // Setup default icon
  L.Icon.Default.mergeOptions({
    iconUrl: icon,
    iconRetinaUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
};