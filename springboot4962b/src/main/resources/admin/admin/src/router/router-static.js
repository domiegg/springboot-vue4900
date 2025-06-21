import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import fenlei from '@/views/modules/fenlei/list'
    import news from '@/views/modules/news/list'
    import shangjiaxinxi from '@/views/modules/shangjiaxinxi/list'
    import yonghu from '@/views/modules/yonghu/list'
    import dingdanxinxi from '@/views/modules/dingdanxinxi/list'
    import discusszhekoupiao from '@/views/modules/discusszhekoupiao/list'
    import zhekoupiao from '@/views/modules/zhekoupiao/list'
    import chupiaoxinxi from '@/views/modules/chupiaoxinxi/list'
    import storeup from '@/views/modules/storeup/list'
    import tuipiaoxinxi from '@/views/modules/tuipiaoxinxi/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/fenlei',
        name: '分类',
        component: fenlei
      }
      ,{
	path: '/news',
        name: '公告信息',
        component: news
      }
      ,{
	path: '/shangjiaxinxi',
        name: '商家信息',
        component: shangjiaxinxi
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/dingdanxinxi',
        name: '订单信息',
        component: dingdanxinxi
      }
      ,{
	path: '/discusszhekoupiao',
        name: '折扣票评论',
        component: discusszhekoupiao
      }
      ,{
	path: '/zhekoupiao',
        name: '折扣票',
        component: zhekoupiao
      }
      ,{
	path: '/chupiaoxinxi',
        name: '出票信息',
        component: chupiaoxinxi
      }
      ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
      ,{
	path: '/tuipiaoxinxi',
        name: '退票信息',
        component: tuipiaoxinxi
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
