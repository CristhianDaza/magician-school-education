import { getCharacter } from '@/api/getCharacter'
import { getCharacterByHouse } from '@/api/getCharacterByHouse'

export default {
  namespaced: true,
  state: {
    characters: [],
    character: null,
    charactersByHouse: []
  },
  mutations: {
    GET_CHARACTERS (state, payload) {
      state.characters = payload
    },
    GET_CHARACTERS_BY_HOUSE (state, payload) {
      state.charactersByHouse = payload
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
    getCharactersByHouse ({ commit }, house) {
      commit('loading/SET_LOADING', true, { root: true })
      getCharacterByHouse(house)
        .then(({ data }) => {
          commit('GET_CHARACTERS_BY_HOUSE', data)
        })
        .catch(() => {
          commit('GET_CHARACTERS_BY_HOUSE', null)
        })
        .finally(() => {
          commit('loading/SET_LOADING', false, { root: true })
        })
    }
  },
  getters: {
    filterCharacter: state => name => {
      return state.characters.filter(character => character.name === name)
    }
  }
}
