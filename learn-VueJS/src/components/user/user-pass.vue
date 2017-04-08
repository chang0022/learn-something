<template>
  <div>
    <div class="form-group">
      <label class="col-sm-2 control-label">密码</label>
      <div class="col-sm-10">
        <input type="password" class="form-control" :placeholder="placeholder">
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['placeholder']
  }
</script>
