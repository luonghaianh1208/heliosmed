import { ModulePage } from '@/components/ui/ModulePage'
export default function Page() {
  return <ModulePage title="Dịch vụ Tận tâm" icon="💎" description="Chương trình nâng cao chất lượng dịch vụ và trải nghiệm khách hàng" color="#3b82f6"
    stats={[{label:'NPS Score',value:'72',unit:'điểm'},{label:'Khiếu nại tháng này',value:'1',unit:'phiếu'},{label:'Phản hồi tích cực',value:'48',unit:'góp ý'},{label:'Thời gian XL khiếu nại',value:'1.2',unit:'ngày'}]}
    tableHeaders={['Ngày','Loại phản hồi','Nội dung','Khoa','Mức ưu tiên','Phụ trách','Trạng thái']}
    tableRows={[['20/03','Khen ngợi','Điều dưỡng nhiệt tình, chu đáo','Nội A','🟢 Thấp','PV. Hoa','✅ Đã ghi nhận'],['18/03','Góp ý','Phòng chờ chật, nóng','Cấp cứu','🟡 Trung bình','PV. Minh','🔄 Đang xử lý'],['15/03','Khiếu nại','Thời gian chờ lấy thuốc lâu','Dược phẩm','🟠 Cao','PV. Lan','✅ Đã phản hồi'],['12/03','Khen ngợi','BS. Hùng giải thích rõ ràng, tận tình','Ngoại B','🟢 Thấp','PV. Hoa','✅ Đã ghi nhận']]}
    actions={[{label:'+ Tiếp nhận phản hồi',primary:true},{label:'📊 Phân tích xu hướng'}]} />
}
