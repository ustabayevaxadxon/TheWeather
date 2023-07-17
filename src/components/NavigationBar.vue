<template>
  <div class="sidebar">
    <h2
        @click="$router.push('/')"
        class="sidebar__heading">
      <i class="fa-solid fa-sun text-2xl"></i>
      <p class="">The Local Weather</p>
    </h2>
    <div class="search__input">
      <input
          type="search"
          placeholder="Search..."
          v-model="searchInput"
          @keyup.enter = getWeatherInfo(searchInput)
      >
      <div @click="getWeatherInfo(searchInput)">
        <i class="fa-solid fa-search"></i>
      </div>
    </div>
    <div class="">
      <ul class="sidebar--list">
        <li
            v-for="city in getAllCities"
            :key="city.id"
            @click="getWeatherInfo(city.city_name)"
        >
          {{ city.city_name }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {defineComponent} from "vue";
import {mapActions, mapGetters, mapMutations} from "vuex";

export default defineComponent({
  name: 'NavigationBar',
  data() {
    return {
      searchInput: '',
    }
  },
  computed:{
    ...mapGetters(['getAllCities',]),
  },
  methods: {
    ...mapActions(['getWeatherData']),
    getWeatherInfo(name) {
      if (this.$route.path === '/') {
        this.getWeatherData(name)
        this.$router.push('/city')
      } else {
        this.getWeatherData(name)
      }
    }

  }
})
</script>
<style scoped lang="scss">
.sidebar {
  width: 30%;
  min-height: 100vh;
  //background: linear-gradient(#2d91cb, #a7cbe0);
  background-image: linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,0.25));

  .search__input {
    display: flex;
    align-items: center;

    div {
      width: 50px;
      cursor: pointer;
      color: white;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      padding: 12px 16px;
    }

    input {
      color: white;
      font-size: 16px;
      width: 100%;
      padding: 14px 16px;
      background: transparent;
      border: 0;
      outline: none;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      //background-image: linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.75));
    }
  }

  &__heading {
    cursor: pointer;
    padding: 1rem;
    color: white;
    font-size: 24px;
    display: flex;
    align-items: center;

    p {
      margin-left: 10px;
    }
  }

  &__heading:hover {
    opacity: 90%;
  }

  .search__input input::placeholder {
    font-size: 16px ;
    color: white;
  }


  &--list {
    list-style: none;
    padding: 1rem;

    li {
      padding: 4px;
      margin-bottom: 8px;
      font-size: 16px;
      letter-spacing: 2px;
      font-weight: bold;
      cursor: pointer;
      color: white;
      transition: 0.3s;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }

    li:hover {
      color: #a7cbf0;
    }
  }
}
@media (max-width: 1200px) {
  .sidebar__heading {
    font-size: 20px;
  }
}
@media (max-width: 768px) {
  .sidebar {
    min-height: auto;
    width: 100%;
    margin-bottom: 32px;

    &__heading {
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }

    .search__input {
      width: 100%;
    }

    &--list {
    display: none;
  }
  }
}
</style>