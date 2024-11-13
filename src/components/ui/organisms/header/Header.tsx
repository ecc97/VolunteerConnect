import React from 'react'
import Navbar from '../navbar/Navbar'
import Button from '../../atoms/button/Button'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { FaUserCircle } from 'react-icons/fa'
import './Header.scss'

interface HeaderProps {
  variant?: 'primary' | 'secondary'
}

export default function Header({variant}: HeaderProps) {
  const {data} = useSession()
  const [isOpenDropdown, setIsOpenDropdown] = React.useState(false); 
  const toggleDropdown = () => setIsOpenDropdown(!isOpenDropdown);

  return (
    <header className={`py-6 justify-between items-center gap-3 ${data ? variant = 'secondary' : variant}`}>
      <div className='px-2'>
        <Link href='/'>
          <h1 className="text-2xl text-slate-900 font-bold">VolunteerConnect</h1>
        </Link>
      </div>
      {data ? (
        <Navbar className='w-full'>
          <h3 className="text-2xl text-slate-900 font-bold">Dashboard de Proyectos</h3>
          <div className='flex gap-3'>
            <Button variant='primary'>Descargar Reporte</Button>
            <Button variant='primary'>Nuevo Proyecto</Button>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center gap-2 p-2 rounded-full"
              >
                {data.user.photo ? (
                  <img src={data.user.photo} width={35} height={35} className='rounded-full'/>
                ) : (
                  <FaUserCircle size={24} />
                )}
                <span>{data.user?.email}</span>
              </button>
              {isOpenDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
                  <Link href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Mi Perfil
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Cerrar sesión
                  </button>
                </div>
              )}
            </div>
          </div>
        </Navbar>
      ): (
        <Navbar className='px-2'>
          <Link href='/login'>
            <Button variant='secondary'>Iniciar sesión</Button>
          </Link>
          <Link href='/register'>
            <Button variant='primary'>Registrate</Button>
          </Link>
        </Navbar>
      )}

    </header>
  )
}
