'use client'
import Alert from "@PH/components/ui-components/alert/alert";
import AlertObject from "@PH/components/ui-components/alert/alert.interface";
import Container from "@PH/components/ui-components/container/container";
import Input from "@PH/components/ui-components/form/input/input";
import Radio from "@PH/components/ui-components/form/radio/radio";
import Submit from "@PH/components/ui-components/form/submit/submit";
import Typography from "@PH/components/ui-components/typography/typography";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface RegistrationFormInputs {
    email: string
    password: string
    plainPassword: string
    firstname: string
    lastname: string
    role: 'client' | 'owner'
}

interface Props {
    handleForm: React.Dispatch<React.SetStateAction<"register" | "company">>
}

export default function RegistrationForm({ handleForm }: Props) {
    const [alert, setAlert] = useState<AlertObject>();
    const router = useRouter();
    const { handleSubmit, control, setValue, watch, formState: { errors } } = useForm<RegistrationFormInputs>({
        defaultValues: {
            email: "test@mon-organisation.fr",
            password: "test",
            plainPassword: "test",
            firstname: "John",
            lastname: "Doe",
            role: "client"
        }
    });
    const watchRole = watch("role");

    const onSubmit = async (data: RegistrationFormInputs) => {
        if(data.password !== data.plainPassword) return setAlert({ type: 'danger', message: 'les mots de passe sont différents' })

        try {
            const res = await fetch('http://localhost:8000/api/users', {
                method: 'POST',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
            const json = await res.json();
    
            if(!res.ok) throw json.message;

            setAlert({ type: "success", message: json.message });

            if(data.role === "client") {
                router.push('/');
            } else {
                handleForm("company");
            }
        } catch (error) {
            console.log(error);
            setAlert({ type: 'danger', message: error as string })
        }

        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {alert ? <Alert type={alert.type} message={alert.message} handleState={setAlert} /> : null}
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