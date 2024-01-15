<script setup lang="ts">
import FrontBreadcrumbComponent from "~/components/breadcrumbs/FrontBreadcrumbComponent.vue";
import {Form, Field, ErrorMessage} from "vee-validate";
import {notifyError} from "~/utils/config";

definePageMeta({
    pageTransition: {name: 'page', mode: 'out-in'},
    title: 'Créer un nouveau évenement  ',
    layout: "private",
})

const loading = ref(false);
const errors = ref(null);
const evenement = ref({
    title: '',
    content: '',
    startDate: '',
    startTime: '',
    address: '',
    picture: null as string | ArrayBuffer | null,
});

const handleFileUpload = (event: { target: { files: any[]; }; }) => {
    if (!event.target.files.length) return;
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

const updateInformation = async () => {
    try {
        loading.value = true
        const {data, error} = await useFetchWithToken<any>('/api/protected/events', {
            method: 'POST',
            body: evenement.value
        });
        if (data.value) {
            await useRouter().push(`/private/events/${data.value.id}`)
        }
        if (error.value) {
            notifyError('Erreur lors de la création de l\'évenement')
        }
    } catch (e) {
    } finally {
        loading.value = false
    }
}
</script>

<template>
    <div class="px-4 pt-6">
        <div>
            <div class="mb-4 col-span-full xl:mb-2">
                <FrontBreadcrumbComponent />
                <div class="w-full flex items-center justify-between px-4">
                    <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">Nouveau utilisateur</h1>
                </div>
                <div v-if="errors" class="px-4 pt-6">
                    <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                         role="alert">
                        <ul>
                            <li v-for="(error, field) in errors" :key="field">
                                <span class="font-medium">{{ error }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- Right Content -->
            <div class="relative w-full">
                <LoadingComponent v-if="loading"/>
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
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
