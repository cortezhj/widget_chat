<script setup lang="ts">
    import { ref } from 'vue';

    const showInfo = ref(true);
    const toggleInfo = () => {
        showInfo.value = !showInfo.value
    }
</script>

<template>
    <div v-if="showInfo" class="w-full flex align-items-center justify-content-between border-top-1 border-300 surface-100 px-3 py-2 select-none">
        <span class="text-xs text-700 text-center">
            You're being assisted by our virtual assistant. Learn about our privacy policy <a target="_blank" href="https://lovebags.com/policies/privacy-policy" class="text-xs text-red-600">here</a>
        </span>
        <div class="flex align-items-start cursor-pointer py-1 pl-2" @click="toggleInfo()">
            <i class="pi pi-times text-xs text-700"></i>    
        </div>
    </div>
</template>

<style scoped></style>
