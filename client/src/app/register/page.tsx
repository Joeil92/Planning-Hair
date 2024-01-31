'use client'
import Container from "@PH/components/ui-components/container/container";
import Typography from "@PH/components/ui-components/typography/typography";
import styles from "./page.module.css";
import RegistrationForm from "@PH/forms/registrationForm/registrationForm";
import { useState } from "react";
import CompanyForm from "@PH/forms/companyForm/companyForm";

export default function Page() {
    const [formStep, setFormStep] = useState<"register" | "company">("register");

    return (
        <Container className="h-screen flex">
            <Container className="w-6/12 h-screen inline-block">
                <Container className="w-96 h-80 my-32 m-auto">
                    {formStep === "register"
                        ? <>
                            <Typography tag="h1" className="text-center mb-16">Super, un nouveau membre !</Typography>
                            <RegistrationForm handleForm={setFormStep} />
                        </>
                        : <>
                            <Typography tag="h1" className="text-center">Présentez-nous votre entreprise !</Typography>
                            <Typography className="mb-16">Les informations pourront être changé ultérieurement</Typography>
                            <CompanyForm />
                        </>}
                </Container>
            </Container>
            <Container className={`w-6/12 h-screen inline-block ${styles.rightContainer}`}>
                <></>
            </Container>
        </Container>
    )
}