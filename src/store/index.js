import { createStore } from 'vuex'
import * as layoutStore from '@/store/layout'
import * as quoteStore from '@/store/quote'
import * as clockStore from '@/store/clock'

const store = createStore({
  modules: {
    layout: layoutStore,
    quote: quoteStore,
    clock: clockStore
  }
})

export default store