"use client";
import React, { useEffect } from 'react';
import { IProjectRequest } from '@/app/core/application/dto';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FormField from '@/components/ui/molecules/common/FormField';
import Modal from '@/components/ui/molecules/common/modal/Modal';
import Button from '@/components/ui/atoms/button/Button';

interface UpdateModalFormProps {
    isOpen: boolean;
    onClose: () => void;
    project: IProjectRequest;
}

const projectSchema = yup.object().shape({
    title: yup.string().required('El título es obligatorio'),
    description: yup.string().required('La descripción es obligatoria'),
    startDate: yup.date().required('La fecha de inicio es obligatoria'),
    endDate: yup.date().required('La fecha de fin es obligatoria'),
});

export default function UpdateModalForm({ isOpen, onClose, project }: UpdateModalFormProps) {
    const { control, handleSubmit, formState: { errors }, reset } = useForm<IProjectRequest>({
        resolver: yupResolver(projectSchema),
        defaultValues: project,
    });

    // Actualiza los valores iniciales cuando cambia el proyecto
    useEffect(() => {
        reset(project);
    }, [project, reset]);

    const onSubmit = async (data: IProjectRequest) => {
        
        console.log('Proyecto actualizado:', data);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Editar Proyecto">
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
                    <Button type="submit" className="bg-gray-800 text-white w-full p-3 rounded-lg hover:bg-gray-700">
                        Actualizar Proyecto
                    </Button>
                </div>
            </form>
        </Modal>
    );
}
