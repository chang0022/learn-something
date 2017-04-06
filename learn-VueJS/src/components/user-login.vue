<template>
  <div id="user-login" class="col-md-8 col-md-offset-2">
    <h2 class="text-center">用户登录</h2>
    <form class="form-horizontal">
      <user-name ref="uname" placeholder="请输入用户名"></user-name>
      <user-submit></user-submit>
    </form>
  </div>
</template>
<script>
  import username from './user/user-name';
  import usersubmit from './user/user-submit';
  export default {
      components: {
          'user-name': username,
          'user-submit': usersubmit,
      }
  }
</script>
<style>
  @import "http://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css";

  #user-login {
    margin-top: 50px;
  }
</style>
