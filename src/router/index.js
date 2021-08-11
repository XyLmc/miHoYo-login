import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login/index'
import captcha from '../views/login/CaptchaLogin'
import PasswordLogin from "@/views/login/PasswordLogin";
import register from "@/views/register/index"

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    // name: 'login',
    component: login,
    children:[
      {
        path:'/login/captcha',
        name:'captcha',
        component:captcha
      },
      {
        path:'/login/password',
        name:'password',
        component:PasswordLogin
      }
    ]
  },
  {
    path:'/register/mobile',
    name:'register',
    component: register,
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
