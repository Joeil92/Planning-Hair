import Container from "@PH/components/ui-components/container/container";
import Typography from "@PH/components/ui-components/typography/typography";
import react from "react";
import { useEffect,useState } from "react";
import Grid from "@PH/components/grid/grid";

export default function barbiers(params : any) {





    return (
        <Container className="flex items-center justify-center">
            <Container className="text-center mt-12 mb-12">
                <Typography tag="h1" className="">Bienvenue</Typography>
                <Typography className="mb-12 mt-2">Toutes les entreprises pour le bien-être enregistré</Typography>
                <Grid>Les données passe ici</Grid>
            </Container>          
        </Container>
    );
}