export interface IProjectsResponse {
    statusCode: number;
    message:    string;
    data:       IProject[];
    metadata:   Metadata;
}

export interface IProject {
    id:          number;
    title:       string;
    description: string;
    startDate:   Date;
    endDate:     Date;
    isActive:    boolean;
    organizer:   Organizer;
}

export interface Organizer {
    id:       number;
    email:    string;
    password: string;
    name:     string;
    role:     string;
    photo:    string;
}

export interface Metadata {
    totalItems:   number;
    itemCount:    number;
    itemsPerPage: number;
    totalPages:   number;
    currentPage:  number;
}

//POST response
export interface IProjectResponse {
    statusCode: number;
    message:    string;
    data:       IProjectData;
}

export interface IProjectData {
    title:       string;
    description: string;
    startDate:   Date;
    endDate:     Date;
    organizer:   OrganizerData;
    id:          number;
    isActive:    boolean;
}

export interface OrganizerData {
    id:    number;
    email: string;
    role:  string;
}
