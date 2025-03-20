<script setup lang="ts">
import type { IBaseButton } from "../interfaces"

const props = defineProps<IBaseButton>()
</script>

<template>
  <span class="animation-hover">
    <button
      :class="`${ props.color } ${ props.bgColor }`"
      class="rounded-full px-4 py-4 font-semibold cursor-pointer max-sm:text-base max-sm:px-2 max-sm:py-3"
    >
      <slot></slot>
    </button>
  </span>
</template>

<style></style>
