<script lang="ts" setup>
import {scrollFadeIn} from "~/utils/animations";
import {convertDate, convertHour} from "~/utils/config";

defineProps({
    evenement: {
        required: true,
    },
})
</script>

<template>
    <div>
        <section class="relative px-4 bg-gray-200 py-36">
            <div class="w-full xl:w-8/12 mx-auto grid grid-cols-2 gap-6">
                <div v-if="evenement" class="col-span-full">
                    <div class="mb-50">

                        <div class="section-tittle mb-14">
                            <h2 class="text-3xl block text-[#26264b] font-bold">{{ evenement.title }}</h2>
                        </div>
                        <p class="text-base text-[#64676c] mb-[43px] xl:pr-[50px]">{{ evenement.content }}</p>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                            <div class="p-4">
                                <div class="flex items-center mb-4">
                                    <span class="mr-2"> <Icon name="gis:position" size="40"/> </span>
                                    <h5 class="text-lg font-semibold">Où</h5>
                                </div>
                                <p class="text-gray-700">{{ evenement.address }}</p>
                            </div>
                            <div class="p-4">
                                <div class="flex items-center mb-4">
                                    <span class="mr-2"><span class="mr-2"> <Icon name="material-symbols:calendar-month"
                                                                                 size="40"/> </span></span>
                                    <h5 class="text-lg font-semibold">Quand</h5>
                                </div>
                                <p class="text-gray-700">{{ convertDate(evenement.startDate) }} à {{ convertHour(evenement.startTime) }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="!evenement" class="col-span-full">
                    <div class="mb-50">

                        <div class="section-tittle mb-14">
                            <h2 class="text-center block text-gray-400 font-bold">
                                <Icon name="ci:info-circle" class="w-32 h-32 mr-2"/>
                            </h2>
                        </div>
                        <p class="text-base text-[#64676c] mb-[43px] xl:pr-[50px]">
                            Nous sommes ravis de vous annoncer qu'une nouvelle série de conférences passionnantes est en cours de préparation. Veuillez rester à l'écoute pour plus de détails sur les sujets, les intervenants et les dates. Nous sommes impatients de partager ces moments enrichissants avec vous. Merci de votre intérêt et de votre compréhension.
                        </p>

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
