'use client'
import Alert from "@PH/components/ui-components/alert/alert";
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
    firstname: string
    lastname: string
    role: 'client' | 'owner'
}

export default function RegistrationForm() {
    const { handleSubmit, control, setValue, watch, formState: { errors } } = useForm<RegistrationFormInputs>({
        defaultValues: {
            email: "",
            password: "",
            plainPassword: "",
            firstname: "",
            lastname: "",
            role: "client"
        }
    });
    const watchRole = watch("role");

    const onSubmit = (data: RegistrationFormInputs) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Typography>Informations générales</Typography>
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
            <Input
                type="password"
                name="plainPassword"
                label="Confirmer mot de passe"
                placeholder="Mot de passe"
                control={control}
                required={true}
                errors={errors.plainPassword}
            />
            <Typography className="my-3">Qui êtes-vous ?</Typography>
            <Container>
                <Input
                    name="firstname"
                    label="Prénom"
                    placeholder="Prénom"
                    control={control}
                    required={true}
                    errors={errors.firstname}
                />
                <Input
                    name="lastname"
                    label="Nom"
                    placeholder="Nom"
                    control={control}
                    required={true}
                    errors={errors.lastname}
                />
            </Container>
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
            {watchRole === "owner" &&
                <Alert
                    type="primary"
                    message="Si vous êtes salarié d'une entreprise, veuillez vous rapprocher de votre responsable pour avoir accès au site."
                />}
            <Container className="text-center">
                <Submit value="Créer mon compte" />
            </Container>
        </form>
    )
}