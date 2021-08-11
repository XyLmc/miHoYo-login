<template>
  <!--  这边是手机注册页面不会改变的东西-->
  <div class="register-bg">
    <!--    上面的logo图-->
    <img src="../../assets/miHoYo_Logo.png">
    <!--    内容-->
    <div class="register-content">
      <header>
        <h2>注册米哈游通行证</h2>
      </header>
      <!--      注册的表单-->
      <register></register>
      <!--      忘记密码，立即注册-->
      <div class="to-login">
        <router-link to="/login/captcha">返回登录</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Register from "@/views/register/register";
export default {
  name: "index",
  components: {Register},
}
</script>

<style scoped>
@import "../../assets/css/login/login.css";
.register-bg{
  position: relative;
  width: 612px;
  height: 100vh;
  margin: 0 auto;
}
.register-bg img{
  width: 216px;
  height: 76px;
  margin: 3em auto;
}

.register-content{
  position: relative;
  width: 612px;
  min-height: 720px;
  background-color: #fff;
  box-shadow:0px 20px 20px -10px rgba(0,0,0,10%);
  border-radius: 5px;
  padding: 60px 126px 60px 126px;
}

.register-content h2{
  height: 50px;
  font-size: 29px;
  color: #4ea4dc;
  border-bottom: 4px solid #4ea4dc;
  font-weight: bold;
}

.to-login{
  margin-top: 20px;
  width: 100%;
  min-height: 40px;
}
a{
  font-size: 20px;
  font-weight: 200;
  color: #4ea4dc;
  float: right;
}
</style>