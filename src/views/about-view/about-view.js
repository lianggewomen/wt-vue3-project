const about = () => import('./about-view.vue')

const route = {
  path: '/about',
  name: 'about',
  component: about,
  children: [],
  meta: {},
  beforeRouteEnter(to, from, next) {
    // ...
  }
}

export default route
