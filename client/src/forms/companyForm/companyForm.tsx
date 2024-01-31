'use client'
import Container from "@PH/components/ui-components/container/container";
import Input from "@PH/components/ui-components/form/input/input";
import Submit from "@PH/components/ui-components/form/submit/submit";
import { useForm } from "react-hook-form"

interface CompanyFormInputs {
    name: string
}

export default function CompanyForm() {
    const { handleSubmit, control, formState: { errors } } = useForm<CompanyFormInputs>();

    const onSubmit = (data: CompanyFormInputs) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                name="name"
                label="Nom"
                placeholder="Nom"
                required={true}
                control={control}
                errors={errors.name}
            />
            <Container className="text-center">
                <Submit value="Créer mon entreprise" />
            </Container>
        </form>
    )
}