<template>
  <div id="singer">
    <router-link
      :to='"/singer/list/"+item.classid'
      v-for="(item, i) in singerList"
      :key="item.classid"
    >
      <div
        id="item"
        :style="{ 'margin-bottom': bool.includes(i) ? '0.625rem' : '' }"
      >
        <span>{{ item.classname }}</span>
        <span><img src="@/assets/img/arrow_icon.png" alt="" /></span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      singerList: [],
      bool: [],
    };
  },
  async created() {
    let {
      data: { list },
    } = await this.$axios.get("/api/singer/class?json=true");
    this.singerList = list;
    for (let i = 0; i < list.length - 1; i++) {
      if (
        list[i].classname.substr(0, 2) !== list[i + 1].classname.substr(0, 2)
      ) {
        this.bool.push(i);
      }
    }
  },
};
</script>

<style lang="less">
#item {
  margin: 0 0.625rem;
  background: #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.3125rem;
  padding: 0.625rem;
  span {
    font-size: 0.625rem;
    img {
      width: 0.9375rem;
      height: 0.9375rem;
    }
  }
}
</style>