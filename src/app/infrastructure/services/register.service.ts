import { PRegister } from "@/app/core/application/ports";
import { IRegisterResquest, IRegisterResponse } from "@/app/core/application/dto";
import { HttpClient } from "../utils/client-http";

export class RegisterService implements PRegister {
    private clientHttp: HttpClient;

    constructor(){
        this.clientHttp = new HttpClient();
    }

    async register(req: FormData): Promise<IRegisterResponse> {
        const formData = true
        return this.clientHttp.post<IRegisterResponse, FormData>("users", req, formData);
    }
}