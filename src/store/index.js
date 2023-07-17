import { createStore } from 'vuex'
import axios from "axios";
import router from "@/router";

export default createStore({
  state: {
    allCities: [
      {
        id: 1,
        city_name: 'Tashkent'
      },
      {
        id: 2,
        city_name: 'Andijan'
      },
      {
        id: 3,
        city_name: 'Buxoro'
      },
      {
        id: 4,
        city_name: 'Fergana'
      },
      {
        id: 5,
        city_name: 'Jizzax'
      },
      {
        id: 6,
        city_name: 'Namangan'
      },
      {
        id: 7,
        city_name: 'Navoiy'
      },
      {
        id: 8,
        city_name: 'Nukus'
      },
      {
        id: 9,
        city_name: 'Qarshi'
      },
      {
        id: 10,
        city_name: 'Samarqand'
      },
      {
        id: 11,
        city_name: 'Sirdaryo'
      },
      {
        id: 12,
        city_name: 'Termiz'
      },
      {
        id: 13,
        city_name: 'Urgench'
      },
    ],
    cityDetails: null,
  },
  getters: {
    getAllCities(state) {
      return state.allCities
    },
    getCityDetails(state) {
      return state.cityDetails
    },
  },
  mutations: {
    SET_CITY_DETAILS(state, payload) {
      state.cityDetails = payload
    },
  },
  actions: {
    async getWeatherData({ commit }, city) {
      try {
        const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7efa332cf48aeb9d2d391a51027f1a71&units=metric`)

        const res = await axios.get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude={part}&appid=7efa332cf48aeb9d2d391a51027f1a71&units=metric`
        )
        router.push({
          params: {main: res.data.current.weather[0].main}
        })
        const localOffset = new Date().getTimezoneOffset() * 60000
        const utc = res.data.current.dt * 1000 + localOffset;
        res.data.currentTime = utc + 1000 * res.data.timezone_offset;
        res.data.hourly.forEach((hour) => {
          const utc = hour.dt * 1000 + localOffset;
          hour.currentTime = utc + 1000 * res.data.timezone_offset;
        });
        res.data['city'] = city
        commit('SET_CITY_DETAILS', res.data)
      } catch (err) {
        alert("Oops, There is no any city with this name! Please try again");
      }
    },
  },
  modules: {
  }
})
