import {createApp} from 'vue'
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import {createRouter, createWebHashHistory} from "vue-router";
import './style.css'
import routes from "./routes";
import {start, close} from "@/util/nprogress.js";

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

import { useIntersectionObserver } from '@vueuse/core'

// 定义全局命令
app.directive('img-lazy', {
    mounted(el, binding) {
        const { stop } = useIntersectionObserver(
            el,
            ([{ isIntersecting }]) => {
                if (isIntersecting) {
                    el.src = binding.value
                }
            },
        )
        el.onload = () => stop()
    }
})

const router = createRouter({
    routes,
    history: createWebHashHistory(),
})

//@ts-ignore
router.beforeEach((to, from, next) => {
    start()
    next()
})

router.afterEach(() => {
    close()
})


app.use(router)
app.mount('#app')
