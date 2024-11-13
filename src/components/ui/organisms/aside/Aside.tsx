"use client"
import React from 'react'
import Link from 'next/link'
import Button from '../../atoms/button/Button'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'
import { IoLogOut } from'react-icons/io5'
import { LuFolderOpen } from "react-icons/lu";

export default function Aside() {
    const pathname = usePathname()

    const handleSignOut = () => {
        signOut()
    }

    return (
        <aside className="flex flex-col h-full w-64 py-14">
            <nav className="flex-col">
                <ul className="space-y-2">
                    <li className='w-full'>
                        <Link href="/dashboard/projects" className={`flex items-center gap-2 p-3 rounded hover:bg-gray-100 ${pathname.includes('/dashboard/projects')? 'bg-gray-200' : ''}`}>
                            <LuFolderOpen />
                            Proyectos
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="mt-1">
                <Button type='button' onClick={handleSignOut} className="w-full flex items-center gap-2 border-white hover:bg-gray-100 p-3 rounded-xl">
                    <IoLogOut />
                    Cerrar Sesión
                </Button>
            </div>
        </aside>
    )
}