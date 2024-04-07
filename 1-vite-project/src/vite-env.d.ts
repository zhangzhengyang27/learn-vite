/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_IMG_BASE_URL: string; // 自定义的环境变量
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
