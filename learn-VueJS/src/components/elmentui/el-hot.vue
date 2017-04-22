<template>
  <div>
    <el-row v-for="hotNews in this.$store.state.ele.hot" :key="hotNews" justify="start" :gutter="2" align="middle">
      <el-col :span="6">
        <div class="grid-content bg-purple-dark hotimg">
          <img :src="hotNews.image">
        </div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content bg-purple-dark hotcontent">
          <h2>{{hotNews.title}}</h2>
          <p>{{hotNews.desc}}</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$store.dispatch('getHot');
    },
    data() {
      return {
        msg: 'Hello Vue'
      }
    }
  }
</script>
