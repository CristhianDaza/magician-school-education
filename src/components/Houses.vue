<template>
  <v-container>
    <h1 class="title">
      Select House
    </h1>
    <v-row class="containerHouses">
      <v-col
        cols="12"
        sm="6"
        md="6"
        lg="3"
        v-for="house in houses" :key="house.id"
      >
        <router-link :to="{path: `/${house.name}`}">
          <h2>
            {{ house.name }}
          </h2>
          <img
            :alt="house.name"
            :src="house.image"
          >
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import houses from '@/utils/houses.js'

export default {
  name: 'Cases',
  data () {
    return {
      houses
    }
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

  .containerHouses h2 {
    font-size: 35px;
    letter-spacing: 2px;
    margin: 25px 0;
  }
</style>
