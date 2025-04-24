<script setup lang="ts">
import { FocusScope } from 'reka-ui';
import { onKeyUp } from '@vueuse/core';
import { motion } from 'motion-v';

const props = withDefaults(defineProps<{ from?: 'left' | 'right' }>(), {
  from: 'right',
});

const isOpen = inject<Ref<boolean>>('isOpen')!;
const drawerId = inject<string>('drawerId')!;

// Close on escape key
onKeyUp('Escape', (e) => {
  if (!isOpen.value) {
    return;
  }

  isOpen.value = false;
});

// Close on swipe
const drawerRef = ref(null);
const { isSwiping, direction } = useSwipe(drawerRef);

watch(isSwiping, () => {
  if (direction.value === props.from) {
    isOpen.value = false;
  }
});

// Lock body scroll when open
watch(isOpen, () => {
  if (isOpen.value) {
    window.document.documentElement.style.overflow = 'hidden';
  } else {
    setTimeout(() => {
      window.document.documentElement.style.overflow = '';
    }, 150);
  }
});
</script>

<template>
  <AnimatePresence>
    <motion.div
      v-show="isOpen"
      initial="hidden"
      while-in-view="visible"
      exit="hidden"
      :variants="{
        visible: {
          transform: 'translateX(0)',
        },
        hidden: {
          transform:
            from === 'right' ? 'translateX(100%)' : 'translateX(-100%)',
        },
      }"
      :transition="{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }"
      class="bg-white shadow-lg w-full fixed top-0 bottom-0 z-100 max-w-[calc(100dvw---spacing(4))] md:max-w-80"
      :class="{
        'right-0': from === 'right',
        'left-0': from === 'left',
      }"
      ref="drawerRef"
    >
      <FocusScope
        :id="`drawer-content-${drawerId}`"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="`drawer-title-${drawerId}`"
        :trapped="true"
        loop
      >
        <div class="max-h-full overflow-y-auto">
          <div class="px-4 pt-12 pb-8">
            <slot />
          </div>
        </div>
      </FocusScope>
    </motion.div>
  </AnimatePresence>
</template>
