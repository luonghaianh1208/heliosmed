import { NextResponse } from 'next/server'

const SYSTEM_PROMPT = `Bạn là trợ lý AI nội bộ của Bệnh viện Đa khoa Đức Giang, thuộc Phòng Quản lý Chất lượng.

QUY TẮC BẮT BUỘC:
1. CHỈ trả lời dựa trên ngữ cảnh tài liệu được cung cấp bên dưới
2. Nếu không tìm thấy thông tin trong tài liệu: Trả lời "Không tìm thấy thông tin này trong tài liệu nội bộ. Vui lòng liên hệ Phòng QLCL để được hỗ trợ."
3. Nếu buộc phải dùng kiến thức bên ngoài: Đánh dấu rõ [NGUỒN BÊN NGOÀI] và khuyến nghị xác minh
4. Trích dẫn tên tài liệu/quy trình khi trả lời
5. Trả lời ngắn gọn, rõ ràng bằng tiếng Việt
6. Không sáng tạo hoặc đoán mò thông tin y tế

Hành trước như một chuyên viên QLCL am hiểu quy trình bệnh viện.`

export async function POST(req: Request) {
  try {
    const { question, history } = await req.json()

    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      return NextResponse.json({ answer: 'Chưa cấu hình Gemini API Key.', isExternal: false }, { status: 200 })
    }

    // Build conversation history for Gemini
    const contents = [
      ...(history || []).map((msg: { role: string; content: string }) => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }],
      })),
      { role: 'user', parts: [{ text: question }] },
    ]

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-04-17:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents,
          generationConfig: {
            temperature: 0.1,
            maxOutputTokens: 1024,
          },
        }),
      }
    )

    if (!response.ok) {
      const err = await response.text()
      console.error('Gemini API error:', err)
      return NextResponse.json({ answer: 'Lỗi kết nối AI. Vui lòng thử lại.', isExternal: false })
    }

    const data = await response.json()
    const answer = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Không có phản hồi.'
    const isExternal = answer.includes('[NGUỒN BÊN NGOÀI]')

    return NextResponse.json({ answer, isExternal })
  } catch (error) {
    console.error('AI route error:', error)
    return NextResponse.json({ answer: 'Đã xảy ra lỗi. Vui lòng thử lại.', isExternal: false }, { status: 500 })
  }
}
