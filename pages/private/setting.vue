<script lang="ts" setup>
import FrontBreadcrumbComponent from "~/components/breadcrumbs/FrontBreadcrumbComponent.vue";
import UseFetchWithToken from "~/composables/useFetchWithToken";
import UserForm from "~/components/pages/private/forms/UserForm.vue";
import LoadingComponent from "~/components/LoadingComponent.vue";

definePageMeta({
    pageTransition: {name: 'page', mode: 'out-in'},
    title: 'Page des paramètres des utilisateurs connectés',
    layout: "private",
})

const userId = ref('')
const subscriptionRenewal = ref('')
const loading = ref(false)

try {
    loading.value = true
    const {data, error} = await UseFetchWithToken<any>('/api/protected/setting', {
        method: 'GET',
    });

    if (data.value) {
        console.log('data.value', data.value)
        subscriptionRenewal.value = data.value.subscriptionRenewal;
        userId.value = data.value.userId
    }

    if (error.value) {
        console.log('error.value', error.value)
        // throw error.value
    }
} catch (e) {
    console.log('e', e)
} finally {
    loading.value = false
}


//


</script>

<template>
    <div class="px-4 pt-6">
        <LoadingComponent v-if="loading"/>
        <div class="grid grid-cols-1 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
            <div class="mb-4 col-span-full xl:mb-2">
                <FrontBreadcrumbComponent/>
                <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">Parametre de
                    l'utilisateur</h1>
            </div>
            <div v-if="subscriptionRenewal" class="col-span-2">
                <div
                    class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                    <div class="flow-root">
                        <h3 class="text-xl font-semibold dark:text-white">Liste des abonnements</h3>
                        <ul class="divide-y divide-gray-200 dark:divide-gray-700">
                            <li class="py-4">
                                <div class="flex items-center space-x-4">
                                    <div class="flex-shrink-0">
                                        <svg class="w-6 h-6 dark:text-white" fill="none" stroke="currentColor"
                                             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2"></path>
                                        </svg>
                                    </div>
                                    <div class="flex-1 min-w-0">
                                        <p class="text-base font-semibold text-gray-900 truncate dark:text-white">
                                            Abonnement au Réseau Parole Honneur
                                        </p>
                                        <p class="text-sm font-normal text-gray-500 truncate dark:text-gray-400">
                                            20,00 € par mois
                                        </p>
                                        <p class="text-sm font-normal text-gray-500 truncate dark:text-gray-400">
                                            Le renouvellement de votre abonnement est prévu pour le <strong>{{
                                                subscriptionRenewal
                                            }}</strong>.
                                        </p>
                                    </div>
                                    <div class="inline-flex items-center">
                                        <a class="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-indigo-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                           href="#">Annuler
                                            le plan
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <UserForm :userId="userId"/>
    </div>

</template>

<style scoped>

</style>
