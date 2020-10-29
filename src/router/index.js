import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import navs from './nav'
import Nav from '@/components/Nav'
import Search from '@/views/Search'
import searchBar from '@/components/searchBar';
const routes = [
    {
        path:"/",
        redirect:"/newsong",
        component:Nav,
        children:[
            ...navs,
        ]
    },
    
    {
        path:"/search",
        name:"search",
        component:searchBar,
        children:[
            {
                path:"",
                component:Search
            }
        ]
    }
    
]

const router = new VueRouter({
    routes
})

export default router