import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useScrollReveal = () => {
  useEffect(() => {
    // 1. Staggered Hero Content Entrance Animation on Load
    gsap.fromTo(
      '.hero-content .title',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.0, ease: 'power3.out', delay: 0.1 }
    );
    gsap.fromTo(
      '.hero-content .subtitle',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.0, ease: 'power3.out', delay: 0.25 }
    );
    gsap.fromTo(
      '.hero-btn',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.0, ease: 'power3.out', delay: 0.4 }
    );

    // 2. Hero Mockup Frame Entrance Animation on Load (Laptop rises from below)
    gsap.fromTo(
      '.placeholder-laptop',
      { opacity: 0, scale: 0.88, y: 80 },
      { opacity: 1, scale: 1, y: 0, duration: 1.3, ease: 'power3.out', delay: 0.3 }
    );

    // 3. Hero Floating Cursors Entrance Animation on Load
    gsap.fromTo(
      '.floating-cursor',
      { opacity: 0, scale: 0.6 },
      { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)', delay: 0.7, stagger: 0.12 }
    );

    // 4. Mouse follow parallax for hero cursors
    const hero = document.querySelector('.hero-sec');
    const cursors = document.querySelectorAll('.floating-cursor');
    
    const onMouseMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      cursors.forEach((cursor, idx) => {
        const factor = (idx + 1) * 0.08;
        gsap.to(cursor, {
          x: x * factor,
          y: y * factor,
          duration: 0.6,
          ease: 'power1.out',
        });
      });
    };

    const onMouseLeave = () => {
      cursors.forEach((cursor) => {
        gsap.to(cursor, {
          x: 0,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
        });
      });
    };

    if (hero && cursors.length > 0) {
      hero.addEventListener('mousemove', onMouseMove);
      hero.addEventListener('mouseleave', onMouseLeave);
    }

    // 5. Custom cursor mouse movement tracking (using left/top for robust translation)
    const onMouseMoveCursor = (e) => {
      const cursor = document.querySelector('.custom-cursor');
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        cursor.style.opacity = '1';
      }
    };
    window.addEventListener('mousemove', onMouseMoveCursor);

    // Event delegation for custom cursor hover states (links, buttons, interactive elements)
    const onMouseOverCursor = (e) => {
      const cursor = document.querySelector('.custom-cursor');
      if (cursor && e.target && typeof e.target.closest === 'function' && e.target.closest('a, button, .faq-question, .why-btn-premium, .why-card, input, textarea, select')) {
        cursor.classList.add('custom-cursor-hover');
      }
    };
    const onMouseOutCursor = (e) => {
      const cursor = document.querySelector('.custom-cursor');
      if (cursor && e.target && typeof e.target.closest === 'function' && e.target.closest('a, button, .faq-question, .why-btn-premium, .why-card, input, textarea, select')) {
        cursor.classList.remove('custom-cursor-hover');
      }
    };
    document.addEventListener('mouseover', onMouseOverCursor);
    document.addEventListener('mouseout', onMouseOutCursor);

    // Custom active/clicking states (mousedown and mouseup)
    const onMouseDownCursor = () => {
      const cursor = document.querySelector('.custom-cursor');
      if (cursor) {
        cursor.classList.add('custom-cursor-active');
      }
    };
    const onMouseUpCursor = () => {
      const cursor = document.querySelector('.custom-cursor');
      if (cursor) {
        cursor.classList.remove('custom-cursor-active');
      }
    };
    window.addEventListener('mousedown', onMouseDownCursor);
    window.addEventListener('mouseup', onMouseUpCursor);

    // 6. Fast reveal templates carousel wrapper
    const carouselEl = document.querySelector('.reveal-carousel');
    if (carouselEl) {
      gsap.fromTo(
        carouselEl,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: carouselEl,
            start: 'top 95%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // 7. Directional Scroll Reveal Animations using GSAP & ScrollTrigger

    // Reveal from Left (Slide in from left side)
    const leftElements = document.querySelectorAll('.reveal-left');
    leftElements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 0.95,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Reveal from Right (Slide in from right side)
    const rightElements = document.querySelectorAll('.reveal-right');
    rightElements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 0.95,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Reveal from Bottom (Rise up vertically, perfect for middle cards & circles)
    const upElements = document.querySelectorAll('.reveal-up, .reveal:not(.reveal-left):not(.reveal-right)');
    upElements.forEach((el) => {
      // Skip hero elements since they animate on load
      if (
        el.classList.contains('hero-content') || 
        el.classList.contains('placeholder-laptop') ||
        el.classList.contains('floating-cursor')
      ) {
        return;
      }
      
      gsap.fromTo(
        el,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Clean up ScrollTriggers and event listeners on unmount
    return () => {
      if (hero && cursors.length > 0) {
        hero.removeEventListener('mousemove', onMouseMove);
        hero.removeEventListener('mouseleave', onMouseLeave);
      }
      window.removeEventListener('mousemove', onMouseMoveCursor);
      document.removeEventListener('mouseover', onMouseOverCursor);
      document.removeEventListener('mouseout', onMouseOutCursor);
      window.removeEventListener('mousedown', onMouseDownCursor);
      window.removeEventListener('mouseup', onMouseUpCursor);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
};

export default useScrollReveal;
