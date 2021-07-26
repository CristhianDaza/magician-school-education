<template>
  <v-container>
    <h1 class="title mb-5">Select House</h1>
    <v-row class="mx-auto mt-5">
      <v-col
        cols="12"
        sm="6"
        md="6"
        lg="3"
        v-for="house in houses" :key="house.id"
      >
        <v-img
          :alt="house.name"
          :src="house.image"
          :min-width="house.width"
        >
        </v-img>
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
    font-size: 50px;
  }

  .imageHouse {
    min-width: 250px;
  }
</style>
