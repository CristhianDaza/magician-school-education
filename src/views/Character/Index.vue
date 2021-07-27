<template>
  <div>
    <Loader v-if="isLoading"/>
    <div class="character" v-if="character !== null">
      <div class="characterImg">
        <img :src="character[0].image" :alt="character[0].name">
      </div>
      <div class="characterInfo">
        <p v-if="character[0].name !== ''"><strong>Name: </strong>{{ character[0].name }}</p>
        <p v-if="character[0].species !== ''"><strong>Species: </strong>{{ character[0].species }}</p>
        <p v-if="character[0].gender !== ''"><strong>Gender: </strong>{{ character[0].gender }}</p>
        <p v-if="character[0].house !== ''"><strong>House: </strong>{{ character[0].house }}</p>
        <p v-if="character[0].dateOfBirth !== ''"><strong>Date of Birth: </strong>{{ character[0].dateOfBirth }}</p>
        <p v-if="character[0].yearOfBirth !== ''"><strong>Years Old: </strong>{{ year }}</p>
        <p v-if="character[0].ancestry !== ''"><strong>Ancestry: </strong>{{ character[0].ancestry }}</p>
        <p v-if="character[0].hairColour !== ''"><strong>Hair Colour: </strong>{{ character[0].hairColour }}</p>
        <p v-if="character[0].eyeColour !== ''"><strong>Eye Colour: </strong>{{ character[0].eyeColour }}</p>
        <p v-if="character[0].patronus !== ''"><strong>Patronus: </strong>{{ character[0].patronus }}</p>
        <p v-if="character[0].alive !== ''"><strong>Alive: </strong>{{ character[0].alive ? 'Yes' : 'No'}}</p>
      </div>
    </div>
    <pre>
      {{ character }}
    </pre>
  </div>
</template>

<script>
import { getCharacterByName } from '@/api/getCharacterByName'
import Loader from '@/components/global/Loader.vue'

export default {
  name: 'Character',
  data () {
    return {
      isLoading: false,
      character: null
    }
  },
  components: {
    Loader
  },
  computed: {
    year () {
      return new Date().getFullYear() - this.character[0].yearOfBirth
    }
  },
  methods: {
    fetchData () {
      this.isLoading = true
      const { name } = this.$route.params

      getCharacterByName()
        .then(({ data }) => {
          const result = data.filter(character => character.name === name)
          this.character = result
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  },
  created () {
    this.fetchData()
  }
}
</script>
