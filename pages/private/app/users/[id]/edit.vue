<script lang="ts" setup>
import {FwbSelect} from 'flowbite-vue'
import {ErrorMessage, Field, Form} from "vee-validate"
import { validateConfirmedPassword, validateEmail, validateFirstName, validateLastName, validatePassword } from "~/utils/config/formValidationsRules";
import UseFetchWithToken from "~/composables/useFetchWithToken";

import {LANGUAGES, ROLES} from "~/utils/statics/static-filter-data";
import LoadingComponent from "~/components/LoadingComponent.vue";
import useErrorMapper from "~/composables/useErrorMapper";
import {notifySuccess} from "~/utils/config";
import FrontBreadcrumbComponent from "~/components/breadcrumbs/FrontBreadcrumbComponent.vue";
import UserForm from "~/components/pages/private/forms/UserForm.vue";

definePageMeta({
    pageTransition: { name: 'page', mode: 'out-in' },
    title: 'Créer un nouveau utilisateur ',
    auth: true,
    layout: "private",
})
//---------------------------------- Variables ----------------------------------//
const route = useRoute()
const user = ref({
    role: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    birthDate: null,
    job: '',
    description: '',
    address: '',
    city: '',
    country: '',
    phone: '',
    avatar: null as string | ArrayBuffer | null,
    language_1: '',
    language_2: '',
});


const {data, error} = await UseFetchWithToken<any>(`/api/protected/users/${route.params.id}`, {
    method: 'GET',
});
if (error.value) {

}
if (data.value) {
    user.value = data.value
}


let currentImage =`~/assets/images/users/${user.value.avatar}`;
let birthDate = ref(null);



let message = ref(null);
const sumbit = ref(false)
let loading = ref(false)

//---------------------------------- Methods ----------------------------------//

const handleFileUpload = (event: any) => {
    if (event.target.files.length > 0 && user.value) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = () => {
            user.value.avatar = reader.result;
        };

        reader.onerror = (error) => {
            console.error('Erreur lors de la lecture du fichier :', error);
        };
    }
}



const errors: Ref<Map<string, { message: InputValidation; }> | undefined> = ref(new Map<string, { message: InputValidation }>());
const updateInformation = async () => {


    try {
        loading.value = true
        const { data, error } = await UseFetchWithToken<any>(`/api/protected/users/${route.params.id}`, {
            method: 'PUT',
            body: user.value
        });



        if (data.value) {
            user.value.avatar = data.value.avatar
            notifySuccess('Utilisateur modifié avec succès')
        }

        if (error.value) {
            errors.value = useErrorMapper(error.value.data.data).errors
        }
    } catch (e) {

    } finally {
        loading.value = false
    }
}


</script>

<template>
    <div class="px-4 pt-6">
        <div class="mb-4 col-span-full xl:mb-2">
            <FrontBreadcrumbComponent />
            <div class="w-full flex items-center justify-between">
                <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">Nouveau utilisateur</h1>
                <div class="col-span-6 sm:col-full">
                    <NuxtLink class="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800" to="/private/users" type="submit">Retour</NuxtLink>
                </div>
            </div>
        </div>
        <UserForm :userID="route.params.id" />
    </div>
</template>

<style scoped>

</style>
