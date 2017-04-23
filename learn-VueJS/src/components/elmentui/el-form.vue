<template>
  <div class="form">
    <el-form ref="form" :model="UserForm" :rules="this.$store.state.userInfo.CheckRules" label-position="left"
             label-width="180px">
      <el-form-item label="真实姓名" prop="trueName">
        <el-input v-model="UserForm.trueName"></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model="UserForm.age"></el-input>
      </el-form-item>
      <el-form-item label="出生年月">
        <el-date-picker type="date" placeholder="选择日期" v-model="UserForm.birthday"></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitInfo">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<style>
  .form {
    margin-top: 20px;
  }
</style>
<script>
  export default {
    created() {
      this.UserForm = this.$store.state.userInfo.UserForm;
    },
    beforeDestory() {
      this.$store.state.userInfo.UserForm = this.UserForm;
    },
    data() {
      return {
        UserForm: {
          trueName: '',
          age: '',
          birthday: ''
        }
      }
    },
    methods: {
      submitInfo() {
        this.$refs.form.validate(function (result) {
          if (result) {
            this.$store.dispatch('setUserInfo');
          } else {
            console.log('表达验证不合法');
          }
        }.bind(this));
      }
    }
  }
</script>
