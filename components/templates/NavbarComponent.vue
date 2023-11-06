<script setup lang="ts">
import {
    FwbButton,
    FwbNavbar,
    FwbNavbarCollapse,
    FwbNavbarLink,
    FwbNavbarLogo,
} from 'flowbite-vue'
</script>

<template>
    <div class="container mx-auto">
        <div class="flex items-center">
            <fwb-navbar class="flex-grow">
                <template #logo="{}">
                    <a class="flex items-center" href="#">
                        <img src="~/assets/images/logos/logo.webp" alt="Logo" class="mr-3 h-6 sm:h-10">
                        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                        RESEAU PAROLE HONNEUR
                    </span>
                    </a>
                </template>
                <template #default="{isShowMenu}">
                    <fwb-navbar-collapse :is-show-menu="isShowMenu">
                        <fwb-navbar-link is-active link="#">
                            Home
                        </fwb-navbar-link>
                        <fwb-navbar-link link="#">
                            Services
                        </fwb-navbar-link>
                        <fwb-navbar-link link="#">
                            Pricing
                        </fwb-navbar-link>
                        <fwb-navbar-link link="#">
                            Contact
                        </fwb-navbar-link>
                    </fwb-navbar-collapse>
                </template>
            </fwb-navbar>
            <div class="ml-auto">
                <NuxtLink to="/" class="flex items-center xl:p-2 xl:bg-purple-700 xl:text-white xl:rounded"> <!-- Add classes to NuxtLink -->
                    <span class="xl:mr-2"><Icon name="ic:baseline-person-2" /></span> <span class="hidden xl:block">Se connecter</span>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
nav {
    @apply border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900 ;
}
</style>
