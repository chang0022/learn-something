/**
 * Created by Neo on 2017/4/22.
 */
import Vue from "vue";
import axios from "axios";

export default {
  state: {
    hot: []
  },
  mutations: {
    setHot(state, data) {
      state.hot = data;
    }
  },
  actions: {
    getHot(ctx) {
      let loading = Vue.prototype.$loading({ text: "玩命加载中..." });
      axios.get("/api/eleui", {}, { emulateJSON: true }).then(
        res => {
          console.log(res.data);
          loading.close();
          ctx.commit("setHot", res.data.array);
        },
        res => {
          console.log(res);
        }
      );
    }
  }
};
