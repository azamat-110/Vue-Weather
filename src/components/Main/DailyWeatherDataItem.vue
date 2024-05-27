<template>
  <div class="daily__weather-data-item">
    <p class="daily__weather-data-item-day">
      {{ capitalize(index == 0 ? "Завтра" : getDate(day.dt, "weekday")) }}.
    </p>
    <p class="daily__weather-data-item-date">
      {{ getDate(day.dt, "day") }} {{ capitalize(getDate(day.dt, "month")) }}
    </p>
    <img src="../../assets/images/sunny.svg" alt="sunny" />
    <p class="daily__weather-data-item-daytemp">
      +{{ Math.round(day.temp.day - 273) }}°
    </p>
    <p class="daily__weather-data-item-nighttemp">
      +{{ Math.round(day.temp.night - 273) }}°
    </p>
    <p class="daily__weather-data-item-status">
      {{capitalize( day.weather[0].description) }}
    </p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  day: Object,
  index: Number,
});

const capitalize = (str) => {
 return str[0].toUpperCase() + str.substring(1);
};
const getDate = (dt, type) => {
  const milliseconds = dt * 1000;
  const data = new Date(milliseconds);
  let result =
    type == "weekday"
      ? data.toLocaleString("ru-RU", { weekday: "short" })
      : type == "day"
      ? data.toLocaleString("ru-RU", { day: "numeric" })
      : type == "month"
      ? data.toLocaleString("ru-RU", { month: "short" })
      : "";
  return result;
};
</script>

 