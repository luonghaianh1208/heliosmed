import { ModulePage } from '@/components/ui/ModulePage'
export default function Page() {
  return <ModulePage title="Kiểm tra Chất lượng BV (83 Tiêu chí)" icon="✅" description="Đánh giá chất lượng bệnh viện theo 83 tiêu chí của Bộ Y tế" color="#00c9a7"
    stats={[{label:'Tổng tiêu chí',value:'83'},{label:'Đạt điểm tối đa',value:'31',unit:'tiêu chí'},{label:'Điểm TB hiện tại',value:'78.4',unit:'/100'},{label:'Cần cải thiện',value:'12',unit:'tiêu chí'}]}
    tableHeaders={['STT','Tên tiêu chí','Nhóm','Điểm tối đa','Điểm đạt','Người chịu trách nhiệm']}
    tableRows={[['1','Lãnh đạo và quản lý','Hành chính','100','85','BGĐ'],['2','Nhân lực - Đào tạo','Nhân sự','100','90','Phòng TCCB'],['3','Kiểm soát nhiễm khuẩn','Lâm sàng','100','78','K.Nhiễm khuẩn'],['4','An toàn người bệnh','Lâm sàng','100','82','Phòng QLCL'],['5','Quản lý chất lượng','QLCL','100','74','Phòng QLCL']]}
    actions={[{label:'Nhập điểm đánh giá',primary:true},{label:'📊 Xuất báo cáo'}]} />
}
