import { Control, Controller } from "react-hook-form";
import Container from "../../container/container";
import Select from 'react-select'
import { useState } from "react";

interface Props {
    name: string
    label: string
    required?: boolean
    control: Control<any>
}

export default function Entity({ name, label, required = false, control }: Props) {
    const [options, setOptions] = useState([]);

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