<script lang="ts" setup>
import {fadeIn} from "~/utils/animations";
import {ErrorMessage, Field, Form} from "vee-validate";


const captchaResultMessage = ref<string | null>(null);
const message = ref<string>('');
const lastName = ref<string>('');
const firstName = ref<string>('');
const subject = ref<string>('');


const handleExpectedResult = (payload: any) => {
    if (!payload) {
        captchaResultMessage.value = 'Le résultat est incorrecte';
        return;
    } else {
        captchaResultMessage.value = null;
    }

}

const sendMail = () => {

}

</script>

<template>
    <div>
        <section
            class="bg-cover bg-[url('~/assets/images/background/bg-1.webp')] bg-no-repeat bg-[center_center] bg-fixed relative z-0">
            <!-- overlay -->
            <div class="absolute content-[''] opacity-80 z-[-2] inset-0 bg-[#232429]"></div>
            <!-- overlay end -->
            <div class="w-full mx-auto px-[15px]">
                <div
                    class="relative min-h-[600px] flex flex-wrap mr-[-15px] ml-[-15px] items-center justify-center mx-0">
                    <div class="px-0 pt-12 w-full ms-20">
                        <h1 v-motion="fadeIn(1000)"
                            class="font-barlow text-3xl xl:text-4xl text-white leading-[0.9] uppercase mb-6 text-transparent font-bold">
                            <span class="uppercase"
                                  style="-webkit-text-fill-color: transparent; -webkit-text-stroke-width: 2px; -webkit-text-stroke-color: #fff;">
                                évènements
                            </span>
                        </h1>
                        <nav aria-label="Breadcrumb" class="flex text-white">
                            <ol class="inline-flex items-center space-x-1 md:space-x-3">
                                <li class="inline-flex items-center">
                                    <a class="inline-flex items-center text-md font-medium hover:text-blue-600 dark:text-gray-400"
                                       href="#">
                                        <svg aria-hidden="true" class="w-3 h-3 mr-2.5"
                                             fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                                        </svg>
                                        Accueil
                                    </a>
                                </li>
                                <li aria-current="page">
                                    <div class="flex items-center">
                                        <svg aria-hidden="true" class="w-3 h-3 text-gray-400 mx-1"
                                             fill="none" viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
                                            <path d="m1 9 4-4-4-4" stroke="currentColor" stroke-linecap="round"
                                                  stroke-linejoin="round" stroke-width="2"/>
                                        </svg>
                                        <span
                                            class="ml-1 text-md font-medium md:ml-2 dark:text-gray-400">A propos</span>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </section>

        <section class="p-2 w-full flex items-center justify-center my-20">
            <div class="container mx-auto">
                <div class="grid grid-cols-1">
                    <div class="w-full">
                        <div class="text-start">
                            <h2 class="mb-16 text-4xl font-bold text-[#171822]">Entrer en contact</h2>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-3 gap-10">
                    <div class="col-span-2">
                        <Form @submit="sendMail()">
                            <div class="mb-6">
                                <Field
                                    v-model="message"
                                    as="textarea"
                                    class=" w-full rounded py-3 text-body-color text-base border border-gray-400 resize-none outline-none focus-visible:shadow-none focus:border-black"
                                    name="message"
                                    placeholder="Saisir un message"
                                    rows="6"
                                />
                                <ErrorMessage class="text-red-500" name="message"/>
                            </div>

                            <div class="mb-6 grid grid-cols-2 gap-20">
                                <div class="col-span-1">
                                    <div class="mb-6">
                                        <Field
                                            v-model="lastName"
                                            class=" w-full rounded py-3 px-[14px] text-body-color text-base border border-gray-400 outline-none focus-visible:shadow-none focus:border-black "
                                            name="lastName"
                                            placeholder="Votre nom"
                                            type="text"
                                        />
                                        <ErrorMessage class="text-red-500" name="lastName"/>
                                    </div>
                                </div>
                                <div class="col-span-1">
                                    <div class="mb-6">
                                        <Field
                                            v-model="firstName"
                                            class=" w-full rounded py-3 px-[14px] text-body-color text-base border border-gray-400 outline-none focus-visible:shadow-none focus:border-black "
                                            name="firstName"
                                            placeholder="Votre prénom"
                                            type="text"
                                        />
                                        <ErrorMessage class="text-red-500" name="firstName"/>
                                    </div>
                                </div>
                            </div>

                            <div class="mb-6">
                                <Field
                                    v-model="subject"
                                    class=" w-full rounded py-3 px-[14px] text-body-color text-base border border-gray-400 outline-none focus-visible:shadow-none focus:border-black "
                                    name="subject"
                                    placeholder="Votre sujet"
                                    type="text"
                                />
                                <ErrorMessage class="text-red-500" name="subject"/>
                            </div>
                            <div class="mb-6">
                                <Captcha @expectedResult="handleExpectedResult"/>
                                <div v-if="captchaResultMessage" class="text-red-500"> {{ captchaResultMessage }}</div>
                            </div>
                            <div class="mb-6">
                                <button
                                    class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-medium uppercase tracking-tighter text-black hover:text-white border border-[#331391] rounded-lg group">
                                    <span
                                        class="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#331391] ext-white rounded-full group-hover:w-56 group-hover:h-56"></span>
                                    <span class="relative">ACHETER UN BILLET</span>
                                </button>
                            </div>
                        </Form>
                    </div>

                    <div class="col-span-1">
                        <ul>
                            <li class=" mb-5 text-base text-black leading-10">
                                    <span class="text-[#6a6b7c] me-2">
                                        <Icon name="ph:house-line-light" size="40"/>
                                    </span> Siège Social : Bordeaux, France
                            </li>
                            <li class="text-base text-black  leading-10">
                                    <span class="text-[#6a6b7c] me-2">
                                        <Icon name="ion:ipad" size="40"/>
                                    </span> (+33) 6 52 50 50 50 <br> <span class="text-[#6a6b7c]">Du lundi au vendredi de 9h à 18h</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    </div>
</template>

<style scoped>

</style>
