import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "boardStore",
  state: () => ({
    boards: {
      PM: [
        { name: "Katherine", id: 1 },
        { name: "David", id: 2 },
        { name: "Dorian", id: 3 },
        { name: "Daneil", id: 4 },
      ],
      UX: [
        { name: "Greg", id: 1 },
        { name: "Val", id: 2 },
        { name: "MingXi", id: 3 },
      ],
      ENG: [
        { name: "Tara", id: 1 },
        { name: "Huseyn", id: 2 },
        { name: "Jon", id: 3 },
      ],
      ADM: [{ name: "Nicky", id: 1 }],
    },
  }),
  actions: {
    add(board, text) {
      this.boards[board].push({ name: text, id: Math.random() * 100 });
    },
  },
});
