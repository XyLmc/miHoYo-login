<template>
  <!--    手机验证码登录方式的内容-->
  <form>
<!--    手机号的框-->
    <div class="container" :class="{inputActive:phoneFocus}">
      <!--      判断内容是否为空，用来判断这个文本内容的变大变小-->
      <div class="input-text" :class="{active:phone?1:0}">手机号注册/登录</div>
      <input type="text" v-model="phone" @focus="phoneFocus=true" @blur="phoneFocus=false">
    </div>
<!--    验证码的框-->
    <div class="container" :class="{inputActive:passwordFocus}">
      <!--      判断内容是否为空，用来判断这个文本内容的变大变小-->
      <div class="input-text" :class="{active:password?1:0}">手机验证码</div>
      <!--       验证码一栏，限制长度为6-->
      <input type="text" v-model="password" @focus="passwordFocus=true" @blur="passwordFocus=false" maxlength="6">
      <!--      获取验证码-->
      <div class="captcha">获取验证码</div>
    </div>
    <button class="login" type="submit" @click="login()">登录</button>
  </form>
</template>

<script>
export default {
  name: "CaptchaLogin",
  data(){
    return{
      phoneFocus:false,
      passwordFocus:false,
      phone:'',
      password:''
    }
  },
  methods:{
    login(){
      const xhr = new XMLHttpRequest()
      // xhr.responseType = "json"
      xhr.open('post','http://localhost:3000/api/user/login')
      xhr.send()
      xhr.onreadystatechange = ()=>{
        if(xhr.readyState===4){
          if(xhr.status >= 200 && xhr.status <=300){
            console.log(xhr.response)
          }
        }
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