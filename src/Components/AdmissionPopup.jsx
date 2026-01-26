import React, { useEffect, useState } from 'react'
import './popup.css'

export default function AdmissionPopup({ onOpenEnquiry }){
  const [visible, setVisible] = useState(false)

  useEffect(()=>{
    const seen = sessionStorage.getItem('admissionPopupSeen')
    if(!seen){
      const t = setTimeout(()=> setVisible(true), 600)
      return ()=> clearTimeout(t)
    }
  },[])

  function close(){
    setVisible(false)
    sessionStorage.setItem('admissionPopupSeen','1')
  }

  if(!visible) return null

  return (
    <div className="admission-popup" role="dialog" aria-live="polite">
      <div className="popup-card">
        <div className="popup-body">
          <h4>Admissions Open</h4>
          <p>Admissions are open for Academic Session 2026–2027. Click below to send an enquiry.</p>
        </div>
        <div className="popup-actions">
          <button className="btn btn-ghost" onClick={close}>Close</button>
          <a className="btn btn-primary" href="https://docs.google.com/forms/d/e/1FAIpQLSe1eoec2FqUo60Ma4tnsVejm6jGbwzWGCYwWP5hHlWBcK-1rw/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" onClick={close}>Enquire Now</a>
        </div>
      </div>
    </div>
  )
}
