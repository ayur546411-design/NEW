import React from 'react'
import '../styles/auth.css'

export default function AuthLayout({ title, children }) {
  return (
    <main className="auth-page">
      <div className="auth-wrapper">
        <aside className="auth-side">
          <div className="auth-brand">
            <h2>Saraswati Vidya Mandir School</h2>
            <p className="muted">A caring, values-driven education — Nursery to Grade 8</p>
          </div>
          <div className="auth-illustration" aria-hidden />
        </aside>

        <div className="auth-card">
          <h2>{title}</h2>
          {children}
        </div>
      </div>
    </main>
  )
}

