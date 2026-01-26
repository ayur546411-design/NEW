import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './nav.css'
import logo from '../assets/images/logo.png'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <header className="site-nav">
      <div className="nav-inner container">

        {/* BRAND */}
        <Link to="/" className="brand">
          <img src={logo} alt="logo" className="logo" />
          <div>
            <h1 className="brand-title">Global Model Public School</h1>
            <p className="brand-sub">Established 2026</p>
          </div>
        </Link>

        {/* MAIN MENU */}
        <nav className="menu">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/academics">Academics</Link>
          <Link to="/admission">Admission</Link>
          <Link to="/faculty">Faculty</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>

          {/* ADMIN ONLY */}
          {user?.role === 'admin' && (
            <Link to="/admin" className="admin-link">Dashboard</Link>
          )}
        </nav>

        {/* Mobile drawer */}
        <div className={mobileOpen ? 'mobile-drawer open' : 'mobile-drawer'}>
          <nav className="mobile-menu">
            <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setMobileOpen(false)}>About</Link>
            <Link to="/academics" onClick={() => setMobileOpen(false)}>Academics</Link>
            <Link to="/admission" onClick={() => setMobileOpen(false)}>Admission</Link>
            <Link to="/faculty" onClick={() => setMobileOpen(false)}>Faculty</Link>
            <Link to="/gallery" onClick={() => setMobileOpen(false)}>Gallery</Link>
            <Link to="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
            {user?.role === 'admin' && (
              <Link to="/admin" className="admin-link" onClick={() => setMobileOpen(false)}>Dashboard</Link>
            )}
            <div className="mobile-cta">
              {!user ? (
                <>
                  <Link to="/login" className="btn btn-ghost" onClick={() => setMobileOpen(false)}>Login</Link>
                  <Link to="/register" className="btn btn-primary" onClick={() => setMobileOpen(false)}>Register</Link>
                </>
              ) : (
                <>
                  <div className="user-menu">
                    <span className="user-role">{user.role.toUpperCase()}</span>
                    <button onClick={() => { handleLogout(); setMobileOpen(false) }} className="btn btn-ghost">Logout</button>
                  </div>
                </>
              )}
            </div>
          </nav>
          <div className="drawer-overlay" onClick={() => setMobileOpen(false)} />
        </div>

        {/* RIGHT: CTA + Mobile hamburger toggle */}
        <div className="nav-right">
          <div className="nav-cta">
            {!user ? (
              <>
                <Link to="/login" className="btn btn-ghost">Login</Link>
                <Link to="/register" className="btn btn-primary">Register</Link>
              </>
            ) : (
              <div className="user-menu">
                <span className="user-role">{user.role.toUpperCase()}</span>
                <button onClick={handleLogout} className="btn btn-ghost">Logout</button>
              </div>
            )}
          </div>

          <button
            className="mobile-toggle"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen(v => !v)}
          >
            <span className={mobileOpen ? 'hamburger open' : 'hamburger'}></span>
          </button>
        </div>

        {/* header actions moved into .nav-right; Login/Register removed from top bar */}

      </div>
    </header>
  )
}

