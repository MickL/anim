<script setup lang="ts">
const isOpen = inject<Ref<boolean>>('isOpen')!;
</script>

<template>
  <button @click="isOpen = false">
    <slot />
  </button>
</template>
