import React, { useState, useEffect } from "react";
import AboutSection from "../components/AboutSection";
import LeadershipSection from "../components/LeadershipSection";
import FacilitiesSection from "../components/FacilitiesSection";
import HighlightsSection from "../components/HighlightsSection";
import GalleryPreview from "../components/GalleryPreview";
import AdmissionCTA from "../components/AdmissionCTA";
import FacultyGrid from "../components/FacultyGrid";
import siteData from "../data/siteData";
import banner from "../assets/images/banner.png";
import "../styles/home.css";
import Loader from "../components/Common/Loader";
import AboutPreview from "../Components/home/AboutPreview";
import CurriculumDiagram from "../Components/home/CurriculumDiagram";
import EventsPreview from "../Components/home/EventsPreview";
import StatsStrip from "../Components/home/StatsStrip";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 350);
    return () => clearTimeout(t);
  }, []);

  if (loading) return <Loader />;

  return (
    <main className="home-page">
      <section
        className="hero-full full-bleed"
        style={{
          backgroundImage: `linear-gradient(rgba(1,33,63,0.45),rgba(0,0,0,0.18)), url(${banner})`,
        }}
      >
        <div className="container">
          <div className="hero-intro">
            <h1 className="display">Saraswati Vidya Mandir School</h1>
            <p className="sub">
              Established 2026 • Nursery to 8th • English & Hindi Medium
            </p>
            <div className="hero-actions">
              <a className="btn btn-ghost" href="/about">
                Learn More
              </a>
              <a className="btn btn-primary" href="/admission">
                Admission Open
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="content-full full-bleed alt-bg">
        <div className="container">
          <AboutPreview />
        </div>
      </section>

      <section className="leadership-full full-bleed">
        <div className="container">
          <LeadershipSection />
        </div>
      </section>

      <section className="why-full full-bleed alt-bg">
        <div className="container">
          <h2>Why Choose Our School</h2>
          <div className="cards">
            <div className="card">
              <h4>Trusted Leadership</h4>
              <p>Experienced leadership focused on quality education.</p>
            </div>
            <div className="card">
              <h4>Holistic Curriculum</h4>
              <p>Balanced academics, sports and life skills.</p>
            </div>
            <div className="card">
              <h4>Safe Environment</h4>
              <p>
                Secure campus with caring staff and strong community values.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="facilities-full full-bleed">
        <div className="container">
          <FacilitiesSection />
        </div>
      </section>

      <section className="highlights-full full-bleed alt-bg">
        <div className="container">
          <HighlightsSection />
        </div>
      </section>

      <section className="curriculum-full full-bleed">
        <div className="container">
          <h3>Curriculum & Activities</h3>
          <p className="lead">
            We follow a bilingual, competency-based curriculum with emphasis on
            spoken English, yoga and sports.
          </p>
          <CurriculumDiagram
            subjects={siteData.subjects}
            activities={siteData.activities}
          />
        </div>
      </section>

      <section className="faculty-full full-bleed alt-bg">
        <div className="container">
          <h3>Faculty Preview</h3>
          <FacultyGrid people={siteData.faculty} />
        </div>
      </section>

      <section className="gallery-full full-bleed">
        <div className="container">
          <GalleryPreview />
        </div>
      </section>

      <section className="admission-full full-bleed alt-bg">
        <div className="container">
          <AdmissionCTA />
        </div>
      </section>

      <section className="contact-full full-bleed">
        <div className="container">
          <div className="contact-cta">
            <div className="contact-info">
              <h3>Get In Touch</h3>
              <p className="muted">Call us at <strong>{siteData.school.phones.join(' / ')}</strong> or email <strong>{siteData.school.email}</strong></p>
              <p className="small">Campus: {siteData.school.address || 'Village Nawadih, Rohtas'}</p>
            </div>
            <div className="contact-actions">
              <a className="btn btn-primary" href="/contact">Contact Us</a>
              <a className="btn btn-ghost" href="tel:{siteData.school.phones[0]}">Call Now</a>
            </div>
          </div>
        </div>
      </section>
      <section className="events-full full-bleed">
        <div className="container alt-bg">
          <EventsPreview />
        </div>
      </section>
{/* 
      <section className="content-full full-bleed">
        <div className="container">
          <AboutPreview />
          <StatsStrip />
        </div>
      </section> */}
    </main>
  );
}
