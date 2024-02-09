'use client'
import Container from "@PH/components/ui-components/container/container";
import Typography from "@PH/components/ui-components/typography/typography";
import styles from "./page.module.css";
import LoginForm from "@PH/forms/loginForm/loginForm";
import Button from "@PH/components/ui-components/button/button";
import { useRouter } from "next/navigation";


export default function Page() {
    const router = useRouter();

    return (
        <Container className="h-screen flex">
            <Container className="w-6/12 h-screen inline-block">
                <Container className="w-96 h-80 my-32 m-auto">
                    <Typography tag="h1" className="text-center">Bienvenue sur Planning Hair !</Typography>
                    <Typography className="text-center mb-16">Veuillez vous connecter pour continuer</Typography>
                    <LoginForm />
                    <Container className="border-t-2 p-3 text-center">
                        <Typography>Pas encore inscrit ?</Typography>
                        <Button type="primary-outline" className="my-3" onClick={() => router.push('/register')}>Créer un compte</Button>
                    </Container>
                </Container>
            </Container>
            <Container className={`w-6/12 h-screen inline-block ${styles.rightContainer}`}>
                <></>
            </Container>
        </Container>
    )
}