<template>
  <div>
    <div class="form-group">
      <label class="col-sm-2 control-label">用户名</label>
      <div class="col-sm-10">
        <input type="text" v-model="username" @change="userNameChange" class="form-control" :placeholder="placeholder">
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['placeholder'],
    data() {
      return {
        username: 'Neo'
      }
    },
    methods: {
      userNameChange() {
        this.$emit('childChange', 'username', this.username);
      }
    }
  }
</script>
