const home = () => import('./home.vue')

const route = {
  path: '/',
  name: 'home',
  component: home,
  children: [],
  meta: {},
  beforeRouteEnter(to, from, next) {
    // ...
  }
}

export default route
