<script setup lang="ts">
import PresentationBannerComponent from "~/components/pages/home/PresentationBannerComponent.vue";
import EventDescriptionComponent from "~/components/pages/home/EventDescriptionComponent.vue";
import EventInformationComponent from "~/components/pages/home/EventInformationComponent.vue";
import EventSpeackerComponent from "~/components/pages/home/EventSpeackerComponent.vue";
import PriceInformationComponent from "~/components/pages/home/PriceInformationComponent.vue";


</script>

<template>
    <div>
        <!-- Section 1 -->
        <PresentationBannerComponent />
        <!-- Section 2 -->
        <EventDescriptionComponent />
        <!-- Section 3 -->
        <EventInformationComponent />
        <!-- Section 4 -->
        <EventSpeackerComponent />
        <!-- Section 5 -->
        <PriceInformationComponent />


    </div>
</template>

<style scoped>

</style>
