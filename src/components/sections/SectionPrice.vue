<script setup lang="ts">
import { reactive } from "vue"

interface IPriceAdvantage {
  name: string
  price: number
  advantages: {
    name: string
    isAdvantage: boolean
  }[]
}

const priceArray: Array<IPriceAdvantage> = reactive([
  {
    name: "Базовая съемка",
    price: 5000,
    advantages: [
      {
        name: "Полная обработка всех фотографий в ручную (от 250)",
        isAdvantage: true,
      },
      {
        name: "Предварительная консультация и планирование",
        isAdvantage: true,
      },
      { name: "Авторская обработка фотографий", isAdvantage: true },
      {
        name: "Запись на USB-флешку в индивидуальном вудбоксе",
        isAdvantage: false,
      },
      { name: "Хранение фото на сервере", isAdvantage: false },
      { name: "WEB-версия для интернета", isAdvantage: false },
      { name: "Два фотографа, ассистент", isAdvantage: false },
    ],
  },
  {
    name: "Оптимальная съемка",
    price: 8999,
    advantages: [
      {
        name: "Полная обработка всех фотографий в ручную (от 250)",
        isAdvantage: true,
      },
      {
        name: "Предварительная консультация и планирование",
        isAdvantage: true,
      },
      { name: "Авторская обработка фотографий", isAdvantage: true },
      {
        name: "Запись на USB-флешку в индивидуальном вудбоксе",
        isAdvantage: true,
      },
      { name: "Хранение фото на сервере", isAdvantage: true },
      { name: "WEB-версия для интернета", isAdvantage: false },
      { name: "Два фотографа, ассистент", isAdvantage: false },
    ],
  },
  {
    name: "Премиум съемка",
    price: 15000,
    advantages: [
      {
        name: "Полная обработка всех фотографий в ручную (от 250)",
        isAdvantage: true,
      },
      {
        name: "Предварительная консультация и планирование",
        isAdvantage: true,
      },
      { name: "Авторская обработка фотографий", isAdvantage: true },
      {
        name: "Запись на USB-флешку в индивидуальном вудбоксе",
        isAdvantage: true,
      },
      { name: "Хранение фото на сервере", isAdvantage: true },
      { name: "WEB-версия для интернета", isAdvantage: true },
      { name: "Два фотографа, ассистент", isAdvantage: true },
    ],
  },
])
</script>

<template>
  <section
    class="price bg-[linear-gradient(#662E9B66,#662E9B66),url('../img/backgrounds/background-image-price.jpg')] bg-cover bg-center min-h-[800px] pt-20"
  >
    <div class="price__content text-center">
      <header class="price__title text-white">
        <h1 class="text-5xl font-bold mb-6 max-sm:text-3xl">Прайс-лист</h1>
        <h2 class="text-xl">Цены и услуги свадебного фотографа</h2>
      </header>
      <article class="price__list mt-16">
        <ul
          class="flex justify-center gap-6 max-w-[1110px] mx-auto max-xl:flex-col max-xl:items-center"
        >
          <li
            class="text-left bg-white border-transparent-black rounded-2xl w-96 mb-4 p-8 max-sm:max-w-64"
            v-for="(priceType, index) in priceArray"
            :key="index"
          >
            <h3 class="text-light-orange-700 font-medium mb-2.5">
              {{ priceType.name }}
            </h3>
            <h2 class="text-2xl font-bold">{{ priceType.price }} ₽</h2>
            <div class="bg-transparent-black w-full h-px my-4"></div>
            <div>
              <ul>
                <li
                  class="flex items-center"
                  v-for="(advantage, index) in priceType.advantages"
                  :key="index"
                >
                  <img
                    v-if="advantage.isAdvantage"
                    src="/src/assets/img/icons/price/price-icon-checkmark.svg"
                  />
                  <img
                    v-else
                    src="/src/assets/img/icons/price/price-icon-cross.svg"
                  />
                  <p class="max-w-64 m-1">
                    {{ advantage.name }}
                  </p>
                </li>
              </ul>
              <div class="flex justify-center mt-6 animation-hover">
                <button
                  class="text-white bg-light-orange-700 w-full py-3.5 rounded-4xl cursor-pointer"
                >
                  Выбрать
                </button>
              </div>
            </div>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<style scoped></style>
