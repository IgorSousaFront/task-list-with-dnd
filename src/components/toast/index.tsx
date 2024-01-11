import { ComponentProps } from "react";

import * as S from "./styles";

export enum ToastTypeEnum {
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS'
}

interface IToastProps extends ComponentProps<"div"> {
  type: ToastTypeEnum
  visible: boolean
  message?: string
}

export default function Toast({
  type,
  visible,
  message,
  ...rest
}: IToastProps) {
  return (
    <S.Toast
      $type={type}
      $visible={visible}
      {...rest}
    >
      { message }
    </S.Toast>
  )
}