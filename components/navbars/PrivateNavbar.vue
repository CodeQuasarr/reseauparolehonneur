<script setup lang="ts">
import {useGlobalStore} from "~/stores/globalStore";
import { initFlowbite } from 'flowbite'
import {useUserStore} from "~/stores/userStore";
import {navigateTo} from "#app";

const user = useUserStore().getUser
const appUrl = useRuntimeConfig().public.baseUrl
const toggleSidebar = () => {
    useGlobalStore().toggleSidebar()
}

const logout = async () => {
    useTokenStore().setAuthenticated(false);
    await useFetch('/api/auth/logout', {
        method: 'GET',
    });
    useCookie('authToken').value = null
    useCookie('user').value = null
    return navigateTo('/login')
}

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})

</script>

<template>
    <div class="sticky top-0 z-40">
        <div class="w-full h-20 px-6 bg-gray-100 border-b flex items-center justify-between">

            <!-- left navbar -->
            <div class="flex">

                <!-- mobile hamburger -->
                <div class="inline-block lg:hidden flex items-center mr-4">
                    <button class="hover:text-blue-500 hover:border-white focus:outline-none navbar-burger" @click="toggleSidebar()">
                        <svg class="h-5 w-5" :style="{ fill: 'black' }" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>

                <!-- search bar -->
                <div class="relative text-gray-600">
                    <input type="search" name="serch" placeholder="Search products..." class="bg-white h-10 w-full xl:w-64 px-5 rounded-lg border text-sm focus:outline-none">
                    <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
                        <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve" width="512px" height="512px">
                      <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
                    </svg>
                    </button>
                </div>
            </div>



            <div class="flex items-center relative">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" class="fill-current mr-3 hover:text-blue-500"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/></svg>

                <button id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar" class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" type="button">
                    <span class="sr-only">Open user menu</span>
                    <img :src="`${appUrl}/_nuxt/assets/images/users/${user.avatar}`" :alt="user.lastName" class="w-12 h-12 rounded-full shadow-lg">
                </button>
            </div>

            <!-- Dropdown menu -->
            <div id="dropdownAvatar" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div>{{ user.firstName }} {{ user.lastName }}</div>
<!--                    <div class="font-medium truncate">name@flowbite.com</div>-->
                </div>
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
                    <li>
                        <NuxtLink to="/" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Accueil</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/private" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/private/setting" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</NuxtLink>
                    </li>
                </ul>
                <div class="py-2 w-full">
                    <button @click="logout()" class="w-full block px-4 py-2 text-sm text-gray-700 hover:bg-red-100">Sign out</button>
                </div>
            </div>

        </div>

    </div>
</template>

<style scoped>

</style>
