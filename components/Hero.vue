<!-- <template>
    <div v-if="product" class="relative overflow-hidden my-14 md:my-10">
        <div class="lg:py-40 min-h-[650px]">
            <div class="relative mx-auto sm:static px-6 lg:px-8">
                <div class="max-w-xl text-start">
                    <h1 class="text-4xl md:text-5xl max-md:mb-6 font-bold tracking-tight text-primary">
                        At <span class="text-accent"> 50%</span> Off
                    </h1>
                    <h1 class="text-4xl md:text-5xl max-md:mb-6 font-bold tracking-tight text-text">
                        {{ product.title }}
                    </h1>
                    <p class="line-clamp-3 text-lg text-gray-500">
                        {{ product.description }}
                    </p>

                    <div class="flex gap-4 mt-10 items-center max-sm:justify-center max-sm:mt-6">
                        <button type="button"
                            class="rounded-lg border border-primary bg-primary px-5 py-2.5 text-center text-md font-medium text-white shadow-sm transition-all hover:border-secondary hover:bg-secondary focus:ring focus:ring-primary disabled:cursor-not-allowed disabled:border-primary disabled:bg-primary"
                            @click="addItemToCart">
                            Add to Cart
                        </button>
                        <nuxt-link to="/products"
                            class="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-center text-md font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 focus:ring focus:ring-gray-100 disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400">
                            All Products
                        </nuxt-link>
                    </div>

                    <div
                        class="hidden md:block absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                        <div class="grid flex-shrink-0 grid-cols-1 gap-y-12">
                            <div class="flex items-center space-x-6 md:space-x-8">
                                <div v-for="(image, index) in product.images.slice(0, 2)" :key="index"
                                    class="w-72 h-80 overflow-hidden rounded-lg border border-secondary transform rotate-3 translate-x-4 hover:-rotate-6 hover:translate-x-8 transition-transform duration-3000 ease-in-out">
                                    <img :src="image" alt="hero-img" class="h-full w-full object-cover object-center" />
                                </div>
                            </div>
                            <div class="flex items-center space-x-6 md:space-x-8">
                                <div v-for="(image, index) in product.images.slice(2, 4)" :key="index"
                                    class="w-72 h-80 overflow-hidden rounded-lg border border-secondary transform rotate-3 translate-x-4 hover:-rotate-6 hover:translate-x-8 transition-transform duration-3000 ease-in-out">
                                    <img :src="image" alt="hero-img" class="h-full w-full object-cover object-center" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script> -->


<template>
    <div v-if="product" class="relative overflow-hidden my-14 md:my-10">
        <div class="lg:py-40 md:min-h-[650px] ">
            <div class="relative mx-auto max-w-screen-xl sm:static px-6 lg:px-8">
                <div class="max-w-xl text-start">
                    <h1 class="text-4xl md:text-5xl max-md:mb-6 font-bold tracking-tight text-orange-500">
                        At <span class="text-gray-800"> 50%</span> Off
                    </h1>
                    <h1 class="text-4xl md:text-5xl max-md:mb-6 font-bold tracking-tight text-black">
                        {{ product.title }}
                    </h1>
                    <p class="line-clamp-3 text-lg text-gray-500">
                        {{ product.description }}
                    </p>

                    <div class="flex gap-4 mt-10 items-center max-sm:justify-center max-sm:mt-6">
                        <button type="button"
                            class="rounded-lg border border-orange-500 bg-orange-500 px-5 py-2.5 text-center text-md font-medium text-white shadow-sm transition-all hover:border-violet-500 hover:bg-violet-500 focus:ring focus:ring-orange-500 disabled:cursor-not-allowed disabled:border-orange-500 disabled:bg-orange-500"
                            @click="addToCart(product._id)">
                            Add to Cart
                        </button>
                        <nuxt-link to="/products"
                            class="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-center text-md font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 focus:ring focus:ring-gray-100 disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400">
                            All Products
                        </nuxt-link>
                    </div>

                    <div
                        class="hidden md:block absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                        <div class="grid flex-shrink-0 grid-cols-1 gap-y-12">
                            <div class="flex items-center space-x-6 md:space-x-8">
                                <div v-for="(image, index) in product.images.slice(0, 2)" :key="index"
                                    class="w-72 h-80 overflow-hidden rounded-lg border border-violet-300 transform rotate-3 translate-x-4 hover:-rotate-6 hover:translate-x-8 transition-transform duration-3000 ease-in-out">
                                    <img :src="image" alt="hero-img" class="h-full w-full object-cover object-center" />
                                </div>
                            </div>
                            <div class="flex items-center space-x-6 md:space-x-8">
                                <div v-for="(image, index) in product.images.slice(2, 4)" :key="index"
                                    class="w-72 h-80 overflow-hidden rounded-lg border border-violet-300 transform rotate-3 translate-x-4 hover:-rotate-6 hover:translate-x-8 transition-transform duration-3000 ease-in-out">
                                    <img :src="image" alt="hero-img" class="h-full w-full object-cover object-center" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useProduct } from '~/composables/useProduct';

const productId = '66419f347e2ffc230b0d5fae';
const { product, error, loading, fetchProduct } = useProduct(productId);

onMounted(() => {
    fetchProduct();
});

import useCartContext from '~/plugins/CartContext';

const {CartContext:cartContext} = useCartContext();

const addToCart = (productId) => {
    cartContext.addProduct(productId)
}

</script>
