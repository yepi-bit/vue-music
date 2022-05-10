import { createRouter, createWebHashHistory } from 'vue-router'
import Recommend from '@/views/recommend'
import Singer from '@/views/singer'
import TopList from '@/views/top-list'
import Search from '@/views/search'
import SingerDetail from '@/views/singer-detail'

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: Recommend
    // component: () => import(/* webpackChunkName: "recommend" */ '../views/recommend.vue')
  },
  {
    path: '/singer',
    component: Singer,
    children: [
      {
        path: ':id',
        component: SingerDetail
      }
    ]
    // component: () => import(/* webpackChunkName: "singer" */ '../views/singer.vue')
  },
  {
    path: '/top-list',
    component: TopList
    // component: () => import(/* webpackChunkName: "top-list" */ '../views/top-list.vue')
  },
  {
    path: '/search',
    component: Search
    // component: () => import(/* webpackChunkName: "search" */ '../views/search.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
