import { Control, Controller } from "react-hook-form"
import Container from "../../container/container"

interface Props {
    name: string
    type?: "text" | "password"
    defaultValue?: string
    label?: string
    placeholder?: string
    required?: boolean
    control: Control<any>
}

export default function Input({ name, type = "text", label, defaultValue, placeholder, required = false, control }: Props) {
    return (
        <Controller
            render={(field) => (
                <Container className="my-3">
                    {
                        label
                            ? <label
                                htmlFor={name}
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >{label}</label>
                            : null
                    }
                    <input
                        {...field}
                        type={type}
                        id={name}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder={placeholder}
                    />
                </Container>
            )}
            name={name}
            defaultValue={defaultValue}
            control={control}
            rules={{ required: required }}
        />
    )
}