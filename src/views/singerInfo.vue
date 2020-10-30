<template>
  <div id="singerInfo">
    <router-link v-for="item in list" :key="item.singerid" :to="'/singer/info/'+item.singerid">
      <mt-cell :title="item.singername">
        <img
          slot="icon"
          :src="item.imgurl | filterImg(400)"
          width="24"
          height="24"
        />
      </mt-cell>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["list"],
};
</script>

<style lang="less">
#singerInfo {
  .mint-cell-title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0.625rem 0;
    .mint-cell-text {
      font-size: 0.8125rem;
    }
    img {
      width: 3.125rem;
      height: 3.125rem;
    }
  }
  .mint-cell-value {
    img {
      width: 0.9375rem;
      height: 0.9375rem;
    }
  }
}
</style>