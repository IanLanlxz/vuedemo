export default {
  data () {
    var validateLoginName = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入账户！'));
      } else {
        callback();
      }
    }
    var validatePass = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入密码！'));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        userName: '',
        password: ''
      },
      rules2: {
        userName: [{
          validator: validateLoginName,
          trigger: 'blur'
        }],
        password: [{
          validator: validatePass,
          trigger: 'blur'
        }]
      }
    };
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // this.$api.post('/api-b/TestController/doLogin', this.loginForm, r => {
          //   //this.$router.push('/home');
          //   console.log('I am success' + r)
          // }, r => {
          //   console.log('I am error' + r)
          // })
          this.$router.push('/home');
        } else {
          console.log('error submit!!');
        }
      });
    },
    submitFormAgain () {
      this.$api.post('/api-a/TestController/user', null, r => {
        console.log(r);
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    }
    // submitForm(formName) {
    //   this.$refs[formName].validate((valid) => {
    //     if (valid) {
    //       this.$api.post('/TestController/doLogin', this.loginForm, r => {
    //         //this.$router.push('/home');
    //         console.log('I am success' + r)
    //       }, r => {
    //         console.log('I am error' + r)
    //       })
    //     } else {
    //       console.log('error submit!!');
    //     }
    //   });
    // },
    // submitFormAgain() {
    //   this.$api.post('/TestController/user', null, r => {
    //     console.log(r);
    //   })
    // },
    // resetForm(formName) {
    //   this.$refs[formName].resetFields();
    // }
  }
}
