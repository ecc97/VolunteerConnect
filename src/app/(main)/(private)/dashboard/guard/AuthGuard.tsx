"use client"

import React from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function AuthGuard({ children }: { children: React.ReactNode }) {
    const { data, status } = useSession()
    const router = useRouter()
    console.log(data, status)


    React.useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login")
        }
    }, [status, router])

    if (status === 'authenticated') {
        return <>{children}</>
    }

    if (status === 'loading') {
        return <div>Cargando...</div>
    }
}
