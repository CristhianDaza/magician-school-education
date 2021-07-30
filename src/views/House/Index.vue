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
          <p @click="sortByName(search)" class="sort">
            Sort by Name {{ sort === 0 ? '👇' : '☝️' }}
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
import { mapActions, mapGetters, mapState } from 'vuex'
import isLoading from '@/mixins/isLoading'
import isError from '@/mixins/isError'

export default {
  name: 'House',
  mixins: [isLoading, isError],
  data () {
    return {
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
    ...mapState('characters', ['sort']),
    ...mapGetters('characters', ['filterByName']),
    search () {
      return this.filterByName(this.searchByName)
    }
  },
  methods: {
    ...mapActions('characters', ['getCharactersByHouse', 'sortByName'])
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
