<script setup lang="ts">
import UseFetchWithToken from "~/composables/useFetchWithToken";
import FrontBreadcrumbComponent from "~/components/breadcrumbs/FrontBreadcrumbComponent.vue";
import AdminDashboardComponent from "~/components/pages/private/dashboards/AdminDashboardComponent.vue";

definePageMeta({
    pageTransition: {name: 'page', mode: 'out-in'},
    title: 'Page d\'accueil des utilisateurs connectés',
    layout: "private",
})
const stats = ref({
    userCounts: 0,
})
const {data, error} = await UseFetchWithToken<any>('/api/protected/setting', {
    method: 'GET',
});

if (data.value) {
    stats.value = data.value
}

if (error.value) {
    throw error.value
}

console.log('data', data)
console.log('errorsxsxsx', error)
</script>

<template>
    <div>
        <div class="mb-4 col-span-full xl:mb-2">
            <FrontBreadcrumbComponent/>
            <div class="w-full flex items-center justify-between px-4">
                <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">Dashboard</h1>
            </div>
        </div>
        <!-- breadcrumb end -->
        <AdminDashboardComponent :stats="stats"/>
    </div>
</template>

<style scoped>

</style>
