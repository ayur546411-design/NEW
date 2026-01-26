import React from 'react'
import '../styles/microsoft-form.css'

export default function MicrosoftFormEmbed({ formSrc, height = 800 }){
  if(!formSrc) return (
    <div className="ms-form-embed placeholder">
      <p>No Microsoft Form URL provided. Paste the Forms embed `src` into the `formSrc` prop.</p>
    </div>
  )

  return (
    <div className="ms-form-embed">
      <iframe
        title="microsoft-form"
        src={formSrc}
        width="100%"
        height={height}
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        allowFullScreen
      >
        Loading…
      </iframe>
    </div>
  )
}
