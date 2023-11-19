<script setup lang="ts">
import {fadeIn, scrollFadeIn} from "~/utils/animations";

</script>

<template>
    <div>
        <section class="bg-cover bg-[url('~/assets/images/background/bg-1.webp')] bg-no-repeat bg-[center_center] bg-fixed relative z-0">
            <!-- overlay -->
            <div class="absolute content-[''] opacity-80 z-[-2] inset-0 bg-[#232429]"></div>
            <!-- overlay end -->
            <div class="w-full mx-auto px-[15px]">
                <div class="relative min-h-[600px] flex flex-wrap mr-[-15px] ml-[-15px] items-center justify-center mx-0">
                    <div class="px-0 pt-12 w-full ms-20">
                        <h1 v-motion="fadeIn(1000)" class="font-barlow text-3xl xl:text-4xl text-white leading-[0.9] uppercase mb-6 text-transparent font-bold">
                            <span class="uppercase" style="-webkit-text-fill-color: transparent; -webkit-text-stroke-width: 2px; -webkit-text-stroke-color: #fff;">
                                évènements
                            </span>
                        </h1>
                        <nav class="flex text-white" aria-label="Breadcrumb">
                            <ol class="inline-flex items-center space-x-1 md:space-x-3">
                                <li class="inline-flex items-center">
                                    <a href="#" class="inline-flex items-center text-md font-medium hover:text-blue-600 dark:text-gray-400">
                                        <svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                                        </svg>
                                        Accueil
                                    </a>
                                </li>
                                <li aria-current="page">
                                    <div class="flex items-center">
                                        <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                                        </svg>
                                        <span class="ml-1 text-md font-medium md:ml-2 dark:text-gray-400">A propos</span>
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
                <div class="text-start">
                    <ul>
                        <li class="text-base text-[#6a6b7c] leading-10 font-bold">
                                    <span class="text-red-600 me-2">
                                        <Icon name="material-symbols:calendar-month-sharp" />
                                    </span> 15 - 12 - 2023
                        </li>
                    </ul>
                </div>
                <div class="grid grid-cols-1 xl:grid-cols-2 gap-10 items-center mb-10">
                    <div class="col-span-1">
                        <div>
                            <img src="~/assets/images/events/07-10-2023.webp" alt="">
                        </div>
                    </div>
                    <div class="col-span-1">
                        <div>
                            <h3 class="text-3xl text-[#171822] font-semibold mb-[25px]">The 2019 Conference</h3>
                            <p class="mb-5 text-base text-[#6a6b7c] font-normal leading-7 mt-0 mx-0">
                                Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Classe aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce nec ante vitae lacus aliquet vulputé. Donec scelerisque accu msan molestie. Vestibulum ante ipsum primis chez faucibus orci luctus.
                            </p>
                            <ul>
                                <li class="text-base text-[#6a6b7c] leading-10">
                                    <span class="text-red-600 me-2">
                                        <Icon name="material-symbols:location-on-outline" />
                                    </span> Hôtèl Mercure de Bordeaux
                                </li>
                            </ul>

                            <div class="flex mt-10">
                                <div class="w-full">
                                    <a href="#_" class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-medium uppercase tracking-tighter text-black hover:text-white border border-[#331391] rounded-lg group">
                                        <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#331391] ext-white rounded-full group-hover:w-56 group-hover:h-56"></span>
                                        <span class="relative">ACHETER UN BILLET</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="text-start">
                    <ul>
                        <li class="text-base text-[#6a6b7c] leading-10 font-bold">
                                    <span class="text-red-600 me-2">
                                        <Icon name="material-symbols:calendar-month-sharp" />
                                    </span> 15 - 12 - 2023
                        </li>
                    </ul>
                </div>
                <div class="grid grid-cols-1 xl:grid-cols-2 gap-10 items-center mb-10">
                    <div class="col-span-1">
                        <div>
                            <img src="~/assets/images/events/07-10-2023.webp" alt="">
                        </div>
                    </div>
                    <div class="col-span-1">
                        <div>
                            <h3 class="text-3xl text-[#171822] font-semibold mb-[25px]">The 2019 Conference</h3>
                            <p class="mb-5 text-base text-[#6a6b7c] font-normal leading-7 mt-0 mx-0">
                                Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Classe aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce nec ante vitae lacus aliquet vulputé. Donec scelerisque accu msan molestie. Vestibulum ante ipsum primis chez faucibus orci luctus.
                            </p>
                            <ul>
                                <li class="text-base text-[#6a6b7c] leading-10">
                                    <span class="text-red-600 me-2">
                                        <Icon name="material-symbols:location-on-outline" />
                                    </span> Hôtèl Mercure de Bordeaux
                                </li>
                            </ul>

                            <div class="flex mt-10">
                                <div class="w-full">
                                    <a href="#_" class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-medium uppercase tracking-tighter text-black hover:text-white border border-[#331391] rounded-lg group">
                                        <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#331391] ext-white rounded-full group-hover:w-56 group-hover:h-56"></span>
                                        <span class="relative">ACHETER UN BILLET</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="text-start">
                    <ul>
                        <li class="text-base text-[#6a6b7c] leading-10 font-bold">
                                    <span class="text-red-600 me-2">
                                        <Icon name="material-symbols:calendar-month-sharp" />
                                    </span> 15 - 12 - 2023
                        </li>
                    </ul>
                </div>
                <div class="grid grid-cols-1 xl:grid-cols-2 gap-10 items-center mb-10">
                    <div class="col-span-1">
                        <div>
                            <img src="~/assets/images/events/07-10-2023.webp" alt="">
                        </div>
                    </div>
                    <div class="col-span-1">
                        <div>
                            <h3 class="text-3xl text-[#171822] font-semibold mb-[25px]">The 2019 Conference</h3>
                            <p class="mb-5 text-base text-[#6a6b7c] font-normal leading-7 mt-0 mx-0">
                                Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Classe aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce nec ante vitae lacus aliquet vulputé. Donec scelerisque accu msan molestie. Vestibulum ante ipsum primis chez faucibus orci luctus.
                            </p>
                            <ul>
                                <li class="text-base text-[#6a6b7c] leading-10">
                                    <span class="text-red-600 me-2">
                                        <Icon name="material-symbols:location-on-outline" />
                                    </span> Hôtèl Mercure de Bordeaux
                                </li>
                            </ul>

                            <div class="flex mt-10">
                                <div class="w-full">
                                    <a href="#_" class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-medium uppercase tracking-tighter text-black hover:text-white border border-[#331391] rounded-lg group">
                                        <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#331391] ext-white rounded-full group-hover:w-56 group-hover:h-56"></span>
                                        <span class="relative">ACHETER UN BILLET</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </div>
</template>

<style scoped>

</style>
