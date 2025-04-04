<script setup lang="ts">
import { reactive } from "vue"
import type { IBase } from "../../interfaces"

interface ITypePhotograph extends IBase {
  price: number
}

const typeArray: Array<ITypePhotograph> = reactive([
  {
    name: "Свадебная фотосессия",
    icon: "src/assets/img/base/types-photo/1.png",
    price: 3000,
  },
  {
    name: "Фотографии беременных",
    icon: "src/assets/img/base/types-photo/6.png",
    price: 3000,
  },
  {
    name: "Детская фотосъемка",
    icon: "src/assets/img/base/types-photo/3.png",
    price: 3000,
  },
  {
    name: "Семейная фотосессия",
    icon: "src/assets/img/base/types-photo/4.png",
    price: 3000,
  },
  {
    name: "Фотографии еды",
    icon: "src/assets/img/base/types-photo/2.png",
    price: 3000,
  },
  {
    name: "Эстрадная фотосъемка",
    icon: "src/assets/img/base/types-photo/5.png",
    price: 3000,
  },
])
</script>

<template>
  <section class="type-photograph mt-32">
    <div class="type-photograph__content max-w-[1280px] mx-auto text-center">
      <header class="type-photograph__content-title">
        <h1 class="text-light-red-700 text-xl font-medium max-sm:text-base">
          Виды съемок
        </h1>
      </header>
      <article class="type-photograph__content-description">
        <h1 class="text-4xl font-bold my-6 max-sm:text-3xl max-sm:my-2">
          Закажите подходящую
        </h1>
        <p
          class="text-xl font-medium max-w-3xl mx-auto max-sm:max-w-xl max-sm:text-base"
        >
          Посмотрите примеры фотографий и обратитесь ко мне за тем видом съемки,
          который вам необходим
        </p>
      </article>
      <footer class="type-photograph__content-items mt-16">
        <ul class="flex flex-wrap gap-8 justify-center text-center font-bold">
          <li v-for="(type, index) in typeArray" :key="index" class="relative">
            <div class="w-[350px] h-96 relative max-sm:w-72 max-sm:h-72">
              <h1
                class="text-white text-2xl mt-72 absolute inset-0 max-sm:mt-52 max-sm:text-xl"
              >
                {{ type.name }}
              </h1>
              <h2
                class="absolute inset-0 text-white text-xl mt-82 max-sm:mt-60 max-sm:text-base"
              >
                от {{ type.price }} ₽
              </h2>
              <img class="w-full h-full" :src="type.icon" alt="" />
            </div>
          </li>
        </ul>
      </footer>
    </div>
  </section>
</template>

<style scoped></style>
