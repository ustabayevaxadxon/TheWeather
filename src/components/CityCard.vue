<template>
  <div class="city--details" v-if="getCityDetails">
    <div class="city--box">
      <p class="city__temp">{{ Math.round(getCityDetails.current.temp) }}&deg;</p>
      <div>
        <p class="city__name">{{ getCityDetails.city }}</p>
        <div class="city__date">
          <p>{{ new Date(getCityDetails.currentTime).toLocaleDateString("en-us", { weekday: 'short', day: '2-digit', month: 'long' })}} {{ new Date(getCityDetails.currentTime).toLocaleTimeString("en-us", { timeStyle: "short" }) }}</p>
        </div>
      </div>
      <div class="">
        <p class="city__desc">{{ getCityDetails.current.weather[0].description }}</p>
        <img width="60" :src="`https://openweathermap.org/img/wn/${getCityDetails.current.weather[0].icon}@4x.png`" alt="">
      </div>
    </div>
    <hr class="h-line">
    <div class="city--hourly">
      <h2>Hourly Forecast</h2>
      <ul>
        <li v-for="hourly in getCityDetails.hourly" :key="hourly.dt">
          <div>
            <p>{{ new Date(hourly.currentTime).toLocaleTimeString("en-us", { hour: 'numeric' }) }}</p>
            <p class="desc">{{ hourly.weather[0].main }}</p>
            <img width="60" :src="`https://openweathermap.org/img/wn/${hourly.weather[0].icon}@4x.png`" alt="">
            <p>{{ Math.round(hourly.temp) }}&deg;</p>
          </div>
        </li>
      </ul>
    </div>
    <hr class="h-line">
    <div class="city--daily">
      <h2>7 Days Forecast</h2>
      <ul class="daily--list">
        <li v-for="daily in getCityDetails.daily" :key="daily.dt">
          <p>{{ new Date(daily.dt * 1000).toLocaleDateString("en-us", { weekday: 'long' }) }}</p>
          <img width="60" :src="`https://openweathermap.org/img/wn/${daily.weather[0].icon}@4x.png`" alt="">
          <div>
            <p>H: {{ Math.round(daily.temp.max) }}&deg;C</p>
            <p>L: {{ Math.round(daily.temp.min) }}&deg;C</p>
          </div>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
import {defineComponent} from 'vue'
import {mapGetters} from "vuex";

export default defineComponent({
  name: "CityCard",
  computed: {
    ...mapGetters(['getCityDetails'])
  }
})
</script>

<style scoped lang="scss">
.city--details {
  padding: 0 20px;
  text-align: center;
  color: white;

  .city--box {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 900px) {
      width: 100%;
      justify-content: space-evenly;
    }

    @media (max-width: 576px) {
      flex-direction: column;
    }
  }

  .city__temp {
    font-size: 100px;

    @media (max-width: 576px) {
      display: block;
      font-size: 70px;
    }
  }

  .city__name {
    font-size: 34px;
    text-transform: capitalize;

    @media (max-width: 576px) {
    font-size: 24px;
  }

  }

  //.city__date {
  //  @media (max-width: 576px) {
  //    //font-size: 24px;
  //}

  .city__desc {
    text-transform: capitalize;
    margin-bottom: 16px;
    margin-top: 28px;
  }

  .h-line {
    margin-top: 24px;
    border: 1px solid white;
    opacity: 10%;
    width: 100%;
  }

  .city--hourly {
    width: 80%;
    margin: 0 auto;

    h2 {
      margin: 32px 0;
    }

    ul {
      list-style-type: none;
      display: flex;
      overflow-x: scroll;

      li {
        display: flex;
        gap: 10%;

        div {
          display: flex;
          flex-direction: column;
          align-items: center;

          .desc {
            margin-top: 8px;
            font-size: 12px;
          }
        }
      }
    }
  }

  .city--daily {

    h2 {
      margin-top: 32px;
    }

    ul{
      list-style: none;

      li {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      }

      p {
          text-align: left;
          width: 100px;
        }

      div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        p {
          width: 56px;
        }
      }

    }
  }
}
</style>