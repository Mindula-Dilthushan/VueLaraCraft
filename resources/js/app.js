require('./bootstrap');

import { createApp } from 'vue';

const app = createApp({});

app.component('example-component', require('./components/ExampleComponent.vue').default);

app.mount('#app');
