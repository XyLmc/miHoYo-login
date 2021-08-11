<template>
  <!--    手机验证码登录方式的内容-->
  <form>
    <!--    手机号的框-->
    <div class="container" :class="{inputActive:inputFocus==1}">
      <!--      判断内容是否为空，用来判断这个文本内容的变大变小-->
      <div class="input-text" :class="{active:phone?1:0}">手机号</div>
      <input type="text" v-model="phone" @focus="inputFocus=1" @blur="inputFocus=false">
    </div>
    <!--    验证码的框-->
    <div class="container" :class="{inputActive:inputFocus==2}">
      <!--      判断内容是否为空，用来判断这个文本内容的变大变小-->
      <div class="input-text" :class="{active:captcha?1:0}">手机验证码</div>
      <!--       验证码一栏，限制长度为6-->
      <input type="text" v-model="captcha" @focus="inputFocus=2" @blur="inputFocus=false" maxlength="6">
      <!--      获取验证码-->
      <div class="captcha" @click="getCaptcha()">获取验证码</div>
    </div>
    <!--    密码的框-->
    <div class="container" :class="{inputActive:inputFocus==3}">
      <!--      判断内容是否为空，用来判断这个文本内容的变大变小-->
      <div class="input-text" :class="{active:password?1:0}">密码</div>
      <input type="text" v-model="password" @focus="inputFocus=3" @blur="inputFocus=false">
    </div>
    <!--    密码确认的框-->
    <div class="container" :class="{inputActive:inputFocus==4}">
      <!--      判断内容是否为空，用来判断这个文本内容的变大变小-->
      <div class="input-text" :class="{active:checkPassword?1:0}">确认密码</div>
      <input type="text" v-model="checkPassword" @focus="inputFocus=4" @blur="inputFocus=false">
    </div>
    <button class="login" type="submit">登录</button>
  </form>
</template>

<script>
import {getCaptcha} from "@/axios/register";

export default {
  name: "Register",
  data(){
    return{
      inputFocus:false,
      phone:'',
      captcha:'',
      password:'',
      checkPassword:''
    }
  },
  methods:{
    getCaptcha(){
      return getCaptcha()
    }
  }
}
</script>

<style scoped>
.container{
  position: relative;
  width: 100%;
  height: 50px;
  margin-top: 50px;
  border-bottom: #eaeaea 1px solid;
  transition: all .2s ease;
  font-size: 22px;
}
.container input{
  position: relative;
  width: 100%;
  height: 50px;
  border: none;
  outline: none;
  font-size: inherit;
  font-weight: 300;
  color: #4c4c4c;
  z-index: 2;
  background-color: transparent; /*背景透明*/
}
.inputActive{
  border-bottom: #4ea4dc 1px solid;
}

.input-text{
  position: absolute;
  top: 10px;
  color: #b3b3b3;
  z-index: 1;
  cursor: text;
  transition: all .2s ease;
}
.active{
  top: -18px;
  font-size: 16px;
}

/*验证码的样式*/
.captcha{
  position: absolute;
  top: 15px;
  right: 0px;
  width: 144px;
  height: 100%;
  font-size: 18px;
  color: #4ea4dc;
  z-index: 2;
  cursor: pointer;
}


</style>