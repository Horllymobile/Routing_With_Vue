import UserComp from './Components/User.vue';
import AboutComp from './Components/About_us.vue';
import HomeComp from './Components/Home.vue';
import Comp404 from './Components/404.vue';
export const routes = [
    {path:'/user',component:UserComp,children:[
        {path:'/user/:id',component:UserComp,name:'userProfile'},
    ]},
    {path:'/about_us',component:AboutComp},
    {path:'/',component:HomeComp,name:'home'},

    {path:'*',component:Comp404}
]