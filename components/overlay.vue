<script setup lang="ts">
import { motion } from 'motion-v';

withDefaults(defineProps<{ zIndex?: number }>(), {
  zIndex: 85,
});
const emit = defineEmits(['close']);
const isOpen = defineModel<boolean>();
</script>

<template>
  <Teleport to="body">
    <AnimatePresence>
      <motion.div
        v-if="isOpen"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :exit="{ opacity: 0 }"
        :transition="{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }"
        class="bg-black/30 fixed inset-0"
        :class="`z-${zIndex}`"
        @click="emit('close')"
      />
    </AnimatePresence>
  </Teleport>
</template>
