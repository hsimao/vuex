import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    counter: 0,
    value: 100
  },
  getters: {
    doubleCounter: state => {
      return state.counter * 2
    },
    stringCounter: state => {
      return state.counter + ' String!'
    },
    value: state => {
      return state.value
    }
  },
  mutations: {
    addCounter: (state, num) => {
      state.counter += num
    },
    subCounter: (state, sub) => {
      state.counter -= sub
    },
    updateValue: (state, value) => {
      state.value = value
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
    },
    updateValue: ({ commit }, value) => {
      console.log(value)
      commit('updateValue', value)
    }
  }
})
