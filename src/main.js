/*引入vue框架*/
import Vue from 'vue'
/*引入根组件*/
import App from './App'
/*引入路由设置*/
import router from './router'
/*引入axios请求插件*/
import Axios from 'axios';

import FooterNav from './components/footer.vue'

/*关闭生产模式下给出的提示*/ 
Vue.config.productionTip = false

Vue.prototype.$ajax = Axios

/*定义实例*/ 
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App,FooterNav }
})