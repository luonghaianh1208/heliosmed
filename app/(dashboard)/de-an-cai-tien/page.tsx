import { ModulePage } from '@/components/ui/ModulePage'
export default function Page() {
  return <ModulePage title="Đề án Cải tiến" icon="💡" description="Quản lý và theo dõi tiến độ các đề án cải tiến chất lượng trong bệnh viện" color="#f59e0b"
    stats={[{label:'Đề án đang triển khai',value:'8',unit:'dự án'},{label:'Hoàn thành năm 2025',value:'12',unit:'đề án'},{label:'Sắp đến hạn',value:'2',unit:'đề án'},{label:'Tiết kiệm ước tính',value:'45M',unit:'VNĐ/năm'}]}
    tableHeaders={['Tên đề án','Khoa','Trưởng nhóm','Bắt đầu','Hạn chót','Tiến độ','Trạng thái']}
    tableRows={[['Giảm tỷ lệ nhiễm khuẩn vết mổ','Ngoại TQ','BS. Hùng','01/01/2026','30/06/2026','65%','🔵 Đang thực hiện'],['Cải thiện vệ sinh tay','Phòng QLCL','ĐD. Minh','01/02/2026','31/05/2026','40%','🔵 Đang thực hiện'],['Triển khai safety round','ICU','BS. Lan','15/01/2026','15/04/2026','80%','🟠 Sắp hạn'],['Nâng cấp hệ thống đặt thuốc','Dược','DS. Nam','01/03/2026','30/09/2026','20%','🔵 Đang thực hiện']]}
    actions={[{label:'+ Đề xuất cải tiến mới',primary:true},{label:'📊 Báo cáo tiến độ'}]} />
}
