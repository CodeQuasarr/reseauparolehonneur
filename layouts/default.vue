<script setup lang="ts">

import NavbarComponent from "~/components/templates/NavbarComponent.vue";
</script>

<template>
    <div>
        <div >
            <NavbarComponent />
            <slot />
        </div>
    </div>
</template>

<style scoped>

</style>
