import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useScrollReveal = () => {
  useEffect(() => {
    // 1. Hero Content Entrance Animation on Load
    gsap.fromTo(
      '.hero-content',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.1, ease: 'power4.out', delay: 0.1 }
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

    // 4. Directional Scroll Reveal Animations using GSAP & ScrollTrigger

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

    // Clean up ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
};

export default useScrollReveal;
