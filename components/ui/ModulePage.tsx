// Generic module page template used by all sub-modules
interface ModulePageProps {
  title: string
  icon: string
  description: string
  color: string
  stats?: { label: string; value: string; unit?: string }[]
  tableHeaders?: string[]
  tableRows?: string[][]
  actions?: { label: string; primary?: boolean }[]
}

export function ModulePage({ title, icon, description, color, stats, tableHeaders, tableRows, actions }: ModulePageProps) {
  return (
    <div className="animate-fade-up">
      {/* Module header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{
            width: '52px', height: '52px',
            borderRadius: '12px',
            background: `${color}14`,
            border: `1px solid ${color}30`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '26px',
          }}>{icon}</div>
          <div>
            <h1 style={{ fontSize: '20px', fontWeight: 900, color: 'var(--text)', letterSpacing: '-0.3px' }}>{title}</h1>
            <p style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '3px' }}>{description}</p>
          </div>
        </div>
        {actions && (
          <div style={{ display: 'flex', gap: '8px' }}>
            {actions.map(a => (
              <button key={a.label} className={a.primary ? 'btn-primary' : 'btn-ghost'} style={{ fontSize: '13px' }}>
                {a.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Stats */}
      {stats && (
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${stats.length}, 1fr)`, gap: '12px', marginBottom: '24px' }}>
          {stats.map((s, i) => (
            <div key={s.label} className="card" style={{ padding: '18px', animation: `fadeUp 0.4s ease ${i * 0.07}s both` }}>
              <div style={{ fontSize: '24px', fontWeight: 900, color, letterSpacing: '-0.5px' }}>
                {s.value}
                {s.unit && <span style={{ fontSize: '12px', color: 'var(--muted)', marginLeft: '4px', fontWeight: 500 }}>{s.unit}</span>}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>{s.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Table */}
      {tableHeaders && tableRows && (
        <div className="card" style={{ overflow: 'hidden' }}>
          <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '13px', fontWeight: 600 }}>Dữ liệu</span>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button className="btn-ghost" style={{ fontSize: '12px', padding: '5px 10px' }}>🔍 Tìm kiếm</button>
              <button className="btn-ghost" style={{ fontSize: '12px', padding: '5px 10px' }}>⬇ Xuất Excel</button>
            </div>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table>
              <thead>
                <tr>
                  {tableHeaders.map(h => <th key={h}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => <td key={j}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Placeholder if no data */}
      {!tableHeaders && !stats && (
        <div className="card" style={{ padding: '60px', textAlign: 'center' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>{icon}</div>
          <div style={{ fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}>Module đang phát triển</div>
          <div style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '24px' }}>
            Dữ liệu sẽ được kết nối từ Google Sheets của bệnh viện
          </div>
          <button className="btn-primary">+ Nhập dữ liệu đầu tiên</button>
        </div>
      )}
    </div>
  )
}
