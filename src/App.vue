<script setup lang="ts">
import { reactive } from "vue"

import TheHeader from "./components/TheHeader.vue"
import BaseButton from "./components/BaseButton.vue"

interface ITypePhotograph {
  name: string
  price: number
  img: string
}

const typeArray: Array<ITypePhotograph> = reactive([
  { name: "Свадебная фотосессия", img: "src/assets/img/1.png", price: 3000 },
  { name: "Фотографии беременных", img: "src/assets/img/6.png", price: 3000 },
  { name: "Детская фотосъемка", img: "src/assets/img/3.png", price: 3000 },
  { name: "Семейная фотосессия", img: "src/assets/img/4.png", price: 3000 },
  { name: "Фотографии еды", img: "src/assets/img/2.png", price: 3000 },
  { name: "Эстрадная фотосъемка", img: "src/assets/img/5.png", price: 3000 },
])
</script>

<template>
  <TheHeader />
  <main
    class="main bg-[linear-gradient(#662E9B66,#662E9B66),url('../img/background-image.jpg')] bg-cover bg-center min-h-[800px]"
  >
    <div
      class="main__content text-white text-2xl max-w-[90%] mx-auto releative bottom-1/2 translate-y-1/2 pl-4 max-md:pl-0 max-md:max-w-full max-md:flex max-md:flex-col max-md:items-center max-md:text-center"
    >
      <header class="main__title">
        <h1 class="text-5xl font-bold max-w-96 max-sm:text-3xl">Фотограф в вашем городе</h1>
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
  <section class="type-photograph mt-32">
    <div class="type-photograph__content max-w-[1280px] mx-auto text-center">
      <header class="type-photograph__content-title">
        <h1 class="text-xl text-[#EA3546] font-medium max-sm:text-base">Виды съемок</h1>
      </header>
      <article class="type-photograph__content-description">
        <h1 class="text-4xl font-bold my-6 max-sm:text-3xl max-sm:my-2">Закажите подходящую</h1>
        <p class="text-xl font-medium max-w-3xl mx-auto max-sm:max-w-xl max-sm:text-base">
          Посмотрите примеры фотографий и обратитесь ко мне за тем видом съемки,
          который вам необходим
        </p>
      </article>
      <footer class="type-photograph__content-items mt-16 justify-center">
        <ul class="flex justify-center flex-wrap gap-8 text-center font-bold">
          <li v-for="(type, index) in typeArray" :key="index" class="relative">
            <div class="relative w-96 h-96 max-sm:w-72 max-sm:h-72">
              <h1 class="absolute inset-0 text-white text-2xl mt-72 max-sm:mt-52 max-sm:text-xl">
                {{ type.name }}
              </h1>
              <h2 class="absolute inset-0 text-white text-xl mt-82 max-sm:mt-60 max-sm:text-base">
                от {{ type.price }} ₽
              </h2>
              <img class="w-full h-full" :src="type.img" alt="" />
            </div>
          </li>
        </ul>
      </footer>
    </div>
  </section>
</template>

<style scoped></style>
