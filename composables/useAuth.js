// composables/useAuth.js
import { ref, onMounted, onServerPrefetch } from 'vue';

export default function useAuth() {
    const user = ref(null);
    const isLoading = ref(true);

    const login = async (response) => {
        try {
            const { credential } = response;
            if (credential) {
                const loggedInUser = await $fetch('/api/google-login', {
                    method: 'POST',
                    body: { token: credential },
                });
                user.value = loggedInUser;
                localStorage.setItem('user', JSON.stringify(user.value));
            }
        } catch (error) {
            console.error('Login failed:', error);
        } finally {
            isLoading.value = false;
        }
    };

    const logout = () => {
        user.value = null;
        localStorage.removeItem('user');
    };

    onMounted(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            try {
                user.value = JSON.parse(storedUser);
                console.log("user: ", user.value)
            } catch (error) {
                console.error('Error parsing user from localStorage:', error);
            }
        }
        isLoading.value = false;
    });

    onServerPrefetch(() => {

    });

    return {
        user,
        isLoading,
        login,
        logout,
    };
}