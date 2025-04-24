<script setup lang="ts">
import {onKeyUp} from '@vueuse/core';

// State
const isOpen = defineModel<boolean>();
provide<Ref<boolean>>('isOpen', isOpen);

// Close on escape key
onKeyUp('Escape', (e) => {
  if (!isOpen.value) {
    return;
  }

  isOpen.value = false;
});

// Close on swipe
const drawerRef = ref(null);
const {isSwiping, direction} = useSwipe(drawerRef);

watch(isSwiping, () => {
  if (direction.value === props.from) {
    isOpen.value = false;
  }
});
</script>

<template>
  <slot/>

  <Overlay v-model="isOpen" @close="isOpen = false"/>
</template>
