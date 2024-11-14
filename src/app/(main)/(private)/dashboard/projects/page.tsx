import React from 'react'
import ProjectsTemplate from '@/components/ui/templates/proyects/ProyectsTemplate'
import { useProjectsService } from '@/app/hooks'

interface IParamsProps {
  searchParams: {
      page?: string;
      size?: string;
      name?: string
  }
}

export default async function ProyectsPage({ searchParams }: IParamsProps) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
    const size = searchParams.size ? parseInt(searchParams.size) : 10;
  const projects = await useProjectsService.getProjects(page, size)
  console.log(projects)
  return (
    <ProjectsTemplate dataProjects={projects}/>
  )
}
