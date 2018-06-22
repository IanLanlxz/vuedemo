<template>
  <div>
    <el-table :data="tableData">
      <el-table-column prop="name" label="商家名称" width="140">
      </el-table-column>
      <el-table-column prop="addDate" label="添加日期" width="120">
      </el-table-column>
      <el-table-column prop="perPay" label="人均消费" width="120">
      </el-table-column>
      <el-table-column prop="address" label="地址" width="120">
      </el-table-column>
      <el-table-column prop="type" label="商家类型" width="120">
      </el-table-column>
      <el-table-column prop="telphone" label="电话">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">添加菜式</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="修改店铺信息" :visible="dialogFormVisible">
        <el-form :model="selectTable">
            <el-form-item label="商家名称" label-width="100px">
                <el-input v-model="selectTable.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="登陆账户" label-width="100px">
                <el-input v-model="selectTable.saccount" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="登陆密码" label-width="100px">
                <el-input v-model="selectTable.password" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="人均消费" label-width="100px">
                <el-input v-model="selectTable.perPay" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="打印机编号" label-width="100px">
                <el-input v-model="selectTable.printerSn" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="打印机密码" label-width="100px">
                <el-input v-model="selectTable.keyPass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="wifi账号" label-width="100px">
                <el-input v-model="selectTable.wifiname" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="wifi密码" label-width="100px">
                <el-input v-model="selectTable.wifipass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="收款链接" label-width="100px">
                <el-input v-model="selectTable.payURL" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="详细地址" label-width="100px">
                <el-input v-model="selectTable.shopTerritory" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="店铺介绍" label-width="100px">
                <el-input v-model="selectTable.remark"></el-input>
            </el-form-item>
            <el-switch
              v-model="selectTable.air"
              active-color="#13ce66"
              inactive-color="#ff4949"
              inactive-text="空调">
            </el-switch>
            <el-switch
              v-model="selectTable.carpark"
              active-color="#13ce66"
              inactive-color="#ff4949"
              inactive-text="停车位">
            </el-switch>
            <el-form-item label="联系电话" label-width="100px">
                <el-input v-model="selectTable.telphone"></el-input>
            </el-form-item>
            <el-form-item label="商铺图片" label-width="100px">
                <el-upload
                  class="avatar-uploader"
                  :action="uploadUrl"
                  :show-file-list="false"
                  :on-success="handleServiceAvatarScucess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="selectTable.svrPath" :src="selectTable.svrPath" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
        </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateShop">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script src="./ShopManage.js"></script>
