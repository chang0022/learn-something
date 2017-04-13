/**
 * Created by Chang on 2017/4/13.
 */
export default {
  install(Vue) {
    Vue.prototype.checkUserName = value => {
      if (value === '') {
        return true;
      }
      return /\w{6,20}/.test(value);
    }

    Vue.directive('uname', {
      bind() {
        console.log('bind');
      },
      update(el, binding, vnode) {
        console.log(el);
        console.log(binding);
        console.log(vnode);
      }
    })
  }
}
