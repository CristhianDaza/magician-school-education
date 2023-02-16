import { get } from 'axios'

function getCharacterByHouse (house) {
  const URL = `https://hp-api.onrender.com/api/charactershouse/${house}`
  return get(URL)
}

export {
  getCharacterByHouse
}
