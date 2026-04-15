import React from 'react'
import siteData from '../data/siteData'

export default function Footer(){
  const s = siteData.school
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>Saraswati Vidya Mandir School</h3>
          <p>{s.address.replace(/\n/g,', ')}</p>
          <p>Email: {s.email}</p>
          <p>Phone: {s.phones.join(' / ')}</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/admission">Admission</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Timings</h4>
          <p>Office: {s.officeTiming}</p>
          <p>School: {s.schoolTiming}</p>
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} {s.name} — All rights reserved.</div>
    </footer>
  )
}
