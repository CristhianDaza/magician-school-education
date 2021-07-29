import { getCharacter } from '@/api/getCharacter'

export default {
  namespaced: true,
  state: {
    characters: [],
    character: null
  },
  mutations: {
    GET_CHARACTERS (state, payload) {
      state.characters = payload
    },
    GET_CHARACTER (state, payload) {
      state.character = payload
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
    },
    getCharacterData ({ commit }, name) {
      commit('loading/SET_LOADING', true, { root: true })
      getCharacter()
        .then(({ data }) => {
          const result = data.filter(character => character.name === name)
          commit('GET_CHARACTER', result)
        })
        .catch(() => {
          commit('GET_CHARACTER', null)
        })
        .finally(() => {
          commit('loading/SET_LOADING', false, { root: true })
        })
    }
  }
}
