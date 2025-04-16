import { useState, useEffect } from 'react';

const useScrollDirection = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrollingDown = currentScrollY > lastScrollY;
          const scrollDelta = Math.abs(currentScrollY - lastScrollY);
          
          // Reduced threshold for smoother detection
          if (scrollDelta > 5) {
            setIsHidden(scrollingDown);
            setLastScrollY(currentScrollY);
          }
          
          ticking = false;
        });
        
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return isHidden;
};

export default useScrollDirection;
