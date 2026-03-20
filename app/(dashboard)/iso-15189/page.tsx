import { ModulePage } from '@/components/ui/ModulePage'
export default function Page() {
  return <ModulePage title="ISO 15189 Khối Xét nghiệm" icon="🧪" description="Quản lý chất lượng phòng xét nghiệm theo tiêu chuẩn ISO 15189:2022" color="#00c9a7"
    stats={[{label:'Điểm kiểm tra ISO',value:'87.3',unit:'/100'},{label:'Thiết bị cần hiệu chuẩn',value:'3',unit:'máy'},{label:'Nội kiểm đúng hạn',value:'98.5',unit:'%'},{label:'Ngoại kiểm đạt',value:'12',unit:'/12'}]}
    tableHeaders={['Hạng mục','Yêu cầu','Trạng thái','Người phụ trách','Ngày kiểm']}
    tableRows={[['Bảo trì thiết bị máy đông máu','Hàng quý','✅ Hoàn thành','CN. Hoa','10/03/2026'],['Kiểm soát nhiệt độ tủ lạnh','Hàng ngày','✅ Đang thực hiện','KTV. Nam','Liên tục'],['Nội kiểm huyết học','2 lần/tuần','✅ Đạt','KTV. Lan','18/03/2026'],['Ngoại kiểm sinh hóa','Theo quý','⚠️ Chờ kết quả','CN. Hoa','Q1/2026'],['Hóa chất hết hạn','Theo lô','✅ Cập nhật','KTV. Minh','15/03/2026']]}
    actions={[{label:'+ Ghi nhận kiểm tra',primary:true},{label:'📋 Lịch kiểm'}]} />
}
