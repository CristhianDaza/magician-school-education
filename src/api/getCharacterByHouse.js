import { get } from 'axios'

function getCharacterByHouse (house) {
  const URL = `https://hp-api.onrender.com/api/characters/house/${house}`
  return get(URL)
}

export {
  getCharacterByHouse
}
