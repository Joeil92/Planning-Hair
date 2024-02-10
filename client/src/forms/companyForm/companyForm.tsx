'use client'
import Container from "@PH/components/ui-components/container/container";
import FlexContainer from "@PH/components/ui-components/flexContainer/flexContainer";
import Checkbox from "@PH/components/ui-components/form/checkbox/checkbox";
import Entity from "@PH/components/ui-components/form/entity/entity";
import Input from "@PH/components/ui-components/form/input/input";
import Submit from "@PH/components/ui-components/form/submit/submit";
import Textarea from "@PH/components/ui-components/form/textarea/textarea";
import Time from "@PH/components/ui-components/form/time/time";
import Typography from "@PH/components/ui-components/typography/typography";
import { authContext } from "@PH/providers/authProvider";
import { Category } from "@PH/types/category.interface";
import DayTranslation from "@PH/utils/string/dayTranslation";
import { useContext } from "react";
import { useForm } from "react-hook-form"

interface CompanyFormInputs {
    name: string
    address: string
    description: string
    category: Category | null
    working_days: string[]
    working_hour_start_morning_monday: string | null
    working_hour_end_morning_monday: string | null
    working_hour_start_afternoon_monday: string | null
    working_hour_end_afternoon_monday: string | null
    working_hour_start_morning_tuesday: string | null
    working_hour_end_morning_tuesday: string | null
    working_hour_start_afternoon_tuesday: string | null
    working_hour_end_afternoon_tuesday: string | null
    working_hour_start_morning_wednesday: string | null
    working_hour_end_morning_wednesday: string | null
    working_hour_start_afternoon_wednesday: string | null
    working_hour_end_afternoon_wednesday: string | null
    working_hour_start_morning_thursday: string | null
    working_hour_end_morning_thursday: string | null
    working_hour_start_afternoon_thursday: string | null
    working_hour_end_afternoon_thursday: string | null 
    working_hour_start_morning_friday: string | null
    working_hour_end_morning_friday: string | null
    working_hour_start_afternoon_friday: string | null
    working_hour_end_afternoon_friday: string | null 
    working_hour_start_morning_saturday: string | null
    working_hour_end_morning_saturday: string | null
    working_hour_start_afternoon_saturday: string | null
    working_hour_end_afternoon_saturday: string | null                  
}

export default function CompanyForm() {
    const { auth } = useContext(authContext);
    const { handleSubmit, control, watch, getValues, setValue, formState: { errors } } = useForm<CompanyFormInputs>({
        defaultValues: {
            name: "Hair'Tic",
            address: "27 Bis Rue du Progrès, 93100 Montreuil",
            description: "",
            category: null,
            working_days: [
                "monday",
                "tuesday",
                "wednesday",
                "thursday",
                "friday"
            ],
            working_hour_start_morning_monday: "08:00", 
            working_hour_end_morning_monday: "13:00", 
            working_hour_start_afternoon_monday: "14:00", 
            working_hour_end_afternoon_monday: "20:00", 
            working_hour_start_morning_tuesday: "08:00", 
            working_hour_end_morning_tuesday: "13:00", 
            working_hour_start_afternoon_tuesday: "14:00", 
            working_hour_end_afternoon_tuesday: "20:00", 
            working_hour_start_morning_wednesday: "", 
            working_hour_end_morning_wednesday: "", 
            working_hour_start_afternoon_wednesday: "13:00", 
            working_hour_end_afternoon_wednesday: "20:00", 
            working_hour_start_morning_thursday: "08:00", 
            working_hour_end_morning_thursday: "13:00", 
            working_hour_start_afternoon_thursday: "14:00", 
            working_hour_end_afternoon_thursday: "20:00",  
            working_hour_start_morning_friday: "08:00", 
            working_hour_end_morning_friday: "13:00", 
            working_hour_start_afternoon_friday: "14:00", 
            working_hour_end_afternoon_friday: "20:00",  
            working_hour_start_morning_saturday: "", 
            working_hour_end_morning_saturday: "", 
            working_hour_start_afternoon_saturday: "", 
            working_hour_end_afternoon_saturday: "",    
        }
    });
    const watchWorkingDays = watch("working_days");

    const onChangeWorkingDays = (e: any) => {
        const days = getValues("working_days");
        const value = e.target.value;
        const index = days.indexOf(value);

        if (index < 0) {
            days.push(value);
        } else {
            days.splice(index, 1);
        }

        setValue("working_days", days);
    }

    const onSubmit = (data: CompanyFormInputs) => {
        console.log(auth);
        
        console.log(data);
    }

    const days = [
        "Lundi",
        "Mardi",
        "Mercredi",
        "Jeudi",
        "Vendredi",
        "Samedi"
    ]

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Typography>Informations générales</Typography>
            <Input
                name="name"
                label="Nom"
                placeholder="Nom"
                required={true}
                control={control}
                errors={errors.name}
            />
            <Input 
                name="address"
                label="Adresse"
                placeholder="Adresse"
                required={true}
                control={control}
                errors={errors.address}
            />
            <Textarea
                name="description"
                label="Description (optionnel)"
                placeholder="Que fait votre entreprise ? Prestation, offre etc..."
                control={control}
                errors={errors.description}
            />
            <Entity 
                name="category"
                label="Catégorie"
                endpoint="categories"
                optionValue="name"
                placeholder="Selectionner une catégorie"
                required={true}
                control={control}
                errors={errors.category}
            />
            <Typography className="my-3">Jours et horaires d'ouverture</Typography>
            {days.map((day, index) => {
                const dayTranslation = DayTranslation(day, "us");
               
                return (
                    <Container className="my-3" key={index}>
                        <Checkbox
                            label={day}
                            name="working_days"
                            onChange={onChangeWorkingDays}
                            checked={watchWorkingDays.includes(dayTranslation)}
                            value={dayTranslation}
                            control={control}
                        />
                        <FlexContainer items="center" justify="between" className="my-3">
                            <Typography>Matin</Typography>
                            <FlexContainer items="center" justify="between" gap={4}>
                                <Time
                                    name={`working_hour_start_morning_${dayTranslation}`}
                                    control={control}
                                    disabled={!watchWorkingDays.includes(dayTranslation)}
                                    errors={undefined}
                                />
                                <Time
                                    name={`working_hour_end_morning_${dayTranslation}`}
                                    control={control}
                                    disabled={!watchWorkingDays.includes(dayTranslation)}
                                    errors={undefined}
                                />
                            </FlexContainer>
                        </FlexContainer>
                        <FlexContainer items="center" justify="between">
                            <Typography className="">Après-midi</Typography>
                            <FlexContainer items="center" justify="between" gap={4}>
                            <Time
                                name={`working_hour_start_afternoon_${dayTranslation}`}
                                control={control}
                                disabled={!watchWorkingDays.includes(dayTranslation)}
                                errors={undefined}
                            />
                            <Time
                                name={`working_hour_end_afternoon_${dayTranslation}`}
                                control={control}
                                disabled={!watchWorkingDays.includes(dayTranslation)}
                                errors={undefined}
                            />
                            </FlexContainer>
                        </FlexContainer>
                    </Container>
                )
            })}
            <Container className="text-center">
                <Submit value="Créer mon entreprise" />
            </Container>
        </form>
    )
}