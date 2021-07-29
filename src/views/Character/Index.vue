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
import Loader from '@/components/global/Loader.vue'
import Back from '@/components/global/Back.vue'
import CharacterNameInfo from '@/components/Character/CharacterNameInfo.vue'
import { mapState, mapActions } from 'vuex'
import isLoading from '@/mixins/isLoading'

export default {
  name: 'Character',
  mixins: [isLoading],
  components: {
    Loader,
    Back,
    CharacterNameInfo
  },
  computed: {
    ...mapState('characters', ['character'])
  },
  methods: {
    ...mapActions('characters', ['getCharacterData'])
  },
  created () {
    const { name } = this.$route.params
    this.getCharacterData(name)
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
