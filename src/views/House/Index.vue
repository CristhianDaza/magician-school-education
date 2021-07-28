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
        <p @click="sortByName" class="sort">
          Sort by Name {{ character !== null ? '👇' : '☝️' }}
        </p>
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
      characteres: [],
      character: null
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
    },
    sortByName () {
      const { house } = this.$route.params

      if (this.character === null) {
        getCharacterByHouse({ house })
          .then(({ data }) => {
            this.character = data
            const sort = this.character.slice(0)
            sort.sort((a, b) => {
              const x = a.name.toLowerCase()
              const y = b.name.toLowerCase()
              return x < y ? -1 : x > y ? 1 : 0
            })
            this.characteres = sort
          })
      } else {
        getCharacterByHouse({ house })
          .then(({ data }) => {
            this.characteres = data
            this.character = null
          })
      }
    }
  },
  created () {
    const { house } = this.$route.params
    this.fetchData(house)
  }
}
</script>

<style>
  .sort {
    margin-bottom: 15px;
    cursor: pointer;
  }
</style>
