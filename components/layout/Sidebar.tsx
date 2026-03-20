'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', icon: '⊞', label: 'Tổng quan', group: 'main' },
  { href: '/chi-so-chat-luong', icon: '📊', label: 'Chỉ số Chất lượng', group: 'qlcl' },
  { href: '/83-tieu-chi', icon: '✅', label: 'Kiểm tra 83 Tiêu chí', group: 'qlcl' },
  { href: '/de-an-cai-tien', icon: '💡', label: 'Đề án Cải tiến', group: 'qlcl' },
  { href: '/tai-lieu', icon: '📄', label: 'Quản lý Tài liệu', group: 'docs' },
  { href: '/su-co-rui-ro', icon: '⚠️', label: 'Sự cố - Rủi ro', group: 'safety' },
  { href: '/an-toan-nguoi-benh', icon: '🛡️', label: 'An toàn Người bệnh', group: 'safety' },
  { href: '/an-toan-phau-thuat', icon: '🔬', label: 'An toàn Phẫu thuật', group: 'safety' },
  { href: '/hai-long-nguoi-benh', icon: '😊', label: 'Hài lòng Người bệnh', group: 'feedback' },
  { href: '/dich-vu-tan-tam', icon: '💎', label: 'Dịch vụ Tận tâm', group: 'feedback' },
  { href: '/iso-15189', icon: '🧪', label: 'ISO 15189 Khối XN', group: 'standard' },
  { href: '/quy-che-chuyen-mon', icon: '📋', label: 'Kiểm tra Quy chế', group: 'standard' },
  { href: '/5s', icon: '🏥', label: 'Triển khai 5S', group: 'standard' },
  { href: '/ai-chat', icon: '✨', label: 'AI Tra cứu', group: 'ai' },
]

const groups: Record<string, string> = {
  main: '',
  qlcl: 'Chất lượng',
  docs: 'Tài liệu',
  safety: 'An toàn',
  feedback: 'Phản hồi',
  standard: 'Tiêu chuẩn',
  ai: 'Trí tuệ nhân tạo',
}

export default function Sidebar() {
  const pathname = usePathname()
  let lastGroup = ''

  return (
    <aside style={{
      width: '240px',
      minHeight: '100vh',
      background: '#080f1e',
      borderRight: '1px solid var(--border)',
      display: 'flex',
      flexDirection: 'column',
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      zIndex: 50,
      overflowY: 'auto',
    }}>
      {/* Brand */}
      <div style={{ padding: '20px 16px 16px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '36px', height: '36px', borderRadius: '8px',
            background: 'rgba(0,201,167,0.12)', border: '1px solid rgba(0,201,167,0.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px'
          }}>⚕️</div>
          <div>
            <div style={{ fontSize: '15px', fontWeight: 900, color: 'var(--text)', letterSpacing: '-0.3px' }}>
              Helio<span style={{ color: 'var(--teal)' }}>Med</span>
            </div>
            <div style={{ fontSize: '10px', color: 'var(--muted)', letterSpacing: '0.05em' }}>BVĐK Đức Giang</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: '8px 0' }}>
        {navItems.map((item) => {
          const isActive = pathname === item.href
          const showGroupLabel = item.group !== lastGroup && groups[item.group]
          if (item.group !== lastGroup) lastGroup = item.group

          return (
            <div key={item.href}>
              {showGroupLabel && (
                <div style={{
                  padding: '12px 16px 4px',
                  fontSize: '10px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'var(--muted)',
                }}>
                  {groups[item.group]}
                </div>
              )}
              <Link href={item.href} style={{ textDecoration: 'none' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '9px 16px',
                  margin: '1px 8px',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? 'var(--teal)' : 'var(--muted)',
                  background: isActive ? 'rgba(0,201,167,0.08)' : 'transparent',
                  border: isActive ? '1px solid rgba(0,201,167,0.15)' : '1px solid transparent',
                  transition: 'all 0.15s',
                  cursor: 'pointer',
                }}>
                  <span style={{ fontSize: '15px', minWidth: '18px', textAlign: 'center' }}>{item.icon}</span>
                  <span>{item.label}</span>
                  {isActive && (
                    <div style={{
                      marginLeft: 'auto',
                      width: '4px', height: '4px',
                      borderRadius: '50%',
                      background: 'var(--teal)',
                    }} />
                  )}
                </div>
              </Link>
            </div>
          )
        })}
      </nav>

      {/* Bottom */}
      <div style={{ padding: '12px 16px', borderTop: '1px solid var(--border)' }}>
        <Link href="/admin" style={{ textDecoration: 'none' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            padding: '8px 10px', borderRadius: '8px', cursor: 'pointer',
            color: 'var(--muted)', fontSize: '12px',
            transition: 'color 0.15s',
          }}>
            <span>⚙️</span>
            <span>Quản trị hệ thống</span>
          </div>
        </Link>
      </div>
    </aside>
  )
}
