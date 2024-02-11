export interface Company {
    id: number
    name: string
    address: string
    description?: string
    working_days: string[]
    working_hour_start_morning_monday: string
    working_hour_end_afternoon_monday: string
    working_hour_start_morning_tuesday: string
    working_hour_end_afternoon_tuesday: string
    working_hour_start_morning_wednesday: string
    working_hour_end_afternoon_wednesday: string       
}