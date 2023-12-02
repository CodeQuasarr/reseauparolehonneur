export const validateFirstName = (value: any) => {
        // if the field is empty
        if (!value) { return "Le nom est requis"; }
        // if the field is not a valid name
        if (!(value && value.length <= 255 && value.length > 2)) { return 'Le nom doit contenir au moins 3 caractères'; }
        return true;
    }

export const validateLastName = (value: any) => {
        // if the field is empty
        if (!value) { return "Le prénom est requis"; }
        // if the field is not a valid name
        if (!(value && value.length <= 255 && value.length > 2)) { return 'Le prénom doit contenir au moins 3 caractères'; }
        return true;
    }

export const validateEmail = (value: any) => {
        // if the field is empty
        if (!value) { return "L'adresse email est requise"; }
        // if the field is not a valid email
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (!regex.test(value)) { return "L'adresse email n'est pas valide"; }
        return true;
    }



export const validatePassword = (value: any) => {
        // regex password special characters
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
        // if the field is empty
        if (!value) { return "Le mot de passe est requis"; }
        // if the field is not a valid password
        if (!(value && value.length <= 255 && value.length > 6)) { return 'Le mot de passe doit contenir au moins 7 caractères'; }
        // if the field is not a valid password
        if (!regex.test(value)) { return 'Le mot de passe doit contenir au moins 1 majuscule, 1 chiffre et 1 caractère spécial'; }
        return true;
    }

export const validateConfirmedPassword = (value: any) => {
        // regex password special characters
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
        // if the field is empty
        if (!value) { return "Le mot de passe est requis"; }
        // if the field is not a valid password
        if (!(value && value.length <= 255 && value.length > 6)) { return 'Le mot de passe doit contenir au moins 7 caractères'; }
        // if the field is not a valid password
        if (!regex.test(value)) { return 'Le mot de passe doit contenir au moins 1 majuscule, 1 chiffre et 1 caractère spécial'; }
        return true;
    }


export const validatePhone = (value: any) => {
        // if the field is empty
        if (!value) { return "Le numéro de téléphone est requis"; }
        // if the field is not a valid phone number
        if (!(value && value.length <= 255 && value.length > 2)) { return 'Le numéro de téléphone doit contenir au moins 3 caractères'; }
        return true;
    }

export const validateAddress = (value: any) => {
        // if the field is not a valid address
        if ((value && value.length <= 255 && value.length > 2)) { return 'L\'adresse doit contenir au moins 3 caractères'; }
        return true;
    }

export const validateAddressNum = (value: any) => {
        // if the field is empty
        // if (!value) { return "Le numéro de rue est requis"; }
        // if the field is not a valid address number
        return true;
    }

export const validatePostalCode = (value: any) => {
        // if the field is empty
        // if (!value) { return "Le code postal est requis"; }
        // if the field is not a valid zip code
        return true;
    }

export const validateBirthday = (value: string) => {
        // if the field is empty
        // if (!value) { return "La date de naissance est requise"; }
        // if the field is not a valid birthday
        return true;
    }

export const validateContractStartDate = (value: string) => {
        // if the field is empty
        if (!value) { return "La date de début de contrat est requise"; }
        // if the field is not a valid contract start date
        return true;
    }

export const validateNationality = (value: string) => {
        // if the field is empty
        if (!value) { return "La nationalité est requise"; }
        // if the field is not a valid
        return true
    }

export const validateContractType = (value: string) => {
        // if the field is empty
        if (!value) { return "Le type de contrat est requis"; }
        // if the field is not a valid
        return true
    }

export const validateTerms = (value: any) => {
        if (!value) {
            return 'Vous devez accepter les termes et conditions';
        }
        return true;
    }

export const isHexadecimalString = (value: string): boolean => {
    const regex = /^[0-9a-fA-F]{24}$/;
    return regex.test(value);
}

