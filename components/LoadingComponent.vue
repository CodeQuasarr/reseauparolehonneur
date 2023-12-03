<script setup lang="ts">
import {initFlowbite} from "flowbite";

onMounted(() => {
    initFlowbite();
})

</script>

<template>
    <div class="absolute top-0 end-0 w-full h-full bg-white opacity-75">
        <div class="flex items-center justify-center border border-green-500 w-full h-full">
            <div class="z-100 w-12 h-12 mx-auto rounded-full animate-spin absolute
                        border-4 border-dashed border-indigo-500 border-t-transparent">
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
