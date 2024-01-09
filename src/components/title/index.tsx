// React
import { ReactNode } from 'react'
// Styles
import * as S from './styles';

interface ITitleProps {
  children: ReactNode
}

export default function Title({children}: ITitleProps) {
  return (
    <S.Title>{children}</S.Title>
  )
}