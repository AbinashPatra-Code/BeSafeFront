import { useEffect } from 'react';

export const useMapResize = () => {
  useEffect(() => {
    const handleResize = () => {
      window.dispatchEvent(new Event('resize'));
    };

    // Initial resize
    handleResize();

    // Add resize listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
};