"use client";
import React from 'react';
import Button from '../../atoms/button/Button';
import Modal from '../../molecules/common/modal/Modal';
import ModalForm from '../../organisms/modalForm/create/ModalForm';
import { IProjectRequest, IProjectsResponse } from '@/app/core/application/dto';
import Pagination from '../../molecules/common/Pagination';
import './Proyects.scss'

interface ProjectsTemplateProps {
  dataProjects: IProjectsResponse;
  handleProjectClick?: (project: IProjectRequest) => void;
}

const ProjectsTemplate = ({ dataProjects }: ProjectsTemplateProps) => {
  const projects = dataProjects.data
  const [showModal, setShowModal] = React.useState(false)
  const handleShowModal = () => setShowModal(true)
  const handleCloseModal = () => setShowModal(false)
  // // Implementar función para manejar click en un proyecto

  // const handleProjectClick = (project: IProjectRequest) => {
  //   if (handleProjectClick) {
  //     handleProjectClick(project);
  //   }
  // };
  return (
    <div className="projects-dashboard">
      {/* Contenedor superior de estadísticas y botones */}
      <div className="dashboard-header">
        <h1>Dashboard de Proyectos</h1>
        <div className="header-buttons">
          <Button variant='primary'> Descargar Proyecto</Button>
          <Button variant='primary' onClick={handleShowModal}>Nuevo Proyecto</Button>
        </div>
      </div>

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
                <td className='flex p-7'>
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
      {/* Modal para agregar un nuevo proyecto */}
      <ModalForm isOpen={showModal} onClose={handleCloseModal} />
    </div>
  );
};

export default ProjectsTemplate;
