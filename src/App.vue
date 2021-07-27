<template>
  <div>
    <LoadLayout v-if="isLoading">
      <Loader />
    </LoadLayout>

    <MainLayout v-else />
  </div>
</template>

<script>
import LoadLayout from '@/layouts/LoadLayout.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import Loader from '@/components/global/Loader.vue'
import { mapState } from 'vuex'

export default {
  name: 'app',
  components: {
    LoadLayout,
    MainLayout,
    Loader
  },
  computed: {
    ...mapState('loading', {
      isLoading: 'isLoading'
    })
  }
}
</script>
