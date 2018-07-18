const state = {
  counter: 0
}

const getters = {
  doubleCounter: state => {
    return state.counter * 2
  },
  stringCounter: state => {
    return state.counter + ' String!'
  }
}

const mutations = {
  addCounter: (state, num) => {
    state.counter += num
  },
  subCounter: (state, sub) => {
    state.counter -= sub
  }
}

const actions = {
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

export default {
  state,
  getters,
  mutations,
  actions
}
