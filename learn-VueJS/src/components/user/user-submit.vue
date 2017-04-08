<template>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <button type="button" @click="test" class="btn btn-default">提交</button>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      test() {
        alert(this.$parent.$refs.uname.$data.username + '===' + this.$parent.$data.userarea);
      }
    }
  }
</script>
