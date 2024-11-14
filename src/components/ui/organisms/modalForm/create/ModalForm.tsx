"use client"
import React from 'react'
import { IProjectRequest } from '@/app/core/application/dto'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import FormField from '@/components/ui/molecules/common/FormField'
import Modal from '@/components/ui/molecules/common/modal/Modal'
import Button from '@/components/ui/atoms/button/Button'
import { useRouter } from 'next/navigation'

interface IModalFormProps {
    isOpen: boolean;
    onClose: () => void;
    // project?: IProjectRequest;
    // onSave?: (project: IProjectRequest) => void;
}

const projectSchema = yup.object().shape({
    title:       yup.string().required('El título es obligatorio'),
    description: yup.string().required('La descripción es obligatoria'),
    startDate:   yup.date().required('La fecha de inicio es obligatoria'),
    endDate:     yup.date().required('La fecha de fin es obligatoria'),
})

export default function ModalForm({isOpen, onClose}: IModalFormProps) {
    const router = useRouter()
    const { control, handleSubmit, formState: { errors }, reset } = useForm<IProjectRequest>({
        mode: 'onChange',
        reValidateMode: 'onChange',
        resolver: yupResolver(projectSchema),
    })

    const onSubmit = async (data: IProjectRequest) => {
        const formattedData = {
            ...data,
            startDate: data.startDate.toISOString().split('T')[0],
            endDate: data.endDate.toISOString().split('T')[0],
        };
        try {
            const response = await fetch("/api/projects/post", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formattedData)
            })
            if (!response.ok) {
                throw new Error('Hubo un error al crear el proyecto')
            }
            const project = await response.json()
            console.log('Proyecto agregado con éxito:', project);
            reset()
            onClose()
            router.refresh()
        } catch (error) {
            console.error('Error al crear proyecto:', error)
        }
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} title='Agregar Proyecto'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormField
                    control={control}
                    type="text"
                    label="Título"
                    name="title"
                    error={errors.title}
                    placeholder="Ingrese el título del proyecto"
                />
                <FormField
                    control={control}
                    type="text"
                    label="Descripción"
                    name="description"
                    error={errors.description}
                    placeholder="Ingrese una descripción del proyecto"
                />
                <FormField
                    control={control}
                    type="date"
                    label="Fecha de Inicio"
                    name="startDate"
                    error={errors.startDate}
                    placeholder="Ingrese la fecha de inicio del proyecto"
                />
                <FormField
                    control={control}
                    type="date"
                    label="Fecha de Fin"
                    name="endDate"
                    error={errors.endDate}
                    placeholder="Ingrese la fecha de fin del proyecto"
                />
                <div className="flex justify-end">
                    <Button type="submit" className='bg-gray-800 text-white w-full p-3 rounded-lg hover:bg-gray-700'>
                        Crear Proyecto
                    </Button>
                    {/* <Button type="submit" disabled={Object.values(errors).length > 0}>
                        {project? 'Actualizar' : 'Crear'} Proyecto
                    </Button>
                    <Button onClick={onClose}>Cancelar</Button> */}
                </div>
            </form>
            </Modal>
    )
}
