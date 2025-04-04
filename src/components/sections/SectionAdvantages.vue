<script setup lang="ts">
import { reactive } from "vue"
import type { IAdvantage } from "../../interfaces"

const advantagesArray: Array<IAdvantage> = reactive([
  {
    icon: "src/assets/img/icons/advantages/style-icon.svg",
    name: "Стиль",
    description: "Репортажная и постановочная съемка",
  },
  {
    icon: "src/assets/img/icons/advantages/date-icon.svg",
    name: "Сроки",
    description: "Готовые фото уже через (15 дней)",
  },
  {
    icon: "src/assets/img/icons/advantages/quality-icon.svg",
    name: "Качество",
    description: "Фототехника Premium-classa Canon",
  },
  {
    icon: "src/assets/img/icons/advantages/guarantees-icon.svg",
    name: "Гарантии",
    description: "Работа производится по договору",
  },
  {
    icon: "src/assets/img/icons/advantages/dress-code-icon.svg",
    name: "Дресс-код",
    description: "Стильный внешний вид фотографа",
  },
  {
    icon: "src/assets/img/icons/advantages/videograph-icon.svg",
    name: "Видеограф",
    description: "Слаженная работа одной команды",
  },
])
</script>

<template>
  <section
    class="advantages text-white font-medium mt-32 pt-16 bg-[linear-gradient(#662E9B66,#662E9B66),url('../img/backgrounds/background-image-advantages.jpg')] bg-cover bg-center min-h-[800px]"
  >
    <div
      class="advantages__content max-w-[1110px] mx-auto flex flex-col justify-center text-center"
    >
      <header class="advantages__title">
        <h2 class="text-xl">Почему рекомендуют меня</h2>
        <h1 class="text-4xl font-bold mt-6">Преимущества</h1>
      </header>
      <article class="advantages__list mt-16">
        <ul
          class="advantages__list--content grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1"
        >
          <li
            class="advantage flex flex-col items-center mb-4 w-[350px]"
            v-for="(advantage, index) in advantagesArray"
            :key="index"
          >
            <div class="advantage-icon flex justify-center">
              <img :src="advantage.icon" :alt="advantage.name" />
            </div>
            <h1 class="text-2xl mb-4">{{ advantage.name }}</h1>
            <p class="text-xl">
              {{ advantage.description }}
            </p>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<style scoped></style>
