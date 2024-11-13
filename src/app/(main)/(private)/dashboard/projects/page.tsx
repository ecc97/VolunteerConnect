import React from 'react'
import { useProjectsService } from '@/app/hooks'

export default async function ProyectsPage() {
  const projects = await useProjectsService.getProjects()
  console.log(projects)
  return (
    <div>ProyectsPage</div>
  )
}
