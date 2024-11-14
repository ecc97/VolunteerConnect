import { NextResponse } from "next/server";
import { RegisterService } from "@/app/infrastructure/services";

const useRegisterService = new RegisterService()

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const newUser = await useRegisterService.register(formData);
        return NextResponse.json(newUser, { status: 200});
    } catch (error) {
        console.log('Error al registar en el servidor:', error)
        return NextResponse.json({ statusCode: 500, message: 'Error al registrar' }, { status: 500 });
    }
}
