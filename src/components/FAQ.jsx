import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  { q: 'What is an AI website builder?', a: 'An AI website builder is a platform that combines simplicity with powerful features like real-time collaboration, smart task organization, and seamless integrations — all in a clean, intuitive interface.' },
  { q: 'Do I need coding skills to use it?', a: 'No coding skills are required. Our AI builder allows you to design professional websites using intuitive tools without writing a single line of code.' },
  { q: 'How long does it take to build a website?', a: 'You can launch a simple website in minutes using our pre-designed templates, while more complex projects may take longer depending on customization.' },
  { q: 'Can I customize the designs?', a: 'Absolutely! You can fully customize templates using our drag-and-drop editor, changing layouts, colors, fonts, and more.' },
  { q: 'Is my website mobile-friendly?', a: 'Yes, all websites built with our AI platform are fully responsive and optimized for mobile devices.' },
];

const FAQ = () => {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="faq-sec">

      {/* Large circle — positioned left, mostly off-screen, arc visible */}
      <div className="faq-bg-circle"></div>

      <div className="container">

        {/* ── Part 1: FAQ ── */}
        <div className="faq-inner reveal">
          <div className="faq-left">
            <span className="badge badge-dark">Fast answers</span>
            <h2 className="title">Still Curious? Find<br/>Your Answers Below</h2>
            <p>We've gathered the most common inquiries to<br/>help you get started quickly.</p>
            <a href="#" className="btn btn-primary faq-btn">Get a Quote &rarr;</a>
          </div>

          <div className="faq-right">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item ${open === i ? 'active' : ''}`}>
                <button className="faq-question" onClick={() => setOpen(open === i ? -1 : i)}>
                  <span>{i + 1}. {faq.q}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={`faq-arrow ${open === i ? 'rotated' : ''}`}>
                    <path d="M5 9l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {open === i && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Part 2: CTA ── */}
        <div className="cta-inner reveal">
          <div className="cta-content">
            <span className="badge badge-gray">All-In-One Solutions</span>
            <h2 className="title">Launch Your Site in<br/>Minutes with the AI<br/>Website Builder</h2>
            <p>Start creating your website today with the power of<br/>AI. Our intuitive AI website builder makes designing<br/>effortless.</p>
            <div className="cta-btns">
              <a href="#" className="btn btn-secondary">Start For Free &rarr;</a>
              <a href="#" className="btn btn-outline">Generate With AI &rarr;</a>
            </div>
          </div>

          <div className="cta-mockup-wrap">
            {/* Floating cursors */}
            <div className="cta-cursor cursor-left">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 3L19 12L5 21V3Z" fill="#22c55e"/></svg>
              <span className="pill-label green-pill">SaaS</span>
            </div>
            <div className="cta-cursor cursor-right">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 3L19 12L5 21V3Z" fill="#d4f84b"/></svg>
              <span className="pill-label lime-pill">Website</span>
            </div>

            {/* App mockup frame */}
            <div className="mockup-frame">
              <div className="mockup-topbar">
                <span className="dot-r"></span><span className="dot-y"></span><span className="dot-g"></span>
              </div>
              <div className="mockup-body">
                <div className="mockup-sidebar">
                  <div className="s-item active">Overview</div>
                  <div className="s-item">eCommerce</div>
                  <div className="s-item">Projects</div>
                  <div className="s-item">Pages</div>
                  <div className="s-item">Campaigns</div>
                  <div className="s-item">Documents</div>
                </div>
                <div className="mockup-main">
                  <h5>Website Library</h5>
                  <p className="mockup-sub">100+ pre-build template fully ready for use</p>
                  <div className="create-btn">+ Create a Website</div>
                  <div className="inner-dark-card">
                    <p className="inner-card-title">Next-Gen Tools for<br/>High-Performing Teams</p>
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

export default FAQ;
