<template>
  <div id="plist">
    <mt-cell v-for="item in plists" :key="item.specialid">
      <template #title>
        <span>{{ item.specialname }}</span>
        <span class="playcount">
          <img src="@/assets/img/icon_music.png" alt="">{{ item.playcount }}
        </span>
      </template>
      <img
        slot="icon"
        :src="item.imgurl | filterImg(400)"
        width="24"
        height="24"
      />
      <span><img src="@/assets/img/arrow_icon.png" alt="" /></span>
    </mt-cell>
  </div>
</template>

<script>
export default {
  data() {
    return {
      plists: [],
    };
  },
  async created() {
    let {
      data: { plist },
    } = await this.$axios.get("/api/plist/index?json=true");
    this.plists = plist.list.info;
  },
};
</script>

<style lang="less">
#plist {
  .mint-cell-title {
    padding: 0.625rem 0;
    span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 0.625rem;
      display: inline-block;
      width: 70%;
      position: relative;
    }
    .playcount{
      display: flex;
      align-items: center;
      position: absolute;
      top: 2.7rem;
      left:4rem;
      img{
        width: 0.75rem;
        height:  0.75rem;
      }
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