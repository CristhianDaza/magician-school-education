import { mount } from '@vue/test-utils'
import CharacterNameInfo from '../../src/components/Character/CharacterNameInfo'

describe('Componente CharacterInfo.vue', () => {
  it('CharacterNameInfo recibe props', function () {
    const wrapper = mount(CharacterNameInfo, {
      propsData: {
        characterInfo: {
          name: 'Harry Potter',
          species: 'Human',
          gender: 'Male',
          house: 'Gryffindor',
          dateOfBirth: '31-07-1980',
          yearOfBirth: '1988',
          ancestry: 'Half-Blood',
          hairColour: 'Black',
          eyeColour: 'Green',
          patronus: 'Stag',
          alive: 'true'
        }
      }
    })
    expect(wrapper.props().characterInfo).toEqual({
      name: 'Harry Potter',
      species: 'Human',
      gender: 'Male',
      house: 'Gryffindor',
      dateOfBirth: '31-07-1980',
      yearOfBirth: '1988',
      ancestry: 'Half-Blood',
      hairColour: 'Black',
      eyeColour: 'Green',
      patronus: 'Stag',
      alive: 'true'
    })
  })

  it('Propiedad computada "year" devulve edad actual', function () {
    const wrapperMount = mount(CharacterNameInfo, {
      propsData: {
        characterInfo: {
          yearOfBirth: '1993'
        }
      }
    })

    expect(wrapperMount.vm.year).toBe(28)
  })
})
