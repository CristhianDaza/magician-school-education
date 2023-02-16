<template>
  <div>
    <div v-if="isLoading" class="loaderComponent">
      <Loader />
    </div>
    <v-container v-else>
      <Back />
      <template v-if="isError">
        <Error
          errorName="Error. Character not found, try again."
        />
      </template>
      <template v-else>
        <div class="characterName" v-if="character[0] !== null">
          <div class="characterNameImg">
            <img :src="imageHttps" :alt="character[0].name">
          </div>
          <CharacterNameInfo
            :characterInfo="character[0]"
          />
        </div>
      </template>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import isLoading from '@/mixins/isLoading'
import isError from '@/mixins/isError'

export default {
  name: 'Character',
  mixins: [isLoading, isError],
  components: {
    Error: () => import(/* webpackChunkName: "Error" */'@/components/global/Error'),
    Loader: () => import(/* webpackChunkName: "Loader" */'@/components/global/Loader'),
    Back: () => import(/* webpackChunkName: "Back" */'@/components/global/Back'),
    CharacterNameInfo: () => import(/* webpackChunkName: "CharacterNameInfo" */'@/components/Character/CharacterNameInfo')
  },
  computed: {
    ...mapGetters('characters', ['filterCharacter']),
    character () {
      const { name } = this.$route.params
      return this.filterCharacter(name)
    },
    imageHttps () {
      if (this.character[0].image.includes('http:')) {
        return this.character[0].image.replace('http:', 'https:')
      } else {
        return this.character[0].image
      }
    }
  },
  methods: {
    ...mapActions('characters', ['getCharactersData'])
  },
  created () {
    if (this.character.length === 0) {
      this.getCharactersData()
    }
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
