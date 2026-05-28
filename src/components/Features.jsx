import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      id: '01',
      title: 'Drag & Drop Editor — No Coding Required',
      description: 'Easily design and customize your website with our intuitive drag-and-drop editor—no coding needed.',
      imgClass: 'feature-img-1'
    },
    {
      id: '02',
      title: 'AI-Driven Content & Layout Guidance',
      description: 'Leverage AI to instantly generate engaging copy and visually appealing layouts for your website.',
      imgClass: 'feature-img-2'
    },
    {
      id: '03',
      title: '200+ Ready-to-Use Templates',
      description: 'Get a head start with 200+ professionally designed templates ready to use for your projects.',
      imgClass: 'feature-img-3'
    },
    {
      id: '04',
      title: 'Optimized for Speed & Conversions',
      description: 'Fast, smooth, and conversion-ready—designed to engage visitors and drive results instantly.',
      imgClass: 'feature-img-4'
    }
  ];

  return (
    <section id="features" className="features-sec section-padding">
      <div className="container">
        <div className="sec-title text-center reveal">
          <span className="badge">Powerful AI Features</span>
          <h2 className="title">All-in-One Tools to Power<br/>Your Website's Growth</h2>
          <p className="subtitle">Our platform comes packed with powerful features that make<br/>building and scaling your website effortless.</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card reveal" key={index}>
              <div className="feature-content">
                <span className="feature-dot">{feature.id}</span>
                <h4 className="title">{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
              <div className={`feature-img-placeholder ${feature.imgClass}`}>
                {/* Placeholder for the little cards/images in the feature */}
                <div className="inner-card"></div>
              </div>
            </div>
          ))}

          {/* Full width feature card */}
          <div className="feature-card full-width reveal">
             <div className="feature-content">
                <span className="feature-dot">05</span>
                <h4 className="title">Wireframes Turned Into Design Guides</h4>
                <p>Turn your initial wireframes into comprehensive design guides that ensure clarity and consistency.</p>
             </div>
             <div className="feature-img-placeholder feature-img-5">
                <div className="inner-card"></div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
