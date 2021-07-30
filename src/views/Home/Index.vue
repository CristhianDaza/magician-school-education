<template>
  <Houses />
</template>

<script>
export default {
  name: 'Home',
  components: {
    Houses: () => import(/* webpackChunkName: "Houses" */'@/components/Home/Houses')
  }
}
</script>
