import Container from "@PH/components/ui-components/container/container";
import Typography from "@PH/components/ui-components/typography/typography";
import styles from "./page.module.css";
import RegistrationForm from "@PH/forms/registrationForm/registrationForm";

export default function Page() {
    return (
        <Container className="h-screen flex">
            <Container className="w-6/12 h-screen inline-block">
                <Container className="w-96 h-80 my-32 m-auto">
                    <Typography tag="h1" className="text-center mb-16">Super, un nouveau membre !</Typography>
                    <RegistrationForm />
                </Container>
            </Container>
            <Container className={`w-6/12 h-screen inline-block ${styles.rightContainer}`}>
                <></>
            </Container>
        </Container>
    )
}