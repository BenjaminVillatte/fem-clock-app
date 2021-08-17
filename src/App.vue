<template>
  <div class="container" :class="{ 'night-mode': isNight}">

    <transition name="slide-fade">
      <Quote v-if="!expanded" />
    </transition>

    <ClockGroup :detailsDisplayed="expanded" />

    <transition name="slide-fade">
      <ClockDetail v-if="expanded" :isNight="isNight" />
    </transition>
    
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Quote from '@/components/Quote.vue'
import ClockGroup from '@/components/ClockGroup.vue'
import ClockDetail from '@/components/ClockDetail.vue'

export default {
  components: {
    Quote,
    ClockGroup,
    ClockDetail
  },
  data() {
    return {
      isNight: false
    }
  },
  computed: {
    ...mapGetters({
      expanded: 'layout/isExpanded',
      time: 'clock/getTime'
    })
  },
  watch: {
    time(val) {
      const dateTime = new Date(val)
      const hours = dateTime.getHours()
      this.isNight = hours >= 18 || hours < 6
    }
  },
  created() {
    this.$store.dispatch('clock/fetchClock')
    this.$store.dispatch('clock/fetchLocation')
  }
}
</script>
