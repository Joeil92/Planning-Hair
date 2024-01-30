'use client'
import Container from "@PH/components/ui-components/container/container";
import Input from "@PH/components/ui-components/form/input/input";
import Submit from "@PH/components/ui-components/form/submit/submit";
import { useForm } from "react-hook-form";

interface LoginFormInputs {
    email: string
    password: string
}

export default function LoginForm() {
    const { handleSubmit, control } = useForm<LoginFormInputs>({
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const onSubmit = (data: LoginFormInputs) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                name="email"
                label="Email *"
                placeholder="Email"
                control={control}
                required={true}
            />
            <Input 
                type="password"
                name="password"
                label="Mot de passe *"
                placeholder="Mot de passe"
                control={control}
                required={true}
            />
            <Container className="text-center">
                <Submit value="Se connecter" />
            </Container>
        </form>
    )
}