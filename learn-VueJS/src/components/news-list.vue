<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12" v-for="news in this.$store.getters.getNews">
        <h2>
          <router-link :to="{name: 'newsDetail', params:{newsId: news.newsid}}">{{news.title}}</router-link>
          <small>{{news.pubtime}}</small>
        </h2>
        <p>{{news.desc}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    created() {
      if (this.$store.state.news.newsList.length === 0) {
        this.$http.get('/api/news/lists')
          .then(res => {
            this.$store.state.news.newsList = res.data.array;
          }, res => {
            console.log(res);
          })
      }
    }
  }
</script>
