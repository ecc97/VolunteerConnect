import { IProjectRequest, IProjectsResponse, IProjectResponse, IProjectDeleteResponse } from "../dto";

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
    // /**
    //  * Update a project by ID
    //  * @param id
    //  * @param req - {IProjectRequest} - Project request
    //  * @returns {Promise<IProjectResponse>} - Project response
    // updateProject(id: number, req: IProjectRequest): Promise<IProjectResponse>;
    /**
     * Delete a project by ID
     * @param id
     * @returns {Promise<IProjectDeleteResponse>} Project response
     */ 
    deleteProject(id: number): Promise<IProjectDeleteResponse>;
}