<script setup lang="ts">
import TheNavList from "./TheNavList.vue"
</script>

<template>
  <header class="header">
    <nav
      class="header__content max-w-[90%] mx-auto p-4 flex items-center justify-between"
    >
      <h1 class="font-bold text-3xl max-xl:text-2xl">Фотограф</h1>
      <TheNavList />
    </nav>
  </header>
</template>

<style scoped>
</style>
