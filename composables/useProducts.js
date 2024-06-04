// import { ref } from 'vue';

// export function useProducts() {
//     const products = ref([]);
//     const error = ref(null);
//     const loading = ref(true);

//     const fetchProducts = async () => {
//         try {
//             const { data, error: fetchError } = await useFetch(`/api/products`);
//             if (fetchError.value) throw new Error(fetchError.value);
//             products.value = data.value;
//         } catch (err) {
//             error.value = err.message;
//         } finally {
//             loading.value = false;
//         }
//     };

//     return {
//         products,
//         error,
//         loading,
//         fetchProducts,
//     };
// }

import { ref } from 'vue';

export function useProducts() {
    const products = ref([]);
    const error = ref(null);
    const loading = ref(true);

    const fetchProducts = async () => {
        loading.value = true;
        try {
            const response = await fetch('/api/products');
            if (!response.ok) throw new Error('Failed to fetch products');
            const data = await response.json();
            console.log('Fetched products:', data); // Log the fetched data
            // Assuming the data structure is an array of products
            products.value = data; // Assign the fetched data directly
        } catch (err) {
            error.value = err.message;
        } finally {
            loading.value = false;
        }
    };


    return {
        products,
        error,
        loading,
        fetchProducts,
    };
}
