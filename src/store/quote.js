import axios from 'axios'

export const namespaced = true

export const state = () => ({
  quote: null
})

export const getters = {
  getQuote(state) {
    return state.quote
  }
}

export const actions = {
  fetchQuote({ commit }) {
    return axios.get('https://api.quotable.io/random')
      .then(response => commit('SET_QUOTE', response.data))
      .catch(e => console.log(e))
  }
}

export const mutations = {
  SET_QUOTE(state, quote) {
    state.quote = quote
  }
}