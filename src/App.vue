<template>
  <div>
    <Header />
    <div class="main">
      <router-view/>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    Header: () => import(/* webpackChunkName: "Header" */'@/components/global/Header'),
    Footer: () => import(/* webpackChunkName: "Footer" */'@/components/global/Footer')
  }
}
</script>
