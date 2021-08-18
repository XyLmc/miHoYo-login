<template>
  <!--    密码登录方式的内容-->
  <form>
    <!--    手机号的框-->
    <div class="container" :class="{inputActive:phoneFocus}">
      <div class="phone-text" :class="{active:phone?1:0}">账号登录</div>
      <input type="text" v-model="phone" @focus="phoneFocus=true" @blur="phoneFocus=false">
    </div>
    <!--    密码的框-->
    <div class="container" :class="{inputActive:passwordFocus}">
      <div class="phone-text" :class="{active:password?1:0}">密码</div>
      <input type="text" v-model="password" @focus="passwordFocus=true" @blur="passwordFocus=false" >
    </div>
    <button class="login" type="submit">登录</button>
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

.phone-text{
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
</style>