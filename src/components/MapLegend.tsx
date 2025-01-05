import React from 'react';
import { getGradientColor } from '../utils/colorUtils';

export const MapLegend: React.FC = () => {
  const gradientSteps = 5;
  const steps = Array.from({ length: gradientSteps }, (_, i) => i / (gradientSteps - 1));

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
      <h3 className="text-sm font-medium text-gray-700 mb-2">Value Range</h3>
      <div className="flex items-center gap-2">
        <div className="flex-1 h-8 rounded-md" style={{
          background: `linear-gradient(to right, ${getGradientColor(0)}, ${getGradientColor(1)})`
        }}></div>
        <div className="flex justify-between w-full absolute" style={{ marginLeft: '8px', marginRight: '8px' }}>
          {steps.map((step) => (
            <div key={step} className="flex flex-col items-center" style={{ width: '40px' }}>
              <span className="text-xs text-gray-600">{step.toFixed(2)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};