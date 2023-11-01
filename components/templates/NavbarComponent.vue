<script setup lang="ts">
import {
    FwbNavbar,
    FwbNavbarCollapse,
    FwbNavbarLink,
    FwbNavbarLogo,
} from 'flowbite-vue'
</script>

<template>
    <div class="container mx-auto">
        <fwb-navbar>
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
    </div>
</template>

<style scoped>
nav {
    @apply border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900 ;
}
</style>
