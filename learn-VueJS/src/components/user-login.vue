<template>
  <div id="user-login" class="col-md-8 col-md-offset-2">
    <h2 class="text-center">用户登录</h2>
    <form class="form-horizontal">
      <user-name ref="uname" placeholder="请输入用户名" @updateUserName="setUserName"></user-name>
      <user-pass placeholder="请输入密码"></user-pass>
      <user-area @childChange="setValue"></user-area>
      <user-submit></user-submit>
    </form>
  </div>
</template>
<script>
  import username from './user/user-name';
  import userpass from './user/user-pass';
  import userarea from './user/user-area';
  import usersubmit from './user/user-submit';

  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      setUserName(uname) {
        this.username = uname;
      },
      setValue(key, value) {
        this.$data[key] = value;
      }
    },
    components: {
      'user-name': username,
      'user-pass': userpass,
      'user-area': userarea,
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
