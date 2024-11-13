import { IProjectRequest, IProjectsResponse } from "@/app/core/application/dto";
import { PProject } from "@/app/core/application/ports";
import { HttpClient } from "../utils/client-http";

export class ProjectsService implements PProject {
    private httpClient: HttpClient

    constructor() {
        this.httpClient = new HttpClient()
    }
    async getProjects(page?: number, size?: number): Promise<IProjectsResponse> {
        try {
            const url = page && size? `projects?page=${page}&size=${size}` : 'projects'
            const response = this.httpClient.get<IProjectsResponse>(url)
            return response;
        } catch (error) {
            console.log('Error obteniendo proyectos:', error)
            throw error
        }
    }
}