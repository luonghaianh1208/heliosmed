import { ModulePage } from '@/components/ui/ModulePage'
export default function Page() {
  return <ModulePage title="Triển khai 5S" icon="🏥" description="Đánh giá và theo dõi triển khai 5S tại các khoa phòng trong toàn viện" color="#ef4444"
    stats={[{label:'Khoa đánh giá',value:'16',unit:'/18'},{label:'Điểm TB toàn viện',value:'82.4',unit:'/100'},{label:'Khoa đạt loại A',value:'7',unit:'khoa'},{label:'Cần cải thiện',value:'3',unit:'khoa'}]}
    tableHeaders={['Khoa/Phòng','Sàng lọc','Sắp xếp','Sạch sẽ','Săn sóc','Sẵn sàng','Tổng','Xếp loại']}
    tableRows={[['Phòng Mổ','19','18','20','18','19','94/100','A'],['ICU','18','19','20','17','18','92/100','A'],['Nội A','16','17','18','15','16','82/100','B'],['Ngoại B','15','16','17','14','15','77/100','B'],['Cấp cứu','17','16','18','16','17','84/100','B']]}
    actions={[{label:'Nhập điểm đánh giá',primary:true},{label:'📊 Biểu đồ so sánh'}]} />
}
