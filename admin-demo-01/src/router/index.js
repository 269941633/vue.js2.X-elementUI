import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
//import Login from '@/components/Login'
// 懒加载方式，当路由被访问的时候才加载对应组件
const Login = resolve => require(['@/components/Login'], resolve)

Vue.use(Router)

let router = new Router({
    routes: [{
            path: '/',
            name: '登录',
            component: Login
        }, {
            path: '/login',
            name: '登录',
            component: Login
        },
        {
            path: '/home',
            name: '后台主界面',
            component: Home
        }

    ]
})

// 访问之前，都检查下是否登录了
router.beforeEach((to, from, next) => {
    debugger;
    if (to.path.startsWith('/login')) {
        window.sessionStorage.removeItem('access-token')
        next()
    } else {
        let token = window.sessionStorage.getItem('access-token')
        if (!token) {
            next({ path: '/login' })
        } else {
            next()
        }
    }
})

export default router