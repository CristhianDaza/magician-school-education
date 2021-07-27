<template>
  <div>
    <Loader v-if="isLoading"/>
    <template v-else>
      <v-container>
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
import Loader from '@/components/global/Loader.vue'
import ListCharacteres from '@/components/ListCharacteres.vue'

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
    ListCharacteres
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
    }
  },
  created () {
    const { house } = this.$route.params
    this.fetchData(house)
  }
}
</script>
