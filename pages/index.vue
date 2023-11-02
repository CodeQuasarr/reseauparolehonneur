<script setup lang="ts">

import {FwbButton} from "flowbite-vue";
</script>

<template>
    <div>
        <div class="w-full h-[850px] bg-cover bg-[url('~/assets/images/background/bg-1.webp')] bg-no-repeat bg-[center_center] bg-fixed relative z-0">
            <!-- overlay -->
            <div class="absolute content-[''] opacity-80 z-[-2] inset-0 bg-[#232429]"></div>
            <!-- overlay end -->
            <div class="w-full mx-auto px-[15px]">
                <div class="relative h-[850px] flex flex-wrap mr-[-15px] ml-[-15px] items-center justify-center mx-0">
                    <div class="px-0 text-center pt-12 w-full">
                        <span class="font-barlow text-[34px] text-[white] font-medium uppercase mb-0">Réseau Parole d'honneur</span>
                        <h1 class="font-barlow text-3xl xl:text-9xl text-white leading-[0.9] uppercase mb-6 text-transparent font-bold">
                            <span style="-webkit-text-fill-color: transparent; -webkit-text-stroke-width: 2px; -webkit-text-stroke-color: #fff;">
                            Découvrez la clé du succès entrepreneurial
                        </span>
                        </h1>
                        <p class="text-2xl uppercase text-white mt-0 mb-4 font-barlow">
                            <span class="font-barlow"> <span> <Icon name="ic:outline-location-on" /> </span> 20 Décembre, 2023</span>
                            <span class="font-barlow ms-10"> <span> <Icon name="material-symbols:calendar-month" /> </span> Bordeaux, Campus</span>
                        </p>
                        <div class="w-full md:w-6/12 mx-auto my-0 flex mb-4">
                            <div
                                style="-webkit-transform: matrix(1, 0.3, 0, 1, 0, 0); -ms-transform: matrix(1, 0.3, 0, 1, 0, 0); transform: matrix(1, 0.3, 0, 1, 0, 0);"
                                class="w-3/12 text-[50px] font-medium border text-white rounded mx-1 my-0 pb-2.5 border-solid border-[rgba(255,255,255,0.1)]">
                                11
                                <span class="text-xl block text-[#ed03be] uppercase">Mois</span>
                            </div>
                            <div
                                style="-webkit-transform: matrix(1, 0.3, 0, 1, 0, 0); -ms-transform: matrix(1, 0.3, 0, 1, 0, 0); transform: matrix(1, 0.3, 0, 1, 0, 0);"
                                class="w-3/12 text-[50px] font-medium border text-white rounded mx-1 my-0 pb-2.5 border-solid border-[rgba(255,255,255,0.1)]">
                                10
                                <span class="text-xl block text-[#ed03be] uppercase">Jous</span>
                            </div>
                            <div
                                style="-webkit-transform: matrix(1, 0.3, 0, 1, 0, 0); -ms-transform: matrix(1, 0.3, 0, 1, 0, 0); transform: matrix(1, 0.3, 0, 1, 0, 0);"
                                class="w-3/12 text-[50px] font-medium border text-white rounded mx-1 my-0 pb-2.5 border-solid border-[rgba(255,255,255,0.1)]">
                                10
                                <span class="text-xl block text-[#ed03be] uppercase">Heures</span>
                            </div>
                            <div
                                style="-webkit-transform: matrix(1, 0.3, 0, 1, 0, 0); -ms-transform: matrix(1, 0.3, 0, 1, 0, 0); transform: matrix(1, 0.3, 0, 1, 0, 0);"
                                class="w-3/12 text-[50px] font-medium border text-white rounded mx-1 my-0 pb-2.5 border-solid border-[rgba(255,255,255,0.1)]">
                                59
                                <span class="text-xl block text-[#ed03be] uppercase">Minutes</span>
                            </div>
                            <div
                                style="-webkit-transform: matrix(1, 0.3, 0, 1, 0, 0); -ms-transform: matrix(1, 0.3, 0, 1, 0, 0); transform: matrix(1, 0.3, 0, 1, 0, 0);"
                                class="w-3/12 text-[50px] font-medium border text-white rounded mx-1 my-0 pb-2.5 border-solid border-[rgba(255,255,255,0.1)]">
                                59
                                <span class="text-xl block text-[#ed03be] uppercase">Secondes</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
