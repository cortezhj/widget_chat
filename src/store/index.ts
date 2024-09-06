import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore('store', () => {

    const show = ref(false)

    const toggle = () => {
        show.value = !show.value;
    }

    return {
        show,
        toggle
    };
});