import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null 
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    logoutUser(state) {
      state.user = null  
    }
  },
  actions: {
    logout({ commit }) {
      commit('logoutUser')  
      localStorage.removeItem('user')  
    }
  },
  getters: {
    user: state=>state.user
  }
})
