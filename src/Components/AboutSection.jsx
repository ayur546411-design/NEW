import React from 'react'
import SectionTitle from './SectionTitle'
import siteData from '../data/siteData'
import AboutIllustration from './AboutIllustration'
import '../styles/about.css'

export default function AboutSection(){
  const s = siteData.school
  return (
    <section className="about container about-section">
      <div>
        <SectionTitle eyebrow="About" title="About Our School">Saraswati Vidya Mandir School was established in {s.established} with the mission to provide a modern, values-driven education to children from Nursery to 8th grade. We blend a bilingual curriculum with activity-based learning, strong pastoral care, and community engagement to build confident, compassionate learners.</SectionTitle>

        <div className="vmv-box">
          <div className="vmv-inner">
            <div className="vmv-cards">
              <div className="vmv-item">
                <div className="vmv-badge vmv-blue">V</div>
                <div className="vmv-card">
                  <h4>Vision</h4>
                  <div className="card-sub">Inspiring curious, responsible learners</div>
                  <p>A future-focused learning ethos that inspires curiosity and citizenship. To inspire curious, confident learners who contribute responsibly to society. We envision a world where our students become lifelong learners, critical thinkers, and compassionate leaders who drive positive change in their communities and beyond.</p>
                  <p>Our long-term goals include developing students who excel academically, embrace diversity, and actively participate in solving global challenges through innovation and collaboration.</p>
                  <p className="muted">Focus areas: inquiry-based learning, service, leadership opportunities, STEM education, and global citizenship programs.</p>
                </div>
              </div>

              <div className="vmv-item">
                <div className="vmv-badge vmv-gold">M</div>
                <div className="vmv-card">
                  <h4>Mission</h4>
                  <div className="card-sub">Balanced, engaging education</div>
                  <p>Deliver a balanced education that blends academic rigour with activity and values. To provide an engaging, balanced education that develops academic skills, character, and creativity. Our mission is to nurture each child's potential through innovative teaching methods, fostering a love for learning and preparing them for a dynamic future.</p>
                  <p>We employ differentiated instruction, project-based learning, and technology integration to cater to diverse learning styles. Our focus is on holistic development, ensuring students grow intellectually, emotionally, socially, and physically.</p>
                  <p className="muted">Approach: personalised learning, active classrooms, continuous feedback, experiential learning, and character education programs.</p>
                </div>
              </div>

              <div className="vmv-item">
                <div className="vmv-badge vmv-blue">V</div>
                <div className="vmv-card">
                  <h4>Values</h4>
                  <div className="card-sub">Character & community</div>
                  <p>Integrity, Respect, Curiosity and Excellence guide all our work with children. We uphold these values in every classroom and community activity. These core values shape our students' character, fostering ethical decision-making, empathy, and a commitment to continuous improvement.</p>
                  <p>Our values are integrated into daily life through structured programs, role-modeling by staff, and real-world applications. Students learn to demonstrate integrity in their actions, show respect for diversity, pursue knowledge with curiosity, and strive for excellence in all endeavors.</p>
                  <p className="muted">Embedded through routines, assemblies, community service projects, peer mentoring, and leadership development initiatives.</p>
                </div>
              </div>
            </div>

            <div className="vmv-footer">Est. {s.established}</div>
          </div>
        </div>

        <div className="card more-content">
          <h3>Our Approach</h3>
          <p className="lead">We emphasise foundational skills, inquiry-led science and mathematics, reading and language development, and socio-emotional learning. Classrooms are safe, well-resourced and led by qualified teachers.</p>
          <h3>Community & Care</h3>
          <p>Situated at Village Nawadih in Rohtas district, our school welcomes families from nearby communities and provides a supportive environment for children to thrive academically and personally.</p>
        </div>
      </div>

      <aside>
        <AboutIllustration />
      </aside>
    </section>
  )
}
