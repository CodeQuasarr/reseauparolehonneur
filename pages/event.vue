<script lang="ts" setup>
import {fadeIn, scrollFadeIn} from "~/utils/animations";
import type {Evenement} from "~/types/Evenement";
import {convertDate, convertHour} from "~/utils/config";
import {useTokenStore} from "~/stores/tokenStore";
import {navigateTo} from "#app";
import {initFlowbite} from "flowbite";

onMounted(() => {
    initFlowbite();
})

import { FwbButton, FwbModal } from 'flowbite-vue'

const appUrl: string = useRuntimeConfig().public.baseUrl;
const isShowModal = ref(false)

function closeModal () {
    isShowModal.value = false
}
function showModal () {
    isShowModal.value = true
}


const user = useUserStore()
const events = ref<Evenement[]>([]);

const choice = ref<number>(5);
const eventId = ref<string>('');

const {data, error} = await useFetch<any>('/api/client/event', {
    method: 'GET',
});

if (data.value) {
    events.value = data.value?.events
}

const payment = async (key: number) => {

    if (!useTokenStore().isLogged) {
        navigateTo('/login')
        return;
    }

    const {data, error} = await useFetch<any>('api/protected/payments/init', {
        method: 'POST',
        body: {paymentKey: key, eventId: eventId}
    })

    if (data.value) {
        navigateTo(data.value.url, { external: true })
        return;
    }
}

</script>

<template>
    <div>
        <section
            class="bg-cover bg-[url('~/assets/images/background/bg-1.webp')] bg-no-repeat bg-[center_center] bg-fixed relative z-0">
            <!-- overlay -->
            <div class="absolute content-[''] opacity-80 z-[-2] inset-0 bg-[#232429]"></div>
            <!-- overlay end -->
            <div class="w-full mx-auto px-[15px]">
                <div
                    class="relative min-h-[600px] flex flex-wrap mr-[-15px] ml-[-15px] items-center justify-center mx-0">
                    <div class="px-0 pt-12 w-full ms-20">
                        <h1 v-motion="fadeIn(1000)"
                            class="font-barlow text-3xl xl:text-4xl text-white leading-[0.9] uppercase mb-6 text-transparent font-bold">
                            <span class="uppercase"
                                  style="-webkit-text-fill-color: transparent; -webkit-text-stroke-width: 2px; -webkit-text-stroke-color: #fff;">
                                évènements
                            </span>
                        </h1>
                        <nav aria-label="Breadcrumb" class="flex text-white">
                            <ol class="inline-flex items-center space-x-1 md:space-x-3">
                                <li class="inline-flex items-center">
                                    <a class="inline-flex items-center text-md font-medium hover:text-blue-600 dark:text-gray-400"
                                       href="#">
                                        <svg aria-hidden="true" class="w-3 h-3 mr-2.5"
                                             fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                                        </svg>
                                        Accueil
                                    </a>
                                </li>
                                <li aria-current="page">
                                    <div class="flex items-center">
                                        <svg aria-hidden="true" class="w-3 h-3 text-gray-400 mx-1"
                                             fill="none" viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
                                            <path d="m1 9 4-4-4-4" stroke="currentColor" stroke-linecap="round"
                                                  stroke-linejoin="round" stroke-width="2"/>
                                        </svg>
                                        <span
                                            class="ml-1 text-md font-medium md:ml-2 dark:text-gray-400">A propos</span>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </section>

        <section v-motion="scrollFadeIn()" class="p-2 w-full flex items-center justify-center my-20">
            <div class="container mx-auto">
                <div class="grid grid-cols-1">
                    <div class="w-full">
                        <div class="text-start">
                            <h2 class="mb-10 text-4xl font-bold text-[#171822]">Evènement à venir</h2>
                        </div>
                    </div>
                </div>
                <div v-if="events.length">
                    <div v-for="event in events" :key="event.startTime">
                        <div class="text-start">
                            <ul>
                                <li class="text-base text-[#6a6b7c] leading-10 font-bold">
                                    <span class="text-red-600 me-2">
                                        <Icon name="material-symbols:calendar-month-sharp"/>
                                    </span> {{ convertDate(event.startDate) }} à {{ convertHour(event.startTime) }}
                                </li>
                            </ul>
                        </div>
                        <div class="grid grid-cols-1 xl:grid-cols-2 gap-10 items-center mb-10">
                            <div class="col-span-1">
                                <div>
                                    <img alt="" :src="`${appUrl}/_nuxt/assets/images/events/${event.picture}`" :alt="event.picture">>
                                </div>
                            </div>
                            <div class="col-span-1">
                                <div>
                                    <h3 class="text-3xl text-[#171822] font-semibold mb-[25px]">{{ event.title }}</h3>
                                    <p class="mb-5 text-base text-[#6a6b7c] font-normal leading-7 mt-0 mx-0">
                                        {{ event.content }}
                                    </p>
                                    <ul>
                                        <li class="text-base text-[#6a6b7c] leading-10">
                                    <span class="text-red-600 me-2">
                                        <Icon name="material-symbols:location-on-outline"/>
                                    </span> {{ event.address }}
                                        </li>
                                    </ul>

                                    <div class="flex mt-10">
                                        <div class="w-full">
                                            <fwb-button
                                                class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-medium uppercase tracking-tighter text-black hover:text-white border border-[#331391] rounded-lg group"
                                                @click="showModal(); eventId = event.id"
                                            >
                                                <span
                                                    class="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#331391] ext-white rounded-full group-hover:w-56 group-hover:h-56"></span>
                                                <span class="relative">ACHETER UN BILLET</span>
                                            </fwb-button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <div class="col-span-full">
                        <div class="mb-50">

                            <div class="section-tittle mb-14">
                                <h2 class="text-center block text-gray-400 font-bold">
                                    <Icon class="w-32 h-32 mr-2" name="ci:info-circle"/>
                                </h2>
                            </div>
                            <p class="text-base text-[#64676c] mb-[43px] xl:pr-[50px]">
                                Nous sommes ravis de vous annoncer qu'une nouvelle série de conférences passionnantes
                                est en cours de préparation. Veuillez rester à l'écoute pour plus de détails sur les
                                sujets, les intervenants et les dates. Nous sommes impatients de partager ces moments
                                enrichissants avec vous. Merci de votre intérêt et de votre compréhension.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Main modal -->
        <fwb-modal v-if="isShowModal" @close="closeModal">
            <template #header>
                <div class="flex items-center text-lg">
                    Terms of Service
                </div>
            </template>
            <template #body>
                <div class="p-4 md:p-5 flex items-center justify-center">
                    <div
                        :class="{
                                'shadow-md border-opacity-3 -translate-y-1 border-indigo-600 border-5': choice === 1,
                            }"
                        class="card m-2 cursor-pointer border border-gray-300 rounded-lg hover:shadow-md hover:border transform hover:-translate-y-1 transition-all duration-200">
                        <div @click="choice = 1" class="m-3">
                            <h2 class="text-lg mb-2">Basique
                                <span
                                    class="text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse">85€</span>
                            </h2>
                            <p class="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">
                                par personne, par évènement</p>
                        </div>
                    </div>
                    <div
                        :class="{
                                'shadow-md border-opacity-3 -translate-y-1 border-indigo-600 border-5': choice === 2,
                            }"
                        class="card m-2 cursor-pointer border border-gray-300 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
                        <div @click="choice = 2" class="m-3">
                            <h2 class="text-lg mb-2">Ultime
                                <span
                                    class="text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse">155€</span>
                            </h2>
                            <p class="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">
                                par binôme, par événement</p>
                        </div>
                    </div>
                </div>
            </template>
            <template #footer>
                <div class="flex justify-between">
                    <fwb-button  @click="closeModal" color="alternative">
                        Annuler
                    </fwb-button>
                    <fwb-button v-if="choice === 1 || choice === 2" @click="closeModal; payment(!user.isSubscriber ? 3 : 2)" color="green">
                        Payer
                    </fwb-button>
                </div>
            </template>
        </fwb-modal>
    </div>
</template>

<style scoped>

</style>
