<template>
    <div class="nav"
         :class="{cloudy: $route.params.main === 'Clouds',
                  sunny: $route.params.main === 'Clear',
                  rainy: $route.params.main === 'Rain'}">
      <router-view></router-view>
      <navigation-bar></navigation-bar>
    </div>
</template>

<script>
import {defineComponent} from 'vue'
import NavigationBar from "@/components/NavigationBar.vue";
import {mapGetters} from "vuex";

export default defineComponent({
  name: "App",
  components: {NavigationBar},
  computed: {
    ...mapGetters(['getCityDetails'])
  }
})
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Open Sans', sans-serif;
}

.nav {
    display: flex;
    justify-content: flex-end;

    background-size: cover;
    background-position: center center;
    background-image: url("assets/default.webp");

  @media (max-width: 768px) {
    min-height: 100vh;
    flex-direction: column-reverse;
  }
}

.cloudy {
  background-size: cover;
  background-position: center center;
  background-image: url("assets/cloudy.jpg");
}

.sunny {
  background-size: cover;
  background-position: center center;
  background-image: url("assets/sunny.jpg");
}

.rainy {
  background-size: cover;
  background-position: center center;
  background-image: url("assets/sunny.jpg");
}
</style>