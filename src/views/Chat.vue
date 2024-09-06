<script setup lang="ts">
    import Header from '../components/Header.vue';
    import Messages from '../components/Messages.vue';
    import Footer from '../components/Footer.vue';
    import Info from '../components/Info.vue';
    import { useStore } from '../store';
   
    const store = useStore();
</script>

<template>
    <div v-if="store.show" class="p-0 m-0 z-5 bg-white flex flex-column border-round-xl overflow-hidden widget-container absolute bottom-0 right-0 mb-3 mr-3">
        <!-- Header -->
        <Header></Header>
        <!-- Messages -->
        <Messages></Messages>
        <!-- Info widget -->
        <Info></Info>
        <!-- Inputs -->
         <Footer></Footer>
    </div>
</template>

<style scoped>
.widget-container
{
    width: 330px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    border: 1px solid #e2e8f0;
}
</style>