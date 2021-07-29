<template>
  <div>
    Error {{ errorName }}
  </div>
</template>

<script>
export default {
  namae: 'Error',
  props: {
    errorName: {
      type: String,
      required: true
    }
  }
}
</script>
