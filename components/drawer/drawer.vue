<script setup lang="ts">
import { motion } from 'motion-v';
import { VisuallyHidden } from 'reka-ui';

const isOpen = defineModel<boolean>();
withDefaults(
  defineProps<{
    ariaLabelClose: string;
    from?: 'left' | 'right';
    title: string;
  }>(),
  {
    from: 'right',
  },
);
</script>

<template>
  <DrawerRoot v-model="isOpen">
    <slot name="trigger" />

    <DrawerContent :from>
      <Motion
        as-child
        :variants="{
          visible: {
            opacity: 1,
            transition: { delay: 0.15 },
          },
          hidden: {
            opacity: 0,
          },
        }"
      >
        <DrawerClose
          class="absolute top-4 right-4"
          :aria-label="ariaLabelClose"
        >
          <Icon name="bi:x-lg" />
        </DrawerClose>
      </Motion>

      <VisuallyHidden asChild>
        <DrawerTitle />
      </VisuallyHidden>

      <slot />
    </DrawerContent>
  </DrawerRoot>
</template>
