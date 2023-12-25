<script setup lang="ts">
import {FwbSelect} from 'flowbite-vue'
import UseFetchWithToken from "~/composables/useFetchWithToken";
import type {IUser} from "~/types/IUser";
import {ROLES, STATUS} from "~/utils/statics/static-filter-data";
import {notifySuccess} from "~/utils/config";
import {VueAwesomePaginate} from "vue-awesome-paginate";
import FrontBreadcrumbComponent from "~/components/breadcrumbs/FrontBreadcrumbComponent.vue";


definePageMeta({
    pageTransition: { name: 'page', mode: 'out-in' },
    title: 'Private',
    auth: true,
    layout: 'private'
})

const appUrl: string = useRuntimeConfig().public.baseUrl;
const users = ref<IUser[]>([]);
const currentUserId = ref<string>('')
const openFilter = ref<boolean>(true);

const perPage = ref<number>(5)
const usersCount = ref<number>(0)
const pagesCount = ref<number>(0)
const currentPage = ref<number>(1)

const search = ref<string>('')
const status = ref<string>('')
const role = ref<string>('')

const toggleOpenFilter = () => { openFilter.value = !openFilter.value; };

const initFilters = () => {
    currentPage.value = 1
    search.value = ''
    status.value = ''
    role.value = ''
}

watch([currentPage, search, status, role], async ([newPage, newSearch, newStatus, newRole]) => {

    const url = `/api/protected/users?page=1&currentPage=${newPage}&role=${newRole}&status=${newStatus}&q=${newSearch}`
    const {data, error} = await UseFetchWithToken<any>(url, {
        method: 'GET',
    });
    if (data.value) {
        users.value = data.value?.users
        usersCount.value = data.value.usersCount
        pagesCount.value = data.value.pagesCount
        perPage.value = data.value.perPage
    }
});

const filters = JSON.stringify({
    perPage: 6,
    page: 1,
    q: '',
    role: null,
    status: null,
});
const url = `/api/protected/users?page=1&currentPage=${currentPage.value}&role=${role.value}&status=${status.value}&q=${search.value}`
const { data, error } = await UseFetchWithToken<any>(url, {
    method: 'GET',
});
if (data.value) {
    users.value = data.value?.users
    usersCount.value = data.value.usersCount
    pagesCount.value = data.value.pagesCount
    perPage.value = data.value.perPage
}




const deleteUser = async () => {
    users.value = users.value.filter(user => user.id !== currentUserId.value)
    try {
        const { data, error } = await UseFetchWithToken<any>(`/api/protected/users/${currentUserId.value}`, {
            method: 'DELETE',
        });
        if (data.value) {
            notifySuccess('Utilisateur supprimé avec succès')
            users.value = users.value.filter(user => user.id !== currentUserId.value)
        }
    } catch (e) {

    }
}

const onClickHandler = async (page: number) => {
    const {data, error} = await UseFetchWithToken<any>(`/api/protected/users?page=${page}&q=${search.value}`, {
        method: 'GET',
    });
    if (data.value) {
        users.value = data.value?.users
        usersCount.value = data.value.usersCount
        pagesCount.value = data.value.pagesCount
        perPage.value = data.value.perPage
    }
};

const handleInputChange = (event: any) => {
    search.value = event.target.value
    onClickHandler(1)
};

</script>

<template>
    <div>
        <div class="mb-4 col-span-full xl:mb-2">
           <FrontBreadcrumbComponent />
            <div class="w-full flex items-center justify-between px-4">
                <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">Nouveau utilisateur</h1>
                <div class="col-span-6 sm:col-full">
                    <div class="flex items-center justify-end gap-3">
                        <NuxtLink
                            class="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                            to="/private/users/create" type="submit">Créer
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>

        <div class=" bg-white px-2 py-3 my-5">
            <div class="items-center hidden mb-3 sm:flex sm:divide-x sm:divide-gray-100 sm:mb-0 dark:divide-gray-700">
                <form class="lg:pr-3" action="#" method="GET">
                    <label for="users-search" class="sr-only">Search</label>
                    <div class="relative mt-1 lg:w-64 xl:w-96">
                        <input
                            v-model="search"
                            type="text"
                            name="email"
                            id="users-search"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                            placeholder="Rechercher un utilisateur"
                        >
                    </div>
                </form>
                <div class="flex pl-0 mt-3 space-x-1 sm:pl-2 sm:mt-0">
                    <button @click="toggleOpenFilter()" class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <span v-show="openFilter"><Icon name="material-symbols:close-fullscreen" class="w-6 h-6" /></span>
                        <span v-show="!openFilter"><Icon name="ic:outline-open-in-new" class="w-6 h-6" /></span>
                    </button>
                    <button @click="initFilters()" class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <span><Icon name="system-uicons:reset-forward" class="w-6 h-6" /></span>
                    </button>
                </div>
            </div>
            <div v-if="openFilter" class="flex flex-col my-5 px-3">
                <div class="overflow-x-auto flex flex-wrap">
                    <div class="inline-block align-middle">
                        <div class="overflow-hidden">
                            <div class="mb-4">
                                <label
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    for="settings-language_1"
                                >
                                    Satuts
                                </label>
                                <FwbSelect
                                    v-model="status"
                                    :options="STATUS"
                                    class="bg-gray-50 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                                    name="settings-language_1"
                                    placeholder="Selectionner un status"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="inline-block align-middle">
                        <div class="overflow-hidden">
                            <div class="mb-4">
                                <label
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    for="settings-language_1"
                                >
                                    Rôles
                                </label>
                                <FwbSelect
                                    v-model="role"
                                    :options="ROLES"
                                    class="bg-gray-50 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                                    name="settings-language_1"
                                    placeholder="Selectionner un rôle"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-col">
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
                                    Rôle
                                </th>
                                <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                    Job
                                </th>
                                <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                    Téléphone
                                </th>
                                <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                    Status
                                </th>
                                <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                    Actions
                                </th>
                            </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                            <tr v-for="user in users" :key="user.id" class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                <td class="w-4 p-4">
                                    <div class="flex items-center">
                                        <input id="checkbox-{{ user.id }}" aria-describedby="checkbox-1" type="checkbox" class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-indigo-300 dark:focus:ring-indigo-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600">
                                        <label for="checkbox-{{ user.id }}" class="sr-only">checkbox</label>

                                    </div>
                                </td>
                                <td class="flex items-center p-4 mr-12 space-x-6 whitespace-nowrap">
                                    <img class="w-10 h-10 rounded-full" :src="`${appUrl}/_nuxt/assets/images/users/${user.avatar}`" :alt="user.lastName">
                                    <div class="text-sm font-normal text-gray-500 dark:text-gray-400">
                                        <div class="text-base font-semibold text-gray-900 dark:text-white">{{ user.firstName }} {{ user.lastName }}</div>
                                        <div class="text-sm font-normal text-gray-500 dark:text-gray-400">{{ user.email }}</div>
                                    </div>
                                </td>
                                <td class="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">{{ user.role }}</td>
                                <td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ user.job }}</td>
                                <td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">+33 5 47 89 52 36</td>
                                <td class="p-4 text-base font-normal text-gray-900 whitespace-nowrap dark:text-white">
                                    <div class="flex items-center">
                                        <template v-if="user.isVerified">
                                            <div  class="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"> </div>Actif
                                        </template>
                                        <template v-else>
                                            <div class="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>Inactif
                                        </template>

                                    </div>
                                </td>
                                <td class="p-4 space-x-2 whitespace-nowrap">
                                    <NuxtLink :to="`/private/users/${user.id}/edit`" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
                                        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
                                        Edit user
                                    </NuxtLink>
                                    <button @click="currentUserId = <string>user.id" type="button" data-modal-target="delete-user-modal" data-modal-toggle="delete-user-modal" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900">
                                        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                                        Delete user
                                    </button>
                                </td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div class="sticky bottom-0 right-0 items-center w-full p-4 bg-white border-t border-gray-200 sm:flex sm:justify-between dark:bg-gray-800 dark:border-gray-700">
            <div class="flex items-center mb-4 sm:mb-0">

                <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Totals <span class="font-semibold text-gray-900 dark:text-white">{{ usersCount }}</span></span>
            </div>
            <div class="flex items-center space-x-3">
                <vue-awesome-paginate
                    :total-items="usersCount"
                    :items-per-page="perPage"
                    :max-pages-shown="5"
                    v-model="currentPage"
                    :on-click="onClickHandler"

                    backButtonClass="bg-indigo-700 hover:bg-indigo-800 text-white px-3 py-2 rounded-lg"
                    nextButtonClass="bg-indigo-700 hover:bg-indigo-800 text-white px-3 py-2 rounded-lg"
                    activePageClass="bg-indigo-700 hover:bg-indigo-800 text-white rounded-lg"
                    numberButtonsClass="hover:bg-gray-100 text-gray-900 px-3 py-2 rounded-lg"
                    firstButtonClass="hover:bg-gray-100 px-3 py-2 rounded-lg"
                    lastButtonClass="hover:bg-gray-100 px-3 py-2 rounded-lg"

                />
            </div>
        </div>

        <!-- Delete User Modal -->
        <div class="fixed left-0 right-0 z-50 items-center justify-center hidden overflow-x-hidden overflow-y-auto top-4 md:inset-0 h-modal sm:h-full" id="delete-user-modal">
            <div class="relative w-full h-full max-w-md px-4 md:h-auto">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-800">
                    <!-- Modal header -->
                    <div class="flex justify-end p-2">
                        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-700 dark:hover:text-white" data-modal-hide="delete-user-modal">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <div class="p-6 pt-0 text-center">
                        <svg class="w-16 h-16 mx-auto text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <h3 class="mt-5 mb-6 text-lg text-gray-500 dark:text-gray-400">Are you sure you want to delete this user?</h3>
                        <button @click="deleteUser()" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2 dark:focus:ring-red-800" data-modal-hide="delete-user-modal">
                            Oui
                        </button>
                        <a href="#" class="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-indigo-300 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700" data-modal-hide="delete-user-modal">
                            Non,
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.pagination-container {
    display: flex;
    column-gap: 30px;
}
.paginate-buttons {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    cursor: pointer;
    color: black;
}

.paginate-buttons.number-buttons.active-page {
    background-color: rgba(178, 10, 10, 0.69) !important;
    border: 1px solid rgba(178, 10, 10, 0.69) !important;
    color: white !important;
}
.back-button:hover {
    background-color: rgba(178, 10, 10, 0.69) !important;
}
</style>
