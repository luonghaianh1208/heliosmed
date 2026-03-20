import { ModulePage } from '@/components/ui/ModulePage'
export default function Page() {
  return <ModulePage title="Hài lòng Người bệnh" icon="😊" description="Khảo sát và phân tích mức độ hài lòng của người bệnh và gia đình" color="#f59e0b"
    stats={[{label:'Hài lòng tổng thể',value:'91.2',unit:'%'},{label:'Phiếu thu tháng này',value:'284',unit:'phiếu'},{label:'Rất hài lòng',value:'68.4',unit:'%'},{label:'Chưa hài lòng',value:'3.1',unit:'%'}]}
    tableHeaders={['Khoa','Phiếu thu','Rất HL','Hài lòng','Bình thường','Chưa HL','TB']}
    tableRows={[['Nội tổng hợp','52','70%','22%','6%','2%','4.6/5'],['Ngoại tổng quát','48','65%','28%','5%','2%','4.5/5'],['Sản','40','72%','20%','7%','1%','4.7/5'],['Nhi','38','68%','24%','6%','2%','4.6/5'],['Cấp cứu','35','58%','30%','9%','3%','4.3/5']]}
    actions={[{label:'Tạo phiếu khảo sát',primary:true},{label:'📊 Biểu đồ phân tích'}]} />
}
