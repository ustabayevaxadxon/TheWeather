<template>
  <div class="home">
    <h1>You can check the weather forecast from this site!</h1>
    <p>Search for a city or choose the one from the sidebar</p>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "HomeView"
})
</script>

<style scoped lang="scss">
.home {
  text-align: center;
  padding: 5rem;
  margin: 0 auto;
  color: white;
}
</style>