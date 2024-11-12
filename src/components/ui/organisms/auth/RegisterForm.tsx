"use client"

import React from 'react'
import Button from '../../atoms/button/Button'
import FormField from '../../molecules/common/FormField'
import { FormSelectField } from '../../molecules/common/FormFieldSelect'
import FormFieldFile from '../../molecules/common/FormFieldFile'
import { IRegisterResquest } from '@/app/core/application/dto'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useRouter } from 'next/navigation'

const registerSchema = yup.object().shape({
    email: yup.string().email().required('El correo electrónico es obligatorio'),
    password: yup.string().min(8, 'La contraseña debe tener al menos 8 caracteres').required('La contraseña es obligatoria'),
    name: yup.string().required('El nombre es obligatorio'),
    rol: yup.string().required('El rol es obligatorio'),
})

const RegisterForm = () => {
    const router = useRouter()
    const { control, handleSubmit, formState: { errors } } = useForm<IRegisterResquest>({
        mode: 'onChange',
        reValidateMode: 'onChange',
        resolver: yupResolver(registerSchema)
    })
    
    const handleRegister = async (data: IRegisterResquest) => {
        // Aquí puedes manejar la lógica de registro
        console.log(data)
    }

    return (
        <form className="w-full max-w-sm mx-auto p-4 space-y-4" onSubmit={handleSubmit(handleRegister)}>
            <h2 className="text-2xl font-semibold text-center">Regístrate</h2>
            <FormField<IRegisterResquest>
                control={control}
                type="email"
                label="Correo Electrónico"
                name="email"
                error={errors.email}
                placeholder="Ingresa tu correo electrónico"
            />
            <FormField<IRegisterResquest>
                control={control}
                type="password"
                label="Contraseña"
                name="password"
                error={errors.password}
                placeholder="Ingresa tu contraseña"
            />
            <FormField<IRegisterResquest>
                control={control}
                type="text"
                label="Nombre"
                name="name"
                error={errors.name}
                placeholder="Ingresa tu nombre"
            />
            <FormSelectField
                control={control}
                label="Rol"
                name="rol"
                options={[
                    { value: 'organizer', label: 'Organización' },
                    { value: 'volunteer', label: 'Voluntario' },
                ]}
                error={errors.rol}
                placeholder="Seleccione su rol"
            />
            <FormFieldFile
                control={control}
                label="Foto"
                name="photo"
                error={errors.photo}
                placeholder="Sube tu foto"
            />
            <Button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-500">
                Registrar
            </Button>
        </form>
    )
}

export default RegisterForm
