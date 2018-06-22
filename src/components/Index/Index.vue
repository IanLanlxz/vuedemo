<template>
  <el-container>
    <el-header><HeaderMoudle></HeaderMoudle></el-header>
    <el-main><Login></Login></el-main>
  </el-container>
</template>
<script>
import HeaderMoudle from '../header.vue'
import Login from '../Login/Login.vue'
export default {
  components: {HeaderMoudle, Login}
}
</script>

