<template>
    <div class="daily__weather-data-title">На неделю</div>
  <div class="daily__weather-data">
    <DailyWeatherDataItem
      v-for="(day, i) in weatherStore.weatherData?.daily.splice(1, 7)"
      :key="i"
      :day="day"
      :index="i"
    />
  </div>
</template>

<script setup>
import DailyWeatherDataItem from "./DailyWeatherDataItem.vue";
import { useWeather } from "../../store/store.js";
const weatherStore = useWeather();
</script>