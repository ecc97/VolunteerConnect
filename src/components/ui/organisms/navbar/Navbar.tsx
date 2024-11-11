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
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {children}
        </div>
      </div>
    </nav>
  )
}
