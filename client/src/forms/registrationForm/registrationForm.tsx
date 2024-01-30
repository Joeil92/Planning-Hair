'use client'
import Container from "@PH/components/ui-components/container/container";
import Input from "@PH/components/ui-components/form/input/input";
import Radio from "@PH/components/ui-components/form/radio/radio";
import Submit from "@PH/components/ui-components/form/submit/submit";
import Typography from "@PH/components/ui-components/typography/typography";
import { useForm } from "react-hook-form";

interface RegistrationFormInputs {
    email: string
    password: string
    plainPassword: string
    role: 'client' | 'owner'
}

export default function RegistrationForm() {
    const { handleSubmit, control, setValue } = useForm<RegistrationFormInputs>({
        defaultValues: {
            email: "",
            password: "",
            plainPassword: "",
            role: "client"
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
            <Typography className="my-3">Qui êtes-vous ?</Typography>
            <Radio
                name="role"
                label="Client"
                value="client"
                setValue={setValue}
                control={control}
            />
            <Radio 
                name="role"
                label="Gérant d'un établissement"
                setValue={setValue}
                value="owner"
                control={control}
            />
            <Container className="text-center">
                <Submit value="Créer mon compte" />
            </Container>
        </form>
    )
}