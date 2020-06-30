export default [
    {
      path: '/',
      name: 'initial',
      component: () => import(/* webpackChunkName: "initial" */ './Initial')
    }
]