<template>
<!--  这边是登录页面不会改变的东西-->
  <div class="login-bg">
<!--    上面的logo图-->
    <img src="../../assets/miHoYo_Logo.png">
<!--    内容-->
    <div class="login-content">
<!--      登录方式-->
      <div class="login-mode">
        <div :class={modeActive:modeActive} @click="loginModeChange(true)">验证码登录</div>
        <div :class={modeActive:!modeActive} @click="loginModeChange(false)">密码登录</div>
        <i class="mode-line" :class={lineLeft:modeActive}></i>
      </div>
<!--      切换登录方式时下面内容的更换-->
      <router-view></router-view>
<!--      忘记密码，立即注册-->
      <div class="question">
        <router-link to="">遇到问题？</router-link>
        <router-link to="/register/mobile" class="to-register">立即注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data(){
    return{
      modeActive:true
    }
  },
  methods:{
    loginModeChange(value){
      if(value){
        this.modeActive=true
        this.$router.replace('captcha')
      }else{
        this.modeActive=false
        this.$router.replace('password')
      }
    }
  },
  created() {
    this.$router.push('/login/captcha')
  }
}
</script>

<style scoped>
@import "../../assets/css/login/login.css";
.login-bg{
  position: relative;
  width: 612px;
  height: 100vh;
  margin: 0 auto;
}
.login-bg img{
  width: 216px;
  height: 76px;
  margin: 3em auto;
}

.login-content{
  position: relative;
  width: 612px;
  min-height: 720px;
  background-color: #fff;
  box-shadow:0px 20px 20px -10px rgba(0,0,0,10%);
  border-radius: 5px;
  padding: 60px 126px 0px 126px;
}

.login-mode{
  position: relative;
  display: flex;
  width: 100%;
  font-size: 25.2px;
  border-bottom: 1px solid #f5f5f5;

}
.login-mode div{
  padding: 18px;
  flex: 1;
  cursor: pointer;
}

.mode-line{
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 50%;
  height: 4.5px;
  background-color: #4ea4dc;
  transition: all .3s ease;
}

.modeActive{
  font-weight: 700;
  color: #4ea4dc;
}
.lineLeft{
  left: 0;
}

.question{
  margin-top: 20px;
  width: 100%;
  min-height: 40px;
}
a{
  font-size: 20px;
  font-weight: 200;
  color: #4ea4dc;
  float: left;
}
.to-register{
  float: right;
}
</style>