<script setup lang="ts">
import { motion } from 'motion-v';

const emit = defineEmits(['close']);
const isOpen = defineModel<boolean>();
</script>

<template>
  <AnimatePresence>
    <motion.div
      v-if="isOpen"
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :exit="{ opacity: 0 }"
      class="bg-black/30 fixed inset-0 z-80"
      @click="emit('close')"
    />
  </AnimatePresence>
</template>
