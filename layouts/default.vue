<script setup lang="ts">

import NavbarComponent from "~/components/templates/NavbarComponent.vue";
import FooterComponent from "~/components/templates/FooterComponent.vue";


</script>

<template>
    <div>
        <div >
            <div class="bg-white fixed w-full z-50 shadow-xl">
                <NavbarComponent />
            </div>
            <slot />
            <div>
                <FooterComponent />
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
