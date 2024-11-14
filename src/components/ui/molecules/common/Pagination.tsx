"use client"
import React from "react"
import Button from "../../atoms/button/Button";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useRouter, useSearchParams } from 'next/navigation';
import { IProjectsResponse } from "@/app/core/application/dto";

interface PaginationProps {
    data: IProjectsResponse
}

export default function Pagination({ data }: PaginationProps) {
    const router = useRouter();
    
    const currentPage = data.metadata.currentPage
    const totalPages = data.metadata.totalPages;
    const searchParams = useSearchParams()

    const onPageChange = (newPage: number) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set('page', String(newPage))
        router.push(`?${params.toString()}`);
    }

    return (
        <div className="flex justify-center items-center">
            <Button type='button' className="p-2 rounded-md text-gray-600 hover:text-gray-900" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
                <FaAngleLeft />
            </Button>
            <span>Página {currentPage} / {totalPages} </span>
            <Button type='button' className="p-2 rounded-md text-gray-600 hover:text-gray-900" onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                <FaAngleRight />
            </Button>
        </div>
      )
}