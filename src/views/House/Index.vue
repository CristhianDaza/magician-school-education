<template>
  <div>
    <div v-if="isLoading" class="loaderComponent">
      <Loader />
    </div>
    <template v-else>
      <v-container>
        <Back />
          <template v-if="isError">
            <Error
              errorName="Error. Characters not found, please try again"
            />
          </template>
          <template v-else>
            <v-text-field
              v-model="searchByName"
              label="Search..."
              outlined
              dark
              hint="Search by name"
            ></v-text-field>
          <p @click="sortByName" class="sort">
            Sort by Name {{ sort == 0 ? '👇' : '☝️' }}
          </p>
          <v-row>
            <v-col
              cols="6"
              sm="3"
              md="3"
              lg="2"
              v-for="character in search"
              :key="character.name"
            >
              <ListCharacters
                :character="character"
              />
            </v-col>
          </v-row>
        </template>
      </v-container>
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import isLoading from '@/mixins/isLoading'
import isError from '@/mixins/isError'

export default {
  name: 'House',
  mixins: [isLoading, isError],
  data () {
    return {
      sort: 1,
      searchByName: ''
    }
  },
  components: {
    Error: () => import(/* webpackChunkName: "Error" */'@/components/global/Error'),
    Loader: () => import(/* webpackChunkName: "Loader" */'@/components/global/Loader'),
    ListCharacters: () => import(/* webpackChunkName: "ListCharacters" */'@/components/House/ListCharacters.vue'),
    Back: () => import(/* webpackChunkName: "Back" */'@/components/global/Back')
  },
  computed: {
    ...mapGetters('characters', ['filterByName']),
    search () {
      return this.filterByName(this.searchByName)
    }
  },
  methods: {
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
