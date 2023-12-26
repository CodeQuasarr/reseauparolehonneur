<script setup lang="ts">
import {scrollFadeIn} from "~/utils/animations";

defineProps({
    speakers: {
        required: true,
    },
})
</script>

<template>
    <div>
        <section v-motion="scrollFadeIn()" class="py-36 bg-cover bg-no-repeat bg-[url('~/assets/images/background/bg-speacker-3.webp')]">
            <div class="w-full md:container xl:w-8/12 mx-auto">
                <div class="text-center pb-16">
                    <p class="uppercase mb-0 text-gray-300">REJOIGNEZ L'ÉVÉNEMENT</p>
                    <h2 class="text-white text-4xl font-semibold">Rencontrez les conférenciers</h2>
                </div>
                <div v-if="speakers" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-32">
                    <div class="col-span-full md:col-span-1">
                        <div class="card-speaker">
                            <img class="w-full rounded-0" src="https://preview.colorlib.com/theme/umeet/img/home/speaker-1.png" alt="">
                            <div class="speaker-footer bg-purple-900 bg-opacity-90 py-5 px-0 absolute bottom-0 left-0 w-full text-center">
                                <h4 class="text-white text-2xl mb-3">John Léonar</h4>
                                <p class="text-white text-base">Concepteur UX/UI Microsoft</p>
                            </div>
                            <div class="speaker-overlay bg-purple-800 bg-opacity-80 absolute top-0 left-0 w-full h-full opacity-0 transform -translate-y-60 transition-all duration-600 ease-in-out">
                                <ul class="speaker-social absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <li class="inline-block mr-4">
                                        <a class="text-gray-400" href="#">
                                            <Icon class="icon-overlay" name="formkit:facebook" />
                                        </a>
                                    </li>
                                    <li class="inline-block mr-4">
                                        <a class="text-gray-400" href="#">
                                            <Icon class="icon-overlay" name="mdi:twitter-circle" />
                                        </a>
                                    </li>
                                    <li class="inline-block">
                                        <a class="text-gray-400" href="#">
                                            <Icon class="icon-overlay" name="mdi:instagram" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-full md:col-span-1">
                        <div class="card-speaker">
                            <img class="w-full rounded-0" src="https://preview.colorlib.com/theme/umeet/img/home/speaker-1.png" alt="">
                            <div class="speaker-footer bg-purple-900 bg-opacity-90 py-5 px-0 absolute bottom-0 left-0 w-full text-center">
                                <h4 class="text-white text-2xl mb-3">John Léonar</h4>
                                <p class="text-white text-base">Concepteur UX/UI Microsoft</p>
                            </div>
                            <div class="speaker-overlay bg-purple-800 bg-opacity-80 absolute top-0 left-0 w-full h-full opacity-0 transform -translate-y-60 transition-all duration-600 ease-in-out">
                                <ul class="speaker-social absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <li class="inline-block mr-4">
                                        <a class="text-gray-400" href="#">
                                            <Icon class="icon-overlay" name="formkit:facebook" />
                                        </a>
                                    </li>
                                    <li class="inline-block mr-4">
                                        <a class="text-gray-400" href="#">
                                            <Icon class="icon-overlay" name="mdi:twitter-circle" />
                                        </a>
                                    </li>
                                    <li class="inline-block">
                                        <a class="text-gray-400" href="#">
                                            <Icon class="icon-overlay" name="mdi:instagram" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-full md:col-span-1">
                        <div class="card-speaker">
                            <img class="w-full rounded-0" src="https://preview.colorlib.com/theme/umeet/img/home/speaker-1.png" alt="">
                            <div class="speaker-footer bg-purple-900 bg-opacity-90 py-5 px-0 absolute bottom-0 left-0 w-full text-center">
                                <h4 class="text-white text-2xl mb-3">John Léonar</h4>
                                <p class="text-white text-base">Concepteur UX/UI Microsoft</p>
                            </div>
                            <div class="speaker-overlay bg-purple-800 bg-opacity-80 absolute top-0 left-0 w-full h-full opacity-0 transform -translate-y-60 transition-all duration-600 ease-in-out">
                                <ul class="speaker-social absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <li class="inline-block mr-4">
                                        <a class="text-gray-400" href="#">
                                            <Icon class="icon-overlay" name="formkit:facebook" />
                                        </a>
                                    </li>
                                    <li class="inline-block mr-4">
                                        <a class="text-gray-400" href="#">
                                            <Icon class="icon-overlay" name="mdi:twitter-circle" />
                                        </a>
                                    </li>
                                    <li class="inline-block">
                                        <a class="text-gray-400" href="#">
                                            <Icon class="icon-overlay" name="mdi:instagram" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-32">
                    <div class="col-span-full">
                        <div class="section-tittle mb-14">
                            <h2 class="text-center block text-gray-400 font-bold">
                                <Icon name="ci:info-circle" class="w-32 h-32 mr-2"/>
                            </h2>
                        </div>
                        <p class="text-base text-white mb-[43px] xl:pr-[50px]">
                            Nous sommes ravis de vous inviter à rencontrer les conférenciers qui participeront à nos prochains événements. Restez informé sur les profils, les expertises et les dates de leurs interventions. Nous sommes impatients de vous offrir des échanges stimulants. Merci de votre intérêt et de votre compréhension.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>

.card-speaker {
    border: 10px solid #fff;
    position: relative;
    overflow: hidden;
}

.card-speaker .speaker-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    background: rgba(59,29,130,0.9);
    padding: 22px 5px;
    z-index: 2;
    transition: all .7s ease
}

.card-speaker .speaker-footer h4 {
    color: #fff;
    font-size: 20px;
    margin-bottom: 3px
}

.card-speaker .speaker-footer p {
    margin-bottom: 0;
    color: #fff;
    font-size: 14px
}

.card-speaker .speaker-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(59,29,130,0.8);
    z-index: 1;
    transform: translateY(-60px);
    opacity: 0;
    transition: all .6s ease
}

.card-speaker:hover .speaker-overlay {
    opacity: 1;
    z-index: 1;
    transform: translateY(0)
}

.card-speaker:hover .speaker-footer {
    background: rgba(234,7,99,0.6)
}

.speaker-social {
    position: absolute;
    width: 100%;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
}

.speaker-social li {
    display: inline-block
}

.speaker-social li i,.speaker-social li span {
    font-size: 14px;
    color: #fff;
    opacity: .7
}

.speaker-social li::after {
    content: "|";
    color: #ea0763;
    margin-left: 9px;
    margin-right: 7px
}

.speaker-social li:last-child::after {
    display: none
}

.speaker-social li:hover .icon-overlay,.speaker-social li:hover span {
    color: #fff;
    opacity: 1
}

</style>
