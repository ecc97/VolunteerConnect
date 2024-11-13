import React from 'react'
import Button from '../../atoms/button/Button'
import './Navbar.scss'

interface NavbarProps {
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary'
}

export default function Navbar({children, className, variant} : NavbarProps) {
  return (
    <nav className={`${className} ${variant}`}>
      <div className="flex items-center w-full">
        <div className="flex items-center justify-between gap-3 w-full">
          {children}
        </div>
      </div>
    </nav>
  )
}
