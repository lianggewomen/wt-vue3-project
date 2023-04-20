import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// const routes: Array<RouteRecordRaw> = [
//   {
//     path: '/',
//     name: 'home',
//     component: HomeView
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//   }
// ]
const filters = require.context('@/views', true, /\.js$/)
const routes: Array<RouteRecordRaw> = []
filters.keys().map((item) => {
  const path = item.replace('./', '')
  const route = require(`@/views/${path}`)
  console.log(route.default)
  routes.push(route.default)
})
console.log(filters.keys())
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
