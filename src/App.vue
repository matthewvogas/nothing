<script setup lang="ts">
import Header from './components/header/Header.vue'
import noise from '/noise.png'
</script>

<template>
  <div class="relative h-screen w-screen">
    <div
      class="absolute inset-0  bg-center"
      style="background-image: url('/noise.png')"
    ></div>

    <div class="absolute inset-0 bg-color-bg-tertiary"></div>

    <div class="relative z-10">
      <Header />
      <router-view />
    </div>
  </div>
</template>

<style scoped></style>
