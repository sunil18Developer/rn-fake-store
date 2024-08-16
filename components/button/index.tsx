import React from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

interface ButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
}

const ButtonComponent: React.FC<ButtonProps> = (props: any) => {
  return (
    <TouchableOpacity activeOpacity={0.8} {...props}>
      {props.children}
    </TouchableOpacity>
  )
}

export default ButtonComponent