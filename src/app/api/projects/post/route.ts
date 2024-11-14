import { NextResponse } from "next/server";
import { IProjectRequest, IProjectResponse } from "@/app/core/application/dto";
import { useProjectsService } from "@/app/hooks";

export async function POST(req: Request) {
    try {
        const project: IProjectRequest = await req.json();
        const newProject = await useProjectsService.createProject(project);
        return NextResponse.json(newProject, { status: 200 });
    } catch (error) {
        console.log('Error al crear proyecto en el servidor:', error)
        return NextResponse.json({ statusCode: 500, message: 'Error al crear el proyecto' }, { status: 500 });
    }
}