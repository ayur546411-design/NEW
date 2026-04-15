import React from 'react'
import SectionTitle from '../components/SectionTitle'
import siteData from '../data/siteData'
import AboutInteractive from '../Components/about/AboutInteractive'

import '../styles/about.css'

export default function About() {
  const s = siteData.school

  return (
    <main className="about-page">

      {/* ================= HERO ================= */}
      <section
        className="hero-full"
        style={{ backgroundImage: `url(${siteData.images[1]})` }}
      >
        <div className="hero-overlay">
          <div className="container hero-content">
            <SectionTitle eyebrow="About Us" title="Saraswati Vidya Mandir School">
              Established in {s.established}, we are committed to nurturing
              academically strong, morally grounded and globally responsible
              learners.
            </SectionTitle>
            <p className="hero-sub">
              Excellence in academics, holistic growth and value-based education.
            </p>
          </div>
        </div>
      </section>

      {/* ================= ABOUT CORE ================= */}
      <section className="content-full about-section content-soft">
        <div className="container about-grid grid-2">

          {/* LEFT */}
          <div className="about-left">

            {/* Vision Panel */}
            <div className="panel vision-panel">
              <h3>Our Vision & Mission</h3>

              <p className="lead">
                “A School Committed to Care”
              </p>

              <p>
                <strong>Saraswati Vidya Mandir School</strong> is widely recognised as a
                leading educational institution in India. Our inspirational
                faculty creates an environment that motivates students to be
                global-minded, academically successful and well-balanced,
                prepared for future challenges and responsibilities.
              </p>

              <p>
                Our mission is to foster responsible global citizens and leaders
                by providing world-class education through collaboration between
                a dedicated faculty and a supportive parents’ fraternity.
              </p>

              <div className="quick-stats">
                <div>
                  <strong>Established</strong>
                  <span>{s.established}</span>
                </div>
                <div>
                  <strong>Grades</strong>
                  <span>{s.classes}</span>
                </div>
                <div>
                  <strong>Medium</strong>
                  <span>{s.medium}</span>
                </div>
              </div>
            </div>

            {/* Educational Approach */}
            <div className="approach-cards">

              <div className="approach-card academic">
                <div className="approach-icon" aria-hidden>🎓</div>
                <div className="approach-body">
                  <h4>Academic Excellence</h4>
                  <p className="lead">
                    Strong foundations with modern pedagogy.
                  </p>
                  <p>
                    We follow CBSE guidelines with continuous upgrades in
                    teaching methodologies, ensuring academic and human
                    excellence.
                  </p>
                </div>
              </div>

              <div className="approach-card community">
                <div className="approach-icon" aria-hidden>🤝</div>
                <div className="approach-body">
                  <h4>Care & Community</h4>
                  <p className="lead">
                    Every child matters.
                  </p>
                  <p>
                    Our educators mentor, monitor and nurture each child,
                    creating a safe, caring and disciplined environment.
                  </p>
                </div>
              </div>

              <div className="approach-card holistic">
                <div className="approach-icon" aria-hidden>🌱</div>
                <div className="approach-body">
                  <h4>Holistic Development</h4>
                  <p className="lead">
                    Beyond classrooms.
                  </p>
                  <p>
                    Sports, yoga, co-curricular activities and leadership
                    programmes are integral to our educational philosophy.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT */}
          <aside className="about-right">

            <div className="about-illustration card">
              <img src={siteData.images[3]} alt="School Campus" />
            </div>

            <div className="vmv-panel card">
              <div className="vmv-row">
                <div className="vmv-box">
                  <h5>Vision</h5>
                  <p>Inspired learners with global outlook</p>
                </div>
                <div className="vmv-box">
                  <h5>Mission</h5>
                  <p>Education with values, discipline and care</p>
                </div>
              </div>
              <div className="vmv-row">
                <div className="vmv-box">
                  <h5>Values</h5>
                  <p>Integrity • Respect • Excellence • Service</p>
                </div>
                <div className="vmv-box">
                  <h5>Established</h5>
                  <p>{s.established}</p>
                </div>
              </div>
            </div>

          </aside>
        </div>
      </section>

      {/* ================= INTERACTIVE SECTION ================= */}
      {/* Vision | Founder | Principal | Notice Board | Quick Links */}
      <AboutInteractive />

    </main>
  )
}
