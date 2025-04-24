<script setup lang="ts">
import {
  VisuallyHidden
} from 'reka-ui';
import {motion} from "motion-v";

const isVisible = ref(false);
</script>

<template>
  <!--  <div class="container mx-auto mt-8 text-center">-->
  <!--    <button class="bg-red-400 p-4 font-medium rounded-sm hover:scale-110 transition-transform ease-out"-->
  <!--            @click="isVisible = !isVisible">-->
  <!--      Dont push me!-->
  <!--    </button>-->

  <!--    <AnimatePresence>-->
  <!--      <motion.div class="mt-4" v-if="isVisible" initial="hidden" whileInView="visible" exit="hidden">-->
  <!--        <motion.div-->
  <!--            :variants="{ visible: { opacity: 1 }, hidden: { opacity: 0, transition: { when: 'afterChildren' } } }">-->
  <!--          Hello!-->
  <!--        </motion.div>-->

  <!--        <motion.ul-->
  <!--            :variants="{ visible: { transition: { staggerChildren: 0.1 } }, hidden: { transition: { staggerChildren: 0.1, staggerDirection: -1 } }}"-->
  <!--        >-->
  <!--          <motion.li v-for="index in 5"-->
  <!--                     :key="index"-->
  <!--                     :variants="{-->
  <!--                       visible: { opacity: 1 },-->
  <!--                       hidden: { opacity: 0 },-->
  <!--                     }"-->
  <!--          >-->
  <!--            {{ index }}-->
  <!--          </motion.li>-->
  <!--        </motion.ul>-->
  <!--      </motion.div>-->
  <!--    </AnimatePresence>-->
  <!--  </div>-->

  <div class="container mx-auto mt-8 text-center">
    <Drawer
        ariaLabelClose="123123"
        title="213123"
    >
      <template #trigger>
        <DrawerTrigger class="bg-red-400 p-4 font-medium rounded-sm hover:scale-110 transition-transform ease-out"
        >
          Dont push me!
        </DrawerTrigger>
      </template>

      12312312312
    </Drawer>

    <Drawer
        ariaLabelClose="123123"
        title="213123"
    >
      <template #trigger>
        <DrawerTrigger class="bg-red-400 p-4 font-medium rounded-sm hover:scale-110 transition-transform ease-out"
        >
          2
        </DrawerTrigger>
      </template>

      22222
    </Drawer>
  </div>
</template>
