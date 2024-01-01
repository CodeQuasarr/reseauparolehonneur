<script setup lang="ts">

import {navigateTo} from "#app";
import {useTokenStore} from "~/stores/tokenStore";

const props = defineProps({
    eventId: {
        required: false,
    },
})


const user = useUserStore()
const subscribe = async () => {

    if (!useTokenStore().isLogged) {
        navigateTo('/login')
        return;
    }

    const {data, error} = await useFetch<any>('/api/protected/payments/init', {
        method: 'POST',
        body: {paymentKey: 1, eventId: props.eventId, mode: 'subscription'}
    })

    if (data.value) {
        navigateTo(data.value.url,
            {
                external: true,
                open: {
                    target: '_blank'
                }
            }
        )
        return;
    }
}

const payment = async (key: number) => {

    if (!useTokenStore().isLogged) {
        navigateTo('/login')
        return;
    }

    const {data, error} = await useFetch<any>('api/protected/payment', {
        method: 'POST',
        body: {paymentKey: key, eventId: props.eventId}
    })

    if (data.value) {
        navigateTo(data.value.url,
            {
                external: true,
                open: {
                    target: '_blank'
                }
            }
        )
        return;
    }
}

</script>

<template>
    <div class="container mx-auto">
        <div class="mx-auto max-w-2xl text-center">
            <span class="font-medium text-gray-400 tracking-widest">Notre prix</span>
            <h2 class="md:text-5xl text-3xl font-medium tracking-tight">Plans tarifaires</h2>
            <div class="w-10 mx-auto mt-5 bg-gradient-to-r from-cyan-500 to-blue-500 h-[2px]"></div>
            <p class="mt-6 text-xl/8 text-gray-600">Choisissez le plan qui correspond le mieux à vos besoins et profitez du processus créatif de brainstorming sur votre nouveau projet.</p>
        </div>

        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 px-4 2xl:px-28 mt-20">

            <div v-if="!user.isSubscriber" class="shadow-2xl relative z-20 ">
                <div class="absolute top-0 inset-x-0">
                    <div class="flex justify-center">
                        <span class="text-xs font-medium uppercase border border-gray-700 text-white bg-black px-2 py-1 rounded-md -mt-3">most popular</span>
                    </div>
                </div>
                <div class="group ">
                    <div class="price border rounded-xl group transition duration-300 border-gray-300">
                        <div class="text-center">
                            <div class="flex flex-col">
                                <div class="text-center pt-10">
                                    <h5 class="text-xl font-semibold">Professionnel</h5>
                                    <h2 class="text-5xl mt-8 mb-3 items-center align-middle">
                                        <sup class="text-2xl align-middle">€</sup>12
                                    </h2>
                                    <span>par mois</span>
                                </div>

                                <div class="p-10">
                                    <ul class="mb-10 text-center">
                                        <li class="my-4">
                                            <h5 class="font-medium">Séance de conseil de groupe</h5>
                                        </li>
                                        <li>
                                            <h5 class="font-medium">Acces canal discord privé</h5>
                                        </li>
                                        <li class="my-4">
                                            <h5 class="font-medium">Mise en relation avec nos partenaires</h5>
                                        </li>
                                        <li>
                                            <h5 class="font-medium">Réduction sur nos soirée inspirantes ( Atelier et Cocktail)</h5>
                                        </li>
                                        <li class="my-4">
                                            <h5 class="font-medium">6 postes sur nos réseaux sociaux</h5>
                                        </li>
                                    </ul>
                                    <div class="flex justify-center">
                                        <button @click="subscribe()" class="price-btn py-3 px-6 font-medium border rounded-md border-purple-500 bg-purple-500 text-white hover:bg-purple-500-800">
                                            s'abonner
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="price bg-gray-100 flex flex-col border border-gray-300 rounded-xl overflow-hidden group transition duration-300 hover:bg-white hover:shadow-2xl">
                <div class="text-center pt-10">
                    <h5 class="text-xl font-semibold">Basique</h5>
                    <h2 class="text-5xl mt-8 mb-3 items-center align-middle">
                        <sup class="text-2xl align-middle">€</sup> {{ !user.isSubscriber ? 85 : 40}}
                    </h2>
                    <span>par personne, par évènement</span>
                </div>

                <div class="p-10">
                    <ul class="mb-10 text-center">
                        <li class="my-4">
                            <h5 class="font-medium">Conférence interactive</h5>
                        </li>
                        <li>
                            <h5 class="font-medium">La rencontre des décideurs économiques</h5>
                        </li>
                        <li class="my-4">
                            <h5 class="font-medium">Réseautage</h5>
                        </li>
                        <li>
                            <h5 class="font-medium">Mise en relation avec nos partenaires</h5>
                        </li>
                        <li class="my-4">
                            <h5 class="font-medium">Apéro dînatoire</h5>
                        </li>
                    </ul>
<!--                    <div v-if="useEvenementStore().getCanPay" class="flex justify-center">-->
<!--                        <button @click="payment(!user.isSubscriber ? 3 : 2)" class="price-btn py-3 px-6 font-medium border rounded-md border-purple-500 text-purple-500 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-500">Get Basic</button>-->
<!--                    </div>-->
                </div>
            </div>

            <div class="price bg-gray-100 flex flex-col border border-gray-300 rounded-xl overflow-hidden group transition duration-300 hover:bg-white hover:shadow-2xl">
                <div class="text-center pt-10">
                    <h5 class="text-xl font-semibold">Ultime</h5>
                    <h2 class="text-5xl mt-8 mb-3 items-center align-middle">
                        <sup class="text-2xl align-middle">$</sup>155
                    </h2>
                    <span>par binôme, par événement</span>
                </div>

                <div class="p-10">
                    <ul class="mb-10 text-center">
                        <li class="my-4">
                            <h5 class="font-medium">Conférence interactive</h5>
                        </li>
                        <li>
                            <h5 class="font-medium">La rencontre des décideurs économiques</h5>
                        </li>
                        <li class="my-4">
                            <h5 class="font-medium">Réseautage</h5>
                        </li>
                        <li>
                            <h5 class="font-medium">Mise en relation avec nos partenaires</h5>
                        </li>
                        <li class="my-4">
                            <h5 class="font-medium">Apéro dînatoire</h5>
                        </li>
                    </ul>
<!--                    <div v-if="useEvenementStore().getCanPay" class="flex justify-center">-->
<!--                        <button @click="payment(4)" class="price-btn py-3 px-6 font-medium border rounded-md border-purple-500 text-purple-500 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-500">Get Basic</button>-->
<!--                    </div>-->
                </div>
            </div>

            <!-- Ajoutez les modifications similaires aux deux autres blocs -->
        </div>
        <h5 class="text-center font-medium mt-14">Intéressé par un plan personnalisé ? <a href="#" class="text-purple-500">Contactez-nous</a></h5>
    </div>
</template>

<style scoped>

</style>
