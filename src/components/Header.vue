<script setup lang="ts">
    import { useStore } from '../store';

    const store = useStore();
    const toggle = store.toggle;
</script>

<template>
    <div class="w-full h-3rem flex align-items-center justify-content-between bg-red-600 px-3 select-none">
        <div @click="toggle" class="flex align-items-center cursor-pointer">
            <Image src="https://mind-lab.ai/wp-content/uploads/2024/07/Claude-1-jpeg.webp" alt="user" height="30" width="30" class="flex border-circle border-2 border-red-400 overflow-hidden" />
            <span class="text-white ml-2 text-sm font-semibold">LOVE Bags</span>
            <Badge value="" severity="" class="ml-2 border-2 border-green-400"></Badge>
        </div>
        <div class="flex align-items-center">
            <Button icon="pi pi-sync" class="btn-header" severity="secondary" rounded />
            <Button @click="toggle" icon="pi pi-angle-down" class="btn-header" severity="secondary" rounded />
        </div>
    </div>
</template>

<style scoped>
.btn-header
{
    background: transparent !important;
    border-color: transparent !important;
    color: #fff !important;
}
</style>
