/*引入vue框架*/
import Vue from 'vue'
/*引入路由依赖*/
import Router from 'vue-router'
/*引入页面组件，命名为Hello*/ 
import Hello from '@/components/Hello'
/*引入首页组件，命名为Index*/ 
import Index from '../views/index/index'
/*引入管理组件，命名为Manage*/ 
import Manage from '../views/manage/manage.vue'


/*使用路由依赖*/ 
Vue.use(Router)

/*定义路由*/ 
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/manage',
      name: 'Manage',
      component: Manage
    }
  ]
})