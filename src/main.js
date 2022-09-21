import Vue from 'vue'
import App from './App.vue'
import { AgGridVue } from 'ag-grid-vue'
Vue.component('ag-grid-vue', AgGridVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
