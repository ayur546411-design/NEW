import React, { useState, useEffect, useRef } from 'react'
import siteData from '../data/siteData'

export default function AdmissionCTA(){
  const [open, setOpen] = useState(false)

  // We'll use a plain HTML form submission targeted to a hidden iframe to avoid fetch/CORS issues.
  // The Apps Script web app should respond with an HTML page that calls `window.parent.postMessage({status:'ok'}, '*')`
  // so the parent window (this React app) can detect success and close/reset the modal.

  const formRef = useRef(null)
  const iframeRef = useRef(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const submitTimeout = useRef(null)

  useEffect(()=>{
    function onMessage(e){
      const data = e.data
      if(!data) return
      // Apps Script posts a simple string: "SUCCESS" or "ERROR"
      if(data === 'SUCCESS'){
        if(submitTimeout.current){ clearTimeout(submitTimeout.current); submitTimeout.current = null }
        // reset form, close modal
        if(formRef.current) formRef.current.reset()
        setIsSubmitting(false)
        setOpen(false)
        alert('Thank you! Your enquiry has been received.')
      } else if(data === 'ERROR'){
        if(submitTimeout.current){ clearTimeout(submitTimeout.current); submitTimeout.current = null }
        setIsSubmitting(false)
        alert('There was an error submitting your enquiry. Please try again or contact the school office.')
      }
    }
    window.addEventListener('message', onMessage)
    return ()=> window.removeEventListener('message', onMessage)
  },[])

  function handleFormSubmit(e){
    // Validate required fields then allow normal HTML form submission to iframe
    const f = formRef.current
    if(!f) return
    const name = (f.elements['name'] && f.elements['name'].value) || ''
    const mobile = (f.elements['mobile'] && f.elements['mobile'].value) || ''
    if(!name || !mobile){
      e.preventDefault()
      alert('Please provide at least Name and Mobile Number')
      return
    }
    // set timestamp hidden input before submit
    const ts = new Date().toISOString()
    const tsInput = f.querySelector('input[name="timestamp"]')
    if(tsInput) tsInput.value = ts
    setIsSubmitting(true)

    // Start a fallback timeout: if no postMessage arrives within 12s, inform user
    if(submitTimeout.current) clearTimeout(submitTimeout.current)
    submitTimeout.current = setTimeout(()=>{
      submitTimeout.current = null
      setIsSubmitting(false)
      alert(`Submission sent. If it doesn't appear in the sheet within a few minutes, please contact the school office at ${siteData.school.phones.join(' / ')} or ${siteData.school.email}.`)
    }, 12000)
    // allow the form to submit normally (targeted to iframe)
  }

  React.useEffect(()=>{
    function handler(){ setOpen(true) }
    window.addEventListener('openAdmissionEnquiry', handler)
    return ()=> window.removeEventListener('openAdmissionEnquiry', handler)
  },[])

  return (
    <section className="admission-cta full-bleed">
      <div className="container cta-inner">
        <div className="cta-text">
          <h3>Admission Open</h3>
          <p>Academic Session {siteData.school.session} — Admissions open from {siteData.school.admissionOpenDate} for Nursery to 8th. Limited seats available.</p>
        </div>
        <div className="cta-actions">
          <a className="btn btn-primary" href="https://docs.google.com/forms/d/e/1FAIpQLSe1eoec2FqUo60Ma4tnsVejm6jGbwzWGCYwWP5hHlWBcK-1rw/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer">Apply Now</a>
          <a className="btn btn-ghost" href="/admission#requirements">Requirements</a>
        </div>
      </div>

      {open && (
        <div className="modal-backdrop" onClick={() => setOpen(false)}>
          <div className="modal-card" role="dialog" aria-modal="true" onClick={e=>e.stopPropagation()}>
            <h3>Admission Enquiry</h3>
            {/* Hidden iframe target to receive the form response without reloading the page */}
            <iframe name="admission-target" ref={iframeRef} style={{display:'none'}} title="admission-target"></iframe>

            <form ref={formRef} className="admission-form" action={siteData.sheetEndpoint} method="POST" target="admission-target" onSubmit={handleFormSubmit}>
              <input type="hidden" name="timestamp" />

              <label>Name</label>
              <input name="name" required />

              <label>Date of Birth</label>
              <input name="dob" type="date" />

              <label>Father's Name</label>
              <input name="father" />

              <label>Mother's Name</label>
              <input name="mother" />

              <label>Mobile No.</label>
              <input name="mobile" required />

              <label>Aadhaar No. (Student / Father)</label>
              <input name="aadhaar" maxLength={12} />

              <label>Email Id</label>
              <input name="email" type="email" />

              <label>Address</label>
              <textarea name="address" rows="3"></textarea>

              <label>Reference</label>
              <input name="reference" />
              <div className="form-actions">
                <button type="button" className="btn btn-ghost" onClick={()=>setOpen(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit Enquiry'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}
