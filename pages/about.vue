<script setup lang="ts">

import {fadeIn, scrollFadeIn} from "~/utils/animations";
import PriceInformationComponent from "~/components/pages/home/PriceInformationComponent.vue";
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
                            <span style="-webkit-text-fill-color: transparent; -webkit-text-stroke-width: 2px; -webkit-text-stroke-color: #fff;">
                                À PROPOS DE NOUS
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

        <section v-motion="scrollFadeIn()" class="w-full flex items-center justify-center my-32">
            <div class="container mx-auto">
                <div class="grid grid-cols-1">
                    <div class="w-full">
                        <div class="text-start">
                            <h2 class="mb-16 text-4xl font-bold text-[#171822]">Notre identité</h2>
                            <p class="mb-8 text-lg text-[#171822]">Parvenir à une croissance en s'appuyant sur le Réseau
                                Parole d'Honneur.
                            </p>
                            <p class="mb-12 text-lg text-[#171822]">
                                Le Réseau Parole d'Honneur constitue une plateforme incontournable pour le développement
                                personnel et professionnel, offrant des opportunités uniques de croissance et de succès.
                                Grâce à cette communauté engagée, les membres peuvent se connecter, acquérir de nouvelles
                                compétences, élargir leur réseau professionnel et accéder à des connaissances spécialisées.
                                La synergie créée favorise les collaborations, les partenariats stratégiques et les
                                opportunités d'affaires, ouvrant ainsi la voie vers le succès et la prospérité. En somme,
                                le Réseau Parole d'Honneur est un véritable tremplin vers la réalisation de ses ambitions
                                et l'accomplissement de ses objectifs les plus ambitieux.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-10 items-center">
                    <div class="col-span-1">
                        <div>
                            <img src="~/assets/images/abouts/077A0829.webp" alt="" loading="lazy">
                        </div>
                    </div>
                    <div class="col-span-1">
                        <div>
                            <h3 class="text-3xl text-[#171822] font-semibold mb-[25px]">The 2019 Conference</h3>
                            <p class="mb-5 text-base text-[#6a6b7c] font-normal leading-7 mt-0 mx-0">

                                Les conférences du Réseau Parole d'Honneur offrent une expérience unique en alliant l'expertise des conférenciers chevronnés partageant leurs expériences entrepreneuriales pertinentes à des moments de détente, ponctués de cocktails, permettant ainsi aux participants d'échanger personnellement avec les intervenants et de créer des liens précieux dans un environnement propice à l'apprentissage et à l'épanouissement professionnel.
                            </p>
                            <ul>
                                <li class="text-base text-[#6a6b7c] leading-10">
                                    <span class="text-red-600 me-2">
                                        <Icon name="ph:check-bold" />
                                    </span> Parcours Inspirants : Comment Transformer l'Expérience en Succès Entrepreneurial
                                </li>
                                <li class="text-base text-[#6a6b7c] leading-10">
                                    <span class="text-red-600 me-2">
                                        <Icon name="ph:check-bold" />
                                    </span> Réseautage Enrichi : Cocktails et Conversations Privées avec les Leaders de l'Industrie
                                </li>
                                <li class="text-base text-[#6a6b7c] leading-10">
                                    <span class="text-red-600 me-2">
                                        <Icon name="ph:check-bold" />
                                    </span> Stratégies Gagnantes : Explorer les Thématiques Incontournables de l'Entrepreneuriat Moderne
                                </li>
                                <li class="text-base text-[#6a6b7c] leading-10">
                                    <span class="text-red-600 me-2">
                                        <Icon name="ph:check-bold" />
                                    </span> Collaborations Fructueuses : Les Conférences Qui Ouvrent les Portes de l'Opportunité Professionnelle
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section v-motion="scrollFadeIn()" class="w-full flex items-center justify-center my-32 bg-gray-50">
            <div class="container mx-auto py-40">
                <div class="grid grid-cols-1">
                    <div class="w-full">
                        <div class="text-start">
                            <h2 class="mb-16 text-4xl font-bold text-[#171822]">Galerie de conférence</h2>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                        <img class="h-auto max-w-full" src="~/assets/images/conferences/077A0795.webp" alt="" loading="lazy">
                    </div>
                    <div>
                        <img class="h-auto max-w-full" src="~/assets/images/conferences/077A0977.webp" alt="" loading="lazy">
                    </div>
                    <div>
                        <img class="h-auto max-w-full" src="~/assets/images/conferences/077A0991.webp" alt="" loading="lazy">
                    </div>
                    <div>
                        <img class="h-auto max-w-full" src="~/assets/images/conferences/077A1019.webp" alt="" loading="lazy">
                    </div>
                    <div>
                        <img class="h-auto max-w-full" src="~/assets/images/conferences/077A1045.webp" alt="" loading="lazy">
                    </div>
                    <div>
                        <img class="h-auto max-w-full" src="~/assets/images/conferences/077A1056.webp" alt="" loading="lazy">
                    </div>
                    <div>
                        <img class="h-auto max-w-full" src="~/assets/images/conferences/077A1082.webp" alt="" loading="lazy">
                    </div>
                    <div>
                        <img class="h-auto max-w-full" src="~/assets/images/conferences/077A1065.webp" alt="" loading="lazy">
                    </div>
                </div>
            </div>
        </section>

        <section  class="w-full flex items-center justify-center my-32">
            <PriceInformationComponent />
        </section>


    </div>
</template>

<style scoped>

</style>
