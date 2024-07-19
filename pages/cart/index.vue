<template>
  <div class="mx-auto px-4 py-6 max-w-screen-xl">
    <section class="lg:flex justify-between lg:flex-row flex-col space-x-4">
      <div v-if="user" class="lg:w-2/3 px-4">
        <div class="mt-16 md:mt-6">
          <header class="text-center flex justify-between w-full">
            <h1 class="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
          </header>
          <p v-if="!productList.length" class="my-6 text-center">Your Cart is Empty</p>
          <div v-else>
            <div v-for="product in uniqueProducts" :key="product._id" class="mt-8">
              <ul class="space-y-4">
                <li class="flex items-center gap-4 justify-between">
                  <img :src="product.images[0]" alt="cart image" class="h-16 w-16 object-cover" />
                  <div>
                    <h3 class="text-md text-black max-w-md">{{ product.title }}</h3>
                    <dl class="mt-1 space-y-px text-sm text-black">
                      <p>&#8377;. {{ productQuantity(product._id) * product.price }}</p>
                    </dl>
                  </div>
                  <div>
                    <label for="Quantity" class="sr-only"> Quantity </label>
                    <div class="flex items-center gap-1">
                      <button type="button" class="w-10 h-10 leading-10 text-black transition hover:opacity-75 border"
                        @click="decreaseProduct(product._id)">-</button>
                      <input type="number" id="Quantity" :value="productQuantity(product._id)"
                        class="h-10 w-16 rounded border border-purple-500 text-orange-500 font-bold text-center sm:text-md"
                        readonly />
                      <button type="button" class="w-10 h-10 leading-10 text-black transition hover:opacity-75 border"
                        @click="increaseProduct(product._id)">+</button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div class="max-w-md space-y-4">
                <dl class="space-y-0.5 text-md text-gray-700">
                  <div class="flex justify-end text-red-400 border-b mb-3">
                    <button @click="deleteCart">Clear Cart</button>
                  </div>
                  <div class="flex justify-between">
                    <dt>Subtotal</dt>
                    <dd>&#8377;. {{ formatPrice(total) }}</dd>
                  </div>
                  <strike class="flex justify-between">
                    <dt>Service charge</dt>
                    <dd>&#8377;. {{ formatPrice(total / 50) }}</dd>
                  </strike>
                  <div class="flex justify-between !text-base font-medium">
                    <dt>Total</dt>
                    <dd>&#8377;. {{ formatPrice(total) }}</dd>
                  </div>
                </dl>
                <div class="flex justify-end">
                  <nuxt-link
                    class="group flex items-center justify-between gap-4 rounded-lg border border-orange-500 px-4 py-2 text-orange-600 transition-colors hover:bg-orange-600 focus:outline-none focus:ring active:bg-orange-500"
                    to="/products">
                    <span class="font-medium transition-colors group-hover:text-white">Continue shopping</span>
                    <span
                      class="shrink-0 rounded-full border border-orange-600 bg-white p-2 group-active:border-orange-500">
                      <svg class="h-4 w-4 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="user && productList.length" class="lg:w-1/3 mt-16 md:mt-6">
        <header class="text-start flex flex-col justify-between w-full">
          <h1 class="text-xl font-bold text-gray-900 sm:text-3xl">Shipping Details</h1>
          <p class="mt-2">We use your Account details for shipping</p>
        </header>
        <div class="mx-auto max-w-xl p-4 border shadow-xl h-[400px] my-3">
          <div class="space-y-5">
            <div class="grid grid-cols-12 gap-5">
              <div class="col-span-6">
                <label for="example7" class="mb-1 block text-md font-medium text-gray-700">Email</label>
                <input type="email" id="example7" class="block w-full p-3 border rounded-md border-gray-300 shadow-sm"
                  :value="user.email" disabled />
              </div>
              <div class="col-span-6">
                <label for="example8" class="mb-1 block text-md font-medium text-gray-700">Full name</label>
                <input type="text" id="example8" class="block w-full p-3 border rounded-md border-gray-300 shadow-sm"
                  :value="user.name" disabled />
              </div>
              <div class="col-span-8">
                <label for="example9" class="mb-1 block text-md font-medium text-gray-700">Address</label>
                <input v-model="address" type="text" id="example9"
                  class="block w-full p-3 border rounded-md border-gray-300 shadow-sm" placeholder="1864 Main Street" />
              </div>
              <div class="col-span-4">
                <label for="example12" class="mb-1 block text-md font-medium text-gray-700">Zip</label>
                <input v-model="zip" type="text" id="example12"
                  class="block w-full p-3 border rounded-md border-gray-300 shadow-sm" placeholder="" />
              </div>
              <div class="col-span-6">
                <label for="example10" class="mb-1 block text-md font-medium text-gray-700">City</label>
                <input v-model="city" type="text" id="example10"
                  class="block w-full p-3 border rounded-md border-gray-300 shadow-sm" placeholder="" />
              </div>
              <div class="col-span-6">
                <label for="example11" class="mb-1 block text-md font-medium text-gray-700">State</label>
                <input v-model="state" type="text" id="example11"
                  class="block w-full p-3 border rounded-md border-gray-300 shadow-sm" placeholder="" />
              </div>
              <div class="col-span-12 text-center w-full">
                <button @click="stripeCheckout"
                  class="block rounded bg-purple-500 px-5 py-3 text-md text-black transition hover:bg-purple-300 w-full">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="!user" class="flex justify-center items-center w-full h-full py-64">
        <GoogleSignInButton @success="handleLoginSuccess" @error="handleLoginError"></GoogleSignInButton>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import { useNuxtApp, useFetch } from '#app';
import { GoogleSignInButton, type CredentialResponse } from 'vue3-google-signin';
import useCartContext from '~/plugins/CartContext';

const { CartContext } = useCartContext();

const nuxtApp = useNuxtApp();

const user = ref(null);
const productList = ref([]);
const address = ref('');
const city = ref('');
const state = ref('');
const zip = ref('');
const isSuccess = ref(false);

const handleLoginSuccess = async (response: CredentialResponse) => {
  const { credential } = response;
  if (credential) {
    const loggedInUser = await $fetch('/api/google-login', {
      method: 'POST',
      body: { token: credential },
    });
    user.value = loggedInUser;
    localStorage.setItem('user', JSON.stringify(user.value));
    window.dispatchEvent(new Event('storage'));
  }
};

const handleLoginError = () => {
  console.error('Login failed');
};

const increaseProduct = (productId: string) => {
  CartContext.addProduct(productId);
  updateProductList(CartContext.products);
};

const decreaseProduct = (productId: string) => {
  CartContext.removeProduct(productId);
  updateProductList(CartContext.products);
};

const deleteCart = () => {
  CartContext.clearCart();
  productList.value = [];
};

const formatPrice = (price: number) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const updateProductList = async (cartProducts) => {
  if (Array.isArray(cartProducts) && cartProducts.length > 0) {
    try {
      const { data } = await useFetch('/api/cart', {
        method: 'POST',
        body: { ids: cartProducts },
      });
      productList.value = data.value || [];
    } catch (error) {
      console.error('Error fetching product list:', error);
      productList.value = [];
    }
  } else {
    productList.value = [];
  }
};

const checkUser = () => {
  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    user.value = JSON.parse(storedUser);
  } else {
    user.value = null;
  }
};

onMounted(() => {
  updateProductList(CartContext.products);
  if (typeof window !== 'undefined' && window.location.href.includes('success')) {
    isSuccess.value = true;
    CartContext.clearCart();
  }

  checkUser();
  window.addEventListener('storage', checkUser);
});

onUnmounted(() => {
  window.removeEventListener('storage', checkUser);
});

const uniqueProducts = computed(() => {
  return productList.value.filter(
    (value, index, self) => self.findIndex(p => p._id === value._id) === index
  );
});

const productQuantity = (id: string) => {
  return CartContext.products.filter(productId => productId === id).length;
};

const total = computed(() => {
  return CartContext.products.reduce((sum, productId) => {
    const product = productList.value.find(p => p._id === productId);
    return sum + (product?.price || 0);
  }, 0);
});

watch(user, (newUser, oldUser) => {
  if (newUser) {
    localStorage.setItem('user', JSON.stringify(newUser));
  } else if (oldUser) {
    localStorage.removeItem('user');
    productList.value = [];
  }
});

const stripeCheckout = async () => {
  try {
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: user.value.email,
        name: user.value.name,
        address: address.value,
        city: city.value,
        state: state.value,
        zip: zip.value,
        cartProducts: CartContext.products,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      window.location.href = data.url;
    } else {
      console.error('Checkout error:', response.statusText);
    }
  } catch (error) {
    console.error('Checkout error:', error);
  }
};
</script>

<style scoped>
.success-message {
  text-align: center;
  margin-top: 50px;
}
</style>
