import React from 'react';
import './Pricing.css';

const plans = [
  {
    name: 'Regular Website Builder',
    price: '18',
    discount: '15% OFF',
    description: 'Simple solution & powerful',
    popular: false,
    features: ['Free domain for 1 year', 'AI website builder', '250+ templates', 'Social Media Marketing', 'Marketing integrations', 'Built-in analytics', 'Mobile editing'],
  },
  {
    name: 'Premium Website Builder',
    price: '93',
    discount: '28% OFF',
    description: 'Simple solution & powerful',
    popular: true,
    features: ['Free domain for 1 year', 'AI website builder', '250+ templates', 'Social Media Marketing', 'Marketing integrations', 'Built-in analytics', 'Mobile editing'],
  },
  {
    name: 'Custom Website Builder',
    price: '250',
    discount: '83% OFF',
    description: 'Simple solution & powerful',
    popular: false,
    features: ['Free domain for 1 year', 'AI website builder', '250+ templates', 'Social Media Marketing', 'Marketing integrations', 'Built-in analytics', 'Mobile editing'],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-sec section-padding">
      <div className="container">
        <div className="sec-title text-center reveal">
          <span className="badge badge-dark">Pricing Packages</span>
          <h2 className="title">Don't Miss the Special Deals</h2>
          <p className="subtitle">Simple, transparent pricing for every stage. Pick a plan,<br/>unlock powerful features, and grow your website with confidence.</p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`price-card reveal reveal-delay-${i + 1} ${plan.popular ? 'popular' : ''}`}
            >
              {plan.popular && <div className="popular-badge">Popular Package</div>}
              <div className="price-header">
                <span className="discount-badge">{plan.discount}</span>
                <div className="price">
                  <span className="dollar">$</span>
                  <span className="amount">{plan.price}</span>
                  <span className="period">/month</span>
                </div>
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-desc">{plan.description}</p>
                <a href="#" className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline-white'} btn-full`}>
                  Choose Package &rarr;
                </a>
              </div>
              <div className="price-features">
                <h4>Features:</h4>
                <ul>
                  {plan.features.map((f, j) => (
                    <li key={j}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#007aff" strokeWidth="2"/><path d="M8 12l3 3 5-5" stroke="#007aff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
