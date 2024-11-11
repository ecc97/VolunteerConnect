import React from 'react'
import Navbar from '../navbar/Navbar'
import Button from '../../atoms/button/Button'
import Link from 'next/link'
import './Header.scss'

interface HeaderProps {
  variant?: 'primary' | 'secondary'
}

export default function Header({variant}: HeaderProps) {
  return (
    <header className={`py-6 justify-between items-center ${variant}`}>
      <div className='px-2'>
        <Link href='/'>
          <h1 className="text-2xl text-slate-900 font-bold">VolunteerConnect</h1>
        </Link>
      </div>
      <Navbar className='px-2'>
        <Link href='/login'>
          <Button variant='secondary'>Iniciar sesión</Button>
        </Link>
        <Button variant='primary'>Registrate</Button>
      </Navbar>
    </header>
  )
}
