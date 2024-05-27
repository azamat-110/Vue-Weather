import axios from "axios";
import { defineStore } from "pinia";

export const useWeather = defineStore({
    id: 'weather',
    state: () => ({
        weatherData: null,
        coords: null,
        apiKey: '49cc8c821cd2aff9af04c9f98c36eb74',

    }),
    actions: {
        async getWeatherData(cityName = 'Tashkent') {
            try {
                const response = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${this.apiKey}`);
                this.coords = response.data;
                const { lat, lon } = this.coords[0];
                const weatherResponse = await axios.get(
                    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${this.apiKey}`
                );

                setTimeout(() => {
                    this.weatherData = weatherResponse.data;
                }, 1000);
            } catch (error) {
                console.log(error);
            }
        }
    },
    getters: {

    },

});