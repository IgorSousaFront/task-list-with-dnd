import styled, { css } from "styled-components";
import { rgba } from "polished";

enum ToastTypeEnum {
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS'
}

interface IToastProps {
  $type: ToastTypeEnum
  $visible: boolean
}

export const Toast = styled.div<IToastProps>`
  width: 270px;
  padding: 0.8rem 1.2rem;
  border: 2px solid;
  border-radius: .25rem;
  position: fixed;
  bottom: 1rem;
  left: 50%;
  opacity: 0;
  transform: translateX(-50%);
  font-size: 18px;
  transition: all ease .3s;

  ${props => props.$type === ToastTypeEnum.ERROR && css`
    border-color: var(--color-error);
    background-color: ${rgba('#db4343', 0.25)};
    color: var(--color-error);
  `}

  ${props => props.$type === ToastTypeEnum.SUCCESS && css`
    border-color: var(--color-success);
    background-color: ${rgba('#22ae16', 0.25)};
    color: var(--color-success);
  `}

  ${props => props.$visible && css`
    opacity: 1;
    transform: translate3D(-50%, -32px, 0);
  `}
`