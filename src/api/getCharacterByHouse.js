import { get } from 'axios'

function getCharacterByHouse ({ house }) {
  const URL = `https://hp-api.herokuapp.com/api/characters/house/${house}`
  return get(URL)
}

export {
  getCharacterByHouse
}
