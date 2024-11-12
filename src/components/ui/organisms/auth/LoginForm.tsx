"use client"
import React from 'react'
import FormField from '../../molecules/common/FormField'
import { ILoginRequest } from '@/app/core/application/dto'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { signIn } from 'next-auth/react'
import { ErrorResponse } from '@/app/core/application/dto' 
import { useRouter } from 'next/navigation' 

const loginSchema = yup.object().shape({
    email: yup.string().email('El correo es inválido').required('Correo electrónico es requerido'),
    password: yup.string().required('Contraseña es requerida'),
})

export default function LoginForm() {
    const router = useRouter()
    const { control, handleSubmit, setError, formState: {errors} } = useForm<ILoginRequest>({
        mode: 'onChange',
        reValidateMode: 'onChange',
        resolver: yupResolver(loginSchema), 
    })
    
    const handleLogin = async (data: ILoginRequest) => {
        try {
            const result = await signIn('credentials', {
                redirect: false,
                email: data.email,
                password: data.password,
            })
            // router.push('/')
            console.log('Logueado ', result)

            if (result?.error) {
                console.log('Ocurrió un error', JSON.parse(result.error))
                handleError(JSON.parse(result.error))   
                return
            }
        } catch (error) {
           console.error(error)
        }
    }
    
    const handleError = (error: unknown) => {
        const errorData = error as ErrorResponse
        if(errorData && errorData.message){
            setError('email', {
                type: 'manual',
                message: errorData.message,
            })
            setError('password', {
                type: 'manual',
                message: errorData.message,
            })
        }
    }
    return (
        <form className="w-full max-w-sm mx-auto p-4 space-y-4" onSubmit={handleSubmit(handleLogin)}>
            <h2 className="text-2xl font-semibold text-center">Iniciar Sesión</h2>
            <FormField<ILoginRequest>
                control={control}
                type="email"
                label="Correo Electrónico"
                name="email"
                error={errors.email}
                placeholder="Ingresa tu correo"
            />
            <FormField<ILoginRequest>
                control={control}
                type="password"
                label="Contraseña"
                name="password"
                error={errors.password}
                placeholder="Ingresa tu contraseña"
            />
            <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-500">
                Iniciar Sesión
            </button>
        </form>
    )
}
