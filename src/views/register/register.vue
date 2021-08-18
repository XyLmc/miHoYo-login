<template>
  <!--    手机验证码登录方式的内容-->
  <form>
    <!--    账号的框-->
    <div class="container" :class="{inputActive:inputFocus==1,errActive:errActive }">
      <!--      判断内容是否为空，用来判断这个文本内容的变大变小-->
      <div class="input-text" :class="{active:username?1:0}">账号</div>
      <input type="text" v-model="username" @focus="inputFocus=1" @blur="isEmpty()">
      <div class="userError" v-show="userError">内容为空</div>
    </div>
    <!--    邮箱的框-->
    <div class="container" :class="{inputActive:inputFocus==2}">
      <!--      判断内容是否为空，用来判断这个文本内容的变大变小-->
      <div class="input-text" :class="{active:email?1:0}">邮箱</div>
      <!--       验证码一栏，限制长度为6-->
      <input type="text" v-model="email" @focus="inputFocus=2" @blur="inputFocus=false">
      <!--      获取验证码-->
      <div class="email" @click="getCaptcha()">获取验证码</div>
    </div>

    <!--    验证码的框-->
    <div class="container" :class="{inputActive:inputFocus==3}">
      <!--      判断内容是否为空，用来判断这个文本内容的变大变小-->
      <div class="input-text" :class="{active:captcha?1:0}">验证码</div>
      <!--       验证码一栏，限制长度为6-->
      <input type="text" v-model="captcha" @focus="inputFocus=3" @blur="inputFocus=false" maxlength="6">
    </div>

    <!--    密码的框-->
    <div class="container" :class="{inputActive:inputFocus==4}">
      <!--      判断内容是否为空，用来判断这个文本内容的变大变小-->
      <div class="input-text" :class="{active:password?1:0}">密码</div>
      <input type="text" v-model="password" @focus="inputFocus=4" @blur="inputFocus=false">
    </div>
    <!--    密码确认的框-->
    <div class="container" :class="{inputActive:inputFocus==5}">
      <!--      判断内容是否为空，用来判断这个文本内容的变大变小-->
      <div class="input-text" :class="{active:checkPassword?1:0}">确认密码</div>
      <input type="text" v-model="checkPassword" @focus="inputFocus=5" @blur="inputFocus=false">
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
      errActive:false,
      username:'',
      userError:false,
      email:'',
      captcha:'',
      password:'',
      checkPassword:'',
    }
  },
  watch:{
    username(){
      if(this.username != ''){
        this.errActive = false
        this.userError = false
      }
      else{
        this.errActive = true
        this.userError = true
      }
    }
  },
  methods:{
    getCaptcha(){
      return getCaptcha()
    },
    isEmpty(){
      if(this.username == ''){
        this.userError = true
        this.errActive = true
      }
    }
  }
}
</script>

<style scoped>
.container{
  position: relative;
  width: 100%;
  height: 50px;
  margin-top: 55px;
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
/*报错边框样式*/
.errActive{
  border-bottom: red 1px solid;
  color: red;
}


/*账号的错误内容*/
.userError{
  margin-top: 5px;
  float: left;
  color: red;
  font-size: 16px;
}


.input-text{
  position: absolute;
  top: 10px;
  z-index: 1;
  cursor: text;
  transition: all .2s ease;
  color: #b3b3b3;
}
.active{
  top: -18px;
  font-size: 16px;
}

/*验证码的样式*/
.email{
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