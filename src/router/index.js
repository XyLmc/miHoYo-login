import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login/index'
import EmailLogin from '../views/login/EmailLogin'
import PasswordLogin from "@/views/login/PasswordLogin";
import register from "@/views/register/index";
import Home from "@/views/Home/index"

Vue.use(VueRouter)

const routes = [
  //  重定向
  {
    path: "/",
    component: Home,
    redirect: "/home",
  },
  //  首页路由器
  {
    path: '/home',
    component: Home
  },
  {
    path: '/login',
    // name: 'login',
    component: login,
    children: [
      {
        path: '/login/email',
        name: 'email',
        component: EmailLogin
      },
      {
        path: '/login/password',
        name: 'password',
        component: PasswordLogin
      }
    ]
  },
  {
    path: '/register/mobile',
    name: 'register',
    component: register,
  }
];

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
