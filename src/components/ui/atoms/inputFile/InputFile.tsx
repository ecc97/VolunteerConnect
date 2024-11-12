import React from 'react'
import './InputFile.scss'

interface InputFileProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    name?: string;
    error?: string;
}

const InputFile = ({ placeholder, name, error, ...props }: InputFileProps) => {
    return (
        <div className="flex flex-col mb-4">
            <input 
                type="file" 
                name={name} 
                className={`border rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blu-500 focus:border-transparent ${error ? 'border-red-500' : 'border-gray-300'}`} 
                {...props} 
            />
            {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
        </div>
    )
}

export default InputFile