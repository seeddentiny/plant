import Vue from 'vue/dist/vue.js'
import App from './App.vue'

Vue.config.debug = true;

const app = new Vue({
    el: '#app',
    render: h => h(App)
});
