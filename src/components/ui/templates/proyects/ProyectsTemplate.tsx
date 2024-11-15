"use client";
import React from 'react';
import Button from '../../atoms/button/Button';
import ModalForm from '../../organisms/modalForm/create/ModalForm';
import UpdateModalForm from '../../organisms/modalForm/update/ModalForm';
import Search from '../../molecules/common/search/Search';
import { IProjectRequest, IProjectsResponse } from '@/app/core/application/dto';
import Pagination from '../../molecules/common/Pagination';
import { useRouter } from 'next/navigation';
import './Proyects.scss'

interface ProjectsTemplateProps {
  dataProjects: IProjectsResponse;
  handleProjectClick?: (project: IProjectRequest) => void;
}

const ProjectsTemplate = ({ dataProjects }: ProjectsTemplateProps) => {
  const projects = dataProjects.data
  const router = useRouter()
  const [showModal, setShowModal] = React.useState(false)
  const [isEditMode, setIsEditMode] = React.useState(false)
  const [selectedProject, setSelectedProject] = React.useState<IProjectRequest | null>(null);
  const handleShowModal = () => setShowModal(true)
  const handleCloseModal = () => setShowModal(false)

  const handleShowEditModal = (project: IProjectRequest) => {
    setSelectedProject(project);
    setIsEditMode(true);
  };
  const handleCloseEditModal = () => {
    setSelectedProject(null);
    setIsEditMode(false);
  };
  // // Implementar función para manejar click en un proyecto

  // const handleProjectClick = (project: IProjectRequest) => {
  //   if (handleProjectClick) {
  //     handleProjectClick(project);
  //   }
  // };

  const onDelete = async (id: string) => {
    const confirmed = confirm('¿Estás seguro de que quieres eliminar este elemento?')
    if (!confirmed) return
    try {
      await fetch(`/api/projects/${Number(id)}/delete`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      console.log('Proyecto eliminado con éxito')
    } catch (error) {
      console.error('Error al eliminar el proyecto', error)
    }
    router.refresh()
  }
  return (
    <div className="projects-dashboard">
      {/* Contenedor superior de estadísticas y botones */}
      <div className="dashboard-header">
        <h1>Dashboard de Proyectos</h1>
        <div className="header-buttons">
          <Button variant='primary'> Descargar Reporte</Button>
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
        <Search />
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
                  <button className="edit-button" onClick={() => handleShowEditModal(project)}>Editar</button>
                  <button className="delete-button" onClick={() => onDelete(String(project.id))}>Eliminar</button>
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
      {/* Modal para editar un proyecto */}
      {selectedProject && (
        <UpdateModalForm isOpen={isEditMode} onClose={handleCloseEditModal} project={selectedProject} />
      )}
    </div>
  );
};

export default ProjectsTemplate;
