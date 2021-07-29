import { getCharacter } from '@/api/getCharacter'

export default {
  namespaced: true,
  state: {
    characters: []
  },
  mutations: {
    GET_CHARACTERS (state, payload) {
      state.characters = payload
    }
  },
  actions: {
    getCharactersData ({ commit }) {
      commit('loading/SET_LOADING', true, { root: true })
      getCharacter()
        .then(({ data }) => {
          commit('GET_CHARACTERS', data)
        })
        .catch(() => {
          commit('GET_CHARACTERS', null)
        })
        .finally(() => {
          commit('loading/SET_LOADING', false, { root: true })
        })
    }
  }
}
