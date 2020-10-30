<template>
  <div id="newsong">
    <mt-swipe :auto="2000">
      <mt-swipe-item v-for="item in banners" :key="item.id">
        <img :src="item.imgurl" :alt="item.title" :title="item.title" />
      </mt-swipe-item>
    </mt-swipe>
    <div id="newSongList">
      <mt-cell 
      v-for="item in newsongs"
      :key="item.hash"
      :title="item.filename" 
      to="//github.com" 
      >
        <span><img src="@/assets/img/download_icon.png" alt=""></span>
      </mt-cell>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem, Cell } from "mint-ui";
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Cell.name, Cell);
export default {
  data() {
    return {
      newsongs: [],
      banners: [],
    };
  },
  async created() {
    let { data } = await this.$axios.get("/api/?json=true");
    this.newsongs = data.data;
    this.banners = data.banner;
    console.log(data.data);
  },
};
</script>

<style lang='less'>
#newsong {
  .mint-swipe {
    height: 6.25rem;
    margin-top: 0.3125rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  #newSongList{
    .mint-cell-title{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      .mint-cell-text{
         font-size: 0.75rem;
      }
    }
    .mint-cell-value{
      img{
        width: 0.9375rem;
        height: 0.9375rem;
      }
    }
  }
}
</style>