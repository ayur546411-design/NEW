import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import AuthLayout from './AuthLayout'

export default function Register() {
  const [role, setRole] = useState('student')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [agree, setAgree] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, role }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }
      
      // On success, auto-login or redirect to login
      login(data);
      if (data.role === 'admin') navigate('/admin');
      else if (data.role === 'student') navigate('/student');
      else navigate('/');
      
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthLayout title="Create an Account">
      <p className="auth-sub">Register to access student/parent features. Use a valid email.</p>
      {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}

      <form className="auth-form" onSubmit={handleSubmit}>
        <label className="form-label">
          <span>Full name</span>
          <input value={name} onChange={e=>setName(e.target.value)} placeholder="Your full name" required />
        </label>

        <label className="form-label">
          <span>Email</span>
          <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@school.edu" required />
        </label>

        <label className="form-label">
          <span>Password</span>
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Create a password" required />
        </label>

        <label className="form-label">
          <span>Register as</span>
          <select value={role} onChange={e=>setRole(e.target.value)}>
            <option value="student">Student</option>
            <option value="parent">Parent</option>
          </select>
        </label>

        <label className="inline">
          <input type="checkbox" checked={agree} onChange={e=>setAgree(e.target.checked)} /> I agree to the <Link to="/terms">Terms</Link>
        </label>

        <button className="btn btn-primary" type="submit" disabled={!agree || loading}>
          {loading ? 'Creating...' : 'Create Account'}
        </button>
      </form>

      <div className="auth-links">Already have an account? <Link to="/login">Sign in</Link></div>
    </AuthLayout>
  )
}