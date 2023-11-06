<script setup lang="ts">

import {scrollFadeIn} from "~/utils/animations";
</script>

<template>
    <div>
        <section v-motion="scrollFadeIn()" class="relative px-4 bg-gray-200 py-36">
            <div class="w-full xl:w-8/12 mx-auto grid grid-cols-2 gap-6">
                <div class="col-span-full xl:col-span-1">
                    <div class="mb-50">

                        <div class="section-tittle mb-14">
                            <h2 class="text-3xl block text-[#26264b] font-bold">
                                Rencontre avec les maîtres de l'économie : Votre passage secret vers le succès entrepreneurial!
                            </h2>
                        </div>
                        <p class="text-base text-[#64676c] mb-[43px] xl:pr-[50px]">
                            Ne laissez pas passer cette opportunité unique ! Transformez vos idées en actions concrètes
                            aux côtés de spécialistes renommés. Rejoignez-nous pour rencontrer des décideurs économiques
                            inspirants et débloquez le potentiel de votre projet entrepreneurial. Inscrivez-vous maintenant
                            pour façonner votre avenir professionnel de manière inédite.
                        </p>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                            <div class="p-4">
                                <div class="flex items-center mb-4">
                                    <span class="mr-2"> <Icon name="gis:position" size="40"/> </span>
                                    <h5 class="text-lg font-semibold">Where</h5>
                                </div>
                                <p class="text-gray-700">New York, United States</p>
                            </div>
                            <div class="p-4">
                                <div class="flex items-center mb-4">
                                    <span class="mr-2"><span class="mr-2"> <Icon name="material-symbols:calendar-month" size="40"/> </span></span>
                                    <h5 class="text-lg font-semibold">When</h5>
                                </div>
                                <p class="text-gray-700">Jan. 21, 2021</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-full xl:col-span-1">
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>

</style>
