import React from 'react'
import AuthGuard from './dashboard/guard/AuthGuard'
import LayoutPrivate from '@/components/ui/layout/LayoutPrivate'

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGuard>
      <LayoutPrivate>
        {children}  
      </LayoutPrivate>
    </AuthGuard>
  )
}
