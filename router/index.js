
import { createRouter, createWebHistory } from 'vue-router'
// 路由懒加载
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        meta: {
            title: '首页',
            keepAlive: true
        }
    },
    {
        path: '/chat',
        name: 'Chat',
        component: () => import('@/views/Chat.vue'),
        meta: {
            title: '聊天',
            keepAlive: true
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
    // 设置页面标题
    document.title = to.meta.title || '默认标题'

    // 这里可以添加其他全局守卫逻辑
    // 例如：权限验证、登录状态检查等

    next()
})

// 全局后置钩子
router.afterEach((to, from) => {
    // 路由切换后的操作
    // 例如：关闭loading等
})

export default router
