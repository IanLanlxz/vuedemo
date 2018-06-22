import {baseUrl, baseImgPath} from '@/assets/config/env'
export default {
  data() {
    return {
      tableData: [],
      pageNum: 1,
      uploadUrl: baseUrl + baseImgPath,
      selectTable: {
        name: '',
        shopTerritory: '',
        remark: '',
        telphone: '',
        svrPath: '', //商店头像的URL
        photoKid: '',
        saccount: '',
        password: '',
        perPay: '',
        printerSn: '',
        keyPass: '',
        wifiname: '',
        wifipass: '',
        payURL: '',
        shopTerritory: '',
        remark: '',
        air: true,
        carpark: true,
        telphone: ''
      }, //当前行
      dialogFormVisible: false //控制编辑窗口
    }
  },
  mounted(){
    this.initData();
  },
  methods: {
    //获取所有商家信息
    initData() {
      this.$api.post('/ShopController/getAllShop', {pageNum: this.pageNum}, r => {
        this.tableData = r.mainListItem
      })
    },
    //上传成功
    handleServiceAvatarScucess(res, file) {
      if (res.code == 1) {
        this.selectTable.svrPath = res.url;
        this.selectTable.photoKid = res.kid;
        this.$message.success('上传图片成功！');
      }else{
          this.$message.error('上传图片失败！');
      }
    },
    beforeAvatarUpload(file) {
      const isRightType = (file.type === 'image/jpeg') || (file.type === 'image/png');
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isRightType) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isRightType && isLt2M;
    },
    handleEdit(index, row){
      Object.keys(this.selectTable).forEach(r => {
        if (row[r]) {
          this.selectTable[r] = row[r]
        }
      })
      for (var i = 0; i < row.photoList.length; i++) {
        if (3 === row.photoList[i].photoType) {
          this.selectTable.svrPath = row.photoList[i].svrPath
          break;
        }
      }
      this.dialogFormVisible = true;
    },
    //修改窗口确认事件
    updateShop(){
      this.$api.post('/ShopController/updateShop', this.selectTable, r => {
        this.initData();
      })
    }
  }
};
