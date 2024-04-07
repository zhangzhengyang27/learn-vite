import './index.scss';
import styles from './index.module.scss';
import { devDependencies } from '../../../package.json';
import Worker from './example.js?worker';

// 1. 初始化 Worker 实例
const worker = new Worker();
// 2. 主线程监听 worker 的信息
worker.addEventListener('message', (e) => {
  console.log(e);
});

export default function Header() {
  return (
    <>
      <p className="header">使用 scss 处理处理样式</p>
      <p className={styles.header}>使用 CSS Modules 处理处理样式</p>
      <div className="p-20px text-center">
        <h1 className="font-bold text-2xl mb-2">使用 windi 处理样式 vite version: {devDependencies.vite}</h1>
      </div>
      <p className="bg-red-400">使用 Tailwind 处理样式</p>
    </>
  );
}
