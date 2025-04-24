<script setup lang="ts">
const props = withDefaults(
    defineProps<{ from?: 'left' | 'right'; triggerClass?: string }>(),
    {
      from: 'right',
    },
);

const isOpen = inject<Ref<boolean>>('isOpen')!;
</script>

<template>
  <div v-show="isOpen"
       class="bg-white shadow-lg w-full fixed top-0 bottom-0 z-100 max-w-[calc(100dvw---spacing(4))] md:max-w-80"
       :class="{
        'right-0': from === 'right',
        'left-0': from === 'left',
      }">
    <slot />
  </div>
</template>