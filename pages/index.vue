<script setup lang="ts">
// import {useEvenementStore} from "~/stores/evenementStore";
//
import PresentationBannerComponent from "~/components/pages/home/PresentationBannerComponent.vue";
import EventDescriptionComponent from "~/components/pages/home/EventDescriptionComponent.vue";
import EventInformationComponent from "~/components/pages/home/EventInformationComponent.vue";
import EventSpeackerComponent from "~/components/pages/home/EventSpeackerComponent.vue";
import PriceInformationComponent from "~/components/pages/home/PriceInformationComponent.vue";

const nextEvent = ref<any>({
    id: null,
    title: null,
    content: null,
    startTime: null,
    startDate: null,
    address: null,
    users: [],
});
const speakers = ref<any>(null);
const startTime = ref<string|null>(null);
const startDate = ref<string|null>(null);
const address = ref<string|null>(null);
const id = ref<string|null>(null);

const { data, error } = await useFetch('/api/client', {
    method: 'GET',
});
//
if(data.value) {
    nextEvent.value = data.value.nextEvent;
    if (nextEvent.value && nextEvent.value.users) {
        startTime.value = nextEvent.value.startTime;
        startDate.value = nextEvent.value.startDate;
        address.value = nextEvent.value.address;
        id.value = nextEvent.value.id;
        speakers.value = nextEvent.value.users;
        useEvenementStore().setCanPay(true);
    }
}



</script>

<template>
    <div>
<!--         Section 1-->
        <PresentationBannerComponent :startDate="startDate" :startTime="startTime" :address="address" />
<!--         Section 2-->
        <EventDescriptionComponent :evenement="nextEvent" />
        <!-- Section 3 -->
        <EventInformationComponent/>
        <!-- Section 4 -->
        <EventSpeackerComponent :speakers="speakers" />
        <!-- Section 5 -->
        <PriceInformationComponent :eventId="id" />
    </div>
</template>

<style scoped>

</style>
