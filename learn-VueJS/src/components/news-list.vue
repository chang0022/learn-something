<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12" v-for="news in newsList">
        <h2>
          <router-link :to="{name: 'newsDetail', params:{newsId: news.newsId}}">{{news.title}}</router-link>
          <small>{{news.pubtiem}}</small>
        </h2>
        <p>{{news.desc}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        newsList:[
          {newsid:'101', pubtime: '2017-04-07', title: '探索之路', desc:'是手机团队的探索之路'},
          {newsid:'102', pubtime: '2017-04-08', title: '系统之战', desc:'如何支持业务解决'},
          {newsid:'103', pubtime: '2017-04-09', title: '大文件存储', desc:'背后的你不得不知的技术'},
          {newsid:'104', pubtime: '2017-04-10', title: '飞天进化', desc:'"阿里巴巴技术委员会'}
        ]
      }
    }
  }
</script>
