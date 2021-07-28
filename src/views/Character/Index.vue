<template>
  <div>
    <div v-if="isLoading" class="loaderComponent">
      <Loader />
    </div>
    <v-container v-else>
      <Back />
      <div class="characterName" v-if="character !== null">
        <div class="characterNameImg">
          <img :src="character[0].image" :alt="character[0].name">
        </div>
        <CharacterNameInfo
          :characterInfo="character[0]"
        />
      </div>
    </v-container>
  </div>
</template>

<script>
import { getCharacter } from '@/api/getCharacter'
import Loader from '@/components/global/Loader.vue'
import Back from '@/components/global/Back.vue'
import CharacterNameInfo from '@/components/Character/CharacterNameInfo.vue'

export default {
  name: 'Character',
  data () {
    return {
      isLoading: false,
      character: null
    }
  },
  components: {
    Loader,
    Back,
    CharacterNameInfo
  },
  methods: {
    fetchData () {
      this.isLoading = true
      const { name } = this.$route.params

      getCharacter()
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

<style>
  .characterName {
    display: flex;
    flex-wrap: wrap;
    margin-top: 50px;
    justify-content: center;
    align-items: center;
  }

  .characterNameImg img{
    width: 200px;
  }
</style>
