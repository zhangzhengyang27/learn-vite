import { defineConfig, normalizePath } from 'vite';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import windi from 'vite-plugin-windicss';
import svgr from 'vite-plugin-svgr';
import viteImagemin from 'vite-plugin-imagemin';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

// 如果类型报错，需要安装 @types/node: pnpm i @types/node -D
import path from 'path';

// 全局 scss 文件的路径,用 normalizePath 解决 window 下的路径问题
const variablePath = normalizePath(path.resolve('./src/styles/variables.scss'));

// 是否为生产环境，在生产环境一般会注入 NODE_ENV 这个环境变量，见下面的环境变量文件配置
const isProduction = process.env.NODE_ENV === 'production';
console.log(isProduction);
const CDN_URL = '/xxxxxx'; // 填入项目的 CDN 域名地址

// https://vitejs.dev/config/
export default defineConfig({
  base: isProduction ? CDN_URL : '/',
  plugins: [
    react(),
    windi(),
    svgr(),
    viteImagemin({
      // 无损压缩配置，无损压缩下图片质量不会变差
      optipng: {
        optimizationLevel: 7
      },
      // 有损压缩配置，有损压缩下图片质量可能会变差
      pngquant: {
        quality: [0.8, 0.9]
      },
      // svg 优化
      svgo: {
        plugins: [
          {
            name: 'removeViewBox'
          },
          {
            name: 'removeEmptyAttrs',
            active: false
          }
        ]
      }
    }),
    createSvgIconsPlugin({
      iconDirs: [path.join(__dirname, 'src/assets/icons')]
    })
  ],
  resolve: {
    alias: {
      '@assets': path.join(__dirname, 'src/assets')
    }
  },
  // css 相关的配置
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData 的内容会在每个 scss 文件的开头自动注入
        additionalData: `@import "${variablePath}";`
      }
    },
    //进行 PostCSS 配置
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11'] // 指定目标浏览器
        })
      ]
    }
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  },
  build: {
    assetsInlineLimit: 8 * 1024
  }
  // json: {
  //   stringify: true
  // }
});
