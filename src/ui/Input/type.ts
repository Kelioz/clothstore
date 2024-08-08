

export type Props = {
    inputSize?: `${InputSize}`
    id?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    placeHolder?: string
    type?: string
}

enum InputSize {
    default = "default",
    large = "large"
}
