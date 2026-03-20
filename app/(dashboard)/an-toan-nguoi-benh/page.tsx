import { ModulePage } from '@/components/ui/ModulePage'
export default function Page() {
  return <ModulePage title="Giám sát An toàn Người bệnh" icon="🛡️" description="Bảng kiểm an toàn và giám sát định kỳ theo khoa phòng" color="#f59e0b"
    stats={[{label:'Khoa đã kiểm',value:'14',unit:'/18 khoa'},{label:'Điểm TB',value:'85.6',unit:'/100'},{label:'Tuần này',value:'6',unit:'lượt kiểm'},{label:'Cần theo dõi',value:'3',unit:'tiêu chí'}]}
    tableHeaders={['Khoa/Phòng','Ngày kiểm','Điểm','Người kiểm','Vấn đề phát hiện','Trạng thái']}
    tableRows={[['Nội tổng hợp','18/03/2026','88/100','ĐD. Minh','Nhận dạng NB chưa đủ băng tay','✅ Đã xử lý'],['Ngoại TQ','15/03/2026','82/100','ĐD. Lan','Bảo quản thuốc HIGH ALERT','🔄 Đang xử lý'],['ICU','12/03/2026','95/100','ĐD. Hùng','Không có vấn đề','✅ Đạt'],['Sản','10/03/2026','79/100','ĐD. Hoa','Phòng ngừa ngã BN hậu sản','🔄 Đang xử lý']]}
    actions={[{label:'Bắt đầu kiểm tra',primary:true},{label:'📋 Lịch kiểm tháng'}]} />
}
