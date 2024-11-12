import RegisterForm from '../../organisms/auth/RegisterForm'
import './auth.scss'

export const RegisterTemplate = () => {
    return (
        <div className="min-h-screen flex  items-center justify-center auth">
            <div className="w-full max-w-md  p-6 bg-white rounded-lg shadow-md">
                <RegisterForm />
            </div>
        </div>
    )
}