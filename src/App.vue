<script setup lang="ts">
import TheHeader from "./components/TheHeader.vue"
import BaseButton from "./components/BaseButton.vue"
</script>

<template>
  <TheHeader />
  <main
    class="main bg-[linear-gradient(#662E9B66,#662E9B66),url('../img/background-image.jpg')] bg-cover bg-center min-h-[800px]"
  >
    <div
      class="main__content text-white text-2xl max-w-[90%] mx-auto releative bottom-1/2 translate-y-1/2 pl-4"
    >
      <header class="main__title">
        <h1 class="text-5xl font-bold max-w-96">Фотограф в вашем городе</h1>
      </header>
      <article class="main__description">
        <p class="max-w-xl mt-4 mb-10">
          Фотографии, которые помогают вашему бизнесу. Обратитесь ко мне прямо
          сейчас
        </p>
      </article>
      <footer class="main__buttons text-xl flex gap-6">
        <BaseButton color="text-white" bgColor="bg-light-orange-700"
          >О фотографе
        </BaseButton>
        <BaseButton color="text-light-orange-700" bgColor="bg-white"
          >Стоимость услуг
        </BaseButton>
      </footer>
    </div>
  </main>
  <section class="type-photograph">
    <div class="type-photograph__content">
      <header class="type-photograph__content-title">
        <h1 class="text-2xl font-bold">Виды съемок</h1>
      </header>
      <article class="type-photograph__content-description">
        <h1 class="text-4xl font-bold">Закажите подходящую</h1>
        <p>
          Посмотрите примеры фотографий и обратитесь ко мне за тем видом съемки,
          который вам необходим
        </p>
      </article>
      <footer class="type-photograph__content-items">
      </footer>
    </div>
  </section>
</template>

<style scoped></style>
