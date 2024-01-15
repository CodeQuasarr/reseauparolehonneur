<script setup lang="ts">

import LoadingComponent from "~/components/LoadingComponent.vue";

const route = useRoute();
const message = ref('')
const status = ref<number | null >(null)
const loading = ref<boolean>(false)


try {
    loading.value = true;
    const { data, error } = await useFetch('/api/auth/verify-email', {
        method: 'POST',
        body: {token: route.query.token}
    })

    if (data.value) {
        await useRouter().push('/login')
    }

    if (error.value) {
        message.value = error.value.statusMessage as string
        status.value = error.value.statusCode as number
    }
}catch (e) {
    console.log(e)
} finally {
    loading.value = false
}


</script>

<template>
    <div class="h-[60vh] w-screen flex items-center justify-center">
        <div class="relative">
            <LoadingComponent v-if="loading" />
            <div class="shadow-2xl w-[500px] mx-auto border-3 border-red-500 p-5 text-center relative">
                <Icon
                    :name="status !== 200 ? 'carbon:error-filled' : 'ep:success-filled'"
                    :class="status !== 200 ? 'text-red-400' : 'text-green-400'"
                    class="text-8xl absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
<!--                <Icon name="ep:success-filled" class="text-8xl text-green-400 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />-->
                <div class="p-4 mt-8 mb-2 ">
                <span
                    :class="status !== 200 ? 'text-red-500' : 'text-gray-400'"
                    class="text-md"
                > {{ message }} </span>
                </div>
                <div v-if="status === 200" class="col-span-6 sm:col-full pb-5">
                    <NuxtLink to="/login" class="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-md px-5 py-2.5 text-center">Se connecter</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>

</style>
