<!-- <template>
  <div>
    <div class="mx-auto px-4 py-6 max-w-screen-xl">
      <h2 class="text-2xl font-bold tracking-tight text-text">
        Our Latest products
      </h2>
      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
        <div v-for="product in products" :key="product.id" class="group relative">
          <div class="group block overflow-hidden border border-accent rounded-xl border-opacity-10">
            <div class="p-1">
              <div class="relative h-[300px] sm:h-[300px]">
                <img :src="product.images[0]" alt="new-img"
                  class="absolute inset-0 h-full w-full object-contain opacity-100 group-hover:opacity-0" />
                <img :src="product.images[1]" alt="new-img"
                  class="absolute inset-0 h-full w-full object-contain opacity-0 group-hover:opacity-100" />
              </div>
            </div>
            <div class="relative p-3 border-t">
              <nuxt-link :to="'/'">
                <h3 class="text-md text-gray-700 group-hover:underline-offset-4 truncate">
                  {{ product.title }}
                </h3>
              </nuxt-link>
              <div class="mt-15 flex items-center justify-between text-text">
                <p class="tracking-wide text-primary">
                  &#8377;. {{ formatPrice(product.price) }}
                </p>
                <button @click="addItemToCart()" type="button"
                  class="inline-flex items-center gap-1.5 rounded-lg border border-primary bg-white px-4 py-2.5 text-center text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 focus:ring focus:ring-gray-100">
                  Add
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>
                </button>
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
import { useProducts } from '~/composables/useProducts';

const { products, error, loading, fetchProducts } = useProducts();

onMounted(() => {
    fetchProducts();
});

const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

const addItemToCart = () => {
}
</script>

<style scoped>
/* Add any necessary CSS styles here */
</style> -->


<template>
  <div>
    <div class="mx-auto px-4 py-6 max-w-screen-xl">
      <h2 class="text-2xl font-bold tracking-tight text-black">
        Our Latest Products
      </h2>
      <div v-if="loading" class="text-center text-gray-500">
        Loading...
      </div>
      <div v-else-if="error" class="text-center text-red-500">
        {{ error }}
      </div>
      <div v-else class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
        <nuxt-link :to="`/products/${product._id}`" v-for="product in products" :key="product._id" class="group relative">
          <div class="group block overflow-hidden border border-accent rounded-xl border-opacity-10">
            <div class="p-1">
              <div class="relative h-[300px] sm:h-[300px] md:py-0 py-48">
                <img :src="product.images[0]" alt="new-img"
                  class="absolute inset-0 h-fit md:h-full w-full object-cover opacity-100 group-hover:opacity-0" />
                <img :src="product.images[1]" alt="new-img"
                  class="absolute inset-0 h-fit md:h-full w-full object-cover opacity-0 group-hover:opacity-100" />
              </div>
            </div>
            <div class="relative p-3 border-t">
              <nuxt-link :to="`/products/${product._id}`">
                <h3 class="text-md text-gray-700 group-hover:underline-offset-4 truncate">
                  {{ product.title }}
                </h3>
              </nuxt-link>
              <div class="mt-15 flex items-center justify-between text-black">
                <p class="tracking-wide text-orange-500">
                  &#8377;. {{ formatPrice(product.price) }}
                </p>
                <button @click="addToCart(product._id)" type="button"
                  class="inline-flex items-center gap-1.5 rounded-lg border border-orange-500 bg-white px-4 py-2.5 text-center text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 focus:ring focus:ring-gray-100">
                  Add
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useProducts } from '~/composables/useProducts';

const { products, error, loading, fetchProducts } = useProducts();

onMounted(() => {
  fetchProducts();
});

const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

import useCartContext from '~/plugins/CartContext';

const {CartContext: cartContext} = useCartContext();

const addToCart = (productId) => {
    cartContext.addProduct(productId)
}

</script>

<style scoped>
/* Add any necessary CSS styles here */
</style>
