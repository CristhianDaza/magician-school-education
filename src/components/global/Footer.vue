<template>
  <v-footer
    dark
    color="footer"
  >
    <v-container>
      <v-card
        dark
      >
        <v-card-title>
          <strong>Magician School Education</strong>

          <v-spacer></v-spacer>

          <a
            v-for="icon in social"
            :key="icon.id"
            :href="icon.url"
            target="_blank"
          >
            <v-btn
              class="mx-4"
              dark
              icon
            >
              <v-icon size="24px">
                {{ icon.icon }}
              </v-icon>
            </v-btn>
          </a>
        </v-card-title>

        <v-card-text class="year">
          {{ new Date().getFullYear() }} | <strong>
            <a href="https://github.com/CristhianDaza/" target="_blank">
              Cristhian Daza
            </a>
        </strong>
        </v-card-text>
      </v-card>
    </v-container>
  </v-footer>
</template>

<script>
import social from '@/utils/social'

export default {
  name: 'Footer',
  data () {
    return {
      social
    }
  }
}
</script>

<style>
  .year {
    text-align: center;
  }

  .v-footer {
    background: rgba(0,0,0,.7) !important;
  }

  .v-card.v-sheet.theme--dark {
    background: transparent;
    box-shadow: none !important;
  }
</style>
