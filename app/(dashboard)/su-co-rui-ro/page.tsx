import { ModulePage } from '@/components/ui/ModulePage'

export default function SuCoRuiRoPage() {
  return (
    <ModulePage
      title="Quản lý Sự cố - Nguy cơ - Rủi ro"
      icon="⚠️"
      description="Báo cáo, xử lý và theo dõi các sự cố y khoa và nguy cơ tiềm ẩn"
      color="#ef4444"
      stats={[
        { label: 'Tháng này', value: '3', unit: 'sự cố' },
        { label: 'Đang xử lý', value: '2', unit: 'trường hợp' },
        { label: 'Đã đóng', value: '14', unit: 'sự cố' },
        { label: 'Mức độ nghiêm trọng', value: '0', unit: 'SAE' },
      ]}
      tableHeaders={['Mã SC', 'Ngày', 'Loại sự cố', 'Khoa', 'Mức độ', 'Trạng thái']}
      tableRows={[
        ['SC-2026-003', '18/03', 'Ngã người bệnh', 'Nội tổng hợp', '🟡 Trung bình', '🔄 Đang xử lý'],
        ['SC-2026-002', '12/03', 'Nhầm thuốc', 'Ngoại TQ', '🟠 Cao', '🔄 Đang xử lý'],
        ['SC-2026-001', '05/03', 'Phản ứng truyền máu', 'Huyết học', '🟡 Trung bình', '✅ Đã đóng'],
        ['SC-2025-048', '28/02', 'Thiết bị hỏng', 'Chẩn đoán hình ảnh', '🟢 Thấp', '✅ Đã đóng'],
      ]}
      actions={[
        { label: '+ Báo cáo sự cố', primary: true },
        { label: '📊 Phân tích xu hướng' },
      ]}
    />
  )
}
