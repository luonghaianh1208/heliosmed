import { ModulePage } from '@/components/ui/ModulePage'
export default function Page() {
  return <ModulePage title="Kiểm tra Quy chế Chuyên môn" icon="📋" description="Kiểm tra thực hiện quy chế chuyên môn tại các khoa phòng" color="#3b82f6"
    stats={[{label:'Lượt kiểm tháng này',value:'24',unit:'lượt'},{label:'Điểm TB',value:'87.2',unit:'/100'},{label:'Hồ sơ đúng quy cách',value:'94',unit:'%'},{label:'Cần chấn chỉnh',value:'3',unit:'khoa'}]}
    tableHeaders={['Khoa','Ngày kiểm','Hồ sơ bệnh án','Y lệnh','Giao ca','Điểm','Kết luận']}
    tableRows={[['Nội A','17/03','Đạt','Đạt','Đạt','92/100','✅ Tốt'],['Ngoại B','15/03','Đạt','Cần cải thiện','Đạt','81/100','⚠️ Nhắc nhở'],['ICU','13/03','Đạt','Đạt','Đạt','96/100','✅ Xuất sắc'],['Nhi','10/03','Cần cải thiện','Đạt','Đạt','78/100','⚠️ Lưu ý']]}
    actions={[{label:'Tạo biên bản kiểm tra',primary:true},{label:'📊 Tổng hợp quý'}]} />
}

export function Page5S() {
  return <ModulePage title="Triển khai 5S" icon="🏥" description="Đánh giá và theo dõi triển khai 5S tại các khoa phòng trong toàn viện" color="#ef4444"
    stats={[{label:'Khoa đánh giá',value:'16',unit:'/18'},{label:'Điểm TB toàn viện',value:'82.4',unit:'/100'},{label:'Khoa đạt loại A',value:'7',unit:'khoa'},{label:'Cần cải thiện',value:'3',unit:'khoa'}]}
    tableHeaders={['Khoa/Phòng','Sàng lọc','Sắp xếp','Sạch sẽ','Săn sóc','Sẵn sàng','Tổng','Xếp loại']}
    tableRows={[['Phòng Mổ','19','18','20','18','19','94','A'],['ICU','18','19','20','17','18','92','A'],['Nội A','16','17','18','15','16','82','B'],['Ngoại B','15','16','17','14','15','77','B'],['Cấp cứu','17','16','18','16','17','84','B']]}
    actions={[{label:'Nhập điểm đánh giá',primary:true},{label:'📊 Biểu đồ so sánh'}]} />
}
