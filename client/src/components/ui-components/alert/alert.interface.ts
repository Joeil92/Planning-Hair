export default interface Alert {
    type: "primary" | "success" | "danger" | "warning"
    message: string
}