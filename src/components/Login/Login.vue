<template>
  <el-form :model="loginForm" status-icon :rules="rules2" ref="loginForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="账户" prop="loginName">
      <el-input v-model="loginForm.userName" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pass">
      <el-input type="password" v-model="loginForm.password" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
      <el-button type="primary" @click="submitFormAgain()">提交2</el-button>
      <!-- <el-button @click="resetForm('loginForm')">重置</el-button> -->
    </el-form-item>
  </el-form>
</template>
<script src="./Login.js"/>
