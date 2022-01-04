import { createApp } from 'vue'
import { createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import Home from './pages/Home.vue'
import ProductDetail from './pages/ProductDetail.vue'

import 'bootstrap'


const router=createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:Home},
        {path:'/productdetail',component:ProductDetail}
    ]
})

const app=createApp(App);

app.use(router)
app.mount('#app')
