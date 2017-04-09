<template>
  <div id="user-login" class="col-md-8 col-md-offset-2">
    <h2 class="text-center">用户登录</h2>
    <form class="form-horizontal">
      <user-name ref="uname" placeholder="请输入用户名"></user-name>
      <user-pass placeholder="请输入密码"></user-pass>
      <user-area></user-area>
      <user-favs></user-favs>
      <user-submit></user-submit>
    </form>
  </div>
</template>
<script>
  import username from './user/user-name';
  import userpass from './user/user-pass';
  import userarea from './user/user-area';
  import userfavs from './user/user-favs';
  import usersubmit from './user/user-submit';

  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      setValue(key, value) {
        this.$data[key] = value;
      }
    },
    mounted() {
      this.$children.forEach(function (cc) {
        cc.$on('childChange', this.setValue);
      }.bind(this));
    },
    components: {
      'user-name': username,
      'user-pass': userpass,
      'user-area': userarea,
      'user-favs': userfavs,
      'user-submit': usersubmit
    }
  }
</script>
<style>
  @import "http://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css";

  #user-login {
    margin-top: 50px;
  }
</style>
