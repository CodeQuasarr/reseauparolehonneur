<script setup lang="ts">

import {scrollFadeIn} from "~/utils/animations";
import {useEvenementStore} from "~/stores/evenementStore";
</script>

<template>
    <div>
        <section v-motion="scrollFadeIn()" class="my-20">
            <div class="container mx-auto">
                <div class="text-center pb-16">
                    <p class="uppercase mb-0 text-[#64676c]">REJOIGNEZ L'ÉVÉNEMENT</p>
                    <h2 class="text-[#331391] text-4xl font-semibold">Pourquoi rejoindre Réseau PH?</h2>
                    <img src="img/home/section-style.png" alt="">
                </div>
                <div class="flex flex-wrap justify-around">
                    <div class="m-full xl:w-[297px] mb-5 xl:mb-0 text-center">
                        <div class="w-[99px] h-[97px] bg-cover bg-[url('~/assets/images/background/icon-group.webp')] bg-no-repeat transition-all duration-[0.3s] ease-[ease] delay-200 mx-auto mb-5 flex items-center justify-center">
                            <Icon class="text-[#3b1d82]" name="ic:outline-emoji-events" size="45"/>
                        </div>
                        <h3 class="text-2xl text-[#242424] font-medium mb-3">Le réseau</h3>
                        <p class="text-[#64676c]">
                            Un réseau qui vous connecte avec des personnes partageant vos intérêts tout en favorisant
                            le développement de vos compétences.
                        </p>
                    </div>
                    <div class="m-full xl:w-[297px] mb-5 xl:mb-0 text-center">
                        <div class="w-[99px] h-[97px] bg-cover bg-[url('~/assets/images/background/icon-group.webp')] bg-no-repeat transition-all duration-[0.3s] ease-[ease] delay-200 mx-auto mb-5 flex items-center justify-center">
                            <Icon class="text-[#3b1d82]" name="icon-park-outline:cocktail" size="45"/>
                        </div>
                        <h3 class="text-2xl text-[#242424] font-medium mb-3">Cocktail business</h3>
                        <p class="text-[#64676c]">
                            Participez à un cocktail business, un événement où vous pourrez déguster tout en échangeant
                            avec des experts chevronnés de manière informelle et conviviale.
                        </p>
                    </div>
                    <div class="m-full xl:w-[297px] mb-5 xl:mb-0 text-center">
                        <div class="w-[99px] h-[97px] bg-cover bg-[url('~/assets/images/background/icon-group.webp')] bg-no-repeat transition-all duration-[0.3s] ease-[ease] delay-200 mx-auto mb-5 flex items-center justify-center">
                            <Icon class="text-[#3b1d82]" name="icon-park-solid:microphone-one" size="45"/>
                        </div>
                        <h3 class="text-2xl text-[#242424] font-medium mb-3">Grand orateur</h3>
                        <p class="text-[#64676c]">
                            Nos intervenants sont des experts dans leur domaine, prêts à vous transmettre
                            leur expertise et leur savoir-faire professionnel de manière exceptionnelle.
                        </p>
                    </div>
                </div>
                <div class="flex mt-10">
                    <div v-if="useEvenementStore().getCanPay" class="w-full text-center">
                        <a href="#_" class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-medium uppercase tracking-tighter text-black hover:text-white border border-[#331391] rounded-lg group">
                            <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#331391] ext-white rounded-full group-hover:w-56 group-hover:h-56"></span>
                            <span class="relative">ACHETER UN BILLET</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<style scoped>

</style>
