<template>
  <main>
    <h1 class="title text-3xl my-6 font-bold">Teams board</h1>

    <div
      class="container grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <BoardBox title="Product Management" :list="store.boards.PM" board="PM" />
      <BoardBox title="UX" :list="store.boards.UX" board="UX" />
      <BoardBox title="Engineering" :list="store.boards.ENG" board="ENG" />
      <BoardBox title="Admin" :list="store.boards.ADM" board="ADM" />
    </div>
  </main>
</template>

<script setup>
import { useStore } from "@/stores";
import BoardBox from "@/components/BoardBox.vue";
const store = useStore();

// const log = (event) => {
// const { moved, added, removed } = event;
// if (moved) console.log("moved", moved);
// if (removed) {
//   console.log("removed", removed);
// }
// if (added) console.log("added", added, added.element);
// };
</script>

<style scoped></style>
