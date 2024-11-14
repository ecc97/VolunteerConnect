export interface IRegisterResponse {
    statusCode: number;
    message: string;
    data: UserData;
}

interface UserData {
    id: number;    
    email: string;
    name: string;
    role: string;
    photo: string | null;
}