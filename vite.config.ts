import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // اكتب هنا اسم مستودع الموقع الجديد الذي أنشأته على جيت هب (بين علامتي / /)
  base: '/rased-website/', 
})
