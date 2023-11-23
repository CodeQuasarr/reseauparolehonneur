<script lang="ts" setup>
import image from '~/assets/images/logos/logo.webp';

const dropdownPopoverShow = ref(false);

const toggleDropdown = (event: Event) => {
    event.preventDefault();
    dropdownPopoverShow.value = !dropdownPopoverShow.value;
    event.stopPropagation();
};

</script>

<template>
    <div>
        <a
            ref="btnDropdownRef"
            class="text-blueGray-500 block"
            href="#pablo"
            @click="toggleDropdown($event)"
        >
            <div class="items-center flex">
        <span
            class="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full"
        >
          <img
              :src="image"
              alt="..."
              class="w-full rounded-full align-middle border-none shadow-lg"
          />
        </span>
            </div>
        </a>
        <div
            ref="popoverDropdownRef"
            class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
            :class="{ hidden: !dropdownPopoverShow, block: dropdownPopoverShow, }"
        >
            <a
                class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                href="javascript:void(0);"
            >
                Action
            </a>
            <a
                class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                href="javascript:void(0);"
            >
                Another action
            </a>
            <a
                class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                href="javascript:void(0);"
            >
                Something else here
            </a>
            <div class="h-0 my-2 border border-solid border-blueGray-100"/>
            <a
                class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                href="javascript:void(0);"
            >
                Seprated link
            </a>
        </div>
    </div>
</template>


<style scoped>

</style>
