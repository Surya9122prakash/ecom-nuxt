<template>
    <section>
        <div class="container mx-auto py-12">
            <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                <nuxt-link :to="`/products/${product._id}`" v-for="product in products" :key="product._id" class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div class="relative h-56">
                        <img :src="product.images[0]" alt="product image" class="absolute inset-0 h-full w-full object-cover" />
                    </div>
                    <div class="p-4">
                        <nuxt-link :to="`/products/${product._id}`" class="block text-lg font-semibold text-gray-800 hover:text-gray-900">
                            {{ product.title }}
                        </nuxt-link>
                        <p class="mt-2 text-orange-500 pb-2">&#8377;. {{ formatPrice(product.price) }}</p>
                        <button @click="addItemToCart(product._id)" class="block rounded bg-orange-500 px-5 py-3 text-md text-black transition hover:bg-purple-300 w-full">
                            Add to Cart
                        </button>
                    </div>
                </nuxt-link>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useProducts } from '~/composables/useProducts';

const { products, error, loading, fetchProducts } = useProducts();

onMounted(() => {
    fetchProducts();
});

const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
import useCartContext from '~/plugins/CartContext';

const {CartContext:cartContext} = useCartContext();

const addItemToCart = (productId) => {
    cartContext.addProduct(productId)
}
</script>

<style scoped>
/* Add any necessary CSS styles here */
</style>
