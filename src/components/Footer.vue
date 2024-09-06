<script setup lang="ts"></script>

<template>
    <div class="w-full h-3rem flex border-top-1 border-300 surface-50 px-3">
        <form action="" class="w-full h-full flex align-items-center">
            <InputText type="text" placeholder="Escribe tu mensaje"
            class="w-full h-full shadow-none border-none p-0 pl-2 surface-50 text-sm" />
            <Button icon="pi pi-send" class="btn-send" severity="secondary" rounded />
        </form>
    </div>
</template>

<style scoped>
.btn-send
{
    background: transparent !important;
    border-color: transparent !important;
    color: #d9342b !important;
}

.btn-send:hover
{
    color: #646161 !important;
}
</style>
