<script setup lang="ts">
const drawerId = inject<string>('drawerId')!;
</script>

<template>
  <h2 :id="`drawer-title-${drawerId}`">
    <slot />
  </h2>
</template>
