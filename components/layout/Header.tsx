'use client'

import { signOut } from '@/lib/actions/auth'
import { ROLE_LABELS, type Role } from '@/lib/types'

interface HeaderProps {
  userName: string
  userEmail: string
  userRole: Role | null
  title: string
}

export default function Header({ userName, userEmail, userRole, title }: HeaderProps) {
  return (
    <header style={{
      height: '56px',
      borderBottom: '1px solid var(--border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px',
      background: 'rgba(8,15,30,0.8)',
      backdropFilter: 'blur(8px)',
      position: 'sticky',
      top: 0,
      zIndex: 40,
    }}>
      <h1 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.2px' }}>
        {title}
      </h1>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {userRole && (
          <span className="badge tag-teal" style={{ fontSize: '10px' }}>
            {ROLE_LABELS[userRole]}
          </span>
        )}

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '6px 12px',
          borderRadius: '8px',
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid var(--border)',
        }}>
          <div style={{
            width: '28px', height: '28px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--teal), #0090ff)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '12px', fontWeight: 700, color: '#0a1628',
          }}>
            {userName?.charAt(0)?.toUpperCase() || '?'}
          </div>
          <div>
            <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text)', lineHeight: 1.2 }}>
              {userName || 'Người dùng'}
            </div>
            <div style={{ fontSize: '10px', color: 'var(--muted)' }}>{userEmail}</div>
          </div>
        </div>

        <form action={signOut}>
          <button type="submit" className="btn-ghost" style={{ padding: '6px 10px', fontSize: '12px' }}>
            Đăng xuất
          </button>
        </form>
      </div>
    </header>
  )
}
