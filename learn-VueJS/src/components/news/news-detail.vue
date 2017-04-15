<template>
  <div class="news-detail">
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12">
        <div class="panel panel-default">
          <div class="panel-body">
            <h2>{{this.$store.state.news.newsDetail.title}}</h2>
            <small>{{this.$store.state.news.newsDetail.pubtime}}</small>
            <p>赞: {{this.$store.state.news.newsDetail.agree}}
              <button class="btn btn-success btn-sm" @click="submitAgree"><i class="glyphicon glyphicon-thumbs-up"></i>
              </button>
            </p>
            <p>{{this.$store.state.news.newsDetail.desc}}</p>
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
          this.$store.state.news.newsDetail = res.data;
        }, res => {
          console.log(res);
        });
    },
    methods: {
      submitAgree() {
        this.$store.dispatch('agree', this.$store.state.news.newsDetail.id);
      }
    }
  }
</script>
