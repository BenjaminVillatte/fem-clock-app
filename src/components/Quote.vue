<template>
  <div v-if="quote" class="quote-group text-white" :class="{ loading: loading }">
    <div  class="quote text-small">
      <p class="text">“{{ quote.content }}”</p>
      <p class="author">{{ quote.author }}</p>
    </div>
    <div class="refresh" @click="refresh">
      <button class="btn-refresh">
        <img src="@/assets/desktop/icon-refresh.svg" alt="refresh">
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      loading: false
    }
  },
  computed: {
    ...mapGetters({
      quote: 'quote/getQuote'
    })
  },
  methods: {
    refresh() {
      this.loading = true
      this.$store.dispatch('quote/fetchQuote')
        .then(() => this.loading = false)
    }
  },
  created() {
    this.refresh()
  }
}
</script>
