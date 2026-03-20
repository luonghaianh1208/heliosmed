export type Role = 'admin' | 'truong_khoa' | 'nhan_vien' | 'bac_si'

export interface UserRole {
  id: string
  email: string
  role: Role
  full_name: string | null
  department: string | null
  created_at: string
}

export interface RagChunk {
  id: string
  content: string
  metadata: {
    title?: string
    source_doc?: string
    page?: number
    department?: string
    type?: string
    year?: number
  }
  created_at: string
}

export const ROLE_LABELS: Record<Role, string> = {
  admin: 'Quản trị viên',
  truong_khoa: 'Trưởng khoa',
  nhan_vien: 'Nhân viên',
  bac_si: 'Bác sĩ / Y tá',
}

export const ROLE_COLORS: Record<Role, string> = {
  admin: '#ef4444',
  truong_khoa: '#f59e0b',
  nhan_vien: '#3b82f6',
  bac_si: '#00c9a7',
}
