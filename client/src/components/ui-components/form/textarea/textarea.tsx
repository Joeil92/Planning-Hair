import { Control, Controller, FieldError } from "react-hook-form";
import Container from "../../container/container";
import Typography from "../../typography/typography";

interface Props {
    name: string
    defaultValue?: string
    cols?: number
    rows?: number
    label?: string
    placeholder?: string
    required?: boolean
    control: Control<any>
    errors: FieldError | undefined
}

export default function Textarea({ name, defaultValue, cols, rows, label, placeholder, required, control, errors }: Props) {
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
                    <textarea
                        {...field}
                        cols={cols || 30}
                        rows={rows || 5}
                        id={name}
                        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${errors ? "border-red-500" : ""}`}
                        placeholder={placeholder}
                    />
                    {
                        errors?.type === "required" && <Typography className="text-red-500 text-xs">Ce champ est obligatoire</Typography>
                    }                    
                </Container>
            )}
            name={name}
            defaultValue={defaultValue}
            control={control}
            rules={{ required: required }}
        />
    )
}