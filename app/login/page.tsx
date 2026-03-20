'use client'

import { signInWithGoogle } from '@/lib/actions/auth'
import { useState } from 'react'

export default function LoginPage() {
  const [loading, setLoading] = useState(false)

  async function handleLogin() {
    setLoading(true)
    await signInWithGoogle()
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #060e1e 0%, #0a1628 50%, #071828 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background accent */}
      <div style={{
        position: 'absolute',
        top: '-20%',
        right: '-10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(0,201,167,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '-10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="animate-fade-up" style={{
        width: '100%',
        maxWidth: '420px',
      }}>
        {/* Logo block */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{
            width: '72px',
            height: '72px',
            borderRadius: '16px',
            background: 'rgba(0,201,167,0.12)',
            border: '1px solid rgba(0,201,167,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            fontSize: '32px',
          }}>⚕️</div>
          <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '8px' }}>
            Bệnh viện Đa khoa Đức Giang
          </div>
          <h1 style={{ fontSize: '28px', fontWeight: 900, color: 'var(--text)', lineHeight: 1.2 }}>
            Helio<span style={{ color: 'var(--teal)' }}>Med</span>
          </h1>
          <p style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '8px' }}>
            Nền tảng Quản trị Y tế Thông minh
          </p>
        </div>

        {/* Login card */}
        <div className="card" style={{ padding: '32px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px' }}>Đăng nhập hệ thống</h2>
          <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '28px', lineHeight: 1.6 }}>
            Sử dụng tài khoản Google của bệnh viện để đăng nhập an toàn.
          </p>

          <button
            onClick={handleLogin}
            disabled={loading}
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center', padding: '14px 20px', fontSize: '15px', borderRadius: '10px' }}
          >
            {loading ? (
              <>
                <span style={{ width: '16px', height: '16px', border: '2px solid rgba(10,22,40,0.4)', borderTopColor: '#0a1628', borderRadius: '50%', animation: 'spin 0.8s linear infinite', display: 'inline-block' }} />
                Đang chuyển hướng...
              </>
            ) : (
              <>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#0a1628"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#0a1628"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#0a1628"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#0a1628"/>
                </svg>
                Đăng nhập với Google
              </>
            )}
          </button>

          <div style={{ borderTop: '1px solid var(--border)', marginTop: '24px', paddingTop: '20px' }}>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
              {['🔒 Bảo mật Google', '👥 Phân quyền RBAC', '📋 Kiểm toán'].map(item => (
                <span key={item} style={{ fontSize: '11px', color: 'var(--muted)', textAlign: 'center' }}>{item}</span>
              ))}
            </div>
          </div>
        </div>

        <p style={{ textAlign: 'center', fontSize: '12px', color: 'var(--muted)', marginTop: '20px' }}>
          Chỉ dành cho nhân viên BVĐK Đức Giang
        </p>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  )
}
