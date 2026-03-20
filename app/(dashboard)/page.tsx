import Link from 'next/link'

const modules = [
  { href: '/chi-so-chat-luong', icon: '📊', label: 'Chỉ số Chất lượng', desc: 'Theo dõi KPI chất lượng 2026', color: '#00c9a7', status: 'active' },
  { href: '/de-an-cai-tien', icon: '💡', label: 'Đề án Cải tiến', desc: 'Quản lý dự án cải tiến', color: '#f59e0b', status: 'active' },
  { href: '/tai-lieu', icon: '📄', label: 'Quản lý Tài liệu', desc: 'Quy trình, văn bản nội bộ', color: '#3b82f6', status: 'active' },
  { href: '/su-co-rui-ro', icon: '⚠️', label: 'Sự cố - Rủi ro', desc: 'Báo cáo và theo dõi sự cố', color: '#ef4444', status: 'active' },
  { href: '/83-tieu-chi', icon: '✅', label: '83 Tiêu chí CLBV', desc: 'Đánh giá chất lượng bệnh viện', color: '#00c9a7', status: 'active' },
  { href: '/hai-long-nguoi-benh', icon: '😊', label: 'Hài lòng Người bệnh', desc: 'Khảo sát và phân tích', color: '#f59e0b', status: 'active' },
  { href: '/dich-vu-tan-tam', icon: '💎', label: 'Dịch vụ Tận tâm', desc: 'Chương trình dịch vụ khách hàng', color: '#3b82f6', status: 'active' },
  { href: '/an-toan-phau-thuat', icon: '🔬', label: 'An toàn Phẫu thuật', desc: 'Bảng kiểm phẫu thuật', color: '#ef4444', status: 'active' },
  { href: '/iso-15189', icon: '🧪', label: 'ISO 15189 Khối XN', desc: 'Quản lý chất lượng xét nghiệm', color: '#00c9a7', status: 'active' },
  { href: '/an-toan-nguoi-benh', icon: '🛡️', label: 'Giám sát An toàn NB', desc: 'Bảng kiểm an toàn định kỳ', color: '#f59e0b', status: 'active' },
  { href: '/quy-che-chuyen-mon', icon: '📋', label: 'Kiểm tra Quy chế CM', desc: 'Kiểm tra quy chế chuyên môn', color: '#3b82f6', status: 'active' },
  { href: '/5s', icon: '🏥', label: 'Triển khai 5S', desc: 'Đánh giá 5S theo khoa phòng', color: '#ef4444', status: 'active' },
]

const stats = [
  { label: 'Tài liệu', value: '124', unit: 'văn bản', color: '#3b82f6', icon: '📄' },
  { label: 'Sự cố tháng này', value: '3', unit: 'báo cáo', color: '#ef4444', icon: '⚠️' },
  { label: 'Điểm CLBV TB', value: '78.4', unit: '/ 100', color: '#f59e0b', icon: '⭐' },
  { label: 'Hài lòng BN', value: '91.2', unit: '%', color: '#00c9a7', icon: '😊' },
]

export default function DashboardPage() {
  return (
    <div className="animate-fade-up">
      {/* Stats row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '28px' }}>
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="card"
            style={{
              padding: '20px',
              animation: `fadeUp 0.4s ease ${i * 0.08}s both`,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span style={{ fontSize: '20px' }}>{s.icon}</span>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: s.color, marginTop: '4px' }} />
            </div>
            <div style={{ fontSize: '28px', fontWeight: 900, color: s.color, letterSpacing: '-1px', lineHeight: 1 }}>
              {s.value}
              <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--muted)', marginLeft: '4px' }}>{s.unit}</span>
            </div>
            <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '6px' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Modules header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
        <div>
          <h2 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text)' }}>Danh mục Chức năng</h2>
          <p style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '2px' }}>12 module quản lý chất lượng bệnh viện</p>
        </div>
        <Link href="/ai-chat" style={{ textDecoration: 'none' }}>
          <button className="btn-primary" style={{ fontSize: '13px', padding: '8px 16px' }}>
            ✨ AI Tra cứu
          </button>
        </Link>
      </div>

      {/* Modules grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '12px',
      }}>
        {modules.map((mod, i) => (
          <Link key={mod.href} href={mod.href} style={{ textDecoration: 'none' }}>
            <div
              className="card card-hover"
              style={{
                padding: '0',
                overflow: 'hidden',
                cursor: 'pointer',
                animation: `fadeUp 0.4s ease ${0.05 + i * 0.05}s both`,
              }}
            >
              {/* Top accent bar */}
              <div style={{ height: '3px', background: mod.color, opacity: 0.7 }} />
              
              <div style={{ padding: '20px' }}>
                {/* Icon */}
                <div style={{
                  width: '48px', height: '48px',
                  borderRadius: '10px',
                  background: `${mod.color}14`,
                  border: `1px solid ${mod.color}25`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '22px',
                  marginBottom: '14px',
                }}>
                  {mod.icon}
                </div>

                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text)', marginBottom: '6px', lineHeight: 1.3 }}>
                  {mod.label}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--muted)', lineHeight: 1.4 }}>
                  {mod.desc}
                </div>

                <div style={{
                  marginTop: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                }}>
                  <span style={{
                    fontSize: '11px',
                    color: mod.color,
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}>
                    Mở →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* AI promotion banner */}
      <div className="card" style={{
        marginTop: '20px',
        padding: '20px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'linear-gradient(120deg, rgba(0,201,167,0.06) 0%, rgba(8,15,30,1) 60%)',
        borderColor: 'rgba(0,201,167,0.2)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{
            width: '44px', height: '44px',
            borderRadius: '10px',
            background: 'rgba(0,201,167,0.12)',
            border: '1px solid rgba(0,201,167,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px',
          }}>✨</div>
          <div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text)' }}>AI Tra cứu Quy trình</div>
            <div style={{ fontSize: '12px', color: 'var(--muted)' }}>Hỏi đáp tức thì dựa trên tài liệu nội bộ BVĐK Đức Giang</div>
          </div>
        </div>
        <Link href="/ai-chat" style={{ textDecoration: 'none' }}>
          <button className="btn-primary">Thử ngay →</button>
        </Link>
      </div>
    </div>
  )
}
