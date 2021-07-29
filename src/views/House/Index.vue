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
            v-for="character in charactersByHouse"
            :key="character.name"
          >
            <ListCharacters
              :character="character"
            />
          </v-col>
        </v-row>
      </v-container>
    </template>
  </div>
</template>

<script>
import { getCharacter } from '@/api/getCharacter'
import Loader from '@/components/global/Loader.vue'
import Back from '@/components/global/Back.vue'
import ListCharacters from '@/components/House/ListCharacters.vue'
import Search from '@/components/House/Search.vue'
import { mapState, mapActions } from 'vuex'
import isLoading from '@/mixins/isLoading'

export default {
  name: 'House',
  mixins: [isLoading],
  data () {
    return {
      sort: 1
    }
  },
  components: {
    Loader,
    ListCharacters,
    Back,
    Search
  },
  computed: {
    ...mapState('characters', ['charactersByHouse'])
  },
  methods: {
    searchName (search) {
      const { house } = this.$route.params
      getCharacter()
        .then(({ data }) => {
          const result = data.filter(character => {
            if (character.house === house) {
              return character.name.toLowerCase().indexOf(search.toLowerCase()) > -1
            }
          })
          this.characters = result
        })
    },
    sortByName () {
      const sortCharacters = this.charactersByHouse.slice(0)

      if (this.sort === 1) {
        sortCharacters.sort((a, b) => {
          const x = a.name.toLowerCase()
          const y = b.name.toLowerCase()
          return x < y ? -1 : x > y ? 1 : 0
        })
        this.charactersByHouse = sortCharacters
        this.sort = 0
      } else {
        sortCharacters.sort((a, b) => {
          const x = a.name.toLowerCase()
          const y = b.name.toLowerCase()
          return y < x ? -1 : y > x ? 1 : 0
        })
        this.charactersByHouse = sortCharacters
        this.sort = 1
      }
    },
    ...mapActions('characters', ['getCharactersByHouse'])
  },
  mounted () {
    const { house } = this.$route.params
    this.getCharactersByHouse(house)
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
