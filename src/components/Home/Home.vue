<template>
  <div>
    <el-container style="height: 890px; border: 1px solid #eee">
      <el-aside width="200px" style="height: 898px;background-color: rgb(238, 241, 246)">
        <el-menu :default-active="defaultActive" router>
          <el-menu-item index="manage"><i class="el-icon-menu"></i>首页</el-menu-item>
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>数据管理</template>
            <el-submenu index="1-1">
              <template slot="title">商家管理</template>
              <el-menu-item index="1-1-1">添加商家</el-menu-item>
              <el-menu-item index="shopList">商家列表</el-menu-item>
            </el-submenu>
            <el-submenu index="1-2">
              <template slot="title">菜式管理</template>
              <el-menu-item index="1-2-1">添加菜式</el-menu-item>
              <el-menu-item index="1-2-2">菜式列表</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>设置</template>
            <el-menu-item-group>
              <template slot="title">东莞</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>Ian Lan</span>
        </el-header>

        <el-main>
          <keep-alive>
				    <router-view></router-view>
				  </keep-alive>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

<script src="./Home.js"></script>
