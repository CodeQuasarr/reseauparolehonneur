<script setup lang="ts">
import Sidebar from "~/components/navbars/Sidebar.vue";
import PrivateNavbar from "~/components/navbars/PrivateNavbar.vue";
import PrivateFooter from "~/components/navbars/PrivateFooter.vue";
import {useGlobalStore} from "~/stores/globalStore";

const sideBarOpen = useGlobalStore().getSideBarOpen

</script>

<template>
    <div class="leading-normal tracking-normal" id="main-body">
        <div class="flex flex-wrap">

            <Sidebar />

            <div class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen" :class="useGlobalStore().getSideBarOpen ? 'overlay' : ''" id="main-content">

                <PrivateNavbar />

                <div class="p-6 bg-gray-100 mb-20">
                    <slot />
                </div>

                <PrivateFooter />

            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
