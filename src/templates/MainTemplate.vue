<template>
  <h2 class="page-title text-left">Profile Form</h2>

  <ControlRenderer @custom-change="displayProfile" />
</template>

<style>
  .page-title {
    margin: 0 0 40px;
  }
</style>

<script setup lang="ts">
import ControlRenderer from "../renderers/MainControlRenderer.vue";

function displayProfile(data: object) {
  console.log(data);
}
</script> 
