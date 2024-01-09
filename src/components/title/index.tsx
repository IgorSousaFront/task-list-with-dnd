import { ReactNode } from 'react'
import styles from './index.module.css'

interface ITitleProps {
  children: ReactNode
}

export default function Title({children}: ITitleProps) {
  return (
    <h2 className={styles.title}>{children}</h2>
  )
}