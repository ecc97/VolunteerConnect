// next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      photo?: string | null; // Propiedad personalizada
      id?: string;           // Agregar id
      role?: string | null;         // Agregar role
      token?: string;        // Agregar token
    };
  }
}
