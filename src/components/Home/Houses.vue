<template>
  <div>
    <div v-if="isLoading" class="loaderComponent">
      <Loader />
    </div>
    <v-container v-else>
      <template v-if="isError">
        <Error
          errorName="Error, vuelva a intentarlo"
        />
      </template>
      <template v-else>
        <h1 class="title">
          Select House
        </h1>
        <v-row class="containerHouses">
          <v-col
            cols="12"
            sm="6"
            md="6"
            lg="3"
            v-for="house in houses"
            :key="house.id"
          >
            <router-link :to="{path: `/${house.name}`}">
              <h2>
                {{ house.name }}
              </h2>
              <img
                :alt="house.name"
                :src="house.image"
              >
              <p class="members">
                <strong>Members:</strong> {{ members(house.name) }}
              </p>
            </router-link>
          </v-col>
        </v-row>
      </template>
    </v-container>
  </div>
</template>

<script>
import houses from '@/utils/houses.js'
import Loader from '@/components/global/Loader.vue'
import { mapState, mapActions } from 'vuex'
import isLoading from '@/mixins/isLoading'
import isError from '@/mixins/isError'
import Error from '@/components/global/Error.vue'

export default {
  name: 'Cases',
  mixins: [isLoading, isError],
  data () {
    return {
      houses
    }
  },
  components: {
    Loader,
    Error
  },
  methods: {
    members (house) {
      const characterCount = []
      this.characters.forEach(character => {
        if (house === character.house) {
          characterCount.push(character)
        }
      })
      return characterCount.length
    },
    ...mapActions('characters', ['getCharactersData'])
  },
  computed: {
    ...mapState('characters', ['characters'])
  },
  mounted () {
    this.getCharactersData()
  }
}
</script>

<style>
  .title {
    text-align: center;
    font-size: 70px;
    margin: 35px auto;
    letter-spacing: 15px;
    color: white;
  }

  .containerHouses {
    margin-bottom: 25px;
  }

  .members {
    margin-top: 15px;

  }

  .containerHouses > div {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .containerHouses > div > a {
    text-align: center;
    color: white;
  }

  .containerHouses img,
  .containerHouses h2 {
    cursor: pointer;
  }

  .containerHouses > div:hover {
    transform: translateY(-10px);
  }

  .containerHouses > div:active {
    transform: translateY(0);
  }

  .containerHouses h2 {
    font-size: 35px;
    letter-spacing: 2px;
    margin: 25px 0;
  }
</style>
