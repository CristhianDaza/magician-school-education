<template>
  <router-link :to="{path: `/${this.$route.params.house}/${character.name}`}">
    <v-card color="character">
      <v-card-text class="imgCharacter">
        <v-img
          :src="imageHttps"
          max-height="200"
          max-width="200"
        >
        </v-img>
      </v-card-text>
      <v-card-title class="nameCharacter">
        <p>
          {{ character.name }}
        </p>
      </v-card-title>
    </v-card>
  </router-link>
</template>

<script>
export default {
  name: 'Character',
  props: {
    character: {
      type: Object,
      required: true
    }
  },
  computed: {
    imageHttps () {
      if (this.character.image.includes('http')) {
        return this.character.image.replace('http', 'https')
      } else {
        return this.character.image
      }
    }
  }
}
</script>

<style>
  .character {
    min-height: 300px;
    transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
  }

  .character:hover {
    transform: translateY(-10px);
    box-shadow: 0 5px 10px 0 white !important;
  }

  .character:active {
    transform: translateY(0);
  }

  .imgCharacter {
    padding: 0 !important;
  }

  .v-image__image.v-image__image--cover {
    background-position: center top !important;
  }

  .nameCharacter p{
    word-break: normal;
    font-size: 1.5rem;
    text-align: center;
    padding-bottom: 0;
  }
</style>
