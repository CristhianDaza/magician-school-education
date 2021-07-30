import { getCharacter } from '@/api/getCharacter'
import { getCharacterByHouse } from '@/api/getCharacterByHouse'

export default {
  namespaced: true,
  state: {
    characters: [],
    character: null,
    charactersByHouse: [],
    sort: 1
  },
  mutations: {
    GET_CHARACTERS (state, payload) {
      state.characters = payload
    },
    GET_CHARACTERS_BY_HOUSE (state, payload) {
      state.charactersByHouse = payload
    },
    CHANGE_SORT (state, payload) {
      state.sort = payload
    }
  },
  actions: {
    async getCharactersData ({ commit }) {
      commit('loading/SET_LOADING', true, { root: true })
      await getCharacter()
        .then(({ data }) => {
          commit('GET_CHARACTERS', data)
        })
        .catch(() => {
          commit('GET_CHARACTERS', null)
          commit('error/SET_ERROR', true, { root: true })
        })
        .finally(() => {
          commit('loading/SET_LOADING', false, { root: true })
        })
    },
    async getCharactersByHouse ({ commit }, house) {
      commit('loading/SET_LOADING', true, { root: true })
      await getCharacterByHouse(house)
        .then(({ data }) => {
          commit('GET_CHARACTERS_BY_HOUSE', data)
        })
        .catch(() => {
          commit('GET_CHARACTERS_BY_HOUSE', null)
          commit('error/SET_ERROR', true, { root: true })
        })
        .finally(() => {
          commit('loading/SET_LOADING', false, { root: true })
        })
    },
    sortByName ({ commit, state }) {
      const sortCharacters = state.charactersByHouse.slice(0)

      if (state.sort === 1) {
        sortCharacters.sort((a, b) => {
          const x = a.name.toLowerCase()
          const y = b.name.toLowerCase()
          commit('CHANGE_SORT', 0)
          return x < y ? -1 : x > y ? 1 : 0
        })
      } else {
        sortCharacters.sort((a, b) => {
          const x = a.name.toLowerCase()
          const y = b.name.toLowerCase()
          commit('CHANGE_SORT', 1)
          return y < x ? -1 : y > x ? 1 : 0
        })
      }
      commit('GET_CHARACTERS_BY_HOUSE', sortCharacters)
    }
  },
  getters: {
    filterCharacter: state => name => {
      return state.characters.filter(character => character.name === name)
    },
    filterByName: state => search => {
      return state.charactersByHouse.filter(character => character.name.toLowerCase().indexOf(search.toLowerCase()) > -1)
    }
  }
}
