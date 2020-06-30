export default [
    {
      path: '/following',
      name: 'following',
      component: () => import(/* webpackChunkName: "following" */ './Following')
    }
]