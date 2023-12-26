<script setup lang="ts">

import {fadeIn} from "~/utils/animations";
import {convertDate} from "~/utils/config";

const props = defineProps({
    startDate: {
        required: true,
    },
    startTime: {
        required: true,
    },
    address: {
        required: true,
    },
});

let months = ref(0);
let days = ref(0);
let hours = ref(0);
let minutes = ref(0);
let seconds = ref(0);

/*-------------------------------- Mounted --------------------------------*/

onMounted(() => {
    startCountdown();
});
/*-------------------------------- Methods --------------------------------*/

const startCountdown = () => {
    setInterval(() => {
        const now = new Date().getTime();
        const eventStartDate = new Date( props.startDate as string);
        const eventStartTime = props.startTime;

        // Créez une nouvelle date en utilisant l'année, le mois et le jour de l'événement, et 19h30 comme heure et minute.
        const eventStartDateTime = new Date(
            eventStartDate.getFullYear(),
            eventStartDate.getMonth(),
            eventStartDate.getDate(),
            19, // Heure 19 (19h)
            30 // Minutes 30
        );

        // Si l'heure de début de l'événement est après 19h30, ajoutez un jour au décompte.
        if (eventStartTime && eventStartTime > '19:30') {
            eventStartDateTime.setDate(eventStartDate.getDate() + 1);
        }

        const distance = eventStartDateTime.getTime() - now;

        if (distance > 0) {
            months.value = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
            days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
            hours.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            seconds.value = Math.floor((distance % (1000 * 60)) / 1000);
        } else {
            months.value = 0;
            days.value = 0;
            hours.value = 0;
            minutes.value = 0;
            seconds.value = 0;
        }
    }, 1000);
};

const formatNumber = (value: any) => {
    return value < 10 ? `0${value}` : value;
};


</script>

<template>
    <div>
        <section class="w-full h-[850px] bg-cover bg-[url('~/assets/images/background/bg-1.webp')] bg-no-repeat bg-[center_center] bg-fixed relative z-0">
            <!-- overlay -->
            <div class="absolute content-[''] opacity-80 z-[-2] inset-0 bg-[#232429]"></div>
            <!-- overlay end -->
            <div class="w-full mx-auto px-[15px]">
                <div class="relative h-[850px] flex flex-wrap mr-[-15px] ml-[-15px] items-center justify-center mx-0">
                    <div class="px-0 text-center pt-12 w-full">
                        <span v-motion="fadeIn(500)" class="font-barlow text-[34px] text-[white] font-medium uppercase mb-0">Réseau Parole d'honneur</span>
                        <h1 v-motion="fadeIn(1000)" class="font-barlow text-3xl xl:text-8xl text-white leading-[0.9] uppercase mb-6 text-transparent font-bold">
                            <span style="-webkit-text-fill-color: transparent; -webkit-text-stroke-width: 2px; -webkit-text-stroke-color: #fff;">
                                Découvrez la clé du succès entrepreneurial
                            </span>
                        </h1>
                        <div v-if="props.startDate && props.address">
                            <p v-motion="fadeIn(1500)" class="text-2xl uppercase text-white mt-0 mb-4 font-barlow">
                                <span class="font-barlow"> <span> <Icon name="material-symbols:calendar-month" /> </span> {{ convertDate(props.startDate) }}</span>
                                <span class="font-barlow ms-10"> <span> <Icon name="ic:outline-location-on" /> </span> {{ props.address }}</span>
                            </p>
                            <div v-motion="fadeIn(2000)" class="w-full md:w-6/12 mx-auto my-0 flex mb-4">
                                <div
                                    style="-webkit-transform: matrix(1, 0.3, 0, 1, 0, 0); -ms-transform: matrix(1, 0.3, 0, 1, 0, 0); transform: matrix(1, 0.3, 0, 1, 0, 0);"
                                    class="w-3/12 text-[50px] font-medium border text-white rounded mx-1 my-0 pb-2.5 border-solid border-[rgba(255,255,255,0.1)]">
                                    {{ formatNumber(months) }}
                                    <span class="text-xl block text-[#ed03be] uppercase">Mois</span>
                                </div>
                                <div
                                    style="-webkit-transform: matrix(1, 0.3, 0, 1, 0, 0); -ms-transform: matrix(1, 0.3, 0, 1, 0, 0); transform: matrix(1, 0.3, 0, 1, 0, 0);"
                                    class="w-3/12 text-[50px] font-medium border text-white rounded mx-1 my-0 pb-2.5 border-solid border-[rgba(255,255,255,0.1)]">
                                    {{ formatNumber(days) }}
                                    <span class="text-xl block text-[#ed03be] uppercase">Jous</span>
                                </div>
                                <div
                                    style="-webkit-transform: matrix(1, 0.3, 0, 1, 0, 0); -ms-transform: matrix(1, 0.3, 0, 1, 0, 0); transform: matrix(1, 0.3, 0, 1, 0, 0);"
                                    class="w-3/12 text-[50px] font-medium border text-white rounded mx-1 my-0 pb-2.5 border-solid border-[rgba(255,255,255,0.1)]">
                                    {{ formatNumber(hours) }}
                                    <span class="text-xl block text-[#ed03be] uppercase">Heures</span>
                                </div>
                                <div
                                    style="-webkit-transform: matrix(1, 0.3, 0, 1, 0, 0); -ms-transform: matrix(1, 0.3, 0, 1, 0, 0); transform: matrix(1, 0.3, 0, 1, 0, 0);"
                                    class="w-3/12 text-[50px] font-medium border text-white rounded mx-1 my-0 pb-2.5 border-solid border-[rgba(255,255,255,0.1)]">
                                    {{ formatNumber(minutes) }}
                                    <span class="text-xl block text-[#ed03be] uppercase">Minutes</span>
                                </div>
                                <div
                                    style="-webkit-transform: matrix(1, 0.3, 0, 1, 0, 0); -ms-transform: matrix(1, 0.3, 0, 1, 0, 0); transform: matrix(1, 0.3, 0, 1, 0, 0);"
                                    class="w-3/12 text-[50px] font-medium border text-white rounded mx-1 my-0 pb-2.5 border-solid border-[rgba(255,255,255,0.1)]">
                                    {{ formatNumber(seconds) }}
                                    <span class="text-xl block text-[#ed03be] uppercase">Secondes</span>
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
