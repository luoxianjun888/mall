
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 相同路由重复点击报错解决方法
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/Home.vue')
  },
 
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/about/About.vue')
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: '/dist/',
  routes
})

export default router
