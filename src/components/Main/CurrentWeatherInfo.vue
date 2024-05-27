<template>
  <section class="current__weather-info">
    <div class="current__weather-info-block">
      <img
        class="current__weather-info-block-statusimg"
        src="../../assets/images/sunny.svg"
        alt="sunny"
      />
      <p class="current__weather-info-block-temp">
        {{ Math.round(weatherStore.weatherData?.current.temp) - 273 }}°
      </p>
      <p class="current__weather-info-block-day">Сегодня</p>
      <p class="current__weather-info-block-data">Время: {{ setTime() }}</p>
      <p class="current__weather-info-block-data">
        Город: {{ weatherStore.weatherData?.timezone }}
      </p>
    </div>
    <div class="current__weather-info-block">
      <img
        class="current__weather-info-block-bg"
        src="../../assets/images/blockBg.svg"
        alt="blockBg"
      />
      <div class="current__weather-info-block-item">
        <div class="current__weather-info-block-item-data">
          <div class="current__weather-info-block-item-icon">
            <img src="../../assets/images/temp.svg" alt="temp" />
          </div>
          <p>Температура</p>
        </div>
        <span>
          +{{ Math.round(weatherStore.weatherData?.current.temp) - 273 }}° -
          ощущается как +{{
            Math.round(weatherStore.weatherData?.current.feels_like) - 273
          }}°
        </span>
      </div>
      <div class="current__weather-info-block-item">
        <div class="current__weather-info-block-item-data">
          <div class="current__weather-info-block-item-icon">
            <img src="../../assets/images/pressure.svg" alt="pressure" />
          </div>
          <p>Давление</p>
        </div>
        <span
          >{{ weatherStore.weatherData?.current.pressure }} мм ртутного столба -
          нормальное</span
        >
      </div>
      <div class="current__weather-info-block-item">
        <div class="current__weather-info-block-item-data">
          <div class="current__weather-info-block-item-icon">
            <img src="../../assets/images/osadki.svg" alt="osadki" />
          </div>
          <p>Осадки</p>
        </div>
        <span>{{
          capitalize(weatherStore.weatherData?.current.weather[0].description)
        }}</span>
      </div>
      <div class="current__weather-info-block-item">
        <div class="current__weather-info-block-item-data">
          <div class="current__weather-info-block-item-icon">
            <img src="../../assets/images/wind.svg" alt="wind" />
          </div>
          <p>Ветер</p>
        </div>
        <span
          >{{
            Math.round(weatherStore.weatherData?.current.wind_speed)
          }}
          м/с</span
        >
      </div>
    </div>
  </section>
</template>

<script setup>
import { useWeather } from "../../store/store.js";
const weatherStore = useWeather();
const capitalize = (str) => {
  return str[0].toUpperCase() + str.substring(1);
};

const setTime = () => {
  const date = new Date();

  const hours = date.getUTCHours() + weatherStore.weatherData?.timezone_offset / 3600;
  const minutes = date.getMinutes();
  const time = `${hours} : ${minutes}`;
  return time;
};
</script>

 