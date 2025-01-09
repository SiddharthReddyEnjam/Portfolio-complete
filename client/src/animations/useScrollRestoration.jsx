import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollRestoration = () => {
  const location = useLocation();
  const scrollPositions = useRef(new Map());

  useEffect(() => {
    // Save the scroll position when navigating away
    const saveScrollPosition = () => {
      scrollPositions.current.set(location.key, {
        x: window.scrollX,
        y: window.scrollY,
      });
    };

    window.addEventListener('beforeunload', saveScrollPosition);

    return () => {
      saveScrollPosition(); // Save position on cleanup
      window.removeEventListener('beforeunload', saveScrollPosition);
    };
  }, [location]);

  useEffect(() => {
    // Restore the scroll position or default to top
    const storedPosition = scrollPositions.current.get(location.key);
    if (storedPosition) {
      window.scrollTo(storedPosition.x, storedPosition.y);
    } else {
      window.scrollTo(0, 0); // Scroll to top for new pages
    }
  }, [location]);
};

export default useScrollRestoration;
