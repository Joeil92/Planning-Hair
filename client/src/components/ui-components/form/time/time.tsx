import { Control, Controller, FieldError } from "react-hook-form";
import Container from "../../container/container";
import Typography from "../../typography/typography";
import { ChangeEventHandler } from "react";

interface Props {
    name: string
    defaultValue?: string
    label?: string
    onChange?: ChangeEventHandler<HTMLInputElement>
    min?: string
    max?: string
    required?: boolean
    disabled?: boolean
    control: Control<any>
    errors: FieldError | undefined
}

export default function Time({ name, defaultValue, label, onChange, min, max, required = false, disabled = false, control, errors }: Props) {
    return (
        <Controller
            render={(({ field }) => (
                <Container>
                    {
                        label
                            ? <label
                                htmlFor={name}
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >{label}</label>
                            : null
                    }
                    <input
                        {...field}
                        onChange={onChange || field.onChange}
                        type="time"
                        min={min}
                        max={max}
                        id={name}
                        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 ${errors ? "border-red-500" : ""}`}
                        disabled={disabled}
                    />
                    {
                        errors?.type === "required" && <Typography className="text-red-500 text-xs">Ce champ est obligatoire</Typography>
                    }
                </Container>
            ))}
            name={name}
            defaultValue={defaultValue}
            control={control}
            rules={{ required: required }}
        />
    )
}