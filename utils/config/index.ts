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

