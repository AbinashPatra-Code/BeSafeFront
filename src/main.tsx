import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { setupLeaflet } from './utils/leafletSetup';
import './index.css';

// Initialize Leaflet configuration
setupLeaflet();

// Create root element
const root = createRoot(document.getElementById('root')!);

// Render app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);