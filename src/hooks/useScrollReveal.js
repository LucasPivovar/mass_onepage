import { useEffect } from 'react';

const useScrollReveal = () => {
  useEffect(() => {
    const observe = () => {
      const elements = document.querySelectorAll('.reveal:not(.revealed)');
      if (elements.length === 0) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: '0px 0px 0px 0px' }
      );

      elements.forEach((el) => observer.observe(el));
      return observer;
    };

    // Run immediately
    let observer = observe();

    // Also run after short delays to catch late-rendered elements
    const t1 = setTimeout(() => { observer = observe(); }, 200);
    const t2 = setTimeout(() => { observer = observe(); }, 600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      if (observer) observer.disconnect();
    };
  }, []);
};

export default useScrollReveal;
