<template>
  <div class="wrapper container" v-if="weatherStore.weatherData">
    <NavBar />
    <Main />
  </div>
  <div class="loader" v-else>
    <div class="loader__spinner"></div>
  </div>
</template>

<script setup>
import NavBar from "./components/NavBar/NavBar.vue";
import Main from "./components/Main/Main.vue";
import { useWeather } from "./store/store.js";

const weatherStore = useWeather();
weatherStore.getWeatherData();
</script>

<style>
</style>