import React from 'react'
import ImageGrid from './ImageGrid'
import siteData from '../data/siteData'

export default function GalleryPreview(){
  const images = siteData.images || []
  const looped = [...images, ...images]

  return (
    <section className="gallery-preview container">
      <h3>Photo Gallery</h3>
      <p className="lead">A few moments from school life and activities.</p>

      {/* Auto-scrolling horizontal slider */}
      <div className="gallery-slider" aria-hidden>
        <div className="slider-track">
          {looped.map((src,i)=>(
            <div key={i} className="slider-item">
              <img src={src} alt={`gallery-${i}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      {/* Grid preview removed as requested; keep CTA */}
      <div style={{textAlign:'center',marginTop:18}}>
        <a className="btn btn-ghost" href="/gallery">View Full Gallery</a>
      </div>
    </section>
  )
}
