<template>
  <div class="componentError">
    <p>{{ errorName }}</p>
  </div>
</template>

<script>
export default {
  name: 'Error',
  props: {
    errorName: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
  .componentError {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70vh;
  }
  .componentError p {
    font-size: 2rem;
    color: crimson;
  }
</style>
