<template>
  <v-text-field
    @input="searchName"
    v-model="search"
    label="Search..."
    outlined
    dark
    hint="Search by name"
  ></v-text-field>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      search: ''
    }
  },
  methods: {
    searchName () {
      this.$emit('input', this.search)
    }
  }
}
</script>
