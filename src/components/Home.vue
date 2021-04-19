<!--
 * @Author: zhaotao
 * @Date: 2021-04-13 10:06:21
 * @LastEditTime: 2021-04-19 09:57:55
 * @LastEditors: zhaotao
 * @Description: main page
 * @FilePath: \vue_program\vue-program\src\components\Home.vue
 * A journey of a thousand miles begins with the first step.
-->
<template>
  <div class="home">
    首页
    状态{{isLogin}}
    Hello, {{username}}
    password: {{password}}
    a+b={{sum}}
    <hr>
    <div>
      <div>
        <a href="javascript:;" @click="getChecked(true)">已签到</a> | <a href="javascript:;" @click="getChecked(false)">未签到</a>
      </div>
      <ul>
        <li v-for="(item, index) in showTrueChecked" :key="index">
          {{item.name}}
        </li>
      </ul>
    </div>
    <div>
      <div>周杰伦的歌</div>
      <ul>
        <li v-for="(item, index) in showSongs" :key="index">
          {{item.name}} - {{item.singer}}
        </li>
      </ul>
    </div>
    <hr>
    <div>
      <h3>mutation载荷</h3>
      <span>{{count}}</span>
      |
      <button @click="add">+1</button>
      |
      <button @click="reset">重置</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      a: 1,
      b: 2,
      checkList: []
    }
  },
  computed: {
    // showChecked () {
    //   return this.$store.getters.showChecked
    // },
    sum () {
      return this.a + this.b
    },
    ...mapState({
      isLogin: state => state.isLogin,
      username: state => state.username,
      password: state => state.password,
      count: state => state.count
    }),
    ...mapGetters([
      'showTrueChecked',
      'showSongs'
    ])
  },
  created () {
    // 初始化checkList
    this.getChecked(true)
  },
  methods: {
    getChecked (checked) {
      console.log(this.$store.getters.showChecked(checked))
      this.checkList = this.$store.getters.showChecked(checked)
    },
    add () {
      this.$store.commit('addCount', {
        n: 1
      })
    },
    reset () {
      this.$store.commit('resetCount', {
        data: 0
      })
    },
    ...mapMutations(['addCount', 'resetCount']),
    // 因为addCount, resetCount 都是传递参数的，所以定义两个方法来重新调用
    add1 () {
      this.addCount({n: 1})
    },
    reset1 () {
      this.resetCount({data: 0})
    }
  }
}
</script>

<style scoped lang="less">
</style>
