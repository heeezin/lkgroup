import Vue from 'vue';
import { createApp } from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/js/all.js'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import router from './router/index.js'
import sal from "sal.js"
import "sal.js/dist/sal.css"

const app = createApp(App);
app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyD_YI43iurQRwwp1o8z5TfHzCQEzvfzT58',
    },
        
      render: h => h(App)
}).use(router).mount('#app')

sal.init()

