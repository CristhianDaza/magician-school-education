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
            <img :src="character[0].image" :alt="character[0].name">
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
import Loader from '@/components/global/Loader.vue'
import Back from '@/components/global/Back.vue'
import CharacterNameInfo from '@/components/Character/CharacterNameInfo.vue'
import { mapActions, mapGetters } from 'vuex'
import isLoading from '@/mixins/isLoading'
import isError from '@/mixins/isError'
import Error from '@/components/global/Error'

export default {
  name: 'Character',
  mixins: [isLoading, isError],
  components: {
    Error,
    Loader,
    Back,
    CharacterNameInfo
  },
  computed: {
    ...mapGetters('characters', ['filterCharacter']),
    character () {
      const { name } = this.$route.params
      return this.filterCharacter(name)
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
