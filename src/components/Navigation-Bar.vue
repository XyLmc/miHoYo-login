<template>
  <!--  导航栏-->
  <div class="nav">
    <div class="container">
      <a href="javascript:;" class="logo">
        <img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/dcec27cc6ece0eb5bb217e62e6bec104.svg" alt="">
      </a>
      <ul class="nav_list">
        <li v-for="(item,index) in list" class="nav_item" :key="index" @click="itemIsAcitve(index)"><a href="javscript:;" :class="{active:isActive===index}">{{ item }}</a></li>
      </ul>
      <div class="search" ref="search">
          <input type="text" maxlength="32" placeholder="探索掘金" class="search-input" @focus="focusInput($event)" @blur="blurInput" ref="input"/>
          <img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/8f68a2223e9650f14d6e6781cdcd717a.svg" alt="" class="search-icon">
      </div>
      <div class="logins">
        <router-link to="/login" class="logins-button">登录</router-link>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Navigation-Bar",
  data(){
    return{
      list:['首页','制作','收藏','我的'],
      isActive:0
    }
  },
  methods: {
    itemIsAcitve(index){
      this.isActive=index
    },
    focusInput() {
      let input = this.$refs.input;
      let search = this.$refs.search
      input.style.width = 500 + 'px';
      search.style.border = 1 + 'px solid #1e80ff'
      input.placeholder = '搜索文章/小册/标签/用户'
    },
    blurInput(){
      let input = this.$refs.input;
      let search = this.$refs.search
      input.style.width = 140 + 'px';
      search.style.border = "none"
      input.placeholder = '搜索掘金'
    },
  },
}
</script>

<style scoped>
.nav {
  height: 60px;
  background: white;
  box-sizing: border-box;
  border-bottom: 1px solid #f1f1f1;
  color: #909090;
}
.nav .container{
  max-width: 1200px;
  margin: auto;
}
.container{
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;

}
.logo{
  margin-right: 20.4px;
}
.logo img{
  display: block;
  width: 82px
}
ul{

}
ul .nav_item {
  color: #86909c;
  font-size: 16px;
  float: left;
  position: relative;
  padding: 0 20.4px;;
  line-height: 60px;
}
ul .nav_item a{
  color: #86909c;
  display: inline-block;
}
ul .nav_item .active {
  color: #1e80ff;
}
.search {
  margin-left: 50px;

  background-color: #f4f5f5;
  border-radius: 2px;
  position: relative;
}
.search .search-input {
  padding-left: 12px;
  padding-right: 25px;
  height: 30px;
  width: 140px;
  border: none;
  box-shadow: none;
  outline: none;
  font-size: 13px;

  background-color: transparent;
  color: #666;
  transition: width .4s;
}
.search-icon {
  display: inline-block;
  cursor: pointer;
  position: absolute;
  top: 7px;
  right: 5px;
}
.logins {

  padding: 0;
  margin: 0;
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.logins .logins-button {
  border: 1px solid #007fff;
  background-color: #fff;
  padding: .23rem 1.3rem;
  color: #007fff;
  line-height: 22.8px;
  font-size: 16px;
}
</style>