import React, { useState } from 'react'
import SectionTitle from '../../components/SectionTitle'
import siteData from '../../data/siteData'

export default function AboutPreview(){
  const s = siteData.school
  const [open, setOpen] = useState(false)
  return (
    <div className="about-preview">
      <div className="about-preview__text">
        <SectionTitle eyebrow="About" title="About Our School">Saraswati Vidya Mandir School was established in {s.established} with the mission to provide a modern, values-driven education to children from Nursery to 8th grade. We blend a bilingual curriculum with activity-based learning, strong pastoral care, and community engagement to build confident, compassionate learners.</SectionTitle>
        <p className="lead">We emphasise foundational skills, inquiry-led science and mathematics, reading and language development, and socio-emotional learning. Classrooms are safe, well-resourced and led by qualified teachers.</p>
        <div className="card more-content">
          <div className={open ? 'more-inner open' : 'more-inner collapsed'} aria-expanded={open}>
            <h3>Our Approach</h3>
            <p className="lead">Our approach to education is centred on building strong foundational skills that prepare students for lifelong learning. We place special emphasis on inquiry-led science and mathematics, encouraging curiosity, critical thinking, and problem-solving through hands-on activities and real-world connections.

Equally important is reading and language development, where students are guided to become confident readers, effective communicators, and thoughtful writers. Alongside academic learning, we focus on socio-emotional development, helping children build self-confidence, empathy, teamwork, and resilience.

Our classrooms are safe, welcoming, and well-resourced, creating an environment where students feel comfortable to ask questions and express ideas freely. Learning is guided by qualified and dedicated teachers who provide individual attention, use modern teaching methods, and ensure that every child progresses at their own pace—academically, socially, and emotionally.</p>
            <h3>Community &amp; Care</h3>
            <p>Situated in the peaceful surroundings of Village Nawadih, Rohtas district, our school proudly serves families from the nearby villages and communities. We believe that education grows strongest when the school and community work together, and we actively foster this bond through open communication, trust, and shared values.

Our campus provides a safe, caring, and inclusive environment where every child is respected, encouraged, and supported. Teachers and staff pay personal attention to each student’s academic progress, emotional well-being, and character development. By nurturing discipline, empathy, and confidence, we help children grow not only as successful learners but also as responsible and compassionate individuals.

Through community involvement, regular interaction with parents, and a focus on holistic development, our school ensures that every child feels valued and empowered to achieve their full potential—academically, socially, and personally.</p>
          </div>
          <div className="more-toggle-wrap">
            <button className="read-more" onClick={() => setOpen(v => !v)} aria-expanded={open}>
              {open ? 'Show less' : 'Read more'}
            </button>
          </div>
        </div>
      </div>

      <aside className="about-preview__vmv">
        <div className="preview-vmv">
          <div className="info-card">
            <div className="badge">V</div>
            <div className="card-body">
              <h4>Vision</h4>
              <div className="card-sub">Inspiring curious, responsible learners</div>
              <p>A future-focused learning ethos that inspires curiosity and citizenship. To inspire curious, confident learners who contribute responsibly to society.</p>
              <p className="muted">Focus areas: inquiry-based learning, service, and leadership opportunities.</p>
            </div>
          </div>

          <div className="info-card">
            <div className="badge badge-gold">M</div>
            <div className="card-body">
              <h4>Mission</h4>
              <div className="card-sub">Balanced, engaging education</div>
              <p>Deliver a balanced education that blends academic rigour with activity and values. To provide an engaging, balanced education that develops academic skills, character, and creativity.</p>
              <p className="muted">Approach: personalised learning, active classrooms and continuous feedback.</p>
            </div>
          </div>

          <div className="info-card">
            <div className="badge">V</div>
            <div className="card-body">
              <h4>Values</h4>
              <div className="card-sub">Character & community</div>
              <p>Integrity, Respect, Curiosity and Excellence guide all our work with children. We uphold these values in every classroom and community activity.</p>
              <p className="muted">Embedded through routines, assemblies and community service projects.</p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}

