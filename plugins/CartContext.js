import { reactive, onMounted } from 'vue';

export const CartContext = reactive({
  products: [],
  addProduct(productId) {
    this.products.push(productId);
    this.saveCart();
  },
  removeProduct(productId) {
    const index = this.products.indexOf(productId);
    if (index !== -1) {
      this.products.splice(index, 1);
      this.saveCart();
    }
  },
  clearCart() {
    this.products = [];
    this.saveCart();
  },
  saveCart() {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(this.products));
    }
  },
  loadCart() {
    try {
      if (typeof window !== 'undefined') {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        this.products = cart;
      }
    } catch (error) {
      console.error('Error loading cart:', error);
    }
  }
});

export default function useCartContext() {
  onMounted(() => {
    CartContext.loadCart();
  });

  return { CartContext };
}
