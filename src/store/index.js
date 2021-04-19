/*
 * @Author: zhaotao
 * @Date: 2021-04-12 18:59:42
 * @LastEditTime: 2021-04-19 20:02:33
 * @LastEditors: zhaotao
 * @Description: vuex文件
 * @FilePath: \vue_program\vue-program\src\store\index.js
 * A journey of a thousand miles begins with the first step.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    isLogin: false, // 登录状态
    username: '', // 用户名
    password: '', // 密码
    list: [
      { name: '张三', checked: true },
      { name: '李四', checked: false },
      { name: '哪吒', checked: true },
      { name: '敖冰', checked: false },
      { name: '申公豹', checked: true },
      { name: '太乙真人', checked: true }
    ],
    songs: [
      { name: '黑色毛衣', singer: '周杰伦' },
      { name: '烟花易冷', singer: '周杰伦' },
      { name: '爱笑的眼睛', singer: '林俊杰' },
      { name: '美人鱼', singer: '林俊杰' },
      { name: '不能说的秘密', singer: '周杰伦' },
      { name: '一千年以后', singer: '林俊杰' },
      { name: '七里香', singer: '周杰伦' },
      { name: '黑修炼爱情色毛衣', singer: '林俊杰' }
    ]
  },
  getters: { // 类型vue实例的计算属性
    showChecked: state => (checked) => {
      return state.list.filter(item => item.checked === checked)
    },
    showTrueChecked: state => {
      return state.list.filter(item => item.checked)
    },
    showSongs: state => {
      return state.songs.filter(item => item.singer === '周杰伦')
    }
  },
  mutations: {
    // 修改登录状态
    changeLogin (state, data) {
      state.isLogin = data
    },
    // 修改用户名
    changeUsername (state, data) {
      state.username = data
    },
    // 修改用户名
    changePassword (state, data) {
      state.password = data
    },
    addCount (state, payload) {
      state.count += payload.n
    },
    resetCount (state, payload) {
      state.count = payload.data
    }
  },
  actions: {
    changeLogin ({ commit }, data) {
      commit('changeLogin', data)
    },
    changeUsername (context, data) {
      context.commit('changeUsername', data)
    },
    changePassword (context, data) {
      context.commit('changePassword', data)
    }
  }
})

export default store
