import { Control, Controller, UseFormSetValue } from "react-hook-form";
import Container from "../../container/container";
import { ChangeEventHandler } from "react";

interface Props {
    name: string
    checked?: boolean
    onChange?: ChangeEventHandler<HTMLInputElement>
    value: string
    label: string
    required?: boolean
    control: Control<any>
}

export default function Checkbox({ name, checked = false, onChange, value, label, required = false, control }: Props) {
    return (
        <Controller
            render={(({ field }) => (
                <Container>
                    <input
                        {...field}
                        onChange={onChange || field.onChange}
                        value={value}
                        type="checkbox"
                        className="leading-tight"
                        checked={checked}
                    />
                    <label
                        htmlFor={name}
                        className="ms-2 text-sm font-medium text-gray-900"
                    >{label}</label>
                </Container>
            ))}
            name={name}
            control={control}
            rules={{ required: required }}
        />
    )
}