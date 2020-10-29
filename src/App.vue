<template>
  <div id="app">
    <!-- 头部 -->
    <div id="header">
      <mt-header title="">
        <router-link to="/" slot="left">
          <mt-button class="logo"></mt-button>
        </router-link>
        <router-link to="/search" slot="right">
          <mt-button icon="search"></mt-button>
        </router-link>
      </mt-header>
        <!-- 列表导航 -->
        <router-view name="nav"></router-view>
        <router-view name="searchBar"></router-view>
    </div>
    <!-- 内容 -->
    <div id="contain">

    <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Header, Button } from "mint-ui";
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);

export default {
  async created() {
    let data = await this.$axios.get("/api/?json=true");
    console.log(data);
  },
};
</script>

<style lang="less">
#header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  .mint-header {
    .logo {
      width: 5.1rem;
      height: 1.2rem;
      background: url(./assets/img/logo.png) no-repeat;
      background-size: 100% 100%;
    }
  }
}

#contain{
  
    margin-top: 5.375rem;
  
}
</style>