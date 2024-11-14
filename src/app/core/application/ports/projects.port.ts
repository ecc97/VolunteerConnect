import { IProjectRequest, IProjectsResponse, IProjectResponse } from "../dto";

export interface PProject {
    /**
     * Get all projects
     * @param page
     * @param size
     * @returns {Promise<IProjectsResponse>} Projects response
    */
    getProjects(page?: number, size?: number): Promise<IProjectsResponse>;
    /**
     * Create a new project
     * @param req - {IProjectRequest} - Project request
     * @returns {Promise<IProjectResponse>} - Project response
    */
    createProject(req: IProjectRequest): Promise<IProjectResponse>;
    // /**
    //  * Get a project by ID
    //  * @param id
    //  * @returns {Promise<IProjectResponse>} Project response
    // */
    // getProjectById(id: number): Promise<IProjectResponse>;
}