import {RouteRecordRaw} from "vue-router";

export default [
    {
        path: '/',
        component: () => import('@/page/fronted/index.vue'),
        children: [
            {
                path: '/',
                name: 'home',
                component: () => import('@/page/fronted/home/index.vue')
            },
            {
                path: '/cube',
                name: 'cube',
                component: () => import('@/page/fronted/cube/index.vue')
            },
            {
                path: '/detect',
                name: 'detect',
                component: () => import('@/page/fronted/detect/index.vue')
            },
            {
                path: '/detect/result',
                name: 'detect-result',
                component: () => import('@/page/fronted/detect/result.vue')
            },
            {
                path: '/teachers',
                name: 'teachers',
                component: () => import('@/page/fronted/teachers/index.vue')
            },
        ],
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/page/login/index.vue')
    },
    {
        path: '/404',
        name: '404',
        component: () => import('@/page/404.vue')
    },
    // 所有未定义路由，全部重定向到404页
    {
        path: '/:pathMatch(.*)',
        redirect: '/404'
    }
] as RouteRecordRaw[]