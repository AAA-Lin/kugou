import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import navs from './nav'
import Nav from '@/components/Nav'
import Search from '@/views/Search'
import searchBar from '@/components/searchBar';
import singerList from '@/components/singerList';
import singerInfo from '@/views/singerInfo';
import Songer from '@/views/Songer';
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
                path:"/search",
                component:Search
            }
        ]
    },
    {
        path:"/singer/list/:id",
        name:"singerlist",
        component:singerList,
        props:true,
        children:[
            {
                path:"/singer/list/:id",
                component:singerInfo
            }
        ]  
    },
    {
        path:"/singer/info/:id",
        name:"singerinfo",
        component:Songer,
        props:true 
    }
    
]

const router = new VueRouter({
    routes
})

export default router