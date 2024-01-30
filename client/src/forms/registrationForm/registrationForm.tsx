'use client'
import Container from "@PH/components/ui-components/container/container";
import Input from "@PH/components/ui-components/form/input/input";
import Submit from "@PH/components/ui-components/form/submit/submit";
import { useForm } from "react-hook-form";

interface RegistrationFormInputs {
    email: string
    password: string

}

export default function RegistrationForm() {
    const { handleSubmit, control } = useForm<RegistrationFormInputs>({
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const onSubmit = (data: RegistrationFormInputs) => {
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
            <Input 
                type="password"
                name="plainPassword"
                label="Confirmer mot de passe *"
                placeholder="Mot de passe"
                control={control}
                required={true}
            />            
            <Container className="text-center">
                <Submit value="Créer mon compte" />
            </Container>
        </form>
    )
}