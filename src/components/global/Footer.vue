<template>
  <v-footer
    dark
    padless
  >
    <v-container>
      <v-card
        dark
      >
        <v-card-title>
          <strong>Magician School Education</strong>

          <v-spacer></v-spacer>

          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            dark
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="year">
          {{ new Date().getFullYear() }} — <strong>Cristhian Daza</strong>
        </v-card-text>
      </v-card>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram'
      ]
    }
  }
}
</script>

<style>
  .year {
    text-align: center;
  }

  .v-card.v-sheet.theme--dark {
    background: transparent;
    box-shadow: none !important;
  }
</style>
