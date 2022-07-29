<template>
  <TopBar />
  <RouterView class="wrapper" />
</template>

<script setup>
import { RouterView } from "vue-router";
import TopBar from "./components/TopBar.vue";
</script>

<style scoped></style>
