<template>
  <div>
    <el-row>
      <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
      <elnav></elnav>
    </el-row>
    <router-view></router-view>
  </div>
</template>

<script>
  import elnav from './el-nav'

  export default {
    components: {
      elnav
    }
  }
</script>
