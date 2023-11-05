<script setup lang="ts">

const animateFadeIn = (duration: number) => {
    return {
        initial: { opacity: 0, y: -200 },
        enter: { opacity: 1, y: 0, transition: { duration: duration, delay: 0.5, ease: [0.48, 0.15, 0.25, 0.96],}, },
        leave: "hidden",
        class:"hidden xl:flex"
    }
}
const animateFadeInb = () => {
    return {
        initial: {
            opacity: 0, y: -10
        },
        visible: {
            opacity: 1, y: 0,
            transition: {
                delay: 300,
                duration: 500,

            },
        },
    }
}

</script>

<template>
    <div>
        <div class="w-full h-[850px] bg-cover bg-[url('~/assets/images/background/bg-1.webp')] bg-no-repeat bg-[center_center] bg-fixed relative z-0">
            <!-- overlay -->
            <div class="absolute content-[''] opacity-80 z-[-2] inset-0 bg-[#232429]"></div>
            <!-- overlay end -->
            <div class="w-full mx-auto px-[15px]">
                <div class="relative h-[850px] flex flex-wrap mr-[-15px] ml-[-15px] items-center justify-center mx-0">
                    <div class="px-0 text-center pt-12 w-full">
                        <span v-motion="animateFadeIn(500)" class="font-barlow text-[34px] text-[white] font-medium uppercase mb-0">Réseau Parole d'honneur</span>
                        <h1 v-motion="animateFadeIn(1000)" class="font-barlow text-3xl xl:text-9xl text-white leading-[0.9] uppercase mb-6 text-transparent font-bold">
                            <span style="-webkit-text-fill-color: transparent; -webkit-text-stroke-width: 2px; -webkit-text-stroke-color: #fff;">
                                Découvrez la clé du succès entrepreneurial
                            </span>
                        </h1>
                        <p v-motion="animateFadeIn(1500)" class="text-2xl uppercase text-white mt-0 mb-4 font-barlow">
                            <span class="font-barlow"> <span> <Icon name="ic:outline-location-on" /> </span> 20 Décembre, 2023</span>
                            <span class="font-barlow ms-10"> <span> <Icon name="material-symbols:calendar-month" /> </span> Bordeaux, Campus</span>
                        </p>
                        <div v-motion="animateFadeIn(2000)" class="w-full md:w-6/12 mx-auto my-0 flex mb-4">
                            <div
                                style="-webkit-transform: matrix(1, 0.3, 0, 1, 0, 0); -ms-transform: matrix(1, 0.3, 0, 1, 0, 0); transform: matrix(1, 0.3, 0, 1, 0, 0);"
                                class="w-3/12 text-[50px] font-medium border text-white rounded mx-1 my-0 pb-2.5 border-solid border-[rgba(255,255,255,0.1)]">
                                11
                                <span class="text-xl block text-[#ed03be] uppercase">Mois</span>
                            </div>
                            <div
                                style="-webkit-transform: matrix(1, 0.3, 0, 1, 0, 0); -ms-transform: matrix(1, 0.3, 0, 1, 0, 0); transform: matrix(1, 0.3, 0, 1, 0, 0);"
                                class="w-3/12 text-[50px] font-medium border text-white rounded mx-1 my-0 pb-2.5 border-solid border-[rgba(255,255,255,0.1)]">
                                10
                                <span class="text-xl block text-[#ed03be] uppercase">Jous</span>
                            </div>
                            <div
                                style="-webkit-transform: matrix(1, 0.3, 0, 1, 0, 0); -ms-transform: matrix(1, 0.3, 0, 1, 0, 0); transform: matrix(1, 0.3, 0, 1, 0, 0);"
                                class="w-3/12 text-[50px] font-medium border text-white rounded mx-1 my-0 pb-2.5 border-solid border-[rgba(255,255,255,0.1)]">
                                10
                                <span class="text-xl block text-[#ed03be] uppercase">Heures</span>
                            </div>
                            <div
                                style="-webkit-transform: matrix(1, 0.3, 0, 1, 0, 0); -ms-transform: matrix(1, 0.3, 0, 1, 0, 0); transform: matrix(1, 0.3, 0, 1, 0, 0);"
                                class="w-3/12 text-[50px] font-medium border text-white rounded mx-1 my-0 pb-2.5 border-solid border-[rgba(255,255,255,0.1)]">
                                59
                                <span class="text-xl block text-[#ed03be] uppercase">Minutes</span>
                            </div>
                            <div
                                style="-webkit-transform: matrix(1, 0.3, 0, 1, 0, 0); -ms-transform: matrix(1, 0.3, 0, 1, 0, 0); transform: matrix(1, 0.3, 0, 1, 0, 0);"
                                class="w-3/12 text-[50px] font-medium border text-white rounded mx-1 my-0 pb-2.5 border-solid border-[rgba(255,255,255,0.1)]">
                                59
                                <span class="text-xl block text-[#ed03be] uppercase">Secondes</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section v-motion="animateFadeInb()" class="relative px-4 bg-gray-200 py-36">
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

        <section v-motion="animateFadeInb()" class="my-20">
            <div class="container mx-auto">
                <div class="text-center pb-16">
                    <p class="uppercase mb-0 text-[#64676c]">REJOIGNEZ L'ÉVÉNEMENT</p>
                    <h2 class="text-[#331391] text-4xl font-semibold">Pourquoi rejoindre Réseau PH?</h2>
                    <img src="img/home/section-style.png" alt="">
                </div>
                <div class="flex flex-wrap justify-around">
                    <div class="m-full xl:w-[297px] mb-5 xl:mb-0 text-center">
                        <div class="w-[99px] h-[97px] bg-cover bg-[url('~/assets/images/background/icon-group.webp')] bg-no-repeat transition-all duration-[0.3s] ease-[ease] delay-200 mx-auto mb-5 flex items-center justify-center">
                            <Icon class="text-[#3b1d82]" name="ic:outline-emoji-events" size="45"/>
                        </div>
                        <h3 class="text-2xl text-[#242424] font-medium mb-3">Le réseau</h3>
                        <p class="text-[#64676c]">
                            Un réseau qui vous connecte avec des personnes partageant vos intérêts tout en favorisant
                            le développement de vos compétences.
                        </p>
                    </div>
                    <div class="m-full xl:w-[297px] mb-5 xl:mb-0 text-center">
                        <div class="w-[99px] h-[97px] bg-cover bg-[url('~/assets/images/background/icon-group.webp')] bg-no-repeat transition-all duration-[0.3s] ease-[ease] delay-200 mx-auto mb-5 flex items-center justify-center">
                            <Icon class="text-[#3b1d82]" name="icon-park-outline:cocktail" size="45"/>
                        </div>
                        <h3 class="text-2xl text-[#242424] font-medium mb-3">Cocktail business</h3>
                        <p class="text-[#64676c]">
                            Participez à un cocktail business, un événement où vous pourrez déguster tout en échangeant
                            avec des experts chevronnés de manière informelle et conviviale.
                        </p>
                    </div>
                    <div class="m-full xl:w-[297px] mb-5 xl:mb-0 text-center">
                        <div class="w-[99px] h-[97px] bg-cover bg-[url('~/assets/images/background/icon-group.webp')] bg-no-repeat transition-all duration-[0.3s] ease-[ease] delay-200 mx-auto mb-5 flex items-center justify-center">
                            <Icon class="text-[#3b1d82]" name="icon-park-solid:microphone-one" size="45"/>
                        </div>
                        <h3 class="text-2xl text-[#242424] font-medium mb-3">Grand orateur</h3>
                        <p class="text-[#64676c]">
                            Nos intervenants sont des experts dans leur domaine, prêts à vous transmettre
                            leur expertise et leur savoir-faire professionnel de manière exceptionnelle.
                        </p>
                    </div>
                </div>
                <div class="flex mt-10">
                    <div class="w-full text-center">
                        <a href="#_" class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-medium uppercase tracking-tighter text-black hover:text-white border border-[#331391] rounded-lg group">
                            <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#331391] ext-white rounded-full group-hover:w-56 group-hover:h-56"></span>
                            <span class="relative">ACHETER UN BILLET</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section v-motion="animateFadeInb()" class="py-36 bg-cover bg-no-repeat bg-[url('~/assets/images/background/bg-speacker-3.webp')]">
            <div class="w-full xl:w-8/12 mx-auto">
                <div class="text-center pb-16">
                    <p class="uppercase mb-0 text-[#64676c]">REJOIGNEZ L'ÉVÉNEMENT</p>
                    <h2 class="text-white text-4xl font-semibold">Rencontrez les conférenciers</h2>
                </div>
                <div class="grid grid-cols-3 gap-32">
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
                                        <a href="#">
                                            <Icon class="icon-overlay" name="formkit:facebook" />
                                        </a>
                                    </li>
                                    <li class="inline-block mr-4">
                                        <a href="#">
                                            <Icon class="icon-overlay" name="mdi:twitter-circle" />
                                        </a>
                                    </li>
                                    <li class="inline-block">
                                        <a href="#">
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
                                        <a href="#">
                                            <Icon class="icon-overlay" name="formkit:facebook" />
                                        </a>
                                    </li>
                                    <li class="inline-block mr-4">
                                        <a href="#">
                                            <Icon class="icon-overlay" name="mdi:twitter-circle" />
                                        </a>
                                    </li>
                                    <li class="inline-block">
                                        <a href="#">
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
                                        <a href="#">
                                            <Icon class="icon-overlay" name="formkit:facebook" />
                                        </a>
                                    </li>
                                    <li class="inline-block mr-4">
                                        <a href="#">
                                            <Icon class="icon-overlay" name="mdi:twitter-circle" />
                                        </a>
                                    </li>
                                    <li class="inline-block">
                                        <a href="#">
                                            <Icon class="icon-overlay" name="mdi:instagram" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- Répétez la structure ci-dessus pour les autres conférenciers -->
                </div>
            </div>
        </section>


        <section v-motion="animateFadeInb()" class="py-20 relative z-50">
            <div class="container mx-auto">
                <div class="mx-auto max-w-2xl sm:text-center">
                    <span class="font-medium text-gray-400 tracking-widest">our price</span>
                    <h2 class="md:text-5xl text-3xl font-medium tracking-tight mt-7">Price Plans</h2>
                    <div class="w-10 mx-auto mt-5 bg-gradient-to-r from-cyan-500 to-blue-500 h-[2px]"></div>
                    <p class="mt-6 text-xl/8 text-gray-600">Choose the plan that suits your needs best and enjoy the creative process of brainstorming the new project of yours.</p>
                </div>

                <div class="grid lg:grid-cols-3 grid-cols-1 gap-10 2xl:px-28 mt-20">

                    <div class="price flex flex-col border border-gray-300 rounded-xl overflow-hidden group transition duration-300 hover:bg-purple-900 hover:text-white hover:border-purple-500">
                        <div class="text-center pt-10">
                            <h5 class="text-xl font-semibold">Basic</h5>
                            <h2 class="text-5xl mt-8 mb-3 items-center align-middle">
                                <sup class="text-2xl align-middle">$</sup>49
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

        <footer  class="ftco-footer">
            <div class="container mx-auto">
                <div class="grid grid-cols-5 mb-5">
                    <div class="w-full sm:w-full md:w-auto">
                        <div class="ftco-footer-widget mb-4">
                            <h2 class="ftco-heading-2 logo"><a href="#">Convention</a></h2>
                            <p>Far far away, behind the word mountains, far from the countries.</p>
                            <ul class="ftco-footer-social list-unstyled mt-2">
                                <li class="ftco-animate fadeInUp ftco-animated"><a href="#"><span class="fa fa-twitter"></span></a></li>
                                <li class="ftco-animate fadeInUp ftco-animated"><a href="#"><span class="fa fa-facebook"></span></a></li>
                                <li class="ftco-animate fadeInUp ftco-animated"><a href="#"><span class="fa fa-instagram"></span></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="w-full sm:w-full md:w-auto">
                        <div class="ftco-footer-widget mb-4 md:ml-4">
                            <h2 class="ftco-heading-2">Explore</h2>
                            <ul class="list-unstyled">
                                <li><a href="#"><span class="mr-2"><Icon name="ic:baseline-chevron-right" /></span>About</a></li>
                                <li><a href="#"><span class="mr-2"><Icon name="ic:baseline-chevron-right" /></span>Contact</a></li>
                                <li><a href="#"><span class="mr-2"><Icon name="ic:baseline-chevron-right" /></span>Speaker</a></li>
                                <li><a href="#"><span class="mr-2"><Icon name="ic:baseline-chevron-right" /></span>Blog</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="w-full sm:w-full md:w-auto">
                        <div class="ftco-footer-widget mb-4 md:ml-4">
                            <h2 class="ftco-heading-2">Info</h2>
                            <ul class="list-unstyled">
                                <li><a href="#"><span class="mr-2"><Icon name="ic:baseline-chevron-right" /></span>Join us</a></li>
                                <li><a href="#"><span class="mr-2"><Icon name="ic:baseline-chevron-right" /></span>Buy Ticket</a></li>
                                <li><a href="#"><span class="mr-2"><Icon name="ic:baseline-chevron-right" /></span>Privacy &amp; Policy</a></li>
                                <li><a href="#"><span class="mr-2"><Icon name="ic:baseline-chevron-right" /></span>Term &amp; Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="w-full sm:w-full md:w-auto">
                        <div class="ftco-footer-widget mb-4">
                            <h2 class="ftco-heading-2">Get Your Seat</h2>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            <a href="#" class="btn btn-primary px-3 py-2">Buy Ticket</a>
                        </div>
                    </div>
                    <div class="w-full sm:w-full md:w-auto">
                        <div class="ftco-footer-widget mb-4">
                            <h2 class="ftco-heading-2">Have a Questions?</h2>
                            <div class="block-23 mb-3">
                                <ul>
                                    <li><span class="icon fa fa-map marker"></span><span class="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                                    <li><a href="#"><span class="icon fa fa-phone"></span><span class="text">+2 392 3929 210</span></a></li>
                                    <li><a href="#"><span class="icon fa fa-paper-plane pr-4"></span><span class="text">info@yourdomain.com</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full px-0 py-5 bg-black">
                <div class="container mx-auto">
                    <div class="flex">
                        <div class="w-full">
                            <p class="mb-0" style="color: rgba(255,255,255,.5);">Copyright ©{{ new Date().getFullYear() }} All rights reserved | This template is made with <i class="fa fa-heart color-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="nofollow noopener">Colorlib</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

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

.price:hover .price-btn {
    background: #ea0763;
    border-color: #ea0763;
    color: #fff
}


.ftco-footer {
    font-size: 16px;
    padding: 5em 0 0 0;
    background: #141b25;
    background: #232429;
    color: rgba(255, 255, 255, 0.5);
    position: relative;
    z-index: 0;
}
.ftco-footer .logo a {
    position: relative; }
.ftco-footer .ftco-footer-widget h2 {
    font-weight: normal;
    color: #fff;
    margin-bottom: 30px;
    font-size: 22px;
    font-weight: 700;
    text-transform: uppercase; }
.ftco-footer .ftco-footer-widget ul li {
    margin-bottom: 10px;
}
.ftco-footer .ftco-footer-widget ul li a {
    color: rgba(255, 255, 255, 0.7); }
.ftco-footer .ftco-footer-widget ul li a span {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.7); }
.ftco-footer .ftco-footer-widget ul li a:hover {
    color: #ed03be; }
.ftco-footer .ftco-footer-widget ul li a:hover span {
    color: #ed03be; }
.ftco-footer p {
    color: rgba(255, 255, 255, 0.5); }
.ftco-footer a {
    color: #fff; }
.ftco-footer a:hover {
    color: #ed03be; }
.ftco-footer .ftco-heading-2 {
    font-size: 17px;
    font-weight: 400;
    color: #000000; }
.ftco-footer .bg-black {
    background: #1e1f23; }

.ftco-footer-social li {
    list-style: none;
    margin: 0 10px 0 0;
    display: inline-block;
}
.ftco-footer-social li a {
    height: 40px;
    width: 40px;
    display: block;
    float: left;
    color: #fff;
    border-radius: 50%;
    position: relative;
    background: #ed03be; }
.ftco-footer-social li a span {
    position: absolute;
    font-size: 18px;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    color: #fff !important; }
.ftco-footer-social li a:hover {
    color: #ed03be; }

</style>
