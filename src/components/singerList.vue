<template>
  <div id="singerList">
    <mt-header :title="singerTitle">
      <mt-button icon="back" slot="left" @click="$router.go(-1)"></mt-button>
    </mt-header>
    <router-view :list="singerList"></router-view>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      singerTitle: "",
      singerList: [],
    };
  },
  async created() {
    let { data } = await this.$axios.get(
      "/api/singer/list/" + this.id + "?json=true"
    );
    this.singerTitle = data.classname;
    this.singerList = data.singers.list.info;
    console.log(this.singerList);
  },
};
</script>

<style lang='less'>
#singerList {
  .mint-header {
    background: white;
    color: black;
    .mint-header-title {
      font-size: 0.8rem;
    }
  }
}
</style>