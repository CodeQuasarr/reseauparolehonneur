<script setup lang="ts">
import FrontBreadcrumbComponent from "~/components/breadcrumbs/FrontBreadcrumbComponent.vue";
import UseFetchWithToken from "~/composables/useFetchWithToken";

definePageMeta({
    pageTransition: {name: 'page', mode: 'out-in'},
    title: 'Page des paramètres des utilisateurs connectés',
    layout: "private",
})
const {data, error} = await UseFetchWithToken<any>('/api/protected/setting', {
    method: 'GET',
});

console.log("data, date", data.value)
console.log("error, error", error.value)


</script>

<template>
    <div class="grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
        <div class="mb-4 col-span-full xl:mb-2">
            <FrontBreadcrumbComponent />
            <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">Parametre de l'utilisateur</h1>
        </div>
        <!-- Right Content -->
<!--        <div class="col-span-full xl:col-auto">-->
<!--            <div class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">-->
<!--                <div class="flow-root">-->
<!--                    <h3 class="text-xl font-semibold dark:text-white">Other accounts</h3>-->
<!--                    <ul class="mb-6 divide-y divide-gray-200 dark:divide-gray-700">-->
<!--                        <li class="py-4">-->
<!--                            <div class="flex justify-between xl:block 2xl:flex align-center 2xl:space-x-4">-->
<!--                                <div class="flex space-x-4 xl:mb-4 2xl:mb-0">-->
<!--                                    <div>-->
<!--                                        <img class="w-6 h-6 rounded-full" src="/images/users/bonnie-green.png" alt="Bonnie image">-->
<!--                                    </div>-->
<!--                                    <div class="flex-1 min-w-0">-->
<!--                                        <p class="text-base font-semibold text-gray-900 leading-none truncate mb-0.5 dark:text-white">-->
<!--                                            Bonnie Green-->
<!--                                        </p>-->
<!--                                        <p class="mb-1 text-sm font-normal truncate text-indigo-700 dark:text-indigo-500">-->
<!--                                            New York, USA-->
<!--                                        </p>-->
<!--                                        <p class="text-xs font-medium text-gray-500 dark:text-gray-400">-->
<!--                                            Last seen: 1 min ago-->
<!--                                        </p>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="inline-flex items-center w-auto xl:w-full 2xl:w-auto">-->
<!--                                    <a href="#" class="w-full px-3 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-indigo-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Disconnect</a>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </li>-->
<!--                        <li class="py-4">-->
<!--                            <div class="flex justify-between xl:block 2xl:flex align-center 2xl:space-x-4">-->
<!--                                <div class="flex space-x-4 xl:mb-4 2xl:mb-0">-->
<!--                                    <div>-->
<!--                                        <img class="w-6 h-6 rounded-full" src="/images/users/jese-leos.png" alt="Jese image">-->
<!--                                    </div>-->
<!--                                    <div class="flex-1 min-w-0">-->
<!--                                        <p class="text-base font-semibold text-gray-900 leading-none truncate mb-0.5 dark:text-white">-->
<!--                                            Jese Leos-->
<!--                                        </p>-->
<!--                                        <p class="mb-1 text-sm font-normal truncate text-indigo-700 dark:text-indigo-500">-->
<!--                                            California, USA-->
<!--                                        </p>-->
<!--                                        <p class="text-xs font-medium text-gray-500 dark:text-gray-400">-->
<!--                                            Last seen: 2 min ago-->
<!--                                        </p>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="inline-flex items-center w-auto xl:w-full 2xl:w-auto">-->
<!--                                    <a href="#" class="w-full px-3 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-indigo-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Disconnect</a>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </li>-->
<!--                        <li class="py-4">-->
<!--                            <div class="flex justify-between xl:block 2xl:flex align-center 2xl:space-x-4">-->
<!--                                <div class="flex space-x-4 xl:mb-4 2xl:mb-0">-->
<!--                                    <div>-->
<!--                                        <img class="w-6 h-6 rounded-full" src="/images/users/thomas-lean.png" alt="Thomas image">-->
<!--                                    </div>-->
<!--                                    <div class="flex-1 min-w-0">-->
<!--                                        <p class="text-base font-semibold text-gray-900 leading-none truncate mb-0.5 dark:text-white">-->
<!--                                            Thomas Lean-->
<!--                                        </p>-->
<!--                                        <p class="mb-1 text-sm font-normal truncate text-indigo-700 dark:text-indigo-500">-->
<!--                                            Texas, USA-->
<!--                                        </p>-->
<!--                                        <p class="text-xs font-medium text-gray-500 dark:text-gray-400">-->
<!--                                            Last seen: 1 hour ago-->
<!--                                        </p>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="inline-flex items-center w-auto xl:w-full 2xl:w-auto">-->
<!--                                    <a href="#" class="w-full px-3 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-indigo-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Disconnect</a>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </li>-->
<!--                        <li class="pt-4">-->
<!--                            <div class="flex justify-between xl:block 2xl:flex align-center 2xl:space-x-4">-->
<!--                                <div class="flex space-x-4 xl:mb-4 2xl:mb-0">-->
<!--                                    <div>-->
<!--                                        <img class="w-6 h-6 rounded-full" src="/images/users/lana-byrd.png" alt="Lana image">-->
<!--                                    </div>-->
<!--                                    <div class="flex-1 min-w-0">-->
<!--                                        <p class="text-base font-semibold text-gray-900 leading-none truncate mb-0.5 dark:text-white">-->
<!--                                            Lana Byrd-->
<!--                                        </p>-->
<!--                                        <p class="mb-1 text-sm font-normal truncate text-indigo-700 dark:text-indigo-500">-->
<!--                                            Texas, USA-->
<!--                                        </p>-->
<!--                                        <p class="text-xs font-medium text-gray-500 dark:text-gray-400">-->
<!--                                            Last seen: 1 hour ago-->
<!--                                        </p>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="inline-flex items-center w-auto xl:w-full 2xl:w-auto">-->
<!--                                    <a href="#" class="w-full px-3 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-indigo-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Disconnect</a>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </li>-->
<!--                    </ul>-->
<!--                    <div>-->
<!--                        <button class="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Save all</button>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
        <div class="col-span-2">
            <div class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                <div class="flow-root">
                    <h3 class="text-xl font-semibold dark:text-white">Liste des abonnements</h3>
                    <ul class="divide-y divide-gray-200 dark:divide-gray-700">
                        <li class="py-4">
                            <div class="flex items-center space-x-4">
                                <div class="flex-shrink-0">
                                    <svg class="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </div>
                                <div class="flex-1 min-w-0">
                                    <p class="text-base font-semibold text-gray-900 truncate dark:text-white">
                                        Abonnement au Réseau Parole Honneur
                                    </p>
                                    <p class="text-sm font-normal text-gray-500 truncate dark:text-gray-400">
                                        20,00 € par mois
                                    </p>
                                    <p class="text-sm font-normal text-gray-500 truncate dark:text-gray-400">
                                        Votre abonnement sera renouvelé le 12 janvier 2024.
                                    </p>
                                </div>
                                <div class="inline-flex items-center">
                                    <a href="#" class="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-indigo-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Annuler le plan
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>

</style>
