<script setup lang="ts">
const isOpen = inject<Ref<boolean>>('isOpen')!;
</script>

<template>
  <button class="inline-flex" @click="isOpen = true">
    <slot />
  </button>
</template>