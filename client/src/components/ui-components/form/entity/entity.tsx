import { Control, Controller, FieldError, Merge } from "react-hook-form";
import Container from "../../container/container";
import Select from 'react-select'
import { useEffect, useState } from "react";
import Typography from "../../typography/typography";

interface Props {
    name: string
    label: string
    placeholder?: string
    endpoint: string
    optionValue: string
    isMulti?: boolean
    required?: boolean
    control: Control<any>
    errors: Merge<FieldError, (FieldError | undefined)[]> | undefined
}

export default function Entity({ name, label, placeholder, endpoint, optionValue, isMulti = false, required = false, control, errors }: Props) {
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

            setOptions(json);
        }

        getOptions();
    }, []);

    return (
        <Controller
            render={({ field }) => (
                <Container className="my-3" suppressHydrationWarning={true}>
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
                        placeholder={placeholder}
                        getOptionLabel={(option) => option[optionValue]}
                        getOptionValue={(option) => option.id}
                        options={options}
                        isClearable={true}
                        isMulti={isMulti}
                        closeMenuOnSelect={!isMulti}
                    />
                    {
                        errors?.type === "required" && <Typography className="text-red-500 text-xs">Ce champ est obligatoire</Typography>
                    }
                </Container>
            )}
            name={name}
            control={control}
            rules={{ required: required }}
        />
    )
}