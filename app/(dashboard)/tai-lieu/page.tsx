import { ModulePage } from '@/components/ui/ModulePage'

export default function TaiLieuPage() {
  return (
    <ModulePage
      title="Quản lý Tài liệu"
      icon="📄"
      description="Thư viện quy trình, văn bản hành chính và tài liệu chuyên môn"
      color="#3b82f6"
      stats={[
        { label: 'Tổng tài liệu', value: '124', unit: 'văn bản' },
        { label: 'Cập nhật tháng này', value: '8', unit: 'tài liệu' },
        { label: 'Khoa/Phòng', value: '18', unit: 'đơn vị' },
        { label: 'Chờ phê duyệt', value: '3', unit: 'văn bản' },
      ]}
      tableHeaders={['Mã', 'Tên tài liệu', 'Loại', 'Khoa biên soạn', 'Năm', 'Hành động']}
      tableRows={[
        ['QT-001', 'Quy trình kiểm soát nhiễm khuẩn', 'Quy trình', 'Nhiễm khuẩn', '2025', '👁 Xem | ⬇ Tải'],
        ['QT-002', 'Bảng kiểm an toàn phẫu thuật', 'Bảng kiểm', 'Phòng Mổ', '2025', '👁 Xem | ⬇ Tải'],
        ['HD-001', 'Hướng dẫn vệ sinh tay 6 bước', 'Hướng dẫn', 'Phòng QLCL', '2024', '👁 Xem | ⬇ Tải'],
        ['ISO-001', 'Tài liệu ISO 15189:2022 Phiên bản 3', 'ISO', 'Khối XN', '2025', '👁 Xem | ⬇ Tải'],
        ['VB-001', 'Quyết định phê duyệt kế hoạch QLCL', 'Quyết định', 'BGĐ', '2026', '👁 Xem | ⬇ Tải'],
      ]}
      actions={[
        { label: '+ Upload tài liệu', primary: true },
        { label: '🔍 Tìm kiếm nâng cao' },
      ]}
    />
  )
}
