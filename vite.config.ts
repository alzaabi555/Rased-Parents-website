import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // تأكد أن هذا الاسم يطابق اسم مستودعك الجديد على جيت هب
  base: '/Rased-Parents-website/', 
})
