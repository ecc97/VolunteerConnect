"use client";
import React from 'react';
import './Proyects.scss'
import { IProjectRequest, IProjectsResponse } from '@/app/core/application/dto';
import Pagination from '../../molecules/common/Pagination';

interface ProjectsTemplateProps {
  dataProjects: IProjectsResponse;
  handleProjectClick?: (project: IProjectRequest) => void;
}

const ProjectsTemplate = ({ dataProjects }: ProjectsTemplateProps) => {
  const projects = dataProjects.data
  // // Implementar función para manejar click en un proyecto

  // const handleProjectClick = (project: IProjectRequest) => {
  //   if (handleProjectClick) {
  //     handleProjectClick(project);
  //   }
  // };
  return (
    <div className="projects-dashboard">

      {/* Estadísticas de proyectos */}
      <div className="project-stats">
        <div className="stat-card">Total Proyectos: 3</div>
        <div className="stat-card">Proyectos Activos: 3</div>
        <div className="stat-card">Organizadores: 2</div>
        <div className="stat-card">Próximo Proyecto: <span>Invalid Date</span></div>
      </div>

      {/* Lista de proyectos */}
      <div className="project-list">
        <h2>Lista de Proyectos</h2>
        <input type="text" placeholder="Buscar proyectos..." className="search-bar" />
        <table className="project-table">
          <thead>
            <tr>
              <th>Título</th>
              <th>Descripción</th>
              <th>Fecha de Inicio</th>
              <th>Fecha de Fin</th>
              <th>Estado</th>
              <th>Organizador</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Limpieza de Playa</td>
              <td>Jornada de limpieza en la playa local</td>
              <td>14/8/2023</td>
              <td>15/8/2023</td>
              <td><span className="status-active">Activo</span></td>
              <td>Juan Pérez</td>
              <td>
                <button className="edit-button">Editar</button>
                <button className="delete-button">Eliminar</button>
              </td>
            </tr>
            {projects.map((project) => (
              <tr key={project.id}>
                <td>{project.title}</td>
                <td>{project.description}</td>
                <td>{String(project.startDate)}</td>
                <td>{String(project.endDate)}</td>
                <td>{project.isActive ? (
                  <span className="status-active">Activo</span>
                ) : (
                  <span className="status-inactive">Inactivo</span>
                )}</td>
                <td>{project.organizer.name}</td>
                <td>
                  <button className="edit-button">Editar</button>
                  <button className="delete-button">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Paginación */}
      <Pagination data={dataProjects} />
      {/* <Pagination totalPages={dataProjects.totalPages} currentPage={dataProjects.currentPage} /> */}
    </div>
  );
};

export default ProjectsTemplate;
