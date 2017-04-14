<template>
  <div class="form-group">
    <label class="col-sm-2 control-label">用户名</label>
    <div class="col-sm-10">
      <input type="text" v-model="username"  class="form-control" @change="userNameChange" :placeholder="placeholder">
    </div>
  </div>
</template>
<script>
  export default {
    props: ['placeholder'],
    data() {
      return {
        username: ''
      }
    },
    methods: {
      userNameChange() {
//        this.$emit('childChange', 'username', this.username);
        this.$store.state.userName = this.username;
      }
    }
  }
</script>
