import { ref, onMounted, watch } from 'vue';

export default function useUserData() {
    const userData = ref(loadUserData());

    function loadUserData() {
        const storedData = localStorage.getItem('userData');
        return storedData ? JSON.parse(storedData) : { currentOrganization: null };
    }

    function setUserData(key, value) {
        userData.value[key] = value;
        localStorage.setItem('userData', JSON.stringify(userData.value));
        window.dispatchEvent(new StorageEvent('storage', {
            key: 'userData',
            newValue: JSON.stringify(userData.value),
        }));
    }

    onMounted(() => {
        window.addEventListener('storage', (event) => {
            if (event.key === 'userData') {
                userData.value = JSON.parse(event.newValue);
            }
        });
    });

    watch(userData, (newUserData) => {
        console.log('User data changed:', newUserData);
    });

    return { userData, setUserData };
}