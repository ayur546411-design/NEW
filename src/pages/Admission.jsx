import React, { useState, useEffect } from 'react'
import SectionTitle from '../Components/SectionTitle'
import siteData from '../data/siteData'
import AdmissionProcess from '../components/AdmissionProcess'
import '../styles/admission.css'
import Loader from '../Components/Common/Loader'
import MicrosoftFormEmbed from '../components/MicrosoftFormEmbed'

export default function Admission() {
  const [loading, setLoading] = useState(true)
  const s = siteData.school

  const steps = [
    {
      title: 'Visit & Enquiry',
      desc: 'Parents are welcome to visit the school campus or contact us to understand our curriculum and facilities.'
    },
    {
      title: 'Application Form',
      desc: 'Collect and submit the admission form duly filled with accurate information.'
    },
    {
      title: 'Interaction & Assessment',
      desc: 'An informal interaction or assessment is conducted for age-appropriate classes.'
    },
    {
      title: 'Confirmation',
      desc: 'Admission is confirmed after document verification and fee submission.'
    }
  ]

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 350)
    return () => clearTimeout(t)
  }, [])

  if (loading) return <Loader />

  return (
    <main className="admission-page">

      {/* HERO */}
      <section
        className="hero-full full-bleed"
        style={{ backgroundImage: `url(${siteData.images[2]})` }}
      >
        <div className="container hero-overlay">
          <SectionTitle eyebrow="Admission" title="Admission Process">
            Admission open for the academic session <strong>{s.session}</strong>.
            We follow a transparent, student-friendly admission procedure.
          </SectionTitle>
        </div>
      </section>

      {/* PROCESS */}
      <section className="content-full full-bleed">
        <div className="container">
          <SectionTitle eyebrow="Steps" title="How to Apply" />
          <AdmissionProcess steps={steps} />
        </div>
      </section>

      {/* ELIGIBILITY & DOCUMENTS */}
      <section className="content-soft full-bleed">
        <div className="container two-col">
          <div>
            <SectionTitle eyebrow="Eligibility" title="Who Can Apply?" />
            <ul className="clean-list">
              <li>Admission based on age criteria as per norms</li>
              <li>Previous school record (if applicable)</li>
              <li>Transfer Certificate for Grade 2 onwards</li>
            </ul>
          </div>

          <div>
            <SectionTitle eyebrow="Documents" title="Required Documents" />
            <ul className="clean-list">
              <li>Birth Certificate</li>
              <li>Aadhaar Card (Student & Parent)</li>
              <li>2 Passport Size Photographs</li>
              <li>Previous Report Card</li>
            </ul>
          </div>
        </div>
      </section>

      {/* IMPORTANT INFO */}
      <section className="content-full full-bleed">
        <div className="container">
          <SectionTitle eyebrow="Information" title="Important Notes" />

          <div className="cards">
            <div className="card">
              <h4>📅 Academic Session</h4>
              <p>The academic year begins in April and follows a structured assessment system.</p>
            </div>
            <div className="card">
              <h4>💰 Fee Policy</h4>
              <p>Our fee structure is transparent and communicated during the admission process.</p>
            </div>
            <div className="card">
              <h4>🏫 Limited Seats</h4>
              <p>Admissions are subject to seat availability for each grade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="cta-section full-bleed">
        <div className="container">
          <h3>Have Questions About Admission?</h3>
          <p>
            📞 {s.phones.join(' / ')} <br />
            📧 {s.email}
          </p>
          <a href="/contact" className="btn btn-primary">
            Contact Admission Office
          </a>
        </div>
      </section>

      {/* EMBED MICROSOFT FORM - replace formSrc with your Forms embed src */}
      <section className="content-full full-bleed">
        <div className="container">
          <SectionTitle eyebrow="Apply" title="Admission Enquiry Form" />
          <MicrosoftFormEmbed formSrc={""} height={850} />
          <p className="muted">Tip: Create the form from inside the workbook (Excel Web → Insert → Forms) so responses append to the same file.</p>
        </div>
      </section>

    </main>
  )
}
