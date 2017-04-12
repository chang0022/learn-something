<template>
  <div class="news-detail">
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12">
        <div class="panel panel-default">
          <div  class="panel-body">
            <h2>{{newsDetail.title}}</h2>
            <small>{{newsDetail.pubtime}}</small>
            <p>{{newsDetail.desc}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    created() {
      this.$http.get('/api/news/detail?newsId=' + this.$route.params.newsId)
        .then(res => {
          this.newsDetail = res.data;
        }, res => {
          console.log(res);
        });
    },
    data() {
      return {
        newsDetail: []
      }
    }
  }
</script>
