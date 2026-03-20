import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Sidebar from '@/components/layout/Sidebar'
import Header from '@/components/layout/Header'
import type { Role } from '@/lib/types'

const PAGE_TITLES: Record<string, string> = {
  '/': 'Tổng quan hệ thống',
  '/chi-so-chat-luong': 'Chỉ số Chất lượng 2026',
  '/83-tieu-chi': 'Kiểm tra Chất lượng BV (83 Tiêu chí)',
  '/de-an-cai-tien': 'Đề án Cải tiến',
  '/tai-lieu': 'Quản lý Tài liệu',
  '/su-co-rui-ro': 'Quản lý Sự cố - Nguy cơ - Rủi ro',
  '/an-toan-nguoi-benh': 'Giám sát An toàn Người bệnh',
  '/an-toan-phau-thuat': 'An toàn Phẫu thuật Thủ thuật',
  '/hai-long-nguoi-benh': 'Hài lòng Người bệnh',
  '/dich-vu-tan-tam': 'Dịch vụ Tận tâm',
  '/iso-15189': 'ISO 15189 Khối Xét nghiệm',
  '/quy-che-chuyen-mon': 'Kiểm tra Quy chế Chuyên môn',
  '/5s': 'Triển khai 5S',
  '/ai-chat': 'AI Tra cứu Quy trình',
  '/admin': 'Quản trị Hệ thống',
}

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: roleData } = await supabase
    .from('user_roles')
    .select('*')
    .eq('email', user.email)
    .single()

  const userName = user.user_metadata?.full_name || user.email?.split('@')[0] || 'Người dùng'
  const userRole = (roleData?.role as Role) || null

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <div style={{ flex: 1, marginLeft: '240px', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header
          userName={userName}
          userEmail={user.email || ''}
          userRole={userRole}
          title={PAGE_TITLES['/'] || 'HeliosMed'}
        />
        <main style={{ flex: 1, padding: '24px', maxWidth: '1400px', width: '100%' }}>
          {children}
        </main>
      </div>
    </div>
  )
}
