import { get } from 'axios'

function getCharacterByName () {
  const URL = 'https://hp-api.herokuapp.com/api/characters/'
  return get(URL)
}

export {
  getCharacterByName
}
