<template>
  <div class="clock-details" :class="{ 'night-mode': isNight }">
    <div class="currentTimezone">
      <p class="label text-xsmall">Current timezone</p>
      <p class="value text-xlarge">{{ clock.timezone }}</p>
    </div>
    <div class="dayOfYear">
      <p class="label text-xsmall">Day of the year</p>
      <p class="value text-xlarge">{{ clock.day_of_year }}</p>
    </div>
    <div class="dayOfWeek">
      <p class="label text-xsmall">Day of the week</p>
      <p class="value text-xlarge">{{ clock.day_of_week }}</p>
    </div>
    <div class="weeNumber">
      <p class="label text-xsmall">Week number</p>
      <p class="value text-xlarge">{{ clock.week_number }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    isNight: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters({
      clock: 'clock/getClock'
    })
  }
}
</script>