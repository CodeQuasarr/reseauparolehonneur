<script setup lang="ts">
const route = useRoute()
const breadcrumbs = computed(() => {
    const paths = route.path.split('/').filter((path) => path)
    const pathsLength = paths.length
    const pathsArray = []
    for (let i = 0; i < pathsLength; i++) {
        const path = paths[i]
        const pathObject = {
            name: path,
            path: path,
        }
        if (i === 0) {
            pathObject.path = '/'
            pathObject.name = 'Accueil'
        }
        pathsArray.push(pathObject)
    }
    return pathsArray
})


</script>

<template>
    <div>
        <nav aria-label="Breadcrumb" class="flex mb-5">
            <ol v-if="breadcrumbs.length === 2" class="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
                <li class="inline-flex items-center">
                    <NuxtLink to="/private" class="inline-flex items-center text-gray-700 hover:text-indigo-600">
                        <svg class="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                        {{ breadcrumbs[0].name }}
                    </NuxtLink>
                </li>
                <li>
                    <div class="flex items-center">
                        <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" fill-rule="evenodd"></path></svg>
                        <span aria-current="page" class="ml-1 text-gray-400 md:ml-2">{{ breadcrumbs[1].name }}</span>
                    </div>
                </li>
            </ol>

            <ol v-if="breadcrumbs.length === 3" class="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
                <li class="inline-flex items-center">
                    <NuxtLink to="/private" class="inline-flex items-center text-gray-700 hover:text-indigo-600">
                        <svg class="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                        {{ breadcrumbs[0].name }}
                    </NuxtLink>
                </li>
                <li>
                    <div class="flex items-center">
                        <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" fill-rule="evenodd"></path></svg>
                        <NuxtLink :to="`/private/${breadcrumbs[1].path}`" class="ml-1 text-gray-700 hover:text-indigo-600 md:ml-2">{{ breadcrumbs[1].name }}</NuxtLink>
                    </div>
                </li>
                <li>
                    <div class="flex items-center">
                        <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" fill-rule="evenodd"></path></svg>
                        <span aria-current="page" class="ml-1 text-gray-400 md:ml-2">{{ breadcrumbs[2].name }}</span>
                    </div>
                </li>
            </ol>
            <ol v-if="breadcrumbs.length === 4" class="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
                <li class="inline-flex items-center">
                    <NuxtLink to="/private" class="inline-flex items-center text-gray-700 hover:text-indigo-600">
                        <svg class="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                        {{ breadcrumbs[0].name }}
                    </NuxtLink>
                </li>
                <li>
                    <div class="flex items-center">
                        <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" fill-rule="evenodd"></path></svg>
                        <NuxtLink :to="`/private/${breadcrumbs[1].path}`" class="ml-1 text-gray-700 hover:text-indigo-600 md:ml-2">{{ breadcrumbs[1].name }}</NuxtLink>
                    </div>
                </li>
                <li>
                    <div class="flex items-center">
                        <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" fill-rule="evenodd"></path></svg>
                        <NuxtLink :to="`/private/${breadcrumbs[2].path}`" class="ml-1 text-gray-700 hover:text-indigo-600 md:ml-2">{{ breadcrumbs[2].name }}</NuxtLink>
                    </div>
                </li>
                <li>
                    <div class="flex items-center">
                        <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" fill-rule="evenodd"></path></svg>
                        <span aria-current="page" class="ml-1 text-gray-400 md:ml-2">{{ breadcrumbs[3].name }}</span>
                    </div>
                </li>
            </ol>
        </nav>
    </div>
</template>

<style scoped>

</style>
