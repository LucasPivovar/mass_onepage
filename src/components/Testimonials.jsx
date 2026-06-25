import React, { useState, useEffect, useRef } from 'react';
import './Testimonials.css';

import video1 from '../assets/Depoimento/IMG_8228.MOV';
import video2 from '../assets/Depoimento/IMG_8243.MOV';
import video3 from '../assets/Depoimento/IMG_8246.MOV';
import video4 from '../assets/Depoimento/IMG_8253.MOV';

const partnersData = [
  {
    id: 0,
    name: 'Depoimento 1',
    video: video1
  },
  {
    id: 1,
    name: 'Depoimento 2',
    video: video2
  },
  {
    id: 2,
    name: 'Depoimento 3',
    video: video3
  },
  {
    id: 3,
    name: 'Depoimento 4',
    video: video4
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef({});

  // Cycle to next video
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % partnersData.length);
  };

  // Cycle to previous video
  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + partnersData.length) % partnersData.length);
  };

  // Auto-slide effect every 6 seconds, only if video is not playing
  useEffect(() => {
    if (isPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isPlaying, activeIndex]);

  // Sync active video playback
  useEffect(() => {
    // Pause all other videos and reset
    partnersData.forEach((partner) => {
      const vid = videoRefs.current[partner.id];
      if (vid && partner.id !== activeIndex) {
        vid.pause();
        vid.currentTime = 0;
      }
    });

    // Control the active video
    const activeVid = videoRefs.current[activeIndex];
    if (activeVid) {
      activeVid.muted = isMuted;
      if (isPlaying) {
        activeVid.play().catch(() => {
          setIsPlaying(false);
        });
      } else {
        activeVid.pause();
      }
    }
  }, [activeIndex, isPlaying, isMuted]);

  // Reset play state to paused when active index changes
  useEffect(() => {
    setIsPlaying(false);
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
                                } else {
                                  setIsPlaying(!isPlaying);
                                }
                              }}
                            >
                              <div className="inner-card-wrapper">
                                {/* Poster Image */}
                                {partner.poster && (
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
                                )}

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

                                {/* Custom controls overlay for the active slide */}
                                {isActive && (
                                  <div className="video-custom-controls">
                                    <button 
                                      className="video-control-btn play-pause-btn"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setIsPlaying(!isPlaying);
                                      }}
                                      title={isPlaying ? "Pausar" : "Reproduzir"}
                                    >
                                      {isPlaying ? (
                                        <svg fill="currentColor" viewBox="0 0 320 512" width="18" height="18">
                                          <path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/>
                                        </svg>
                                      ) : (
                                        <svg fill="currentColor" viewBox="0 0 384 512" width="18" height="18">
                                          <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                        </svg>
                                      )}
                                    </button>

                                    <button 
                                      className="video-control-btn mute-unmute-btn"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setIsMuted(!isMuted);
                                      }}
                                      title={isMuted ? "Ativar som" : "Desativar som"}
                                    >
                                      {isMuted ? (
                                        <svg fill="currentColor" viewBox="0 0 576 512" width="18" height="18">
                                          <path d="M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/>
                                        </svg>
                                      ) : (
                                        <svg fill="currentColor" viewBox="0 0 576 512" width="18" height="18">
                                          <path d="M320 64c0-12.6-7.4-24-18.9-29.2s-25-3.1-34.4 5.3L131.8 160H64c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h67.8L266.7 471.9c9.4 8.4 22.9 10.4 34.4 5.3S320 460.6 320 448V64zM448 256c0-42.5-17.2-81-45.3-109c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9c20.3 20.3 32.9 48.3 32.9 75.1s-12.6 54.8-32.9 75.1c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0c28.1-28.1 45.3-66.5 45.3-109zm112 0c0-72.9-29.5-139-77.3-186.7c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9C486.2 140.7 512 195.3 512 256s-25.8 115.3-65.3 152.7c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0C530.5 395 560 328.9 560 256z"/>
                                        </svg>
                                      )}
                                    </button>
                                  </div>
                                )}
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

