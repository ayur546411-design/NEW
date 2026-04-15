import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import AuthLayout from './AuthLayout'

export default function Login() {
  const [role, setRole] = useState('student')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  
  // New States for OTP Flow
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [successMsg, setSuccessMsg] = useState('')
  const [requireOtp, setRequireOtp] = useState(false)
  const [otp, setOtp] = useState('')
  const [userId, setUserId] = useState(null)

  const { login } = useAuth()
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, role }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }
      
      if (data.requireOtp) {
        setRequireOtp(true);
        setUserId(data.userId);
        setSuccessMsg(data.message || 'OTP sent successfully!');
      } else {
        // Direct login if OTP wasn't enforced (depending on backend config)
        login(data);
        redirectUser(role);
      }
      
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  const handleVerifyOtp = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch('http://localhost:5000/api/auth/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, otp }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'OTP Verification failed');
      }
      
      login(data);
      redirectUser(data.role);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  const redirectUser = (userRole) => {
    if (userRole === 'admin') navigate('/admin')
    else if (userRole === 'student') navigate('/student')
    else navigate('/')
  }

  return (
    <AuthLayout title="Welcome Back">
      <p className="auth-sub">Sign in to access your dashboard and school resources.</p>
      
      {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
      {successMsg && <div style={{ color: 'green', marginBottom: '10px' }}>{successMsg}</div>}

      {!requireOtp ? (
        <form className="auth-form" onSubmit={handleLogin}>
          <label className="form-label">
            <span>Email</span>
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@school.edu" required />
          </label>

          <label className="form-label">
            <span>Password</span>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Enter your password" required />
          </label>

          <div className="form-row">
            <div className="form-left">
              <label className="inline"><input type="checkbox" checked={remember} onChange={e=>setRemember(e.target.checked)} /> Remember me</label>
            </div>
            <div className="form-right">
              <Link to="/forgot">Forgot?</Link>
            </div>
          </div>

          <div className="role-select">
            <label>Login as:</label>
            <select value={role} onChange={e=>setRole(e.target.value)}>
              <option value="student">Student</option>
              <option value="parent">Parent</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button className="btn btn-primary" type="submit" disabled={loading}>
            {loading ? 'Please wait...' : 'Sign In'}
          </button>
        </form>
      ) : (
        <form className="auth-form" onSubmit={handleVerifyOtp}>
          <label className="form-label">
            <span>Enter OTP</span>
            <input type="text" value={otp} onChange={e=>setOtp(e.target.value)} placeholder="123456" required />
            <small style={{display: 'block', marginTop: '5px', color: '#666'}}>
              Sent via Bravo API (check server console in dummy mode)
            </small>
          </label>
          <button className="btn btn-primary" type="submit" disabled={loading}>
            {loading ? 'Verifying...' : 'Verify OTP'}
          </button>
        </form>
      )}

      <div className="auth-links">New here? <Link to="/register">Create an account</Link></div>
    </AuthLayout>
  )
}
