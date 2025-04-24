<script setup lang="ts">
const isOpen = defineModel<boolean>();
provide<Ref<boolean>>('isOpen', isOpen);
provide<string>('drawerId', useId());
</script>

<template>
  <slot />

  <Overlay v-model="isOpen" @close="isOpen = false" :z-index="95" />
</template>
