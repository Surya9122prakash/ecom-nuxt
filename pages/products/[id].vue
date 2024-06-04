<template>
    <section class="container mx-auto my-10 px-4 lg:px-0">
        <div v-if="product" class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div class="lg:aspect-h-2 lg:aspect-w-2 lg:rounded-lg overflow-hidden">
                <img :src="product.images[0]" alt="product-image"
                    class="w-full h-full object-cover border border-orange-500 rounded-lg transform scale-110" />
            </div>
            <div class="grid grid-cols-2 lg:grid-cols-1 gap-4 md:gap-2 lg:gap-0">
                <div v-for="(image, index) in product.images.slice(1, 3)" :key="index"
                    class="lg:aspect-h-2 lg:aspect-w-3 lg:rounded-lg lg:overflow-hidden">
                    <img :src="image" alt="product-image"
                        class="w-full h-full object-cover border border-purple-500 rounded-lg" />
                </div>
            </div>
            <div class="p-4 lg:p-8 border border-gray-200 rounded-lg">
                <h1 class="text-3xl font-semibold text-gray-800 mb-4">{{ product.title }}</h1>
                <div class="mb-6">
                    <h2 class="text-xl font-semibold text-gray-800 mb-2">Description</h2>
                    <p class="text-gray-700 break-words">{{ product.description }}</p>
                </div>
                <div class="mb-6">
                    <h2 class="text-xl font-semibold text-gray-800 mb-2">Details</h2>
                    <p class="text-gray-700">{{ product.details }}</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                        <label class="text-gray-800 font-semibold">Brand</label>
                        <p class="text-gray-700">{{ product.brand }}</p>
                    </div>
                    <div>
                        <label class="text-gray-800 font-semibold">Gender</label>
                        <p class="text-gray-700">{{ product.gender }}</p>
                    </div>
                    <div>
                        <label class="text-gray-800 font-semibold">Sizes</label>
                        <p class="text-gray-700">{{ product.sizes }}</p>
                    </div>
                    <div>
                        <label class="text-gray-800 font-semibold">Colors</label>
                        <p class="text-gray-700">{{ product.colors }}</p>
                    </div>
                </div>
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-semibold text-gray-800">Price</h2>
                    <p class="text-orange-500 font-semibold text-lg">&#8377;. {{ formatPrice(product.price) }}</p>
                </div>
                <button @click="addToCart(product._id)"
                    class="bg-orange-500 text-white py-3 px-6 rounded-md hover:bg-orange-500-dark w-full">
                    Add to Cart
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router'; 
import { useProduct } from '~/composables/useProduct';

const route = useRoute();
const productId = route.params.id;
const { product, error, loading, fetchProduct } = useProduct(productId);

onMounted(() => {
    fetchProduct(productId);
});

import useCartContext from '~/plugins/CartContext';

const {CartContext:cartContext} = useCartContext();

const addToCart = (productId) => {
    cartContext.addProduct(productId)
}
const formatPrice = (price) => {
    return price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};
</script>
