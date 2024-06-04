<template>
    <header class="bg-white sticky top-0 z-40 w-full px-2 md:px-4">
        <div class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 border-b border-orange-500 border-opacity-40">
            <NuxtLink class="flex gap-1 items-center text-black font-medium text-lg hover:text-orange-500" to="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>

                <span> / ECOM</span>
            </NuxtLink>

            <div class="flex flex-1 items-center justify-end md:justify-between">
                <nav aria-label="Global" class="hidden md:block">
                    <ul class="flex items-center gap-6 text-md">
                        <li>
                            <NuxtLink class=" text-gray-800 transition hover:text-gray-800/75" to="/">
                                Home
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink class="text-gray-800 transition hover:text-gray-800/75" to="/products">
                                All Products
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>

                <div class="flex items-center gap-2">
                    <div class="sm:flex sm:gap-2 border-r border-orange-500 pr-4">
                        <div class="h-9 w-9">
                            <!-- <img class="h-full w-full rounded-full object-cover object-center" :src="session.user.image"
                                :alt="session.user.email" /> -->
                        </div>
                    </div>
                    <div class="sm:flex sm:gap-2">
                        <NuxtLink class="text-md font-medium text-black hidden max-md:flex md:hidden" to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </NuxtLink>
                    </div>

                    <div class="ml-4 flow-root lg:ml-4">
                        <NuxtLink to="/cart" class="group -m-2 flex items-center p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                            <span class="ml-2 text-md text-primary font-bold group-hover:text-text">{{
                                CartContext.products.length }}</span>

                            <span class="sr-only">items in cart, view bag</span>
                        </NuxtLink>
                    </div>

                    <div class="block mr-0 md:hidden">
                        <button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" strokeWidth="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" strokeWidth="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>

                    <div
                        class="md:hidden absolute top-24 right-0 bg-white border border-zinc-200 rounded shadow-lg p-6 text-lg">
                        <nav aria-label="Global">
                            <ul class="flex flex-col items-start gap-6 text-md">
                                <li>
                                    <NuxtLink class="text-gray-800 transition hover:text-gray-800/75`" to="/">
                                        Home
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink class="text-gray-800 transition hover:text-gray-800/75" to="/products">
                                        All Products
                                    </NuxtLink>
                                </li>
                                <li>
                                    <button>Logout</button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

        <header class="md:hidden w-full flex justify-around items-center my-3 border-b fixed top-12 bg-gray-200 z-50">
            <div class="inline-flex gap-8 p-1">
                <NuxtLink
                    class=" inline-flex items-center gap-2 rounded-md px-4 py-2 text-md text-gray-800 hover:text-gray-700 focus:relative"
                    to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    Home
                </NuxtLink>
                <NuxtLink
                    class=" inline-flex items-center gap-2 rounded-md px-4 py-2 text-md text-gray-800 hover:text-gray-700 focus:relative"
                    to="/products">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                    </svg>
                    Products
                </NuxtLink>
                <NuxtLink class="inline-flex items-center gap-2 rounded-md px-4 py-2 text-md" to="/cart">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    Cart
                </NuxtLink>
            </div>
        </header>
    </header>
</template>

<script setup>

import { CartContext } from '~/plugins/CartContext';

</script>