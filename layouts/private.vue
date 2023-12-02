<script setup lang="ts">
import Sidebar from "~/components/navbars/Sidebar.vue";
import PrivateNavbar from "~/components/navbars/PrivateNavbar.vue";
import PrivateFooter from "~/components/navbars/PrivateFooter.vue";
import {useGlobalStore} from "~/stores/globalStore";
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})

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

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(15px);
}
</style>
