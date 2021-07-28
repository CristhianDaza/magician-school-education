<template>
  <div class="header">
    <v-container>
      <router-link to="/">
        <img :src="Logo" alt="Magician School Education" width="80">
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
  .header {
    background: rgba(0, 0, 0, .7);
    color: white;
  }

  .header > div a{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header > div p {
    font-family: 'Harry';
    font-size: 2rem;
    letter-spacing: 1px;
  }
</style>
