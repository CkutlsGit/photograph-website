<script setup lang="ts">
  import { ref, watch } from "vue"

  const isOpenMenu = ref<boolean>(false)

  watch(isOpenMenu, (newValue: boolean): void => {
    if(newValue) {
      document.body.style.overflowY = 'hidden'
    }
    else {
      document.body.style.overflowY = 'auto'
    }
  })

  const openMenu = (): void => {
    isOpenMenu.value = !isOpenMenu.value
  }
</script>

<template>
  <ul
    class="header__list text-xl font-semibold flex items-center gap-10 animation-hover max-xl:text-lg max-lg:hidden"
  >
    <li class="header__item">
      <a href="#" class="header__link">Отзывы</a>
    </li>
    <li class="header__item">
      <a href="#" class="header__link">Контакты</a>
    </li>
    <li class="header__item text-center">
      <h5 class="header__number-title text-[#000000B2] text-xs -mb-2">
        Запишитесь на съемку
      </h5>
      <a href="tel:+74951234567" class="header__number-link"
        >+7 495 123-45-67</a
      >
    </li>
    <li class="header__item">
      <button
        class="header__button text-base border border-[#0000001A] rounded-[6px] px-4 py-2 cursor-pointer"
      >
        Заказать звонок
      </button>
    </li>
  </ul>
  <ul class="header__list--hamburger-menu hidden max-lg:block">
        <li class="header__item--hamburger-menu cursor-pointer">
          <transition name="burger-elements">
            <svg
              @click="openMenu"
              v-show="!isOpenMenu"
              class="absolute top-5 right-10"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 50 50"
            >
              <path
                d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"
              ></path>
            </svg>
          </transition>
          <transition name="burger-elements">
            <svg
              @click="openMenu"
              v-show="isOpenMenu"
              class="absolute top-5 right-10"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path
                d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"
              ></path>
            </svg>
          </transition>
        </li>
        <transition name="burger-elements">
          <ul
            v-if="isOpenMenu"
            class="header__nav-list--hamburger-menu text-white font-bold text-3xl bg-light-orange-700 min-w-full min-h-full flex flex-col gap-y-16 items-center justify-center absolute left-0 top-16 z-10 animation-hover"
          >
            <li class="header__item">
              <a href="#" class="header__link">Отзывы</a>
            </li>
            <li class="header__item">
              <a href="#" class="header__link">Контакты</a>
            </li>
            <li class="header__item text-center">
              <h5 class="header__number-title text-[#000000B2] text-xs -mb-2 max-lg:text-white">
                Запишитесь на съемку
              </h5>
              <a href="tel:+74951234567" class="header__number-link"
                >+7 495 123-45-67</a
              >
            </li>
            <li class="header__item">
              <button
                class="header__button text-base border border-[#0000001A] rounded-[6px] px-4 py-2 cursor-pointer max-lg:border-white"
              >
                Заказать звонок
              </button>
            </li>
          </ul>
        </transition>
      </ul>
</template>

<style scoped>
.burger-elements-enter-active,
.burger-elements-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.burger-elements-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

.burger-elements-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.burger-elements-enter-to,
.burger-elements-leave-from {
  transform: translateX(0);
  opacity: 1;
}
</style>
