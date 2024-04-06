// Header/index.tsx
import { useEffect } from 'react';
import styles from './index.module.scss';
import logoSrc from '@assets/imgs/vite.png';
import ReactLogo from '@assets/icons/logo.svg?react';

export default function HandleAssets() {
  useEffect(() => {
    const img = document.getElementById('logo') as HTMLImageElement;
    img.src = logoSrc;
  }, []);

  return (
    <div className={`p-20px text-center ${styles.header}`}>
      <img className="m-auto mb-4" src={logoSrc} alt="" />
      <img id="logo" className="m-auto mb-4" alt="" />
      <ReactLogo />
    </div>
  );
}
