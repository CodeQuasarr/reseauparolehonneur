<script setup lang="ts">

const emit = defineEmits(['expectedResult']);
const operand1 = ref(Math.floor(Math.random() * 10));
const operand2 = ref(Math.floor(Math.random() * 10));
const operators = ["+", "-", "*"];
const operator = ref<string>(operators[Math.floor(Math.random() * operators.length)]);
const expression = computed(() => `${operand1.value} ${operator.value} ${operand2.value}`);
const userInput = ref<string>("");
const captchaResult = ref<string|null>(null);

// const generateCaptcha = () => {
//     operand1.value = Math.floor(Math.random() * 10);
//     operand2.value = Math.floor(Math.random() * 10);
//     const operators = ["+", "-", "*"];
//     operator.value = operators[Math.floor(Math.random() * operators.length)];
//     userInput.value = "";
//     captchaResult.value = null;
// }

const checkCaptcha = () => {
    const expectedResult = eval(`${operand1.value} ${operator.value} ${operand2.value}`);
    const userResult = parseInt(userInput.value, 10);

    emit('expectedResult', userResult === expectedResult);

    if (userResult === expectedResult) {
        captchaResult.value = "Correct!";
    } else {
        captchaResult.value = "Incorrect!";
    }
}

</script>

<template>
    <div class="b">
        <div class="flex items-center">
            <div class="py-4 px-8 bg-gray-200">
                <p>{{ expression }}</p>
            </div>
            <input
                @change="checkCaptcha()"
                class=" rounded py-2.5 px-3.5 text-body-color text-base border border-gray-400 outline-none focus-visible:shadow-none focus:border-black "
                v-model="userInput"
            />
        </div>
    </div>
</template>

<style scoped>

</style>
