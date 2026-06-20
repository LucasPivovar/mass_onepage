import React, { useState, useEffect, useRef } from 'react';
import './Testimonials.css';

const partnersData = [
  {
    id: 0,
    name: 'Douglas Souza',
    poster: 'https://content.inlead.cloud/2025/12/parceiro-douglas-souza-thumb-576x1024.png',
    video: 'https://content.inlead.cloud/2025/12/parceiro-douglas-souza.mp4'
  },
  {
    id: 1,
    name: 'Henrique Carvalho',
    poster: 'https://content.inlead.cloud/2025/12/parceiro-henrique-carvalho-thumb-576x1024.png',
    video: 'https://content.inlead.cloud/2025/12/parceiro-henrique-carvalho.mp4'
  },
  {
    id: 2,
    name: 'Diego Brandão',
    poster: 'https://content.inlead.cloud/2025/12/parceiro-diego-brandao-thumb-576x1024.png',
    video: 'https://content.inlead.cloud/2025/12/parceiro-diego-brandao.mp4'
  },
  {
    id: 3,
    name: 'Matheus Sanfer',
    poster: 'https://content.inlead.cloud/2025/12/parceiro-matheus-sanfer-thumb-576x1024.png',
    video: 'https://content.inlead.cloud/2025/12/parceiro-matheus-sanfer.mp4'
  },
  {
    id: 4,
    name: 'Lucas Roudi',
    poster: 'https://content.inlead.cloud/2025/12/parceiro-lucas-roudi-thumb-576x1024.png',
    video: 'https://content.inlead.cloud/2025/12/parceiro-lucas-roudi.mp4'
  },
  {
    id: 5,
    name: 'Kevones',
    poster: 'https://content.inlead.cloud/2025/12/parceiro-kevones-thumb-576x1024.png',
    video: 'https://content.inlead.cloud/2025/12/parceiro-kevones.mp4'
  },
  {
    id: 6,
    name: 'Matheus Bressan',
    poster: 'https://content.inlead.cloud/2025/12/matheus_bressan_thumb-576x1024.png',
    video: 'https://content.inlead.cloud/2025/12/parceiro-matheus-bressan.mp4'
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef({});

  // Cycle to next video
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % partnersData.length);
  };

  // Cycle to previous video
  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + partnersData.length) % partnersData.length);
  };

  // Auto-slide effect every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  // Sync active video playback
  useEffect(() => {
    partnersData.forEach((partner) => {
      const vid = videoRefs.current[partner.id];
      if (vid) {
        if (partner.id === activeIndex) {
          vid.muted = true;
          vid.play().catch(() => {});
        } else {
          vid.pause();
          vid.currentTime = 0;
        }
      }
    });
  }, [activeIndex]);

  return (
    <section id="reviews" className="testimonials-sec">
      <div className="testi-overflow-wrapper">
        <div className="container">
          <div className="testi-content-wrapper">
            {/* Dark background panel */}
            <div className="testi-bg-panel"></div>
            
            <div className="testi-grid-align">
              
              {/* Left text column */}
              <div className="testi-left-content">
                <div className="testi-left-content-inner">
                  <h2 className="testi-main-title">
                    Vejam o que estão dizendo sobre nós:
                  </h2>
                  
                  <div className="testi-subtitle">
                    A MassFlow está presente nos mais diversos segmentos de mercado, consolidando-se como a escolha preferida e recomendada por quem mais entende do assunto.
                  </div>

                  {/* Simple Carousel Navigation Arrows */}
                  <div className="carousel-nav-buttons">
                    <button 
                      onClick={handlePrev} 
                      className="carousel-nav-btn prev" 
                      aria-label="Vídeo anterior" 
                      title="Vídeo anterior"
                    >
                      <svg fill="currentColor" viewBox="0 0 320 512" width="20" height="20">
                        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                      </svg>
                    </button>
                    <button 
                      onClick={handleNext} 
                      className="carousel-nav-btn next" 
                      aria-label="Próximo vídeo" 
                      title="Próximo vídeo"
                    >
                      <svg fill="currentColor" viewBox="0 0 320 512" width="20" height="20">
                        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right swiper column */}
              <div className="testi-right-slider">
                {/* Spacer aspect ratio */}
                <div className="invisible-spacer"></div>
                
                {/* Slider Absolute container */}
                <div className="testi-slider-container">
                  <div className="partners-slider-section">
                    <div className="swiper-custom">
                      <div className="swiper-wrapper-custom">
                        {partnersData.map((partner) => {
                          const isActive = partner.id === activeIndex;
                          
                          // Calculate diff relative to activeIndex
                          const diff = (partner.id - activeIndex + partnersData.length) % partnersData.length;
                          
                          let positionClass = 'card-back';
                          if (diff === 0) positionClass = 'swiper-slide-active';
                          else if (diff === 1) positionClass = 'swiper-slide-next';
                          else if (diff === 2) positionClass = 'swiper-slide-queue-1';
                          else if (diff === 3) positionClass = 'swiper-slide-queue-2';
                          else if (diff === partnersData.length - 1) positionClass = 'swiper-slide-prev';

                          return (
                            <div 
                              key={partner.id}
                              className={`swiper-slide ${positionClass}`}
                              onClick={() => {
                                if (!isActive) {
                                  setActiveIndex(partner.id);
                                }
                              }}
                            >
                              <div className="inner-card-wrapper">
                                {/* Poster Image */}
                                <img 
                                  src={partner.poster} 
                                  alt={partner.name} 
                                  className="card-poster-img"
                                  style={{ 
                                    opacity: isActive ? 0 : 1, 
                                    zIndex: 3,
                                    pointerEvents: 'none'
                                  }}
                                />

                                {/* Video Loop element */}
                                <video 
                                  ref={(el) => (videoRefs.current[partner.id] = el)}
                                  src={partner.video}
                                  loop 
                                  playsInline 
                                  preload="auto" 
                                  muted
                                  autoPlay={isActive}
                                  className="card-video-elem"
                                  style={{ zIndex: 2 }}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

