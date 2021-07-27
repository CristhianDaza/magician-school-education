<template>
  <v-card>
    <v-card-text>
      <v-img
        :src="character.image"
      >
      </v-img>
    </v-card-text>
  </v-card>
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
