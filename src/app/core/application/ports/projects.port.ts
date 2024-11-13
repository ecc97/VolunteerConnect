import { IProjectRequest, IProjectsResponse } from "../dto";

export interface PProject {
    /**
     * Get all projects
     * @param page
     * @param size
     * @returns {Promise<IProjectsResponse>} Projects response
    */
    getProjects(page?: number, size?: number): Promise<IProjectsResponse>;
}