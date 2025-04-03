<script setup lang="ts">
import { ref, reactive } from "vue"
import type { IBase } from "./interfaces"

import TheHeader from "./components/header/TheHeader.vue"
import BaseButton from "./components/base/BaseButton.vue"

const phoneNumber = ref<string>('')

interface ITypePhotograph extends IBase {
  price: number
}

interface IAdvantage extends IBase {
  description: string
}

interface IFeedback extends IAdvantage {
  jobUser: string
}

interface IPriceAdvantage {
  name: string,
  price: number,
  advantages: {
    name: string,
    isAdvantage: boolean
  }[]
}

const typeArray: Array<ITypePhotograph> = reactive([
  { name: "Свадебная фотосессия", icon: "src/assets/img/base/types-photo/1.png", price: 3000 },
  { name: "Фотографии беременных", icon: "src/assets/img/base/types-photo/6.png", price: 3000 },
  { name: "Детская фотосъемка", icon: "src/assets/img/base/types-photo/3.png", price: 3000 },
  { name: "Семейная фотосессия", icon: "src/assets/img/base/types-photo/4.png", price: 3000 },
  { name: "Фотографии еды", icon: "src/assets/img/base/types-photo/2.png", price: 3000 },
  { name: "Эстрадная фотосъемка", icon: "src/assets/img/base/types-photo/5.png", price: 3000 },
])

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

  const feedbacksArray: Array<IFeedback> = reactive([
    { name: 'Юрий Ставничий', icon: 'src/assets/img/icons/feedbacks/user-yuriy.svg', description: 'Это супер крутая инструкция и вы делаете очень полезную вещь. Спасибо', jobUser: 'Фотограф' },
    { name: 'Александра Селезнева', icon: 'src/assets/img/icons/feedbacks/user-alexandra.svg', description: 'Работа с сервисом приносит радость, потому что высочайший профессионализм, удобство, оперативность, и просто приятные люди!', jobUser: 'Фотограф' },
    { name: 'Оля Павлова', icon: 'src/assets/img/icons/feedbacks/user-olga.svg', description: 'Спасибо большое за помощь и содействие!', jobUser: 'Фотограф' },
  ])

  const priceArray: Array<IPriceAdvantage> = reactive([
    { name: 'Базовая съемка', price: 5000, advantages: [
      { name: 'Полная обработка всех фотографий в ручную (от 250)', isAdvantage: true },
      { name: 'Предварительная консультация и планирование', isAdvantage: true },
      { name: 'Авторская обработка фотографий', isAdvantage: true },
      { name: 'Запись на USB-флешку в индивидуальном вудбоксе', isAdvantage: false },
      { name: 'Хранение фото на сервере', isAdvantage: false },
      { name: 'WEB-версия для интернета', isAdvantage: false },
      { name: 'Два фотографа, ассистент', isAdvantage: false },
    ] },
    { name: 'Оптимальная съемка', price: 8999, advantages: [
      { name: 'Полная обработка всех фотографий в ручную (от 250)', isAdvantage: true },
      { name: 'Предварительная консультация и планирование', isAdvantage: true },
      { name: 'Авторская обработка фотографий', isAdvantage: true },
      { name: 'Запись на USB-флешку в индивидуальном вудбоксе', isAdvantage: true },
      { name: 'Хранение фото на сервере', isAdvantage: true },
      { name: 'WEB-версия для интернета', isAdvantage: false },
      { name: 'Два фотографа, ассистент', isAdvantage: false },
    ] },
    { name: 'Премиум съемка', price: 15000, advantages: [
      { name: 'Полная обработка всех фотографий в ручную (от 250)', isAdvantage: true },
      { name: 'Предварительная консультация и планирование', isAdvantage: true },
      { name: 'Авторская обработка фотографий', isAdvantage: true },
      { name: 'Запись на USB-флешку в индивидуальном вудбоксе', isAdvantage: true },
      { name: 'Хранение фото на сервере', isAdvantage: true },
      { name: 'WEB-версия для интернета', isAdvantage: true },
      { name: 'Два фотографа, ассистент', isAdvantage: true },
    ] },
    
  ])
</script>

<template>
  <TheHeader />
  <main
    class="main bg-[linear-gradient(#662E9B66,#662E9B66),url('../img/backgrounds/background-image.jpg')] bg-cover bg-center min-h-[800px]"
  >
    <div
      class="main__content text-white text-2xl max-w-[90%] mx-auto pl-4 releative bottom-1/2 translate-y-1/2 max-md:max-w-full max-md:pl-0 max-md:flex max-md:flex-col max-md:items-center max-md:text-center"
    >
      <header class="main__title">
        <h1 class="text-5xl font-bold max-w-96 max-sm:text-3xl">
          Фотограф в вашем городе
        </h1>
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
        <h1 class="text-[#EA3546] text-xl font-medium max-sm:text-base">
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
  <section class="order mt-28">
    <div class="order__content text-center">
      <header class="order__title">
        <h1 class="text-5xl font-bold max-md:text-3xl">Закажите съемку прямо сейчас</h1>
        <p class="font-semibold max-w-3xl mx-auto mt-4 max-md:max-w-xl">
          Я проконсультирую Вас по основным вопросам подготовки к фотосессии, а
          также расскажу о современных тенденциях в фотографии.
        </p>
      </header>
      <article class="order__input mt-10">
        <MaskInput class="input-style mr-4 rounded-lg max-sm:mb-4" v-model="phoneNumber" placeholder="+7 (000) 000-0000" mask="+# (###) ###-####"/>
        <BaseButton color="text-white" bgColor="bg-light-orange-700"
          >Оставить заявку
        </BaseButton>
      </article>
      <footer class="order__info mt-6 max-sm:mt-2">
        <p class="text-transparent-black-light font-semibold max-w-lg mx-auto max-sm:text-xs">
          Оставляя заявку, вы соглашаетесь на
          <span>обработку персональных данных</span> и с
          <span>условиями бронирования счёта</span>
        </p>
      </footer>
    </div>
  </section>
  <section class="feedbacks bg-[#F7F8FA] min-h-[950px] mt-28 pt-28">
    <div class="feedbacks__content text-center">
      <header class="feedbacks__title">
        <h1 class="text-5xl font-bold mb-6 max-sm:text-3xl">Отзывы</h1>
        <h2 class="text-xl font-medium">Настоящие отзывы моих клиентов</h2>
      </header>
      <article class="feedbacks__list mt-20">
        <ul class="flex justify-center gap-6 max-w-[1110px] mx-auto max-xl:flex-col">
          <li class="bg-white border-transparent-black rounded-2xl w-96 h-full mx-auto mb-4 px-8 py-10 max-sm:w-64" v-for="(feedback, index) in feedbacksArray" :key="index">
            <div class="flex justify-center">
              <img :src="feedback.icon" :alt="`Фото пользователя - ${ feedback.name }`">
            </div>
            <p class="text-2xl font-bold max-w-72 mx-auto my-8 max-sm:text-lg">
              {{ feedback.description }}
            </p>
            <h2 class="text-lg font-medium mb-1">{{ feedback.name }}</h2>
            <h3 class="text-xs text-transparent-black-light font-bold">{{ feedback.jobUser }}</h3>
          </li>
        </ul>
      </article>
    </div>
  </section>
  <section class="price bg-[linear-gradient(#662E9B66,#662E9B66),url('../img/backgrounds/background-image-price.jpg')] bg-cover bg-center min-h-[800px] pt-20">
    <div class="price__content text-center">
      <header class="price__title text-white">
        <h1 class="text-5xl font-bold mb-6 max-sm:text-3xl">Прайс-лист</h1>
        <h2 class="text-xl">Цены и услуги свадебного фотографа</h2>
      </header>
      <article class="price__list mt-16">
        <ul class="flex justify-center gap-6 max-w-[1110px] mx-auto max-xl:flex-col max-xl:items-center">
          <li class="text-left bg-white border-transparent-black rounded-2xl w-96 mb-4 p-8 max-sm:max-w-64" v-for="(priceType, index) in priceArray" :key="index">
            <h3 class="text-light-orange-700 font-medium mb-2.5">{{ priceType.name }}</h3>
            <h2 class="text-2xl font-bold">{{ priceType.price }} ₽</h2>
            <div class="bg-transparent-black w-full h-px my-4"></div>
            <div>
              <ul>
                <li class="flex items-center" v-for="(advantage, index) in priceType.advantages" :key="index">
                  <img v-if="advantage.isAdvantage" src="/src/assets/img/icons/price/price-icon-checkmark.svg">
                  <img v-else src="/src/assets/img/icons/price/price-icon-cross.svg">
                  <p class="max-w-64 m-1">
                    {{ advantage.name }}
                  </p>
                </li>
              </ul>
              <div class="flex justify-center mt-6 animation-hover">
                <button class="text-white bg-light-orange-700 w-full py-3.5 rounded-4xl cursor-pointer">Выбрать</button>
              </div>
            </div>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<style scoped></style>
