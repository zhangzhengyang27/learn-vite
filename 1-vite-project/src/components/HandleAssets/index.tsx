// Header/index.tsx
import { useEffect } from 'react';
import styles from './index.module.scss';
import logoSrc from '@assets/imgs/vite.png';
import ReactLogo from '@assets/icons/logo.svg?react';
import SvgIcon from '../SvgIcon';

const icons = import.meta.glob('@assets/icons/logo-*.svg', { eager: true });
const iconUrls = Object.values(icons).map((mod: any) => {
  const fileName = mod.default.split('/').pop();
  const [svgName] = fileName.split('.');
  console.log(svgName);
  return svgName;
});

export default function HandleAssets() {
  useEffect(() => {
    const img = document.getElementById('logo') as HTMLImageElement;
    img.src = logoSrc;
  }, []);

  return (
    <div>
      <div className="flex justify-center mt-2">
        {iconUrls.map((item) => (
          <SvgIcon name={item} key={item} width="50" height="50" />
        ))}
      </div>
      <div className={`p-20px text-center ${styles.header}`}>
        <img className="m-auto mb-4" src={logoSrc} alt="" />
        <img id="logo" className="m-auto mb-4" alt="" />
        <ReactLogo />
        {import.meta.env.VITE_IMG_BASE_URL}
        <img src={new URL('/images/202403201450086.png', import.meta.env.VITE_IMG_BASE_URL).href} />
      </div>
    </div>
  );
}
