import { ModulePage } from '@/components/ui/ModulePage'
export default function Page() {
  return <ModulePage title="An toàn Phẫu thuật Thủ thuật" icon="🔬" description="Bảng kiểm an toàn phẫu thuật WHO và giám sát tuân thủ quy trình" color="#ef4444"
    stats={[{label:'Ca mổ tháng này',value:'126',unit:'ca'},{label:'Bảng kiểm đầy đủ',value:'98.4',unit:'%'},{label:'Biến chứng',value:'2',unit:'ca'},{label:'Tai biến GT',value:'0',unit:'SAE'}]}
    tableHeaders={['Ngày','Ca mổ','Khoa','BS phẫu thuật','Sign In','Time Out','Sign Out','Kết quả']}
    tableRows={[['21/03','Cắt RT nội soi','Ngoại TQ','BS. Hùng','✅','✅','✅','✅ Tốt'],['21/03','Phaco mắt phải','Mắt','BS. Lan','✅','✅','✅','✅ Tốt'],['20/03','PT ổ bụng','Ngoại TQ','BS. Minh','✅','✅','✅','✅ Tốt'],['20/03','Sinh mổ','Sản','BS. Hoa','✅','✅','✅','✅ Tốt']]}
    actions={[{label:'Nhập bảng kiểm',primary:true},{label:'📊 Báo cáo tháng'}]} />
}
