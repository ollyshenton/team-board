<template>
  <div
    class="p-4 max-w-sm mx-auto bg-white drop-shadow-md rounded-md bg-slate-200 min-w-full"
  >
    <h2 class="text-lg mb-3 font-bold">{{ title }}</h2>

    <draggable
      v-model="list"
      @change="log"
      group="people"
      item-key="id"
      class="draggable flex flex-col justify-start m-0 w-full"
      ghost-class="ghost"
      drag-class="drag-class"
    >
      <template #item="{ element }">
        <div
          class="border border-solid border-grey px-4 py-2 rounded-md drop-shadow-md bg-white m-2 justify-start grow hover:cursor-pointer"
        >
          {{ element.name }}
        </div>
      </template>
    </draggable>

    <AddCard :board="board" />
  </div>
</template>

<script setup>
import draggable from "vuedraggable";
import AddCard from "@/components/AddCard.vue";

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  title: {
    type: String,
    default: "Title",
  },
  board: {
    type: String,
    default: "UX",
  },
  list: {
    type: Array,
    default: () => [],
  },
});

const log = (event) => {
  const { moved, added, removed } = event;
  if (moved) console.log("moved", moved);
  if (removed) {
    console.log("!!removed", removed);
  }
  if (added) console.log("added", added, added.element);
};
</script>

<style></style>
