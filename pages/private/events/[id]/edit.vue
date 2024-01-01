<script setup lang="ts">
import { FwbTab, FwbTabs ,  FwbButton, FwbModal} from 'flowbite-vue'
import {ErrorMessage, Field, Form} from "vee-validate";
import FrontBreadcrumbComponent from "~/components/breadcrumbs/FrontBreadcrumbComponent.vue";
import UseFetchWithToken from "~/composables/useFetchWithToken";
import {notifySuccess, truncateText} from "~/utils/config";
import useErrorMapper from "~/composables/useErrorMapper";
import {convertDateToString} from "~/utils/config";
import type {IUser} from "~/types/IUser";

definePageMeta({
    pageTransition: {name: 'page', mode: 'out-in'},
    title: 'Créer un nouveau évenement  ',
    layout: "private",
})

const appUrl: string = useRuntimeConfig().public.baseUrl;
const route = useRoute()
const activeTab = ref('first')
const loading = ref(false)
const isShowModal = ref(false)
const evenement = ref({
    title: '',
    content: '',
    startDate: '',
    startTime: '',
    address: '',
    users: [] as IUser[],
    picture: null as string | ArrayBuffer | null,
});
const speakers = ref<IUser[]>([])
const errors: Ref<Map<string, { message: InputValidation; }> | undefined> = ref(new Map<string, { message: InputValidation }>());

// Get event
const {data, error} = await UseFetchWithToken<any>(`/api/protected/events/${route.params.id}`, {
    method: 'GET',
});
if (error.value) {
    throw error.value
} else if (data.value) {
    evenement.value = data.value
    evenement.value.startDate = convertDateToString(data.value.startDate)
} else {
    throw {
        statusCode: 404,
        statusMessage: 'La page que vous recherchez n\'existe pas'
    }
}

//---------------------------------- Methods ----------------------------------//

const handleFileUpload = (event: any) => {
    if (event.target.files.length > 0 && evenement.value) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = () => {
            evenement.value.picture = reader.result;
        };

        reader.onerror = (error) => {
            console.error('Erreur lors de la lecture du fichier :', error);
        };
    }
}

const addSpeakerToEvent = async (speaker: any) => {
    evenement.value.users.push(speaker)
    await updateInformation()
}

const deleteSpeakerToEvent = async (speaker: any) => {
    evenement.value.users = evenement.value.users.filter((item: any) => item.id !== speaker.id)
    await updateInformation()
}

const updateInformation = async () => {
    try {
        loading.value = true
        const { data, error } = await UseFetchWithToken<any>(`/api/protected/events/${route.params.id}`, {
            method: 'PUT',
            body: evenement.value
        });

        if (data.value) {
            evenement.value.picture = data.value.picture
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

const getSpeacker = async () => {
    const { data, error } = await UseFetchWithToken<any>(`/api/protected/users/speakers`, {
        method: 'GET',
    });
}

const closeModal = () => {
    isShowModal.value = false
}

const showModal = async () => {
    isShowModal.value = true;
    const {data, error} = await UseFetchWithToken<any>(`/api/protected/users/speakers`, {
        method: 'GET',
    });

    speakers.value = data.value
}

</script>

<template>
    <div class="px-4 pt-6">
        <div>
            <div class="mb-4 col-span-full xl:mb-2">
                <!-- Breadcrumb -->
                <FrontBreadcrumbComponent />

                <!-- TItre de la page -->
                <div class="w-full flex items-center justify-between px-4">
                    <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white"> {{ truncateText(evenement.title, 15) }}</h1>
                </div>

                <!-- Erreurs -->
                <div v-if="errors && errors?.size"
                     class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3" role="alert">
                    <ul class="block sm:inline">
                        <li v-for="[key, value] in errors">
                            {{ value.message }}
                        </li>
                    </ul>
                </div>
            </div>


            <div class="relative w-full">
                <LoadingComponent v-if="loading"/>
                <div>
                    <fwb-tabs v-model="activeTab" variant="underline" class="p-5">

                        <!-- Tab 1 conference -->
                        <fwb-tab name="first" title="Conference">
                            <Form @submit="updateInformation()">
                                <div class="grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
                                    <div class="col-span-full">
                                        <div
                                            class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                                            <h3 class="mb-4 text-xl font-semibold dark:text-white">Information General</h3>
                                            <div>
                                                <div class="grid grid-cols-6 gap-6">
                                                    <div class="col-span-full">
                                                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="title">Titre de la conférence</label>
                                                        <Field
                                                            v-model="evenement.title"
                                                            id="title"
                                                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                                                            name="title"
                                                            placeholder="Titre de la conférence"
                                                            required
                                                            type="text"
                                                        />
                                                        <ErrorMessage class="text-red-500" name="title"/>
                                                    </div>
                                                    <div class="col-span-full sm:col-span-full">
                                                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="content">Sujet traité</label>
                                                        <Field
                                                            v-model="evenement.content"
                                                            id="content"
                                                            as="textarea"
                                                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            name="content"
                                                            placeholder="Sujet"
                                                            rows="4"

                                                        />
                                                        <!--                  341 caractères44 mots                                      <ErrorMessage name="content" class="text-red-500"/>-->
                                                    </div>
                                                    <div class="col-span-6 sm:col-span-3">
                                                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="startDate">Date de début</label>
                                                        <Field
                                                            v-model="evenement.startDate"
                                                            id="startDate"
                                                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                                                            name="startDate"
                                                            required
                                                            type="date"
                                                        />
                                                    </div>
                                                    <div class="col-span-6 sm:col-span-3">
                                                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="startTime">Heure de début</label>
                                                        <Field
                                                            v-model="evenement.startTime"
                                                            id="startTime"
                                                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                                                            name="startTime"
                                                            required
                                                            type="time"
                                                        />
                                                    </div>
                                                    <div class="col-span-full">
                                                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="address">Adresse complet</label>
                                                        <Field
                                                            v-model="evenement.address"
                                                            id="address"
                                                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                                                            name="address"
                                                            required
                                                            type="text"
                                                        />
                                                    </div>

                                                    <div class="col-span-full">
                                                        <Field
                                                            id="user_avatar"
                                                            aria-describedby="user_avatar_help"
                                                            class="block w-full text-sm text-indigo-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
                                                            name="upload"
                                                            type="file"
                                                            @change="handleFileUpload"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="px-4 w-full flex items-center justify-end">
                                    <div class="col-span-6 sm:col-full">
                                        <button
                                            class="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                                            type="submit">Tout Enrégistrer
                                        </button>
                                    </div>
                                    <div class="col-span-6 sm:col-full">
                                        <NuxtLink class="ms-2 text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                                                  to="/private/events"
                                                  type="submit">Retour
                                        </NuxtLink>
                                    </div>
                                </div>
                            </Form>
                        </fwb-tab>

                        <!-- Tab 2 intervenants -->
                        <fwb-tab name="second" title="Les intervenants">
                            <div class="flex items-center justify-end mb-5">
                                <fwb-button @click="showModal" color="light">
                                    Ajouter
                                </fwb-button>

                                <fwb-modal v-if="isShowModal" @close="closeModal">
                                    <template #header>
                                        <div class="flex items-center text-lg">
                                            Liste des intervenants
                                        </div>
                                    </template>
                                    <template #body>
                                        <ul v-if="speakers.length" class="my-4 space-y-3">
                                            <li v-for="speaker in speakers" :key="speaker.lastName">
                                                <div class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                                    <img class="w-10 h-10 rounded-full" :src="`${appUrl}/_nuxt/assets/images/users/${speaker.avatar}`" :alt="speaker.lastName">
                                                    <span class="flex-1 ms-3 whitespace-nowrap">{{ speaker.lastName }} {{ speaker.firstName }}</span>
                                                    <button @click="addSpeakerToEvent(speaker)" class="inline-flex items-center justify-center p-3 ms-3 text-xs font-medium text-gray-500 bg-gray-300 hover:bg-gray-200 rounded">
                                                        <Icon name="material-symbols:push-pin-outline" class="w-6 h-6 text-yellow-400" />
                                                    </button>
                                                </div>
                                            </li>
                                        </ul>
                                        <div v-if="!speakers.length" class="text-center mt-10">
                                            <h2 class="text-sm text-gray-400">Aucun contenu</h2>
                                            <Icon name="fluent-emoji-high-contrast:crying-face" class="w-24 h-24 text-gray-400 my-5" />
                                            <h3 class="text-sm text-gray-400">Aller sur la page des utilisateurs et créer un utilisateur avec le rôle "INTERVENANT"</h3>
                                        </div>
                                    </template>
                                    <template #footer>
                                        <div class="flex justify-between">
                                            <fwb-button @click="closeModal" color="alternative">
                                                Fermer
                                            </fwb-button>
                                        </div>
                                    </template>
                                </fwb-modal>
                            </div>

                            <div v-if="evenement.users.length" class="flex flex-col">
                                <div class="overflow-x-auto">
                                    <div class="inline-block min-w-full align-middle">
                                        <div class="overflow-hidden shadow">
                                            <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
                                                <thead class="bg-white dark:bg-gray-700">
                                                <tr>
                                                    <th scope="col" class="p-4">
                                                        <div class="flex items-center">
                                                            <input id="checkbox-all" aria-describedby="checkbox-1" type="checkbox" class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-indigo-300 dark:focus:ring-indigo-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600">
                                                            <label for="checkbox-all" class="sr-only">checkbox</label>
                                                        </div>
                                                    </th>
                                                    <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                        Nom
                                                    </th>
                                                    <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                        Actions
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                                <tr v-for="speaker in evenement.users" :key="speaker.id" class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                    <td class="w-4 p-4">
                                                        <div class="flex items-center">
                                                            <input id="checkbox-{{ speaker.id }}" aria-describedby="checkbox-1" type="checkbox" class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-indigo-300 dark:focus:ring-indigo-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600">
                                                            <label for="checkbox-{{ speaker.id }}" class="sr-only">checkbox</label>

                                                        </div>
                                                    </td>
                                                    <td class="flex items-center p-4 mr-12 space-x-6 whitespace-nowrap">
                                                        <img class="w-10 h-10 rounded-full" :src="`${appUrl}/_nuxt/assets/images/users/${speaker.avatar}`" :alt="speaker.lastName">
                                                        <div class="text-sm font-normal text-gray-500 dark:text-gray-400">
                                                            <div class="text-base font-semibold text-gray-900 dark:text-white">{{ speaker.lastName }} {{ speaker.firstName }}</div>
                                                        </div>
                                                    </td>
                                                    <td class="p-4 space-x-2 whitespace-nowrap">
                                                        <button @click="deleteSpeakerToEvent(speaker)" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
                                                            <Icon name="material-symbols:delete-outline-sharp" class="w-5 h-5" />
                                                        </button>
                                                    </td>
                                                </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div v-if="!evenement.users.length" class="text-center mt-10">
                                <h2 class="text-sm text-gray-400">Aucun contenu</h2>
                                <Icon name="fluent-emoji-high-contrast:crying-face" class="w-24 h-24 text-gray-400 my-5" />
                                <h3 class="text-sm text-gray-400">Commencez par cliquer sur les boutons en haut à droite ( ajouter )</h3>
                            </div>
                        </fwb-tab>
                    </fwb-tabs>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>

</style>
