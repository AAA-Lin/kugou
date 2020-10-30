<template>
  <div id="rank">
    <mt-cell 
    v-for="item in rankList"
    :key="item.rankid"
    :title="item.rankname">
      <img slot="icon" :src="item.imgurl | filterImg(400)" width="24" height="24" />
      <span><img src="@/assets/img/arrow_icon.png" alt=""></span>
    </mt-cell>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rankList: [],
    };
  },
  async created() {
    let {
      data: { rank },
    } = await this.$axios.get("/api/rank/list?json=true");
    this.rankList = rank.list;
    console.log(rank.list);
  },
};
</script>

<style lang="less">
#rank{

 
    .mint-cell-title{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding: 0.625rem 0;
      .mint-cell-text{
         font-size: 0.8125rem;
      }
      img{
        width: 3.125rem;
        height:  3.125rem;
      }
    }
    .mint-cell-value{
      img{
        width: 0.9375rem;
        height: 0.9375rem;
      }
    }
  
}
</style>