<script lang="ts" setup>
const error = useError();
const message = ref("Une erreur est survenue")
const handleError = () => clearError({ redirect: '/' })
</script>


<template>
    <div class="flex flex-col justify-center items-center px-6 mx-auto h-screen xl:px-0 dark:bg-gray-900">
        <div class="block md:max-w-lg">
            <h1 class="text-8xl font-bold text-red-300" >{{ error.statusCode }}</h1>
        </div>
        <div class="text-center xl:max-w-4xl">
            <h1 class="mb-3 text-2xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">{{ error.statusMessage }}</h1>
            <p class="mb-5 text-base font-normal text-gray-500 md:text-lg dark:text-gray-400">Nous faisons tout notre possible pour résoudre ce problème. </p>
            <button class="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-3 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800" @click="handleError()">
            <svg class="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" fill-rule="evenodd"></path></svg>
            Retour à la page d'accueil
            </button>
        </div>
    </div>
</template>


