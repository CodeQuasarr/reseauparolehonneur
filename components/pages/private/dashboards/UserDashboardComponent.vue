<script setup lang="ts">

</script>

<template>
    <div>
        <div class="flex flex-wrap -mx-3 mb-20">
            <div class="w-1/2 xl:w-1/4 px-3">
                <div class="w-full bg-white border text-blue-400 rounded-lg flex items-center p-6">
                    <Icon
                        name="akar-icons:discord-fill"
                        class="text-indigo-700 w-16 h-16 fill-current mr-4 hidden lg:block"
                    />

                    <div class="text-gray-700">
                        <a class="w-full px-3 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-indigo-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                           href="#">Rejoindre
                        </a>
                    </div>

                </div>
            </div>

        </div>
        <!-- stats end -->
        <div class="grid grid-cols-1 px-2 pt-6 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
            <div class="col-span-full xl:col-auto">
                <div
                    class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                    <div class="flow-root">
                        <ul class="divide-y divide-gray-200 dark:divide-gray-700">
                            <li class="py-4">
                                <div class="flex items-center justify-between xl:block 2xl:flex align-center 2xl:space-x-4">
                                    <div class="flex space-x-4 xl:mb-4 2xl:mb-0">
                                        <div class="flex-1 min-w-0">
                                            <p class="text-base font-semibold text-gray-900 leading-none truncate mb-0.5 dark:text-white">
                                                Le groupe discord de la communauté
                                            </p>
                                        </div>
                                    </div>
                                    <div class="inline-flex items-center w-auto xl:w-full 2xl:w-auto">
                                        <a class="w-full px-3 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-indigo-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                           href="#">Rejoindre
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>

</style>
