<script lang="ts" setup>
import {ErrorMessage, Field, Form} from "vee-validate";
import {validateEmail, validatePassword} from "~/utils/config/formValidationsRules";
import {loginWithEmail} from "~/composables/useAuth";
import {notifySuccess} from "~/utils/config";
import {useGlobalStore} from "~/stores/globalStore";

definePageMeta({layout: false,})

//---------------------------------- Variables ----------------------------------//

const errors: Ref<Map<string, { message: InputValidation; }> | undefined> = ref(new Map<string, {
    message: InputValidation
}>())
let response: FormValidation

let loading = ref(false);
const error = ref('');
const user = ref({
    email: '' as string,
    password: '' as string,
    rememberMe: false as boolean
})

//---------------------------------- Methods -----------------------------------//

const onSubmit = async () => {
    try {
        loading.value = true;
        response = await loginWithEmail(user.value);
        errors.value = response.errors
    } catch (e: any) {
        error.value = e.message
    } finally {
        loading.value = false;
    }
}
const isNewAccount = ref(false);
onMounted(() => {
    isNewAccount.value = useGlobalStore().isNewAccount;
    useGlobalStore().setNewAccount(false);
    console.log('isNewAccount.value', isNewAccount.value)
})

</script>

<template>
    <div class="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900">
        <a class="flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white" href="/">
            <img alt="FlowBite Logo" class="mr-4 h-11" src="~/assets/images/logos/logo.webp">
            <span class="text-xl">Réseau Parole d'Honneur</span>
        </a>
        <!-- Card -->

        <div class="relative">
            <LoadingComponent v-if="loading"/>
            <div class="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
                <div>
                    <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
                        Créer un compte
                    </h2>
                    <p class="text-gray-400 dark:text-gray-300">
                        Créez votre compte pour accéder à votre espace personnel.
                    </p>
                </div>
                <div v-if="isNewAccount"
                     class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-3" role="alert">
                    <ul class="block sm:inline">
                        <li>
                            <span class="font-medium">Le compte a été créé avec succès ; vous avez reçu un mail de confirmation.</span>
                        </li>
                    </ul>
                </div>
                <div v-if="errors && errors?.size"
                     class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3" role="alert">
                    <ul class="block sm:inline">
                        <li v-for="[key, value] in errors">
                            {{ value.message }}
                        </li>
                    </ul>
                </div>
                <Form class="mt-8 space-y-6" @submit="onSubmit()">
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="email">Votre
                            email</label>
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
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="password">Votre
                            mot
                            de passe</label>
                        <Field
                            id="password"
                            v-model="user.password"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                            name="password"
                            placeholder="••••••••"
                            required
                            type="password"
                        />
                    </div>

                    <div class="flex items-start">
                        <div class="flex items-center h-5">
                            <Field id="rememberMe"
                                   v-model="user.rememberMe"
                                   :value="true"
                                   aria-describedby="rememberMe"
                                   class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-indigo-300 dark:focus:ring-indigo-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                                   name="rememberMe"
                                   required
                                   type="checkbox"
                            />
                        </div>
                        <div class="ml-3 text-sm">
                            <label class="font-medium text-gray-900 dark:text-white" for="rememberMe">
                                Se souvenir de moi
                            </label>
                        </div>
                        <NuxtLink class="ml-auto text-sm text-indigo-700 hover:underline dark:text-indigo-500"
                                  to="/forgot-password">Mot de passe perdu ?
                        </NuxtLink>
                    </div>

                    <button
                        class="w-full px-5 py-3 text-base font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 sm:w-auto dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
                        Se connecter
                    </button>
                    <div class="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Vous n'êtes pas inscrit ?
                        <NuxtLink class="text-indigo-700 hover:underline dark:text-indigo-500" to="/register">
                            Créer un compte
                        </NuxtLink>
                    </div>
                </Form>

            </div>
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
