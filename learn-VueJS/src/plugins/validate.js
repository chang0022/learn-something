/**
 * Created by Chang on 2017/4/13.
 */
export default {
  install(Vue) {

    Vue.component('validate-text', {
      template: '<div><input type="text" v-model="textValue" class="form-control" :placeholder="placeholder"><span v-if="showErrorLabel" class="label label-danger">用户名不合法</span></div>',
      data() {
        return {
          textValue: ''
        }
      },
      props: ['placeholder'],
      computed: {
        showErrorLabel(){
          return !(/\w{6,20}/.test(this.textValue) || this.textValue === "");
        }
      }
    });

    // Vue.prototype.errorLabel = null;
    // Vue.prototype.hasError = false;
    //
    // Vue.directive('uname', {
    //   bind() {
    //     let errorTpl = Vue.extend({
    //       template: '<span class="label label-danger">用户名不合法</span>'
    //     });
    //     Vue.errorLabel = (new errorTpl()).$mount().$el;
    //   },
    //   update(el, binding, vnode) {
    //
    //     if(/\w{6,20}/.test(el.value)) {
    //       if(Vue.hasError) {
    //         el.parentNode.removeChild(Vue.errorLabel);
    //         Vue.hasError = !Vue.hasError;
    //       }
    //     } else {
    //       if(!Vue.hasError) {
    //         el.parentNode.appendChild(Vue.errorLabel);
    //         Vue.hasError = !Vue.hasError;
    //       }
    //     }
    //   }
    // })
  }
}
