import { ModulePage } from '@/components/ui/ModulePage'

export default function ChiSoChatLuongPage() {
  return (
    <ModulePage
      title="Chỉ số Chất lượng 2026"
      icon="📊"
      description="Theo dõi và báo cáo các chỉ số chất lượng theo kế hoạch năm 2026"
      color="#00c9a7"
      stats={[
        { label: 'Tổng chỉ số', value: '48', unit: 'KPI' },
        { label: 'Đạt mục tiêu', value: '36', unit: '/ 48' },
        { label: 'Đang theo dõi', value: '10', unit: 'chỉ số' },
        { label: 'Chưa triển khai', value: '2', unit: 'chỉ số' },
      ]}
      tableHeaders={['STT', 'Tên chỉ số', 'Khoa/Phòng', 'Mục tiêu', 'Thực tế', 'Trạng thái']}
      tableRows={[
        ['01', 'Tỷ lệ nhiễm khuẩn bệnh viện', 'Nhiễm khuẩn', '< 5%', '3.2%', '✅ Đạt'],
        ['02', 'Tỷ lệ tai biến phẫu thuật', 'Phòng Mổ', '< 2%', '1.1%', '✅ Đạt'],
        ['03', 'Hài lòng người bệnh nội trú', 'Phòng QLCL', '≥ 90%', '91.2%', '✅ Đạt'],
        ['04', 'Tỷ lệ tuân thủ vệ sinh tay', 'Tất cả khoa', '≥ 85%', '78.4%', '⚠️ Chưa đạt'],
        ['05', 'Báo cáo sự cố đúng hạn', 'Phòng QLCL', '100%', '95%', '🔵 Cần cải thiện'],
      ]}
      actions={[
        { label: '+ Thêm chỉ số', primary: true },
        { label: '📊 Biểu đồ xu hướng' },
        { label: '⬇ Xuất báo cáo' },
      ]}
    />
  )
}
