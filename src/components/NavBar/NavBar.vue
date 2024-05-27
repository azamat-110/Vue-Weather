<template>
  <header class="header">
    <nav class="nav">
      <div class="container nav__content">
        <a href="" class="nav__logo">
          <img src="../../assets/images/logo.svg" alt="logo" />
          <span>VUE WEATHER</span>
        </a>
        <div class="nav__search">
          <button>
            <img src="../../assets/images/theme.svg" alt="" />
          </button>
          <input
            type="text"
            name=""
            id=""
            placeholder="Выбрать город"
            v-model="searchController"
            @keydown.enter="searchCity"
            ref="reference"
          />
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
import {useWeather} from '../../store/store.js';
const weatherStore = useWeather();

let searchController = ref("");

const searchCity = async ()=>{
    await weatherStore.getWeatherData(searchController.value);
    searchController.value = '';
}
</script>

 