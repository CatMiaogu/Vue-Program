<!--
 * @Author: zhaotao
 * @Date: 2021-04-13 10:06:30
 * @LastEditTime: 2021-04-19 20:04:08
 * @LastEditors: zhaotao
 * @Description: login page
 * @FilePath: \vue_program\vue-program\src\components\Login.vue
 * A journey of a thousand miles begins with the first step.
-->
<template>
  <div class="page">
    登录页
    登录状态： {{$store.state.isLogin}}
    <div>
      <input type="text" v-model="username" placeholder="用户名">
    </div>
    <div>
      <input type="text" v-model="password" placeholder="密码">
    </div>
    <button @click="loginHandle">登录</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  components: {

  },
  created () {

  },
  methods: {
    loginHandle () { // 登录
      // 表单验证
      if (!this.username || !this.password) {
        return
      }
      // 修改isLogin状态
      this.$store.commit('changeLogin', true)
      this.$store.dispatch('changeLogin', true)
      // 修改username状态
      // this.$store.commit('changeUsername', this.username)
      this.$store.dispatch('changeUsername', true)
      // 修改password状态
      // this.$store.commit('changePassword', this.password)
      this.$store.dispatch('changePassword', true)
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
</style>
