import React, {useState, useEffect} from 'react'
import '../styles/contact.css'
import siteData from '../data/siteData'
import SectionTitle from '../Components/SectionTitle'
import Loader from '../Components/Common/Loader'

export default function Contact(){
  const [loading,setLoading] = useState(true)
  const s = siteData.school

  useEffect(()=>{
    const t = setTimeout(()=>setLoading(false),300)
    return ()=>clearTimeout(t)
  },[])

  if(loading) return <Loader />

  const mapQuery = encodeURIComponent(s.address.replace(/\n/g,', '))

  return (
    <main className="container contact-page">
      <SectionTitle eyebrow="Contact" title="Get In Touch">Reach our office for enquiries, visits and admissions.</SectionTitle>

      <section className="contact-grid two-column">
        <div className="contact-card card">
          <h4>Address</h4>
          <p>{s.address.replace(/\n/g,', ')}</p>

          <div className="contact-row">
            <div>
              <h4>Phone</h4>
              <p>{s.phones.join(' / ')}</p>
            </div>

            <div>
              <h4>Email</h4>
              <p>{s.email}</p>
            </div>
          </div>

          <h4>Timings</h4>
          <p>Office: {s.officeTiming} • School: {s.schoolTiming}</p>

          <form className="contact-form" onSubmit={(e)=>{e.preventDefault(); alert('Thanks — message sent (demo)')}}>
            <label>Name<input required type="text" name="name" /></label>
            <label>Email<input required type="email" name="email" /></label>
            <label>Message<textarea required name="message" rows="4"/></label>
            <div><button className="btn btn-primary" type="submit">Send Message</button></div>
          </form>
        </div>

        <aside className="map-card card">
          <div className="map-embed">
            <iframe title="school-map" src={`https://www.google.com/maps?q=${mapQuery}&output=embed`} loading="lazy" />
          </div>
        </aside>
      </section>

      <section className="enquiry">
        <h4>Enquiry</h4>
        <p>Call {s.phones[0]} or email {s.email} to request a prospectus or visit.</p>
      </section>
    </main>
  )
}
