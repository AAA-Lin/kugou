import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import navs from './nav'
import Search from '@/views/Search'
import searchBar from '@/components/searchBar';
const routes = [
    {
        path:"/",
        redirect:"/newsong"
    },
    ...navs,
    {
        path:"/search",
        components:{
            default:Search,
            searchBar
        }
    }
    
]

const router = new VueRouter({
    routes
})

export default router