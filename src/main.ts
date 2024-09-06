import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'

import App from './App.vue'
import PrimeVue from 'primevue/config'
import Lara from '@primevue/themes/lara';
import InputText from 'primevue/inputtext';
import Image from 'primevue/image';
import Button from "primevue/button";
import Badge from 'primevue/badge';

import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'primeflex/themes/primeone-light.css';

const app = createApp(App)

app.use(PrimeVue, {
    theme: {
        preset: Lara,
    },
    ripple: true
});

app.use(createPinia());

app.component('InputText', InputText);
app.component('Image', Image);
app.component('Button', Button);
app.component('Badge', Badge);

app.mount('#app');