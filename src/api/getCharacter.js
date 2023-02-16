import { get } from 'axios'

function getCharacter () {
  const URL = 'https://hp-api.onrender.com/api/characters'
  return get(URL)
}

export {
  getCharacter
}
