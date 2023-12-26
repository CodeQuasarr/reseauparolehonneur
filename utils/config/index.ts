import {toast} from "vue3-toastify";

//************************* Toastify *************************//
export function notifySuccess(message: string) {
    toast.success(message, {
        position: 'top-center',
        closeOnClick: true,
        pauseOnFocusLoss: true,
    });
}

export function notifyError(message: string) {
    toast.error(message, {
        position: 'top-center',
        closeOnClick: true,
        pauseOnFocusLoss: true,
    });
}

export function convertDateToString(date: string) {
    return date.split('T')[0];
}

export function convertDate(charDate: string): string {
    const date = new Date(charDate);

    // Options de formatage pour la date
    const options: any = { day: 'numeric', month: 'short', year: 'numeric' };

    // Formater la date en utilisant les options
    return date.toLocaleDateString('fr-FR', options);
}

export function convertHour(hour: string): string {
    // Diviser l'heure en heures et minutes
    const [heures, minutes] = hour.split(':').map(Number);

    // Vérifier si les heures et les minutes sont valides
    if (isNaN(heures) || isNaN(minutes) || heures < 0 || heures > 23 || minutes < 0 || minutes > 59) {
        throw new Error("Format d'heure invalide");
    }

    // Formater l'heure en utilisant la chaîne de format
    return `${heures}h${minutes}min`;
}


export function truncateText(input: string, maxLength: number): string {
    if (input.length <= maxLength) {
        return input;
    } else {
        return input.substring(0, maxLength) + '...';
    }
}


export const languages = [
    { value: 'de', name: 'Deutsch' },
    { value: 'en', name: 'English' },
    { value: 'es', name: 'Español' },
    { value: 'fr', name: 'Français' },
    { value: 'it', name: 'Italiano' },
    { value: 'pt', name: 'Português' },
    { value: 'ru', name: 'Русский'},
];

export const roles = [
    { value: 'USER',        name: 'UTILISATEUR' },
    { value: 'REDACTOR',    name: 'REDACTEUR' },
    { value: 'SPEAKER',    name: 'INTERVENANT' },
    { value: 'COLLABORATOR',name: 'COLLABORATEUR' },
    { value: 'ADMIN',       name: 'ADMIN' },
];

