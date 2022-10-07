import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import electron from 'vite-plugin-electron'
import path from 'path'
import postCssPxToRem from 'postcss-pxtorem'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    electron({
      main: {
        entry: 'electron/main.ts'
      }
    })
  ],
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    postcss: {
      plugins: [
        // 将css中的px自动转换为rem
        postCssPxToRem({
          rootValue: 56, // 1rem的大小 1120*800 划分为20份
          propList: ['*', '!border'] // 需要转换的属性，这里选择全部都进行转换
        })
      ]
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/common.scss";`
      }
    }
  }
})
