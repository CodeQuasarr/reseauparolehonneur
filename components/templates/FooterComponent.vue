<script setup lang="ts">

</script>

<template>
    <div>
        <footer  class="ftco-footer  text-base bg-[#232429] text-[#FFFFFF7F] relative z-0 pt-[5em] pb-0 px-0">
            <div class="container mx-auto">
                <div class="grid grid-cols-2 xl:grid-cols-3 mb-5">
                    <div class="w-full sm:w-full md:w-auto mb-5 xl:mb-0">
                        <div class="ftco-footer-widget mb-4">
                            <h2 class="text-white text-[22px] font-bold uppercase mb-[30px]"><a href="#">Réseau Parole d'Honneur</a></h2>
                            <p>
                                Plateforme pour les leaders économiques qui rassemble des professionnels et des particuliers afin d'encourager
                                l'innovation et de créer des opportunités commerciales.
                            </p>
<!--                            <ul class="ftco-footer-social list-unstyled mt-2">-->
<!--                                <li class="flex items-center justify-center"><a href="#"> <Icon name="mdi:twitter" /> </a></li>-->
<!--                                <li class="ftco-animate fadeInUp ftco-animated"><a href="#"><span class="fa fa-facebook"></span></a></li>-->
<!--                                <li class="ftco-animate fadeInUp ftco-animated"><a href="#"><span class="fa fa-instagram"></span></a></li>-->
<!--                            </ul>-->
                        </div>
                    </div>
                    <div class="w-full sm:w-full md:w-auto mb-5 xl:mb-0">
                        <div class="ftco-footer-widget mb-4 md:ml-4">
                            <h2 class="text-white text-[22px] font-bold uppercase mb-[30px]">Explore</h2>
                            <ul class="list-unstyled">
                                <li class="mb-2.5"><NuxtLink to="/"><span class="mr-2"><Icon name="ic:baseline-chevron-right" /></span>Accueil</NuxtLink></li>
                                <li class="mb-2.5"><NuxtLink to="/about"><span class="mr-2"><Icon name="ic:baseline-chevron-right" /></span>À Propos</NuxtLink></li>
                                <li class="mb-2.5"><NuxtLink to="/event"><span class="mr-2"><Icon name="ic:baseline-chevron-right" /></span>Conférence à venir</NuxtLink></li>
                                <li class="mb-2.5"><NuxtLink to="/contact"><span class="mr-2"><Icon name="ic:baseline-chevron-right" /></span>Contact</NuxtLink></li>
                            </ul>
                        </div>
                    </div>
                    <div class="w-full sm:w-full md:w-auto mb-5 xl:mb-0">
                        <div class="ftco-footer-widget mb-4 md:ml-4">
                            <h2 class="text-white text-[22px] font-bold uppercase mb-[30px]">Info</h2>
                            <ul class="list-unstyled">
                                <li class="mb-2.5"><NuxtLink to="/privacy"><span class="mr-2"><Icon name="ic:baseline-chevron-right" /></span>Politique de confidentialité</NuxtLink></li>
                                <li class="mb-2.5"><NuxtLink to="/terms"><span class="mr-2"><Icon name="ic:baseline-chevron-right" /></span>Termes et Conditions</NuxtLink></li>
                                <li class="mb-2.5"><NuxtLink to="/cookie-policy"><span class="mr-2"><Icon name="ic:baseline-chevron-right" /></span>Politique liée aux cookies</NuxtLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full px-0 py-5 bg-black">
                <div class="container mx-auto">
                    <div class="flex">
                        <div class="w-full">
                            <p class="mb-0" style="color: rgba(255,255,255,.5);">
                                Copyright ©{{ new Date().getFullYear() }}
                                <a href="https://github.com/CodeQuasarr" target="_blank" rel="nofollow noopener">CodeQuazarr</a>. Tous droits réservés.
                                <i class="fa fa-heart color-danger" aria-hidden="true"></i>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<style scoped>

.ftco-footer .ftco-footer-widget ul li a {
    color: rgba(255, 255, 255, 0.7);
}
.ftco-footer .ftco-footer-widget ul li a span {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.7);
}
.ftco-footer .ftco-footer-widget ul li a:hover {
    color: #ed03be;
}
.ftco-footer .ftco-footer-widget ul li a:hover span {
    color: #ed03be;
}
.ftco-footer p {
    color: rgba(255, 255, 255, 0.5);
}
.ftco-footer a {
    color: #fff;
}
.ftco-footer a:hover {
    color: #ed03be;
}

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
