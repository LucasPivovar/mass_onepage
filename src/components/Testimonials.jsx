import React from 'react';
import './Testimonials.css';

const reviews = [
  { name: 'Sarah Linda', role: 'Designer, Creative Studio', text: "We've tried multiple tools, but this one hits the sweet spot between simplicity and powerful features for our team." },
  { name: 'James Bond', role: 'Freelance Consultant', text: "I love how easy it is to organize tasks, assign roles, and track progress. It helps me stay on top of everything efficiently." },
  { name: 'Priya Donald', role: 'UX Designer, TaskHive', text: "The integration options and the clean interface make this the best task management tool we've used so far!" },
  { name: 'Elena Rossi', role: 'Marketing Director, BrightPath', text: "After testing countless apps, this one finally balances ease of use with the depth our team needs." },
  { name: 'Anna Carter', role: 'Team Lead, CloudShift', text: "It's rare to find a tool that's both intuitive and packed with everything a growing team requires." },
  { name: 'Maria Lopez', role: 'Product Manager, FlowSync', text: "From setup to daily use, it delivers exactly what we need — clean, smart, and incredibly efficient." },
];

const initials = (name) => name.split(' ').map(n => n[0]).join('');

const colors = ['#A855F7', '#8B5CF6', '#FF5722', '#10b981', '#f59e0b', '#ec4899'];

const Testimonials = () => {
  return (
    <section id="reviews" className="testimonials-sec section-padding">
      <div className="container">
        <div className="sec-title text-center reveal">
          <span className="badge badge-dark">Testimonials</span>
          <h2 className="title">Trusted & Loved by 500k+<br/>Worldwide Customers</h2>
          <p className="subtitle">Our clients' success speaks for itself. Hear directly from the<br/>people and businesses who have trusted our platform.</p>
        </div>

        <div className="testi-grid">
          {reviews.map((r, i) => (
            <div className={`testi-card reveal reveal-delay-${(i % 3) + 1}`} key={i}>
              <div className="testi-author">
                <div className="avatar" style={{ background: colors[i] }}>
                  {initials(r.name)}
                </div>
                <div>
                  <h4 className="name">{r.name}</h4>
                  <span className="designation">{r.role}</span>
                </div>
              </div>
              <p>{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
