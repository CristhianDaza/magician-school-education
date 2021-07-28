<template>
  <router-link :to="{path: `/${this.$route.params.house}/${character.name}`}">
    <v-card color="character">
      <v-card-text class="imgCharacter">
        <v-img
          :src="character.image"
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
  }
}
</script>

<style>
  .character {
    min-height: 300px;
    transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .character:hover {
    transform: translateY(-10px);
    box-shadow: 11px 9px 19px -4px rgba(255,255,255,.5) !important;
  }

  .imgCharacter {
    padding: 0;
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
