/**
 *  Title: hacker stories
 *  Author: Robin Wieruch
 *  Modified By: Brooke Taylor
 *  Date: 10/24/2023
 *  Description: App Component
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// import eslint
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  
  // add eslint to plugins 
  plugins: [react(), eslint()],
})
