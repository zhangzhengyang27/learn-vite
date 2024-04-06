import "./index.scss"
import styles from "./index.module.scss"

export default function Header() {
  return (
    <>
      <p className="header">使用 scss 处理处理样式</p>
      <p className={styles.header}>使用 CSS Modules 处理处理样式</p>
    </>
  )
}
