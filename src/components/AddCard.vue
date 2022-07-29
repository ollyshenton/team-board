<template>
  <a
    @click.prevent="showAdd"
    class="hover:opacity-60 flex justify-center pt-2 hover:cursor-pointer"
    id="add"
  >
    <img
      src="@/assets/add-icon.svg"
      alt="plus icon"
      class="logo"
      width="45"
      height="45"
    />
  </a>
  <div v-if="show" class="flex flex-col justify-center pt-4">
    <input
      type="text"
      v-model="text"
      class="input border border-solid border-black p-1 rounded-md"
    />
    <button
      @click.prevent="save()"
      @keydown="save()"
      class="button border border-solid border-black p-1 mt-1 bg-orange-400 text-white font-bold rounded-md"
    >
      Add a new card
    </button>

    <div v-if="!isError" class="text-center text-red-500">
      Please enter a name
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "@/stores";
const store = useStore();

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  board: {
    type: String,
    default: "UX",
  },
});

const text = ref("");
const show = ref(false);

const showAdd = () => {
  show.value = !show.value;
};
const isError = computed(() => !!text.value);
const save = () => {
  if (isError.value) {
    store.add(props.board, text.value);
    text.value = "";
  }
};
</script>
