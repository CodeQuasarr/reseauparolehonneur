<script setup lang="ts">

import {scrollFadeIn} from "~/utils/animations";
</script>

<template>
    <div>
        <section v-motion="scrollFadeIn()" class="py-20 relative">
            <div class="container mx-auto">
                <div class="mx-auto max-w-2xl text-center">
                    <span class="font-medium text-gray-400 tracking-widest">our price</span>
                    <h2 class="md:text-5xl text-3xl font-medium tracking-tight mt-7">Price Plans</h2>
                    <div class="w-10 mx-auto mt-5 bg-gradient-to-r from-cyan-500 to-blue-500 h-[2px]"></div>
                    <p class="mt-6 text-xl/8 text-gray-600">Choose the plan that suits your needs best and enjoy the creative process of brainstorming the new project of yours.</p>
                </div>

                <div class="grid lg:grid-cols-3 grid-cols-1 gap-10 px-4 2xl:px-28 mt-20">

                    <div class="price flex flex-col border border-gray-300 rounded-xl overflow-hidden group transition duration-300 hover:bg-purple-900 hover:text-white hover:border-purple-500">
                        <div class="text-center pt-10">
                            <h5 class="text-xl font-semibold">Basic</h5>
                            <h2 class="text-5xl mt-8 mb-3 items-center align-middle">
                                <sup class="text-2xl align-middle">€</sup>49
                            </h2>
                            <span>per user, per month</span>
                        </div>

                        <div class="p-10">
                            <ul class="mb-10 text-center">
                                <li class="my-4">
                                    <h5 class="font-medium">10k Visitors/mo</h5>
                                </li>
                                <li>
                                    <h5 class="font-medium">10 Funnels, 50 Pages</h5>
                                </li>
                                <li class="my-4">
                                    <h5 class="font-medium">Unlimited Transactions</h5>
                                </li>
                                <li>
                                    <h5 class="font-medium">Analytics</h5>
                                </li>
                                <li class="my-4">
                                    <h5 class="font-medium">lnstegrations</h5>
                                </li>
                                <li class="my-4">
                                    <h5 class="font-medium text-gray-500 line-through">Audience Date</h5>
                                </li>
                                <li class="my-4">
                                    <h5 class="font-medium text-gray-500 line-through">Premium templates</h5>
                                </li>
                                <li class="my-4">
                                    <h5 class="font-medium text-gray-500 line-through">White Labelling</h5>
                                </li>
                            </ul>
                            <div class="flex justify-center">
                                <a href="#" class="price-btn py-3 px-6 font-medium border rounded-md border-purple-500 text-purple-500 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-500">Get Basic</a>
                            </div>
                        </div>
                    </div>

                    <div class="relative z-20 ">
                        <div class="absolute top-0 inset-x-0">
                            <div class="flex justify-center">
                                <span class="text-xs font-medium uppercase border border-gray-700 text-white bg-black px-2 py-1 rounded-md -mt-3">most popular</span>
                            </div>
                        </div>
                        <div class="group ">
                            <div class="price border rounded-xl group transition duration-300 border-gray-300 hover:bg-purple-900 hover:text-white hover:border-purple-500">
                                <div class="text-center">
                                    <div class="flex flex-col">
                                        <div class="text-center pt-10">
                                            <h5 class="text-xl font-semibold">Professional</h5>
                                            <h2 class="text-5xl mt-8 mb-3 items-center align-middle">
                                                <sup class="text-2xl align-middle">€</sup>12
                                            </h2>
                                            <span>per user, per month</span>
                                        </div>

                                        <div class="p-10">
                                            <ul class="mb-10 text-center">
                                                <li class="my-4">
                                                    <h5 class="font-medium">10k Visitors/mo</h5>
                                                </li>
                                                <li>
                                                    <h5 class="font-medium">10 Funnels, 50 Pages</h5>
                                                </li>
                                                <li class="my-4">
                                                    <h5 class="font-medium">Unlimited Transactions</h5>
                                                </li>
                                                <li>
                                                    <h5 class="font-medium">Analytics</h5>
                                                </li>
                                                <li class="my-4">
                                                    <h5 class="font-medium">lnstegrations</h5>
                                                </li>
                                                <li class="my-4">
                                                    <h5 class="font-medium">Audience Date</h5>
                                                </li>
                                                <li class="my-4">
                                                    <h5 class="font-medium">Premium templates</h5>
                                                </li>
                                                <li class="my-4">
                                                    <h5 class="font-medium text-gray-500 line-through">White Labelling</h5>
                                                </li>
                                            </ul>
                                            <div class="flex justify-center">
                                                <a href="#" class="price-btn py-3 px-6 font-medium border rounded-md border-purple-500 bg-purple-500 text-white hover:bg-purple-500-800">Get Pro</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="price flex flex-col border border-gray-300 rounded-xl overflow-hidden group transition duration-300 hover:bg-purple-900 hover:text-white hover:border-purple-500">
                        <div class="text-center pt-10">
                            <h5 class="text-xl font-semibold">Ultimate</h5>
                            <h2 class="text-5xl mt-8 mb-3 items-center align-middle">
                                <sup class="text-2xl align-middle">$</sup>89
                            </h2>
                            <span>per user, per month</span>
                        </div>

                        <div class="p-10">
                            <ul class="mb-10 text-center">
                                <li class="my-4">
                                    <h5 class="font-medium">10k Visitors/mo</h5>
                                </li>
                                <li>
                                    <h5 class="font-medium">10 Funnels, 50 Pages</h5>
                                </li>
                                <li class="my-4">
                                    <h5 class="font-medium">Unlimited Transactions</h5>
                                </li>
                                <li>
                                    <h5 class="font-medium">Analytics</h5>
                                </li>
                                <li class="my-4">
                                    <h5 class="font-medium">lnstegrations</h5>
                                </li>
                                <li class="my-4">
                                    <h5 class="font-medium">Audience Date</h5>
                                </li>
                                <li class="my-4">
                                    <h5 class="font-medium">Premium templates</h5>
                                </li>
                                <li class="my-4">
                                    <h5 class="font-medium">White Labelling</h5>
                                </li>
                            </ul>
                            <div class="flex justify-center">
                                <a href="#" class="price-btn py-3 px-6 font-medium border rounded-md border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-500">Get Ultimate</a>
                            </div>
                        </div>
                    </div>

                    <!-- Ajoutez les modifications similaires aux deux autres blocs -->
                </div>
                <h5 class="text-center font-medium mt-14">lnterested in a custom plan? <a href="#" class="text-purple-500">Get in touch</a></h5>
            </div>
        </section>
    </div>
</template>

<style scoped>

.price:hover .price-btn {
    background: #ea0763;
    border-color: #ea0763;
    color: #fff
}
</style>
