"use client"
import React from 'react'
import Header from '../organisms/header/Header'
import { useSession } from 'next-auth/react'

interface LayoutProps {
    children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
    const { data } = useSession()


    return (
        <div className="mx-auto bg-gray-50 text-slate-950 flex flex-col h-screen">
            <Header variant='primary' />
            <main className="flex flex-col overflow-auto flex-grow">
                {children}
            </main>
            {!data && (
                <footer className="py-8 bg-gray-800">
                    <p className="text-sm text-center text-white">
                        © 2023 Community Volunteering. Todos los derechos reservados.
                    </p>
                </footer>
            )}
        </div>
    )
}
