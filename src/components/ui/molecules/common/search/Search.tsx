"use client"
import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { useRouter, useSearchParams } from 'next/navigation'
import './Search.scss'

export default function Search() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [searchTerm, setSearchTerm] = React.useState(searchParams.get('name') || '')

    const handleSearch = () => {
        const params = new URLSearchParams(searchParams.toString())
        params.set('name', searchTerm)
        params.set('page', '1')
        router.push(`?${params.toString()}`);
    }

  return (
    <div className='w-full flex justify-center items-center gap-1'>
      <input type="text" placeholder="Buscar proyectos..." className="search-bar" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <button onClick={handleSearch}>
        <FaSearch />
      </button>
    </div>
  )
}
