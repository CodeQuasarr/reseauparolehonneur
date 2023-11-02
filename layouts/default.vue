<script setup lang="ts">

import NavbarComponent from "~/components/templates/NavbarComponent.vue";
</script>

<template>
    <div>
        <div >
            <div class="bg-white fixed w-full z-30">
                <NavbarComponent />
            </div>
            <slot />
        </div>
    </div>
</template>

<style scoped>

</style>
