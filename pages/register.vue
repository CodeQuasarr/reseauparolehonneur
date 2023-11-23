<script lang="ts" setup>
import {ErrorMessage, Field, Form} from "vee-validate";
import {
    validateConfirmedPassword,
    validateEmail,
    validateFirstName,
    validateLastName,
    validatePassword, validateTerms
} from "~/utils/config/formValidationsRules";

definePageMeta({ layout: false, })

//---------------------------------- Variables ----------------------------------//
let loading = ref(false);
const error = ref('');
const message = ref({
    statusCode: 0,
    statusMessage: ''
});
const user = ref({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
})

//---------------------------------- Methods -----------------------------------//

const onSubmit = async () => {
    error.value = ''
    if (user.value.password !== user.value.confirmPassword) {
        error.value = 'Les mots de passe ne correspondent pas'
        return;
    }

    // try {
    //     loading.value = true
    //     const data = await useAuth().signUp(user.value)  as any
    //     message.value = data;
    //     if (data.statusCode === 200) {
    //         setInterval(() => {
    //             navigateTo('/signin')
    //         }, 3000)
    //     }
    // } catch (e) {
    //     console.error('error', e)
    // } finally {
    //     loading.value = false
    // }
}

</script>

<template>
    <div class="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900">
        <a class="flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white" href="/">
            <img alt="FlowBite Logo" class="mr-4 h-11" src="~/assets/images/logos/logo.webp">
            <span class="text-xl">Réseau Parole d'Honneur</span>
        </a>
        <!-- Card -->
        <div class="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
            <div>
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
                    Créer un compte
                </h2>
                <p class="text-gray-400 dark:text-gray-300">
                    Créez votre compte pour accéder à votre espace personnel.
                </p>
            </div>
            <div v-if="message.statusCode"
                 :class="{ 'text-green-800 bg-green-50': message.statusCode === 200, 'text-red-800 bg-red-50': message.statusCode !== 200}"
                 class="flex items-center p-4 mb-4 text-sm text-center text-green-800 bg-green-50 rounded-lg dark:bg-gray-800 dark:text-green-400"
                 role="alert"
            >
                <Icon aria-hidden="true" class="flex-shrink-0 inline w-4 h-4 mr-3" name="ph:envelope-bold" size="30"/>
                <span class="sr-only">Info</span>
                <div class="font-medium text-center ">
                    {{ message.statusMessage }}
                </div>
            </div>
            <Form class="mt-8 space-y-6" @submit="onSubmit">
                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="lastName">
                        Nom
                    </label>
                    <Field
                        id="lastName"
                        v-model="user.lastName"
                        :rules="validateLastName"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                        name="lastName"
                        placeholder="Votre Nom"
                        required
                        type="text"
                    />
                    <ErrorMessage class="text-red-500" name="lastName"/>

                </div>
                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="firstName">
                        Prénom
                    </label>
                    <Field
                        id="firstName"
                        v-model="user.firstName"
                        :rules="validateFirstName"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                        name="firstName"
                        placeholder="Votre Prénom"
                        required
                        type="text"
                    />
                    <ErrorMessage class="text-red-500" name="firstName"/>

                </div>
                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="email">
                        Email
                    </label>
                    <Field
                        id="email"
                        v-model="user.email"
                        :rules="validateEmail"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                        name="email"
                        placeholder="adresse@mail.com"
                        required
                        type="email"
                    />
                    <ErrorMessage class="text-red-500" name="email"/>

                </div>
                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="password">
                        Mot de passe
                    </label>
                    <Field
                        id="password"
                        v-model="user.password"
                        :rules="validatePassword"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                        name="password"
                        placeholder="••••••••"
                        required
                        type="password"
                    />
                    <ErrorMessage class="text-red-500" name="password"/>
                </div>
                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="confirm-password">
                        Confirmation du mot de passe
                    </label>
                    <Field
                        id="confirm-password"
                        v-model="user.confirmPassword"
                        :rules="validateConfirmedPassword"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                        name="confirm-password"
                        placeholder="••••••••"
                        required
                        type="password"
                    />
                    <span class="text-red-500"> {{ error }} </span>
                </div>
                <div class="flex items-start">
                    <div class="flex items-center h-5">
                        <Field
                            id="remember"
                            :rules="validateTerms"
                            :value="true"
                            aria-describedby="remember"
                            class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-indigo-300 dark:focus:ring-indigo-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                            name="remember"
                            required
                            type="checkbox"
                        />
                    </div>

                    <div class="ml-3 text-sm">
                        <label class="font-medium text-gray-900 dark:text-white" for="remember">J'accepte les
                            <NuxtLink class="text-indigo-700 hover:underline dark:text-indigo-500" target="_blank"
                                      to="/terms">conditions générales d'utilisation
                            </NuxtLink>
                        </label>
                    </div>
                </div>
                <div class="w-screen">
                    <ErrorMessage class="text-red-500" name="remember"/>
                </div>
                <button class="w-full px-5 py-3 text-base font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 sm:w-auto dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
                    Suivant
                </button>
                <div class="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Vous avez déjà un compte ? <NuxtLink class="text-indigo-700 hover:underline dark:text-indigo-500" to="/signin">
                    Inscrivez-vous
                </NuxtLink>
                </div>
            </Form>
        </div>

        <div class="col-span-6 sm:col-full mt-10 pb-5 text-start">
            Retourner sur la
            <NuxtLink class="ml-auto text-sm text-indigo-700 hover:underline dark:text-indigo-500" to="/">
                Retour à l'accueil
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped>

</style>
