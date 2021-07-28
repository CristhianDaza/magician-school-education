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
          Sort by Name {{ sort == 0 ? '👇' : '☝️' }}
        </p>
        <v-row>
          <v-col
            cols="6"
            sm="3"
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
import { getCharacter } from '@/api/getCharacter'
import Loader from '@/components/global/Loader.vue'
import Back from '@/components/global/Back.vue'
import ListCharacteres from '@/components/House/ListCharacteres.vue'
import Search from '@/components/House/Search.vue'

export default {
  name: 'House',
  data () {
    return {
      isLoading: false,
      characteres: [],
      sort: 1
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
      getCharacter()
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
      const sortCharacteres = this.characteres.slice(0)

      if (this.sort === 1) {
        sortCharacteres.sort((a, b) => {
          const x = a.name.toLowerCase()
          const y = b.name.toLowerCase()
          return x < y ? -1 : x > y ? 1 : 0
        })
        this.characteres = sortCharacteres
        this.sort = 0
      } else {
        sortCharacteres.sort((a, b) => {
          const x = a.name.toLowerCase()
          const y = b.name.toLowerCase()
          return y < x ? -1 : y > x ? 1 : 0
        })
        this.characteres = sortCharacteres
        this.sort = 1
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
    display: inline-block;
    user-select: none;
  }
</style>
