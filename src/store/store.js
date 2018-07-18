import Vue from 'vue'
import Vuex from 'vuex'
import Counter from './modules/counter'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    value: 100
  },
  getters: {
    value: state => {
      return state.value
    }
  },
  mutations: {
    updateValue: (state, value) => {
      state.value = value
    }
  },
  actions: {
    updateValue: ({ commit }, value) => {
      commit('updateValue', value)
    }
  },
  modules: {
    Counter
  }
})
