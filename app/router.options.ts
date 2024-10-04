import type { RouterConfig } from '@nuxt/schema'

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig> {
  routes: scannedRoutes => [
    ...scannedRoutes,
    {
      path: '/',
      name: 'index',
      redirect: '/tableData',
    },
    {
      path: '/tableData',
      name: '',
      redirect: '/tableData',
    },
 

  ],
}
