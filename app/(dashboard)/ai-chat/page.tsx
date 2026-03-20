'use client'

import { useState, useRef, useEffect } from 'react'

interface Message {
  role: 'user' | 'assistant'
  content: string
  isExternal?: boolean
}

const SUGGESTIONS = [
  'Quy trình vệ sinh tay 6 bước là gì?',
  'Tiêu chí 47 của 83 tiêu chí CLBV quy định gì?',
  'Khi xảy ra sự cố y khoa cần báo cáo với ai?',
  'Yêu cầu ISO 15189 về lưu mẫu xét nghiệm?',
]

export default function AiChatPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  async function sendMessage(text?: string) {
    const q = text || input
    if (!q.trim()) return
    setInput('')
    const userMsg: Message = { role: 'user', content: q }
    setMessages(prev => [...prev, userMsg])
    setLoading(true)

    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: q, history: messages }),
      })
      const data = await res.json()
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: data.answer || 'Không có phản hồi.',
        isExternal: data.isExternal,
      }])
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Lỗi kết nối. Vui lòng thử lại.' }])
    }
    setLoading(false)
  }

  return (
    <div className="animate-fade-up" style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 120px)' }}>
      {/* Header */}
      <div style={{ marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(0,201,167,0.12)', border: '1px solid rgba(0,201,167,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>✨</div>
          <div>
            <h1 style={{ fontSize: '18px', fontWeight: 900 }}>AI Tra cứu Quy trình</h1>
            <p style={{ fontSize: '12px', color: 'var(--muted)' }}>Powered by Gemini · Chỉ trả lời từ tài liệu nội bộ BVĐK Đức Giang</p>
          </div>
        </div>
      </div>

      {/* Chat area */}
      <div className="card" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {messages.length === 0 && (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>✨</div>
              <div style={{ fontSize: '15px', fontWeight: 600, marginBottom: '8px' }}>Chào bạn!</div>
              <div style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '24px', maxWidth: '400px', margin: '0 auto 24px' }}>
                Tôi có thể tra cứu quy trình, văn bản và hướng dẫn nội bộ của bệnh viện.
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
                {SUGGESTIONS.map(s => (
                  <button key={s} onClick={() => sendMessage(s)} className="btn-ghost" style={{ fontSize: '12px' }}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((msg, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: msg.role === 'user' ? 'row-reverse' : 'row', gap: '10px', alignItems: 'flex-start' }}>
              <div style={{
                width: '32px', height: '32px',
                borderRadius: '50%',
                background: msg.role === 'user' ? 'linear-gradient(135deg, var(--teal), #0090ff)' : 'rgba(0,201,167,0.12)',
                border: msg.role === 'assistant' ? '1px solid rgba(0,201,167,0.25)' : 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '14px', flexShrink: 0,
              }}>
                {msg.role === 'user' ? '👤' : '✨'}
              </div>
              <div style={{
                maxWidth: '75%',
                background: msg.role === 'user' ? 'rgba(0,201,167,0.1)' : 'rgba(255,255,255,0.04)',
                border: `1px solid ${msg.role === 'user' ? 'rgba(0,201,167,0.2)' : 'var(--border)'}`,
                borderRadius: msg.role === 'user' ? '16px 4px 16px 16px' : '4px 16px 16px 16px',
                padding: '12px 16px',
                fontSize: '14px',
                lineHeight: 1.6,
                whiteSpace: 'pre-wrap',
              }}>
                {msg.content}
                {msg.isExternal && (
                  <div style={{ marginTop: '8px', padding: '6px 10px', background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: '6px', fontSize: '11px', color: '#f59e0b' }}>
                    ⚠️ Nguồn bên ngoài — Cần xác minh với Phòng QLCL
                  </div>
                )}
              </div>
            </div>
          ))}

          {loading && (
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(0,201,167,0.12)', border: '1px solid rgba(0,201,167,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✨</div>
              <div style={{ display: 'flex', gap: '4px', alignItems: 'center', padding: '12px 16px', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)', borderRadius: '4px 16px 16px 16px' }}>
                {[0, 1, 2].map(i => (
                  <div key={i} style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--teal)', animation: `bounce 1.2s ${i * 0.2}s infinite` }} />
                ))}
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div style={{ padding: '16px', borderTop: '1px solid var(--border)', display: 'flex', gap: '8px' }}>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && !e.shiftKey && sendMessage()}
            placeholder="Nhập câu hỏi về quy trình, tiêu chí, văn bản..."
            style={{ flex: 1, borderRadius: '10px' }}
          />
          <button onClick={() => sendMessage()} disabled={loading || !input.trim()} className="btn-primary" style={{ borderRadius: '10px', padding: '10px 20px' }}>
            Gửi ↑
          </button>
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  )
}
