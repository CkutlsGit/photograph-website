<script setup lang="ts">
import { reactive } from "vue"
import type { IAdvantage } from "../../interfaces"

interface IFeedback extends IAdvantage {
  jobUser: string
}

const feedbacksArray: Array<IFeedback> = reactive([
  {
    name: "Юрий Ставничий",
    icon: "src/assets/img/icons/feedbacks/user-yuriy.svg",
    description:
      "Это супер крутая инструкция и вы делаете очень полезную вещь. Спасибо",
    jobUser: "Фотограф",
  },
  {
    name: "Александра Селезнева",
    icon: "src/assets/img/icons/feedbacks/user-alexandra.svg",
    description:
      "Работа с сервисом приносит радость, потому что высочайший профессионализм, удобство, оперативность, и просто приятные люди!",
    jobUser: "Фотограф",
  },
  {
    name: "Оля Павлова",
    icon: "src/assets/img/icons/feedbacks/user-olga.svg",
    description: "Спасибо большое за помощь и содействие!",
    jobUser: "Фотограф",
  },
])
</script>

<template>
  <section class="feedbacks bg-[#F7F8FA] min-h-[950px] mt-28 pt-28">
    <div class="feedbacks__content text-center">
      <header class="feedbacks__title">
        <h1 class="text-5xl font-bold mb-6 max-sm:text-3xl">Отзывы</h1>
        <h2 class="text-xl font-medium">Настоящие отзывы моих клиентов</h2>
      </header>
      <article class="feedbacks__list mt-20">
        <ul
          class="flex justify-center gap-6 max-w-[1110px] mx-auto max-xl:flex-col"
        >
          <li
            class="bg-white border-transparent-black rounded-2xl w-96 h-full mx-auto mb-4 px-8 py-10 max-sm:w-64"
            v-for="(feedback, index) in feedbacksArray"
            :key="index"
          >
            <div class="flex justify-center">
              <img
                :src="feedback.icon"
                :alt="`Фото пользователя - ${feedback.name}`"
              />
            </div>
            <p class="text-2xl font-bold max-w-72 mx-auto my-8 max-sm:text-lg">
              {{ feedback.description }}
            </p>
            <h2 class="text-lg font-medium mb-1">{{ feedback.name }}</h2>
            <h3 class="text-xs text-transparent-black-light font-bold">
              {{ feedback.jobUser }}
            </h3>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<style scoped></style>
