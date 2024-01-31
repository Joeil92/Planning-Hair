import { Control, Controller } from "react-hook-form";
import Container from "../../container/container";
import Select from 'react-select'
import { useEffect, useState } from "react";

interface Props {
    name: string
    label: string
    endpoint: string
    required?: boolean
    control: Control<any>
}

export default function Entity({ name, label, endpoint, required = false, control }: Props) {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        const getOptions = async () => {
            const res = await fetch(`http://localhost:8000/api/${endpoint}`, {
                method: 'GET',
                headers: {
                    'accept': 'application/json'
                }
            })
            const json = await res.json();

            console.log(json);
            setOptions(json);
        }

        getOptions();
    }, []);

    return (
        <Controller
            render={({ field }) => (
                <Container className="my-3">
                    {
                        label
                            ? <label
                                htmlFor={name}
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >{label}</label>
                            : null
                    }
                    <Select 
                        {...field} 
                        options={options} 
                    />
                </Container>
            )}
            name={name}
            control={control}
            rules={{ required: required }}
        />
    )
}