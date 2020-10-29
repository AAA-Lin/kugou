<template>
  <div id="navBar">
    <mt-navbar v-model="selected">
      <mt-tab-item
        :id="item.name"
        v-for="item in navs"
        :key="item.name"
        @click.native="goto(item.path)"
        >{{ item.meta.title }}</mt-tab-item
      >
    </mt-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from "vue";
import { Navbar, TabItem } from "mint-ui";
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
import navs from "@/router/nav.js";
export default {
  data() {
    return {
      navs,
      selected: "newsong",
    };
  },
  methods: {
    goto(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style lang="less">
#navBar {
  .mint-navbar {
    .mint-tab-item-label {
      font-size: 0.8rem;
    }
  }
}
</style>