'use client'
import Container from "@PH/components/ui-components/container/container";
import Input from "@PH/components/ui-components/form/input/input";
import Submit from "@PH/components/ui-components/form/submit/submit";
import { useLocalStorage } from "@PH/hooks/useLocalStorage";
import { authContext } from "@PH/providers/authProvider";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { useForm } from "react-hook-form";

interface LoginFormInputs {
    email: string
    password: string
}

export default function LoginForm() {
    const router = useRouter();
    const { signin } = useContext(authContext);
    const { setItem } = useLocalStorage();    
    const { handleSubmit, control, formState: { errors } } = useForm<LoginFormInputs>({
        defaultValues: {
            email: "test@mon-organisation.fr",
            password: "test"
        }
    });

    const onSubmit = async (data: LoginFormInputs) => {
        console.log(data);

        try {
            const res = await fetch('http://localhost:8000/api/auth', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            const json = await res.json();

            if(!res.ok) throw json.message;

            setItem("phToken", json);

            signin(json);

            router.push('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                name="email"
                label="Email"
                placeholder="Email"
                control={control}
                required={true}
                errors={errors.email}
            />
            <Input 
                type="password"
                name="password"
                label="Mot de passe"
                placeholder="Mot de passe"
                control={control}
                required={true}
                errors={errors.password}
            />
            <Container className="text-center">
                <Submit value="Se connecter" />
            </Container>
        </form>
    )
}