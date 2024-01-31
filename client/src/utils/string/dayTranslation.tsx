export default function DayTranslation(day: string, languageToTranslate: "fr" | "us"): string {
    let d;
    if(languageToTranslate === "fr") {
        switch (day.toLowerCase()) {
            case "monday":
                d = "lundi"
                break;
            case "tuesday":
                d = "mardi"
                break;
            case "wednesday":
                d = "mercredi"
                break;
            case "thursday":
                d = "jeudi"
                break;
            case "friday":
                d = "vendredi"
                break;
            case "saturday":
                d = "samedi"
                break;
            case "sunday":
                d = "dimanche"
                break;
            default:
                d = "";
                break;
        }
    } else {
        switch (day.toLowerCase()) {
            case "lundi":
                d = "monday"
                break;
            case "mardi":
                d = "tuesday"
                break;
            case "mercredi":
                d = "wednesday"
                break;
            case "jeudi":
                d = "thursday"
                break;
            case "vendredi":
                d = "friday"
                break;
            case "samedi":
                d = "saturday"
                break;
            case "dimanche":
                d = "sunday"
                break;
            default:
                d = "";
                break;
        }
    }

    return d;
}