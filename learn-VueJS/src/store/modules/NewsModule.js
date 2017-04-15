/**
 * Created by Chang on 2017/4/15.
 */
import axios from 'axios'

export default {
  state: {
    newsList: [],
    newsDetail: []
  },
  mutations: {
    setAgree(state, agree) {
      // state.newsDetail.agree = agree;
      state.newsDetail.agree += 1;
    }
  },
  actions: {
    agree(context, newsId) {
      axios.post('/api/news/agree', {newsId: newsId}, {emulateJSON: true})
        .then(res => {
          context.commit('setAgree', res.data.agree);
        }, res => {
          console.log(res);
        })
    }
  },
  getters: {
    getNews(state) {
      return state.newsList.filter(news => {
        return !news.isDeleted;
      })
    }
  }
}
