<template>
    <header class="bg-white sticky top-0 z-40 w-full px-2 md:px-4">
        <div class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 border-b border-orange-500 border-opacity-40">
            <NuxtLink class="flex gap-1 items-center text-black font-medium text-lg hover:text-orange-500" to="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z">
                    </path>
                </svg>
                <span> / ECOM</span>
            </NuxtLink>

            <div class="flex flex-1 items-center justify-end md:justify-between">
                <nav aria-label="Global" class="hidden md:block">
                    <ul class="flex items-center gap-6 text-md">
                        <li>
                            <NuxtLink class="text-gray-800 transition hover:text-gray-800/75" to="/">Home</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink class="text-gray-800 transition hover:text-gray-800/75" to="/products">
                                All Products
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>

                <div class="flex items-center gap-4">
                    <div class="border-r border-orange-500">
                        <div v-if="user" class="gap-2 flex pr-4">
                            <button @click="logout" class="text-black py-2 px-4 rounded-full">
                                Logout
                            </button>

                            <div>
                                <img :src="user.picture" class="w-9 h-9 rounded-full" alt="">
                            </div>
                        </div>
                        <div v-else class="pr-4">
                            <a href="/cart" class="text-black">
                                <div class="md:hidden block border-r broder-orange-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z">
                                        </path>
                                    </svg>
                                </div>
                                <div class="hidden md:block">
                                    <p>Account</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="ml-4 flow-root lg:ml-4">
                        <NuxtLink to="/cart" class="group -m-2 flex items-center p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                            <span class="ml-2 text-md text-orange-500 font-bold group-hover:text-text">{{
                                CartContext.products.length
                            }}</span>

                            <span class="sr-only">items in cart, view bag</span>
                        </NuxtLink>
                    </div>

                    <div class="block mr-0 md:hidden">
                        <button @click="toggleMobileNav"
                            class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                            <svg v-if="isMobileNavOpen" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="isMobileNavOpen" class="md:hidden">
            <nav class="flex flex-col gap-2 px-4 py-4">
                <NuxtLink class="text-orange-500 transition hover:text-gray-800/75" to="/">Home</NuxtLink>
                <NuxtLink class="text-orange-500 transition hover:text-gray-800/75" to="/products">All Products
                </NuxtLink>
                <NuxtLink class="text-orange-500 transition hover:text-gray-800/75" to="/cart">Cart</NuxtLink>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { CartContext } from '~/plugins/CartContext';
import { ref, onMounted, onUnmounted } from 'vue';

// State for user and mobile navigation
const user = ref(null);
const isMobileNavOpen = ref(false);

// Function to check and set user from localStorage
const checkUser = () => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
        user.value = JSON.parse(storedUser);
    } else {
        user.value = null;
    }
};

// Function to handle logout
const logout = () => {
    localStorage.removeItem('user');
    user.value = null;
    window.dispatchEvent(new Event('storage'));
};

// Function to toggle mobile navigation
const toggleMobileNav = () => {
    isMobileNavOpen.value = !isMobileNavOpen.value;
};

const handleStorageChange = () => {
    checkUser();
};

onMounted(() => {
    checkUser();
    window.addEventListener('storage', handleStorageChange);
});

onUnmounted(() => {
    window.removeEventListener('storage', handleStorageChange);
});
</script>
