import Vue from 'vue';
import Form from './components/MyForm'
// import App from './components/page';

// new Vue({
// render: h => h(App)
// }).$mount('#app');


new Vue({
    el: '#app',
    render: h => h(Form)
})
