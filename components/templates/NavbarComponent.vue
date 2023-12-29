<script setup lang="ts">
import {
    FwbButton,
    FwbNavbar,
    FwbNavbarCollapse,
    FwbNavbarLink,
    FwbNavbarLogo,
} from 'flowbite-vue'
import {useUserStore} from "~/stores/userStore";
import {useTokenStore} from "~/stores/tokenStore";

const showMenu = ref(false);

// const links = [
//     {path: '/', name: 'Accueil'},
//     {path: '/about', name: 'Accueil'},
//     {path: '/', name: 'Accueil'},
//     {path: '/', name: 'Accueil'},
// ]

const toggleMenu = () => {
    showMenu.value = !showMenu.value;
}
</script>

<template>
    <div class="container mx-auto">
        <div class="flex items-center">

            <nav class="flex-grow bg-white border-gray-200">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" class="flex items-center">
<!--                        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />-->
                        <span class="self-center text-2xl font-semibold whitespace-nowrap">Réseau Parole Honneur</span>
                    </a>
                    <button @click="toggleMenu()" data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <Icon class="w-5 h-5" name="fluent:navigation-24-filled" />
                    </button>
                    <div
                        :class="{'hidden': !showMenu,  'w-full md:block md:w-auto': true}" id="navbar-default">
                        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                            <li>
                                <NuxtLink to="/" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0" aria-current="page">Accueil</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/about" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">À Propos</NuxtLink>
                            </li>
                            <li>
                                <a href="/event" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Conférence à venir</a>
                            </li>
                            <li>
                                <NuxtLink to="/contact" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Contact</NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class=" ml-auto mr-2">
                <NuxtLink v-if="!useTokenStore().isLogged" to="/login" class="flex items-center justify-center p-2 w-10 h-10 xl:w-full xl:h-full rounded-lg hover:bg-purple-800 xl:bg-purple-700 xl:text-white xl:rounded"> <!-- Add classes to NuxtLink -->
                    <span class="xl:mr-2"><Icon name="ic:baseline-person-2" /></span>
                    <span class="hidden xl:block">Se connecter</span>
                </NuxtLink>
                <NuxtLink v-else to="/private" class="flex items-center justify-center p-2 w-10 h-10 xl:w-full xl:h-full rounded-lg hover:bg-purple-800 xl:bg-purple-700 xl:text-white xl:rounded"> <!-- Add classes to NuxtLink -->
                    <span class="xl:mr-2"><Icon name="ic:baseline-person-2" /></span>
                    <span class="hidden xl:block">Mon Profile</span>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
nav {
    @apply border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900 ;
}
.router-link-active,
.router-link-exact-active {
    @apply block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0
}

</style>
