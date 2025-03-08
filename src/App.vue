<script setup lang="ts">
import TheHeader from './components/TheHeader.vue'
import BaseButton from './components/BaseButton.vue'
</script>

<template>
  <TheHeader />
  <main class="main bg-[linear-gradient(#662E9B66,#662E9B66),url('../img/background-image.jpg')] bg-cover bg-center min-h-[800px]">
    <article class="main__content text-white text-2xl max-w-[90%] mx-auto releative bottom-1/2 translate-y-1/2 pl-4">
      <header class="main__title">
        <h1 class="text-5xl font-bold max-w-96">
          Фотограф в вашем городе
        </h1>
      </header>
      <div class="main__description">
      <p class="max-w-xl mt-4 mb-10">
        Фотографии, которые помогают вашему бизнесу. Обратитесь ко мне прямо сейчас
      </p>
      </div>
      <footer class="main__buttons text-xl flex gap-6">
        <BaseButton color="white" bgColor="orange">О фотографе</BaseButton>
        <BaseButton color="orange" bgColor="white">Стоимость услуг</BaseButton>
      </footer>
    </article>
  </main>
</template>

<style scoped>
</style>
