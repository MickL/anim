<script setup lang="ts">
const isOpen = inject<Ref<boolean>>('isOpen')!;
const drawerId = inject<string>('drawerId')!;
</script>

<template>
  <button
    class="inline-flex"
    :aria-controls="`drawer-content-${drawerId}`"
    :aria-expanded="isOpen"
    aria-haspopup="dialog"
    @click="isOpen = true"
  >
    <slot />
  </button>
</template>
