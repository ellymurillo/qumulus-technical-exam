<script setup lang="ts">
import MainTemplate from "./templates/MainTemplate.vue";
</script>

<template>
  <v-app style="width: 1200px; max-width: 100%; padding: 35px">
    <MainTemplate />
  </v-app>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
