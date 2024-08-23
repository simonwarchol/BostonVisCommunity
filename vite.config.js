import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/<REPO_NAME>/', // Replace <REPO_NAME> with your repository name
  plugins: [react()],
})