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

// definePageMeta({
//     pageTransition: { name: 'page', mode: 'out-in' },
//     title: 'Créer un nouveau utilisateur ',
//     auth: true,
//     layout: "private",
// })
//---------------------------------- Variables ----------------------------------//

const appUrl: string = useRuntimeConfig().public.baseUrl;
const route = useRoute()
const props = defineProps({
    userId: {
        type: String,
        required: false,
    },
});
const loading = ref(false)
const userStore = useUserStore();
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

console.log('userStore.isAdmin', props.userId)
const {data, error} = await UseFetchWithToken<any>(`/api/protected/users/${props.userId}`, {
    method: 'GET',
});

if (error.value) {

}
if (data.value) {
    user.value = data.value
}


let message = ref(null);
const sumbit = ref(false)

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
    <div>
        <div class="mb-4 col-span-full xl:mb-2">
            <div v-if="errors && errors?.size"
                 class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3" role="alert">
                <ul class="block sm:inline">
                    <li v-for="[key, value] in errors">
                        {{ value.message }}
                    </li>
                </ul>
            </div>

        </div>
        <!-- Right Content -->
        <div class="relative">
            <LoadingComponent v-if="loading" />
            <Form  @submit="updateInformation()">
                <div class="grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
                    <div class="col-span-full xl:col-auto">
                        <div class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                            <div class="items-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
                                <img class="mb-4 rounded-lg w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0" :src="`${appUrl}/_nuxt/assets/images/users/${user.avatar}`" :alt="user.lastName">
                                <div>
                                    <h3 class="mb-1 text-xl font-bold text-gray-900 dark:text-white">Photo de profil</h3>
                                    <div class="mb-4 text-sm text-gray-500 dark:text-gray-400">
                                        JPG, GIF or PNG. Taille maximale de 800K
                                    </div>
                                    <div class="flex items-center space-x-4">
                                        <Field
                                            id="user_avatar"
                                            aria-describedby="user_avatar_help"
                                            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                                            name="upload"
                                            type="file"
                                            @change="handleFileUpload"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                            <h3 class="mb-4 text-xl font-semibold dark:text-white">Langue</h3>
                            <div class="mb-4">
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="settings-language_1">Selectionner la langue courante</label>
                                <FwbSelect
                                    v-model="user.language_1"
                                    :options="LANGUAGES"
                                    class="bg-gray-50 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                                    name="settings-language_1"
                                />
                            </div>
                            <div class="mb-6">
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="settings-language_2">Selectionner deuxième langue</label>
                                <FwbSelect
                                    v-model="user.language_2"
                                    :options="LANGUAGES"
                                    class="bg-gray-50 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                                    name="settings-language_2"
                                />
                            </div>
                        </div>
                        <div class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                            <div class="flow-root">
                                <h3 class="text-xl font-semibold dark:text-white">Biographie</h3>
                                <Field
                                    id="message"
                                    v-model="user.description"
                                    as="textarea"
                                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    name="message"
                                    placeholder="Write your thoughts here..."
                                    rows="4"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="col-span-2">
                        <div class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                            <h3 class="mb-4 text-xl font-semibold dark:text-white">Information General</h3>
                            <div>
                                <div class="grid grid-cols-6 gap-6">
                                    <div class="col-span-6 sm:col-span-3">
                                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="first-name">Nom</label>
                                        <Field
                                            id="first-name"
                                            v-model="user.lastName"
                                            :rules="validateLastName"
                                            :class="!userStore.isAdmin ? 'bg-gray-200' : 'bg-gray-50'"
                                            class="shadow-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                                            name="first-name"
                                            placeholder="Nom"
                                            required
                                            type="text"
                                            :disabled="!userStore.isAdmin"
                                        />
                                        <ErrorMessage class="text-red-500" name="first-name"/>
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="last-name">Prénom</label>
                                        <Field
                                            id="last-name"
                                            v-model="user.firstName"
                                            :rules="validateFirstName"
                                            :class="!userStore.isAdmin ? 'bg-gray-200' : 'bg-gray-50'"
                                            class="shadow-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                                            name="last-name"
                                            placeholder="Prénom"
                                            required
                                            type="text"
                                            :disabled="!userStore.isAdmin"
                                        />
                                        <ErrorMessage class="text-red-500" name="last-name"/>
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="country">Pays</label>
                                        <Field
                                            id="country"
                                            v-model="user.country"
                                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                                            name="country"
                                            placeholder="Pays"
                                            required
                                            type="text"
                                        />
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="city">Ville</label>
                                        <Field
                                            id="city"
                                            v-model="user.city"
                                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                                            name="city"
                                            placeholder="Ville"
                                            required
                                            type="text"
                                        />
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                               for="address">Adresse</label>
                                        <Field
                                            id="address"
                                            v-model="user.address"
                                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                                            name="address"
                                            placeholder="Adresse"
                                            required
                                            type="text"
                                        />
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="email">Email</label>
                                        <Field
                                            id="email"
                                            v-model="user.email"
                                            :rules="validateEmail"
                                            :class="!userStore.isAdmin ? 'bg-gray-200' : 'bg-gray-50'"
                                            class="shadow-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                                            name="email"
                                            placeholder="Email"
                                            required
                                            type="email"
                                            :disabled="!userStore.isAdmin"
                                        />
                                        <ErrorMessage class="text-red-500" name="email"/>
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="phone-number">Numéro de téléphone</label>
                                        <Field
                                            id="phone-number"
                                            v-model="user.phone"
                                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                                            name="phone-number"
                                            placeholder="+33 7 87 78 87 78"
                                            required
                                            type="text"
                                        />
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="birthday">Anniversaire</label>
                                        <Field
                                            id="birthday"
                                            v-model="user.birthDate"
                                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                                            name="birthday"
                                            required
                                            type="date"
                                        />
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="organization">Métier actuel</label>
                                        <Field
                                            id="organization"
                                            v-model="user.job"
                                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                                            name="organization"
                                            placeholder="Métier"
                                            required
                                            type="text"
                                        />
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="role">Role</label>
                                        <Field
                                            id="settings-timezone"
                                            v-model="user.role"
                                            :disabled="!userStore.isAdmin"
                                            as="select"
                                            :class="!userStore.isAdmin ? 'bg-gray-200' : 'bg-gray-50'"
                                            class="border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                                            name="countries">
                                            <option v-for="role in ROLES" :key="role.value" :value="role.value"> {{ role.name }} </option>

                                        </Field>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                            <h3 class="mb-4 text-xl font-semibold dark:text-white">Informations sur le mot de passe</h3>
                            <div>
                                <div class="grid grid-cols-6 gap-6">
                                    <div class="col-span-6 sm:col-span-3">
                                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="password">Nouveau mot de passe</label>
                                        <Field
                                            id="password"
                                            v-model="user.password"
                                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                                            name="password"
                                            placeholder="••••••••"
                                            required
                                            type="password"
                                        />
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="confirm-password">Confirmer le mot de passe</label>
                                        <Field
                                            id="confirm-password"
                                            v-model="user.confirmPassword"
                                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                                            name="confirm-password"
                                            placeholder="••••••••"
                                            required
                                            type="password"
                                        />
                                    </div>
                                    <div class="col-span-6 sm:col-full">
                                        <button @click="sumbit" type="submit" class="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800" >Tout Enrégistrer</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        </div>
    </div>
</template>

<style scoped>

</style>
