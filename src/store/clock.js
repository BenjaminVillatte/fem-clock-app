import axios from 'axios'

export const namespaced = true

export const state = () => ({
  clock: {
    abbreviation: null,
    timezone: null,
    day_of_year: null,
    day_of_week: null,
    week_number: null,
    time: new Date().getTime()
  },
  location: {
    country_code: null,
    city: null
  },
  interval: null
})

export const getters = {
  getClock(state) {
    return state.clock
  },
  getTime(state) {
    return state.clock.time
  },
  getAbbreviation(state) {
    return state.clock.abbreviation
  },
  getTimeString(state) {
    const dateTime = new Date(state.clock.time)
    const hours = "0" + dateTime.getHours()
    const minutes = "0" + dateTime.getMinutes()

    return hours.substr(-2) + ':' + minutes.substr(-2)
  },
  getLocation(state) {
    return state.location
  }
}

export const actions = {
  fetchClock({ commit }) {
    commit('CLEAR_INTERVAL')
    return axios.get('http://worldtimeapi.org/api/ip')
      .then(response => {
        commit('SET_CLOCK', response.data)
        const interval = setInterval(() => {
          commit('INCREMENT_SECOND')
        }, 1000)
        commit('SET_INTERVAL', interval)
      })
      .catch(e => console.log(e))
  },
  fetchLocation({ commit }) {
    return axios.get('https://freegeoip.app/json/')
    .then(response => {
      commit('SET_LOCATION', response.data)
    })
    .catch(e => console.log(e))
  }
}

export const mutations = {
  SET_INTERVAL(state, interval) {
    state.interval = interval
  },
  CLEAR_INTERVAL(state) {
    clearInterval(state.interval)
  },
  INCREMENT_SECOND(state) {
    // state.clock.time += (1000 * 3600)
    state.clock.time += 1000
  },
  SET_CLOCK(state, { abbreviation, timezone, day_of_year, day_of_week, week_number, datetime}) {
    state.clock = {
      abbreviation,
      timezone,
      day_of_year,
      day_of_week,
      week_number,
      time: new Date(datetime).getTime()
    }
  },
  SET_LOCATION(state, {country_code, city}) {
    state.location = {
      country_code,
      city
    }
  }
}