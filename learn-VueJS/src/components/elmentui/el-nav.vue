<template>
  <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" :router="true">
    <el-menu-item index="/elindex/hot">处理中心</el-menu-item>
    <el-submenu index="/">
      <template slot="title">我的工作台</template>
      <el-menu-item index="/">选项1</el-menu-item>
      <el-menu-item index="/">选项2</el-menu-item>
      <el-menu-item index="/">选项3</el-menu-item>
    </el-submenu>
    <el-menu-item index="/">订单管理</el-menu-item>
  </el-menu>
</template>
