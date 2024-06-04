<template>
    <div class="flex items-center justify-center h-screen">                
      <div class="h-80">
        <div>
          <div class="flex justify-center">
            <button @click="toggleModal" class="rounded-lg border border-primary bg-primary px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary hover:bg-primary focus:ring focus:ring-primary disabled:cursor-not-allowed disabled:border-primary disabled:bg-primary">Order Status</button>
          </div>
          <transition name="fade">
            <div v-if="showModal" class="fixed inset-0 z-10 bg-secondary-700/50"></div>
          </transition>
          <transition name="slide-fade">
            <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0">
              <div class="mx-auto w-full overflow-hidden rounded-lg bg-white shadow-xl sm:max-w-sm">
                <div class="relative p-5">
                  <div class="text-center">
                    <div class="mx-auto mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-500">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-lg font-medium text-secondary-900">Order Placed</h3>
                      <div class="mt-2 text-sm text-secondary-500">Your order was placed, we will notify you about the delivery information</div>
                    </div>
                  </div>
                  <div class="mt-5 flex justify-end gap-3">
                    <NuxtLink to="/products" @click="toggleModal" class="flex-1 rounded-lg border border-primary-500 bg-primary-500 px-4 py-2 text-center text-sm font-medium text-primary shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300">Continue Shopping</NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const showModal = ref(false);
  
      const toggleModal = () => {
        showModal.value = !showModal.value;
      };
  
      return {
        showModal,
        toggleModal
      };
    }
  };
  </script>
  
  <style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
  }
  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
  </style>
  