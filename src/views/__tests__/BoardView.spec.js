import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { setActivePinia, createPinia } from "pinia";
import BoardView from "../BoardView.vue";

describe("BoardView page", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("renders properly simple test", () => {
    const wrapper = mount(BoardView, {});

    expect(wrapper.find(".title").text()).toMatch("Teams board");
  });
});
