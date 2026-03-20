import { ModulePage } from '@/components/ui/ModulePage'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { ROLE_LABELS, ROLE_COLORS } from '@/lib/types'

export default async function AdminPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: myRole } = await supabase.from('user_roles').select('role').eq('email', user.email).single()
  if (myRole?.role !== 'admin') {
    return (
      <div style={{ textAlign: 'center', padding: '80px 20px' }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔒</div>
        <h2 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>Không có quyền truy cập</h2>
        <p style={{ color: 'var(--muted)', fontSize: '14px' }}>Trang này chỉ dành cho Quản trị viên hệ thống.</p>
      </div>
    )
  }

  const { data: users } = await supabase.from('user_roles').select('*').order('created_at', { ascending: false })

  return (
    <div className="animate-fade-up">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
        <div>
          <h1 style={{ fontSize: '20px', fontWeight: 900 }}>⚙️ Quản trị Hệ thống</h1>
          <p style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '3px' }}>Quản lý người dùng và phân quyền</p>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <span className="badge tag-red">Admin Mode</span>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '12px', marginBottom: '24px' }}>
        {[
          { label: 'Tổng người dùng', value: String(users?.length || 0), color: '#00c9a7' },
          { label: 'Admin', value: String(users?.filter(u => u.role === 'admin').length || 0), color: '#ef4444' },
          { label: 'Trưởng khoa', value: String(users?.filter(u => u.role === 'truong_khoa').length || 0), color: '#f59e0b' },
          { label: 'Nhân viên/BS', value: String(users?.filter(u => ['nhan_vien','bac_si'].includes(u.role)).length || 0), color: '#3b82f6' },
        ].map(s => (
          <div key={s.label} className="card" style={{ padding: '18px' }}>
            <div style={{ fontSize: '26px', fontWeight: 900, color: s.color }}>{s.value}</div>
            <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Users table */}
      <div className="card" style={{ overflow: 'hidden' }}>
        <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '13px', fontWeight: 600 }}>Danh sách người dùng</span>
          <span style={{ fontSize: '12px', color: 'var(--muted)' }}>Đăng nhập Google để tự thêm → Admin gán quyền tại đây</span>
        </div>
        <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>Họ tên</th>
              <th>Vai trò</th>
              <th>Khoa/Phòng</th>
              <th>Ngày thêm</th>
            </tr>
          </thead>
          <tbody>
            {users && users.length > 0 ? users.map(u => (
              <tr key={u.id}>
                <td style={{ fontFamily: 'monospace', fontSize: '13px' }}>{u.email}</td>
                <td>{u.full_name || '—'}</td>
                <td>
                  <span className="badge" style={{ background: `${ROLE_COLORS[u.role as keyof typeof ROLE_COLORS]}20`, color: ROLE_COLORS[u.role as keyof typeof ROLE_COLORS] }}>
                    {ROLE_LABELS[u.role as keyof typeof ROLE_LABELS] || u.role}
                  </span>
                </td>
                <td style={{ color: 'var(--muted)' }}>{u.department || '—'}</td>
                <td style={{ color: 'var(--muted)', fontSize: '12px' }}>{new Date(u.created_at).toLocaleDateString('vi-VN')}</td>
              </tr>
            )) : (
              <tr>
                <td colSpan={5} style={{ textAlign: 'center', padding: '40px', color: 'var(--muted)' }}>
                  Chưa có người dùng. Nhờ nhân viên đăng nhập bằng Google để tạo tài khoản.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
