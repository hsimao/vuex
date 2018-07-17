import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    doubleCounter: state => {
      return state.counter * 2
    },
    stringCounter: state => {
      return state.counter + ' String!'
    }
  },
  mutations: {
    addCounter: (state, num) => {
      state.counter += num
    },
    subCounter: (state, sub) => {
      state.counter -= sub
    }
  },
  actions: {
    addCounter: ({ commit }, num) => {
      commit('addCounter', num)
    },
    subCounter: ({ commit }, sub) => {
      commit('subCounter', sub)
    },
    asyncAddCounter: ({ commit }, value) => {
      setTimeout(() => {
        commit('addCounter', value.num)
      }, value.dur)
    },
    asyncSubCounter: ({ commit }, value) => {
      setTimeout(() => {
        commit('subCounter', value.num)
      }, value.dur)
    }
  }
})
