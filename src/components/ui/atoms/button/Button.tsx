import React from 'react'
import './Button.scss'

type BtnType = 'button' | 'submit' | 'reset'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
    onClick?: () => void,
    type?: BtnType,
    size?: 'small' |'medium' | 'large',
    variant?: 'primary' |'secondary' | 'tertiary' | 'outline',
    disabled?: boolean,
    className?: string,
}

function Button({ children, onClick, type, size, variant, disabled, className }: ButtonProps) {
  return (
      <button
        type={type || 'button'}
        onClick={onClick}
        disabled={disabled}
        className={`${size ||'medium'} ${variant} ${className || ''}`}
      >
      {children}
      </button>
  )
}

export default Button