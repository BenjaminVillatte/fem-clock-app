<template>
  <div class="clock-group" :class="{ expanded: detailsDisplayed }">
    
    <div>
      <div class="greeting text-medium text-white">

        <span class="icon">
          <img src="@/assets/desktop/icon-sun.svg" alt="sun">
        </span>
        <span class="hello">{{ greetings }}</span>
        <span class="hlp">, it's currently</span>

      </div>

      <div class="clock text-white">
        <span class="text-xxlarge">{{ timeString }}</span>
        <span class="text-medium abbr">{{ abbreviation }}</span>
      </div>
      
      <div class="location text-medium text-white">in {{ location.city }}, {{ location.country_code }}</div>
    </div>

    <div>
      <button class="btn-more text-dark-gray" :class="{ expanded: detailsDisplayed }" @click="showDetail">
        <span class="label">{{ detailsDisplayed ? 'less' : 'more' }}</span>
        <span class="icon"></span>
      </button>
    </div>
    
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    detailsDisplayed: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters({
      location: 'clock/getLocation',
      abbreviation: 'clock/getAbbreviation',
      time: 'clock/getTime'
    }),
    timeString() {
      const dateTime = new Date(this.time)
      const hours = "0" + dateTime.getHours()
      const minutes = "0" + dateTime.getMinutes()

      return hours.substr(-2) + ':' + minutes.substr(-2)
    },
    greetings() {
      const hours = new Date(this.time).getHours()
      if (hours > 5 && hours < 12) {
        return 'Good morning'
      }
      else if (hours >= 12 && hours < 18) {
        return 'Good afternoon'
      }
      else {
        return 'Good evening'
      }
    }
  },
  methods: {
    showDetail() {
      this.$store.dispatch('layout/toggleDetails')
    }
  }
}
</script>

<style scoped>
.clock .abbr {
  margin-left: 10px;
}
</style>