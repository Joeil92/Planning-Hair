import { Control, Controller, UseFormSetValue } from "react-hook-form";
import Container from "../../container/container";

interface Props {
    name: string
    value: string
    setValue: UseFormSetValue<any>
    label: string
    required?: boolean
    control: Control<any>
}

export default function Radio({ name, value, setValue, label, required = false, control }: Props) {
    return (
        <Controller
            render={({ field }) => (
                <Container>
                    <input 
                        {...field}
                        type="radio"
                        value={value}
                        onChange={() => setValue(name, value)}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        checked={field.value === value}
                    />
                    <label 
                        htmlFor={name} 
                        className="ms-2 text-sm font-medium text-gray-900"
                    >{label}</label>
                </Container>
            )}
            name={name}
            control={control}
            rules={{ required: required }}
        />
    )
}