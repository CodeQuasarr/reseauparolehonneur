<script lang="ts" setup>

const dropdownPopoverShow = ref(false)

const toggleDropdown = (event: Event) => {
    event.preventDefault()
    if (dropdownPopoverShow.value) {
        dropdownPopoverShow.value = false
    } else {
        dropdownPopoverShow.value = true
        document.addEventListener('click', function closeDropdownPopover(e) {
            if (
                !(
                    e.target instanceof Node &&
                    document
                        .getElementById('popover-dropdown')
                        ?.contains(e.target)
                )
            ) {
                dropdownPopoverShow.value = false
                document.removeEventListener('click', closeDropdownPopover)
            }
        })
    }
}

</script>

<template>
    <div>
        <a
            ref="btnDropdownRef"
            class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
            href="#pablo"
            v-on:click="toggleDropdown($event)"
        >
            Demo Pages
        </a>
        <div
            ref="popoverDropdownRef"
            class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
            v-bind:class="{
        hidden: !dropdownPopoverShow,
        block: dropdownPopoverShow,
      }"
        >
      <span
          class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
      >
        Admin Layout
      </span>
            <router-link
                class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                to="/admin/dashboard"
            >
                Dashboard
            </router-link>
            <router-link
                class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                to="/admin/settings"
            >
                Settings
            </router-link>
            <router-link
                class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                to="/admin/tables"
            >
                Tables
            </router-link>
            <router-link
                class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                to="/admin/maps"
            >
                Maps
            </router-link>
            <div class="h-0 mx-4 my-2 border border-solid border-blueGray-100"/>
            <span
                class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
            >
        Auth Layout
      </span>
            <router-link
                class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                to="/auth/login"
            >
                Login
            </router-link>
            <router-link
                class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                to="/auth/register"
            >
                Register
            </router-link>
            <div class="h-0 mx-4 my-2 border border-solid border-blueGray-100"/>
            <span
                class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
            >
        No Layout
      </span>
            <router-link
                class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                to="/landing"
            >
                Landing
            </router-link>
            <router-link
                class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                to="/profile"
            >
                Profile
            </router-link>
        </div>
    </div>
</template>

<style scoped>

</style>
