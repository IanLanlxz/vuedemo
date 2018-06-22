export default {
  data() {
    return {
    }
  },
  computed: {
    defaultActive: function(){
      return this.$route.path.replace('/', '');
    }
  }
};
