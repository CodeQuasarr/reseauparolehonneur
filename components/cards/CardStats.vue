<script setup lang="ts">

defineProps({
    statNumber: {
        type: Number,
        required: true,
    },
    statTitle: {
        type: String,
        required: true,
    },
    statIconName: {
        type: String,
        required: true,
    },
    statIconColor: {
        type: String,
        required: false,
        default: '',
    },
})

</script>

<template>
    <div class="w-1/2 xl:w-1/4 px-3">
        <div class="w-full bg-white border text-blue-400 rounded-lg flex items-center p-6">
            <Icon
                :name="statIconName"
                :color="statIconColor"
                class="w-16 h-16 fill-current mr-4 hidden lg:block"
            />

            <div class="text-gray-700">
                <p class="font-semibold text-3xl">{{ statNumber }}</p>
                <p>{{ statTitle }}</p>
            </div>

        </div>
    </div>
</template>

<style scoped>

</style>
