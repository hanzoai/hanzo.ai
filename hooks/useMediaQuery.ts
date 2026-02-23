'use client'

import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Create a MediaQueryList object
    const mediaQuery = window.matchMedia(query);
    
    // Set the initial value
    setMatches(mediaQuery.matches);

    // Define a callback function to handle changes
    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Add the callback as a listener for changes to the media query
    mediaQuery.addEventListener('change', handler);

    // Clean up function to remove the listener
    return () => {
      mediaQuery.removeEventListener('change', handler);
    };
  }, [query]); // Re-run if the query changes

  return matches;
}
