import { NextResponse } from "next/server";
import { IProjectDeleteResponse } from "@/app/core/application/dto";
import { useProjectsService } from "@/app/hooks";
import { ProjectsService } from "@/app/infrastructure/services";

export async function DELETE(req: Request, {params}: { params: Promise<{id: number}>}){
    try {
        const id = (await params).id;
        const { data } = await useProjectsService.deleteProject(id);
        return NextResponse.json(data, { status: 200})
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Error eliminando proyecto:' }, { status: 500 } )
    }
}