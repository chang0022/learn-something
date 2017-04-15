/**
 * Created by Chang on 2017/4/15.
 */
export default {
  state: {
    userName: ''
  },
  mutations: {
    showUserName(state) {
      alert(state.userName);
    }
  }
}
