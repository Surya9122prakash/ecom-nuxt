// // composables/useProduct.js
// import { ref } from 'vue';

// export function useProduct(productId) {
//     const product = ref(null);
//     const error = ref(null);
//     const loading = ref(true);

//     const fetchProduct = async () => {
//         try {
//             const { data, error: fetchError } = await useFetch(`/api/products/${productId}`);
//             if (fetchError.value) throw new Error(fetchError.value);
//             product.value = data.value;
//         } catch (err) {
//             error.value = err.message;
//         } finally {
//             loading.value = false;
//         }
//     };

//     return {
//         product,
//         error,
//         loading,
//         fetchProduct,
//     };
// }


// ~/composables/useProduct.js
import { ref } from 'vue';

export function useProduct(productId) {
    const product = ref(null);
    const error = ref(null);
    const loading = ref(false);

    const fetchProduct = async () => {
        loading.value = true;
        try {
            // Replace with your API call
            const response = await fetch(`/api/products/${productId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch product');
            }
            product.value = await response.json();
        } catch (err) {
            error.value = err.message;
        } finally {
            loading.value = false;
        }
    };

    return {
        product,
        error,
        loading,
        fetchProduct
    };
}
