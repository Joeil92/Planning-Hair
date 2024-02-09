import Container from "@PH/components/ui-components/container/container";
import FlexContainer from "@PH/components/ui-components/flexContainer/flexContainer";
import Entity from "@PH/components/ui-components/form/entity/entity";
import Search from "@PH/components/ui-components/form/search/search";
import Submit from "@PH/components/ui-components/form/submit/submit";
import { useForm } from "react-hook-form"

interface SearchFormInputs {
    category: number | null
    search: string
}

export default function SearchForm() {
    const { control, handleSubmit, formState: { errors } } = useForm<SearchFormInputs>({
        defaultValues: {
            category: null,
            search: ""
        }
    });

    const onSubmit = async (data: SearchFormInputs) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FlexContainer items="center" justify="center" className="bg-gray-100 pb-6">
                <FlexContainer items="center" justify="center" gap={4} className="bg-white p-3 rounded">
                    <Entity
                        name="category"
                        placeholder="Que recherchez-vous ?"
                        endpoint="categories"
                        optionValue="name"
                        control={control}
                        errors={errors.category}
                    />
                    <Search
                        name="search"
                        placeholder="Où ça chef ?"
                        control={control}
                        errors={errors.search}
                    />
                    <Submit value="Rechercher" />
                </FlexContainer>
            </FlexContainer>
        </form>
    )
}