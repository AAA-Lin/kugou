import NewSong from '@/views/NewSong'
import Rank from '@/views/Rank'
import Plist from '@/views/Plist'
import Singer from '@/views/Singer'
import Nav from '@/components/Nav'

const navs = [{
    path: '/newsong',
    name: "newsong",
    meta: {
        title: "新歌"
    },
    components: {
        default: NewSong,
        nav: Nav
    }
},
{
    path: '/rank',
    name: "rank",
    meta: {
        title: "排行"
    },
    components: {
        default: Rank,
        nav: Nav
    }
},
{
    path: '/plist',
    name: "plist",
    meta: {
        title: "歌单"
    },
    components: {
        default: Plist,
        nav: Nav
    }
},
{
    path: '/singer',
    name: "singer",
    meta: {
        title: "歌手"
    },
    components: {
        default: Singer,
        nav: Nav
    }
}
]

export default navs;