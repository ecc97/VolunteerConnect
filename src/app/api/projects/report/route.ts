import { NextResponse } from "next/server";
import { useProjectsService } from "@/app/hooks";

export async function GET() {
    try {
        const reportProjects = await useProjectsService.getProjectReport();
        const response = NextResponse.json(reportProjects, { status: 200 });
        return response;
    } catch (error) {
        console.log('Error al obtener reportes en el servidor:', error)
        return NextResponse.json({ statusCode: 500, message: 'Error al obtener los reportes' }, { status: 500 });
    }
}