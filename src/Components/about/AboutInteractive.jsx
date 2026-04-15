import { useState } from 'react'
import '../../styles/aboutInteractive.css'

export default function AboutInteractive() {
  const [active, setActive] = useState(null)

  return (
    <section className="content-full content-soft">
      <div className="container about-interactive-grid">

        {/* LEFT SIDE – Hover Panels */}
        <div className="interactive-cards">

          <div
            className={`hover-card ${active === 'vision' ? 'active' : ''}`}
            onMouseEnter={() => setActive('vision')}
            onClick={() => setActive(prev => prev === 'vision' ? null : 'vision')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if(e.key==='Enter' || e.key===' ') setActive(prev => prev === 'vision' ? null : 'vision') }}
          >
            <h3>Our Vision & Mission</h3>
            {active === 'vision' && (
              <>
                <p><strong>Vision</strong></p>
                <p>
                  Saraswati Vidya Mandir School is widely recognised as a leading
                  educational institution in India, nurturing global-minded,
                  academically successful and well-balanced learners.
                </p>

                <p><strong>Mission</strong></p>
                <p>
                  To foster responsible global citizens by providing world-class
                  education through dedicated faculty and a supportive parent
                  community.
                </p>
              </>
            )}
          </div>

          <div
            className={`hover-card ${active === 'founder' ? 'active' : ''}`}
            onMouseEnter={() => setActive('founder')}
            onClick={() => setActive(prev => prev === 'founder' ? null : 'founder')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if(e.key==='Enter' || e.key===' ') setActive(prev => prev === 'founder' ? null : 'founder') }}
          >
            <h3>Our Inspiration & Founder</h3>
            {active === 'founder' && (
                <p>
                Inspired by Indian values and global vision, the foundation of
                Saraswati Vidya Mandir School was laid to create disciplined,
                confident and compassionate leaders of tomorrow.
              </p>
            )}
          </div>

          <div
            className={`hover-card ${active === 'principal' ? 'active' : ''}`}
            onMouseEnter={() => setActive('principal')}
            onClick={() => setActive(prev => prev === 'principal' ? null : 'principal')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if(e.key==='Enter' || e.key===' ') setActive(prev => prev === 'principal' ? null : 'principal') }}
          >
            <h3>Principal’s Message</h3>
            {active === 'principal' && (
              <p>
                “I see it, I get it and I can do it!”  
                Saraswati Vidya Mandir School is a place where students grow academically, socially
                and morally, prepared to face life with confidence.
              </p>
            )}
          </div>

        </div>

        {/* RIGHT SIDE – Notice + Quick Links */}
        <aside className="about-side">

          <div className="card notice-board">
            <h4>Vision Highlights</h4>
            <ul>
              <li>✔ Global-minded education</li>
              <li>✔ Academic & human excellence</li>
              <li>✔ Value-based learning</li>
              <li>✔ Safe & caring environment</li>
            </ul>
          </div>

          <div className="card quick-links">
            <h4>Quick Links</h4>
            <a href="/brochure">📄 School Brochure</a>
            <a href="/fees">💰 Fee Structure</a>
            <a href="/admission">📝 Online Admission Enquiry</a>
            <a href="/events">📸 Events & Media</a>
            <a href="/contact">📞 Contact Us</a>
          </div>

        </aside>

      </div>
    </section>
  )
}

