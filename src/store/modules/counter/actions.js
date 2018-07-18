export const addCounter = ({ commit }, num) => {
  commit('addCounter', num)
}

export const subCounter = ({ commit }, sub) => {
  commit('subCounter', sub)
}

export const asyncAddCounter = ({ commit }, value) => {
  setTimeout(() => {
    commit('addCounter', value.num)
  }, value.dur)
}

export const asyncSubCounter = ({ commit }, value) => {
  setTimeout(() => {
    commit('subCounter', value.num)
  }, value.dur)
}
