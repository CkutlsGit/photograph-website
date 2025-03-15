<script setup lang="ts">
import type { IBaseButton } from '../interfaces'

const props = defineProps<IBaseButton>()
</script>

<template>
    <span class="animation-hover">
        <button :class="`color-${ props.color } bg-${ props.bgColor }`" class="rounded-full px-4 py-4 font-semibold cursor-pointer">
            <slot></slot>
        </button>
    </span>
</template>

<style>
    
</style>