<template>
  <div class="city">
    <city-card></city-card>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import CityCard from "@/components/CityCard.vue";

export default defineComponent({
  name: "CityView",
  components: {CityCard},
  mounted() {
    this.$store.dispatch("getWeatherData", this.$store.getters.getAllCities[0].city_name);
  }
})
</script>

<style scoped lang="scss">
.city {
  width: 80%;

  @media (max-width: 768px) {
    width: 100%;
  }
}
</style>