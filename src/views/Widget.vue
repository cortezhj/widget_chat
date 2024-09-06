<script setup lang="ts">
    import { ref } from 'vue';
    import { useStore } from '../store';

    const showWidget = ref(true);
    const toggleWidget = () => {
        showWidget.value = !showWidget.value
    }

    const store = useStore();
    const toggle = store.toggle;
</script>

<template>
    <div class="p-0 m-0 z-5 absolute bottom-0 right-0 mb-4 mr-4 flex flex-column">
        <div v-if="showWidget" class="bg-white flex flex-column border-round-2xl chat-container shadow p-3 pt-1 mb-3">
            <div class="w-full flex align-items-center justify-content-between">
                <span class="text-900 font-semibold text-sm">Hey!!!</span>
                <Button @click="toggleWidget()" icon="pi pi-minus" class="btn-minus text-700" severity="secondary" rounded />
            </div>
            <div class="w-full mb-3">
                <span class="text-800 text-sm text-left">Looking for amazing re-usable, eco-friendly bags?</span>
            </div>
            <Button @click="toggle" label="Let's talk" class="text-sm bg-red-600 border-none" />
        </div>
        <div class="flex w-full justify-content-end">
            <div @click="toggle" class="bg-white hover:surface-100 border-circle p-2 shadow user cursor-pointer">
                <Image src="https://mind-lab.ai/wp-content/uploads/2024/07/Claude-1-jpeg.webp" alt="user" height="45" width="45" class="flex border-circle overflow-hidden" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.chat-container
{
    width: 260px;
    border: 1px solid #e2e8f0;
}

.shadow
{
    box-shadow: 2px 2px 10px rgb(0,0,0,0.4);
}

.btn-minus
{
    background: transparent !important;
    border-color: transparent !important;
}

:deep(.p-button-icon.pi.pi-minus)
{
    font-size: .75rem;
}

.user
{
    border-bottom-left-radius: 0px !important;
}
</style>