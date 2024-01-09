import styles from './index.module.css'

export default function Title({children}) {
  return (
    <h2 className={styles.title}>{children}</h2>
  )
} 