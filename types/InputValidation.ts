type InputValidation = {
    key: string
    isBlank: boolean
    lenghtMin8: boolean
    confirmPassword?: boolean
    hasError: boolean
    value: string
    emailTaken?: boolean
    usernameTaken?: boolean
    errorMessage?: string
}
