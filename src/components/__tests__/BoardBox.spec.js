import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { setActivePinia, createPinia } from "pinia";
import BoardBox from "../BoardBox.vue";
import AddCard from "../AddCard.vue";

describe("BoardBox", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("renders properly simple prop test; title & name", () => {
    const props = {
      title: "title team",
      list: [
        { name: "Katherine", id: 1 },
        { name: "David", id: 2 },
        { name: "Dorian", id: 3 },
        { name: "Daneil", id: 4 },
      ],
    };
    const wrapper = mount(BoardBox, {
      props: props,
    });
    expect(wrapper.text()).toContain("title team");
    expect(wrapper.text()).toContain("Katherine");
  });

  it("renders properly has addCard comp", () => {
    const wrapper = mount(BoardBox, { props: { title: "title" } });
    expect(wrapper.findComponent(AddCard).exists()).toBe(true);
  });
});
