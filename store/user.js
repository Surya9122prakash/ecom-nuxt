// store/user.js
export const state = () => ({
    user: null,
  })
  
  export const mutations = {
    SET_USER(state, user) {
      state.user = user
    },
    CLEAR_USER(state) {
      state.user = null
    }
  }
  
  export const actions = {
    setUser({ commit }, user) {
      commit('SET_USER', user)
    },
    clearUser({ commit }) {
      commit('CLEAR_USER')
    }
  }
  
  export const getters = {
    isAuthenticated(state) {
      return !!state.user
    },
    getUser(state) {
      return state.user
    }
  }
  