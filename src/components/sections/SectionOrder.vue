<script setup lang="ts">
import { ref } from "vue"

const phoneNumber = ref<string>("")
</script>

<template>
  <section class="order mt-28">
    <div class="order__content text-center">
      <header class="order__title">
        <h1 class="text-5xl font-bold max-md:text-3xl">
          Закажите съемку прямо сейчас
        </h1>
        <p class="font-semibold max-w-3xl mx-auto mt-4 max-md:max-w-xl">
          Я проконсультирую Вас по основным вопросам подготовки к фотосессии, а
          также расскажу о современных тенденциях в фотографии.
        </p>
      </header>
      <article class="order__input mt-10">
        <MaskInput
          class="input-style mr-4 rounded-lg max-sm:mb-4"
          v-model="phoneNumber"
          placeholder="+7 (000) 000-0000"
          mask="+# (###) ###-####"
        />
        <BaseButton color="text-white" bgColor="bg-light-orange-700"
          >Оставить заявку
        </BaseButton>
      </article>
      <footer class="order__info mt-6 max-sm:mt-2">
        <p
          class="text-transparent-black-light font-semibold max-w-lg mx-auto max-sm:text-xs"
        >
          Оставляя заявку, вы соглашаетесь на
          <span>обработку персональных данных</span> и с
          <span>условиями бронирования счёта</span>
        </p>
      </footer>
    </div>
  </section>
</template>

<style scoped></style>
