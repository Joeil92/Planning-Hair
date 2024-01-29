import Container from "@PH/components/ui-components/container/container";
import Typography from "@PH/components/ui-components/typography/typography";
import styles from "./page.module.css";
import LoginForm from "@PH/forms/loginForm/loginForm";

export default function Login() {
    return (
        <Container className="h-screen flex">
            <Container className="w-6/12 h-screen inline-block">
                <LoginForm />
            </Container>
            <Container className={`w-6/12 h-screen inline-block ${styles.rightContainer}`}>
                <></>
            </Container>
        </Container>
    )
}