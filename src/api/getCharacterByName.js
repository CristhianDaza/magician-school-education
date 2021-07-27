import { get } from 'axios'

function getCharacterByName () {
  const URL = 'http://hp-api.herokuapp.com/api/characters/'
  return get(URL)
}

export {
  getCharacterByName
}
