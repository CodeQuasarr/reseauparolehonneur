<script lang="ts" setup>
import {convertDateToString, truncateText} from "~/utils/config";
import FrontBreadcrumbComponent from "~/components/breadcrumbs/FrontBreadcrumbComponent.vue";

definePageMeta({
    pageTransition: {name: 'page', mode: 'out-in'},
    title: 'Private',
    auth: true,
    layout: 'private'
})

const appUrl: string = useRuntimeConfig().public.baseUrl;
const route = useRoute()
const eventId = route.params.id
const payments = ref([])

const {data, error} = await useFetch<any>(`/api/protected/events/${eventId}/userRegister`, {
    method: 'GET',
})

if (data.value) {
    payments.value = data.value
}

if (error.value) {
    console.log('error.value', error.value)
}
</script>

<template>
    <div>
        <div class="mb-4 col-span-full xl:mb-2">
            <FrontBreadcrumbComponent />
            <div class="w-full flex items-center justify-between px-4">
                <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">Liste des inscrits à
                    l'événement</h1>
                <div class="col-span-6 sm:col-full">
                    <div class="flex items-center justify-end gap-3">
                        <NuxtLink
                            :to="`/private/events`"
                            class="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800" type="submit">Retour
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="payments.length" class="flex flex-col">
            <div class="overflow-x-auto">
                <div class="inline-block min-w-full align-middle">
                    <div class="overflow-hidden shadow">
                        <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
                            <thead class="bg-white dark:bg-gray-700">
                            <tr>
                                <th class="p-4" scope="col">
                                    <div class="flex items-center">
                                        <input id="checkbox-all" aria-describedby="checkbox-1" class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-indigo-300 dark:focus:ring-indigo-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                                               type="checkbox">
                                        <label class="sr-only" for="checkbox-all">checkbox</label>
                                    </div>
                                </th>
                                <th class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                                    scope="col">
                                    Titre
                                </th>
                                <th class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                                    scope="col">
                                    Prix
                                </th>
                                <th class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                                    scope="col">
                                    Date de payement
                                </th>
                                <th class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                                    scope="col">
                                    Inscrit
                                </th>
                                <th class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                                    scope="col">
                                    Statut
                                </th>
                            </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                            <tr v-for="evenement in payments" :key="evenement.id"
                                class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                <td class="w-4 p-4">
                                    <div class="flex items-center">
                                        <input id="checkbox-{{ evenement.id }}" aria-describedby="checkbox-1"
                                               class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-indigo-300 dark:focus:ring-indigo-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                                               type="checkbox">
                                        <label class="sr-only" for="checkbox-{{ evenement.id }}">checkbox</label>
                                    </div>
                                </td>
                                <td class="flex items-center p-4 mr-12 space-x-6 whitespace-nowrap">
                                    <div class="text-sm font-normal text-gray-500 dark:text-gray-400">
                                        <div class="text-base font-semibold text-gray-900 dark:text-white">
                                            {{ truncateText(evenement.event.title, 20) }}
                                        </div>
                                    </div>
                                </td>
                                <td class="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                                    {{ evenement.amount }} €
                                </td>
                                <td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {{ convertDateToString(evenement.startDate) }}
                                </td>
                                <td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {{ evenement.userName }}
                                </td>
                                <td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {{ evenement.status }}
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
