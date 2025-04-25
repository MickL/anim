<script setup lang="ts">
import {
  FocusScope,
} from 'reka-ui';
import {motion} from "motion-v";

const isVisible = ref(false);
</script>

<template>
  <div class="mt-8 text-center">
    <button class="bg-red-400 p-4 font-medium rounded-sm hover:scale-108 transition-transform duration-250 ease-out"
            @click="isVisible = !isVisible"
    >
      Toggle drawer
    </button>
    <div class="text-sm text-gray-400 mt-1">Visible: {{ isVisible }}</div>
  </div>

  <AnimatePresence>
    <motion.div
        v-show="isVisible"
        initial="hidden"
        while-in-view="visible"
        exit="hidden"
        :variants="{
        visible: {
          x: 0,
        },
        hidden: {
          x: '100%',
        },
      }"
        :transition="{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }"
        class="bg-white shadow-lg w-full fixed top-0 bottom-0 right-0 z-100 max-w-[calc(100dvw---spacing(4))] md:max-w-80"
        ref="drawerRef"
    >
      <FocusScope
          :trapped="true"
          loop
      >
        <button class="absolute top-4 right-4 font-medium hover:scale-108 transition-transform  duration-250 ease-out"
                @click="isVisible = false"
        >
          Close
        </button>

        <div class="max-h-full overflow-y-auto">
          <div class="p-4 pt-12 space-y-2">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque impedit iste maxime nisi perferendis
              porro quae quo repellat sunt vero?</p>

            <p>Adipisci, aspernatur, consectetur doloremque dolores exercitationem inventore iste nesciunt nostrum
              numquam obcaecati, odit quam quis quos rem vero. Incidunt, suscipit!</p>

            <p>Aliquid debitis eaque facilis hic, itaque mollitia pariatur voluptatibus? Ab dicta itaque, libero modi
              nobis odit possimus reprehenderit totam vitae!</p>
          </div>
        </div>
      </FocusScope>
    </motion.div>
  </AnimatePresence>
</template>
