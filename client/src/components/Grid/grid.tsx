'use client'
import Container from "@PH/components/ui-components/container/container";
import react from "react";
import { useEffect,useState } from "react";
import { ValueContainer } from "react-select/animated";
import axios from 'axios';

export default function barbiers(params : any) {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        
        axios
            .get('http://localhost:8000/api/category')
            .then(response => {
        setCategory(response.data);
        })
            .catch(error => {
        console.error('l\'api marche pas', error);
          });
          setCategory(category);
          
      }, []);
    
    return (
        
        <Container className="flex items-center justify-center">
            <Container className="grid grid-cols-3 gap-4">
            <Container className="col-span-1 p-4 bg-gray-200">Colonne 1</Container>
            {category.map((data, index) => (
            <Container key={index} className="p-4 border mb-4">
                
                /* Element enregistré dans la bdd */
                <p>Nom : {data.nom}</p>
                <p>Description : {data.description}</p>
                <p>Date : {data.created_at}</p>

            </Container>
        ))};
            </Container>
        </Container>
    );
}