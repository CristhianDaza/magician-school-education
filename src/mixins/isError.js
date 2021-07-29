import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('error', ['isError'])
  }
}
