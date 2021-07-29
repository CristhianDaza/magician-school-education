import Vue from 'vue'
import Vuex from 'vuex'
import loading from './modules/loading'
import characters from './modules/characters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    loading,
    characters
  }
})
