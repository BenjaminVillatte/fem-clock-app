export const namespaced = true

export const state = () => ({
  expanded: false,
  night: false
})

export const getters = {
  isExpanded(state) {
    return state.expanded
  }
}

export const actions = {
  toggleDetails({ commit }) {
    commit('TOGGLE_DETAILS')
  },
  setNight({ commit }, value) {
    commit('SET_NIGHT', value)
  }
}

export const mutations = {
  TOGGLE_DETAILS(state) {
    state.expanded = !state.expanded
  },
  SET_NIGHT(state, value) {
    state.night = value
  }
}

