<template>
  <div class="header">
    <v-container>
      <router-link to="/">
        <img :src="Logo" alt="Logo" width="100">
        <p>Magician School Education</p>
      </router-link>
    </v-container>
  </div>
</template>

<script>
import Logo from '@/assets/img/logo.webp'

export default {
  name: 'Header',
  data () {
    return {
      Logo
    }
  }
}
</script>

<style>
  .header > div a{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header > div p {
    font-family: 'Harry';
    font-size: 2.5rem;
    letter-spacing: 1px;
  }
</style>
