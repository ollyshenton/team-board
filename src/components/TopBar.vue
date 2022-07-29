<template>
  <header>
    <div class="container">
      <img
        alt="Kaleidoscope logo"
        class="logo pl-2"
        src="@/assets/logo-white.svg"
        width="160"
      />

      <nav>
        <RouterLink to="/" class="text-white hover:text-slate-400 p-2 font-bold"
          >Board</RouterLink
        >
        <RouterLink
          to="/about"
          class="text-white hover:text-slate-400 p-2 font-bold"
          >About</RouterLink
        >
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
.container {
  margin: 0 auto;
  height: 50px;
  width: var(--width);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
header {
  height: 50px;
  background-color: var(--purple);
}
</style>
