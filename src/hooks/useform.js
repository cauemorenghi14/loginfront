import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import userFunctions from "../utils/users";

export const Form = () => {

    const schemaForm = z.object({
        username: z.string(),
        email: z.string().email('Email inválido'),
        password: z.string().min(8, 'A senha deve connter no mínimo 8 caracteres')
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        criteriaMode: 'all',
        mode: 'all',
        resolver: zodResolver(schemaForm),
        defaultValues: {
            username: '',
            email: '',
            password: ''
        }
    })

    const { registerSubmit, login } = userFunctions()

    return {
        register, registerSubmit, handleSubmit, errors, login
    }

}
