// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//import Test,{test1,test2} from './test' 
//import * as test from './test'
//import Fnb,{Fna} from './a'
//console.log(test1,test2)
//console.log(test)
//console.log(Fna)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App},
  template: `
   <App/>
  `
})
