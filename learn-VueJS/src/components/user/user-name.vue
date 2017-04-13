<template>
  <div class="form-group">
    <label class="col-sm-2 control-label">用户名</label>
    <div class="col-sm-10">
      <input type="text" v-uname="username" v-model="username" @change="userNameChange" class="form-control" :placeholder="placeholder">
      <span class="label label-danger" v-if="showErrorMsg">用户名不合法</span>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['placeholder'],
    data() {
      return {
        username: '',
        showErrorMsg: false
      }
    },
    methods: {
      userNameChange() {
        this.showErrorMsg = !this.checkUserName(this.username);
        this.$emit('childChange', 'username', this.username);
      }
    }
  }
</script>
