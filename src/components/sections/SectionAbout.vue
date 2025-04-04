<script setul lang="ts"></script>

<template>
  <section
    class="about-me max-w-[90%] mx-auto"
  >
    <div class="about-me__content flex flex-row-reverse justify-between items-center p-6 max-md:text-center">
      <article class="about-me__content-img max-md:hidden">
        <img src="/src/assets/img/base/about/about-img.png" />
      </article>
      <article class="about-me__content-text">
        <header class="about-me__title">
          <h1 class="text-xl text-light-red-700 font-medium">О фотографе</h1>
          <h1 class="text-5xl font-bold my-4 max-w-xl max-sm:text-3xl">
            Более 20 лет работаю фотографом
          </h1>
        </header>
        <article class="about-me__content-description text-[#000000B2] font-semibold">
          <p class="max-w-xl">
            Это ваш голосовой клон AI. Мы фиксируем ваши уникальные речевые
            образцы, произношение и эмоциональный диапазон, чтобы создать
            реалистичный голос-реплику.
          </p>
          <p class="max-w-xl mt-4">
            Загрузите записи или выполните один из наших сценариев, чтобы
            создать свой собственный голос.
          </p>
        </article>
        <footer class="about-me__button mt-8">
          <BaseButton color="text-white" bgColor="bg-light-orange-700">
            Записаться на съемку
          </BaseButton>
        </footer>
      </article>
    </div>
  </section>
</template>

<style scoped></style>
