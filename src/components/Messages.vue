<script setup lang="ts"></script>

<template>
    <div class="w-full h-20rem overflow-x-hidden overflow-y-auto px-3 py-3">
        <ul class="w-full h-full">
            <div class="w-full flex justify-content-center mb-2 select-none">
                <span class="text-user text-600 text-center">----- Ahora está siendo atendido por Claude -----</span>
            </div>
            <li class="w-full flex justify-content-start mb-2">
                <div class="min-w-min h-auto flex flex-column surface-300 px-3 py-2 border-round-xl border-1 border-300 message" style="border-top-left-radius: 0px!important;">
                    <span class="text-left text-900 line-height-2 text-sm">Hello, you are communicating with a bot, how can we help you?</span>
                    <span class="text-right text-700 text-xs line-height-1 mt-1 select-none">2:30 p.m</span>
                </div>
            </li>
            <li class="w-full flex justify-content-end mb-2">
                <div class="min-w-min h-auto flex flex-column bg-blue-200 px-3 py-2 border-round-xl border-1 border-300 message" style="border-top-right-radius: 0px!important;">
                    <span class="text-left text-900 line-height-2 text-sm">I have a problem</span>
                    <span class="text-right text-700 text-xs line-height-1 mt-1 select-none">2:36 p.m</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.text-user
{
    font-size: .7rem;
}

.message
{
    max-width: 90%;
}

ul li:last-child
{
    padding-bottom: 2rem
}

/* Scrolls */
*::-webkit-scrollbar-track
{
    -webkit-box-shadow: inset 0 0 7px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #F9F9F9;
}

*::-webkit-scrollbar
{
    width: 6px;
    background-color: #F9F9F9;
}

*::-webkit-scrollbar:vertical 
{
    width: 6px;
}

*::-webkit-scrollbar:horizontal 
{
    height: 6px;
}

*::-webkit-scrollbar-thumb 
{
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 8px rgba(0, 0, 0, .3);
    background-color: var(surface-100);
}
</style>