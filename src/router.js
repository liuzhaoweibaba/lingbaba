import VueRouter from 'vue-router' ;
//引入 tab栏组件
import first from './components/first.vue';
import second from './components/second.vue';
import three from './components/three.vue';
import four from './components/four.vue';
import five from './components/five.vue';

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/',redirect:'/first'},
    {path:'/second',component:second},
    {path:'/three',component:three},
    {path:'/four',component:four},
    {path:'/five',component:five},
    {path:'/first',component:first},
  ]
 
}) ;

// 把路由对象暴露出去
export default router ;