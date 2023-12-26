<script setup lang="ts">

const payments = ref<any>(null)

if (useUserStore().isSubscriber) {
    const {data, error} = await useFetchWithToken<any>('/api/protected/stripe/payment', {
        method: 'GET',
    })
    payments.value = data.value

    console.log(data.value)
    console.log(error.value)
}



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
        <div class="mb-4 col-span-full xl:mb-2">
            <div class="w-full flex items-center justify-between px-4">
                <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">Mes factures</h1>
            </div>
        </div>
        <div v-if="payments && payments.length" class="flex flex-col">
            <div class="overflow-x-auto">
                <div class="inline-block min-w-full align-middle">
                    <div class="overflow-hidden shadow">
                        <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
                            <thead class="bg-white dark:bg-gray-700">
                            <tr>
                                <th scope="col" class="p-4">
                                    <div class="flex items-center">
                                        <input id="checkbox-all" aria-describedby="checkbox-1" type="checkbox" class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-indigo-300 dark:focus:ring-indigo-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600">
                                        <label for="checkbox-all" class="sr-only">checkbox</label>
                                    </div>
                                </th>
                                <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                    Paiement
                                </th>
                                <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                    prix
                                </th>
                                <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                    date
                                </th>
                                <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                    Etat
                                </th>
                                <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                    Actions
                                </th>
                            </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                            <tr v-for="payment in payments" :key="payment.id" class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                <td class="w-4 p-4">
                                    <div class="flex items-center">
                                        <input id="checkbox-{{ payment.id }}" aria-describedby="checkbox-1" type="checkbox" class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-indigo-300 dark:focus:ring-indigo-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600">
                                        <label for="checkbox-{{ payment.id }}" class="sr-only">checkbox</label>

                                    </div>
                                </td>
                                <td class="flex items-center p-4 mr-12 space-x-6 whitespace-nowrap">
                                    <div class="text-sm font-normal text-gray-500 dark:text-gray-400">
                                        <div class="text-base font-semibold text-gray-900 dark:text-white">Instantané</div>
                                    </div>
                                </td>
                                <td class="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">{{ payment.amount }}</td>
                                <td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ payment.startDate }}</td>
                                <td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ payment.status }}</td>
                               <td class="p-4 space-x-2 whitespace-nowrap">
                                    eezfzf
                                </td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="!payments" class="text-center mt-10">
            <h2 class="text-sm text-gray-400">Aucun Facture en cours</h2>
            <Icon name="fluent-emoji-high-contrast:crying-face" class="w-24 h-24 text-gray-400 my-5" />
        </div>

    </div>
</template>

<style scoped>

</style>
