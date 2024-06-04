<!-- <template>
    <section>
        <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
            <header class="text-center">
                <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
                    New Collection
                </h2>
                <p class="max-w-lg mx-auto mt-4 text-gray-500">
                    Explore our latest arrivals and elevate your style with our exclusive new collection.
                </p>
            </header>

            <div>
                <div class="max-w-screen-2xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch" v-if="product">
                        <div class="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
                            <div class="max-w-sm mx-auto text-center lg:text-left">
                                <header>
                                    <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">{{ product.title }}</h2>
                                    <p class="mt-4 text-gray-500 break-words">
                                        {{ product.description }}
                                    </p>
                                    <p class="mt-1 text-lg text-primary">&#8377;. {{ formatPrice(product.price) }}</p>
                                </header>

                                <nuxt-link to="/products"
                                    class="inline-block px-12 py-3 mt-8 text-md font-medium text-text transition border border-accent rounded hover:text-primary duration-75 hover:border-primary focus:outline-none focus:ring">
                                    Shop All
                                </nuxt-link>
                            </div>
                        </div>

                        <div class="lg:col-span-2 lg:py-8">
                            <ul class="grid grid-cols-2 gap-4">
                                <li>
                                    <div class="block group">
                                        <img :src="product.images[0]" alt=""
                                            class="object-cover w-full rounded aspect-square" />
                                    </div>
                                </li>
                                <li>
                                    <div class="block group">
                                        <img :src="product.images[1]" alt=""
                                            class="object-cover w-full rounded aspect-square" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div v-else>
                        <p class="text-center text-gray-500">Loading...</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useProduct } from '~/composables/useProduct';

const productId = '66419f347e2ffc230b0d5fae';
const { product, error, loading, fetchProduct } = useProduct(productId);

onMounted(() => {
    fetchProduct();
});

const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

</script>

<style scoped>
/* Add any necessary CSS styles here */
</style> -->

<template>
    <section>
        <div class="max-w-screen-xl w-screen px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
            <header class="text-center">
                <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
                    New Collection
                </h2>
                <p class="max-w-lg mx-auto mt-4 text-gray-500">
                    Explore our latest arrivals and elevate your style with our exclusive new collection.
                </p>
            </header>

            <div>
                <div class="max-w-screen-2xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
                    <div v-if="loading" class="text-center text-gray-500">
                        Loading...
                    </div>
                    <div v-else-if="error" class="text-center text-red-500">
                        {{ error }}
                    </div>
                    <div v-else-if="product" class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                        <div class="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
                            <div class="max-w-sm mx-auto text-center lg:text-left">
                                <header>
                                    <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">{{ product.title }}</h2>
                                    <p class="mt-4 text-gray-500 break-words w-80">
                                        {{ product.description }}
                                    </p>
                                    <p class="mt-1 text-lg text-orange-500">&#8377;. {{ formatPrice(product.price) }}</p>
                                </header>

                                <nuxt-link to="/products"
                                    class="inline-block px-12 py-3 mt-8 text-md font-medium text-black transition border border-gray-500 rounded hover:text-orange-500 duration-75 hover:border-orange-500 focus:outline-none focus:ring">
                                    Shop All
                                </nuxt-link>
                            </div>
                        </div>

                        <div class="lg:col-span-2 lg:py-8">
                            <ul class="grid grid-cols-2 gap-4">
                                <li v-for="(image, index) in product.images" :key="index">
                                    <div class="block group">
                                        <img :src="image" alt="" class="object-cover w-full rounded aspect-square" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useProduct } from '~/composables/useProduct';

const productId = '6641a34d7e2ffc230b0d6022';
const { product, error, loading, fetchProduct } = useProduct(productId);

onMounted(() => {
  fetchProduct();
});

const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

import useCartContext from '~/plugins/CartContext';

const {CartContext:cartContext} = useCartContext();

const addToCart = (productId) => {
    cartContext.addProduct(productId)
}
</script>


<style scoped>
/* Add any necessary CSS styles here */
</style>