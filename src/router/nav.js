import NewSong from '@/views/NewSong'
import Rank from '@/views/Rank'
import Plist from '@/views/Plist'
import Singer from '@/views/Singer'

const navs = [{
    path: 'newsong',
    name: "newsong",
    meta: {
        title: "新歌"
    },
    component:NewSong
},
{
    path: 'rank',
    name: "rank",
    meta: {
        title: "排行"
    },
    component:Rank
},
{
    path: 'plist',
    name: "plist",
    meta: {
        title: "歌单"
    },
    component:Plist
},
{
    path: 'singer',
    name: "singer",
    meta: {
        title: "歌手"
    },
    component: Singer
}
]

export default navs;