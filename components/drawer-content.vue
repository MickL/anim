<script setup lang="ts">
import {motion} from "motion-v";
import {FocusScope} from 'reka-ui';

const props = withDefaults(
    defineProps<{ from?: 'left' | 'right'; triggerClass?: string }>(),
    {
      from: 'right',
    },
);

const isOpen = inject<Ref<boolean>>('isOpen')!;
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