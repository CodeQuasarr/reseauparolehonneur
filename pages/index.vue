<script setup lang="ts">
import PresentationBannerComponent from "~/components/pages/home/PresentationBannerComponent.vue";
import EventDescriptionComponent from "~/components/pages/home/EventDescriptionComponent.vue";
import EventInformationComponent from "~/components/pages/home/EventInformationComponent.vue";
import EventSpeackerComponent from "~/components/pages/home/EventSpeackerComponent.vue";
import PriceInformationComponent from "~/components/pages/home/PriceInformationComponent.vue";
import {useEvenementStore} from "~/stores/evenementStore";

const nextEvent = ref<any>(null);
const speakers = ref<any>(null);

const { data, error } = await useFetch('/api/client', {
    method: 'GET',
});

if(data.value) {
    nextEvent.value = data.value.nextEvent;
    if (nextEvent.value && nextEvent.value.users) {
        speakers.value = nextEvent.value.users;
        useEvenementStore().setCanPay(true);
    }
}

console.log('data', data.value);


</script>

<template>
    <div>
        <!-- Section 1 -->
        <PresentationBannerComponent />
        <!-- Section 2 -->
        <EventDescriptionComponent :evenement="nextEvent" />
        <!-- Section 3 -->
        <EventInformationComponent/>
        <!-- Section 4 -->
        <EventSpeackerComponent :speakers="speakers" />
        <!-- Section 5 -->
        <PriceInformationComponent />


    </div>
</template>

<style scoped>

</style>
