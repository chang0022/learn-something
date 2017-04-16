<template>
  <el-table :data="this.$store.state.news.newsTable" style="width: 100%" @cell-click="open">
    <el-table-column prop="data" label="日期" width="180"></el-table-column>
    <el-table-column prop="name" label="姓名" width="180"></el-table-column>
    <el-table-column prop="address" label="地址"></el-table-column>
  </el-table>
</template>
<script>
  export default {
    created() {
      if (this.$store.state.news.newsTable.length === 0) {
        this.$http.get('/api/news/table')
          .then(res => {
            this.$store.state.news.newsTable = res.data.array;
          }, res => {
            console.log(res);
          })
      }
    },
    methods: {
      open() {
        this.$message('单元格点击！');
      }
    }
  }
</script>
