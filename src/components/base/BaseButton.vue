<script setup lang="ts">
interface IBaseButton {
    color: string
    bgColor: string
}

const props = defineProps<IBaseButton>()
</script>

<template>
  <span class="animation-hover">
    <button
      :class="`${props.color} ${props.bgColor}`"
      class="font-semibold px-4 py-4 rounded-full cursor-pointer max-sm:text-base max-sm:px-2 max-sm:py-3"
    >
      <slot></slot>
    </button>
  </span>
</template>

<style scoped></style>
