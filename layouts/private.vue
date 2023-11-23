<script setup lang="ts">
import Sidebar from "~/components/navbars/Sidebar.vue";
import PrivateNavbar from "~/components/navbars/PrivateNavbar.vue";
import HeaderStats from "~/components/navbars/HeaderStats.vue";
import PrivateFooter from "~/components/navbars/PrivateFooter.vue";


</script>

<template>
    <div class="leading-normal tracking-normal" id="main-body">
        <div class="flex flex-wrap">

            <Sidebar />

            <div class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen" :class="sideBarOpen ? 'overlay' : ''" id="main-content">

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
