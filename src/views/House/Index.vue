<template>
  <div>
    <div v-if="isLoading" class="loaderComponent">
      <Loader />
    </div>
    <template v-else>
      <v-container>
        <Back />
        <Search
          @input="searchName"
        />
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="3"
            lg="2"
            v-for="character in characteres"
            :key="character.name"
          >
            <ListCharacteres
              :character="character"
            />
          </v-col>
        </v-row>
      </v-container>
    </template>
  </div>
</template>

<script>
import { getCharacterByHouse } from '@/api/getCharacterByHouse'
import { getCharacterByName } from '@/api/getCharacterByName'
import Loader from '@/components/global/Loader.vue'
import Back from '@/components/global/Back.vue'
import ListCharacteres from '@/components/ListCharacteres.vue'
import Search from '@/components/Search.vue'

export default {
  name: 'House',
  data () {
    return {
      isLoading: false,
      characteres: []
    }
  },
  components: {
    Loader,
    ListCharacteres,
    Back,
    Search
  },
  methods: {
    fetchData () {
      this.isLoading = true
      const { house } = this.$route.params

      getCharacterByHouse({ house })
        .then(({ data }) => {
          this.characteres = data
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    searchName (search) {
      const { house } = this.$route.params
      getCharacterByName()
        .then(({ data }) => {
          const result = data.filter(character => {
            if (character.house === house) {
              return character.name.toLowerCase().indexOf(search.toLowerCase()) > -1
            }
          })
          this.characteres = result
        })
    }
  },
  created () {
    const { house } = this.$route.params
    this.fetchData(house)
  }
}
</script>
